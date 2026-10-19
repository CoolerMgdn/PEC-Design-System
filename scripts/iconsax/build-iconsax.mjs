// Нормализация экспорта Vuesax Iconsax v1.0 из Figma в отдельные SVG 24×24 (core/icons/iconsax).
// Процесс и источник описаны в core/icons/iconsax/README.md.
//
// Использование: node build-iconsax.mjs <exportsDir> <outDir>
//   exportsDir — папка с SVG-экспортами категорий: <style>_<nodeId с «-» вместо «:»>.svg,
//                например linear_2898-36276.svg (экспорт каждого фрейма категории из Figma в SVG, масштаб 1).
//   outDir     — куда записать linear/, bold/ и manifest.json (проверьте результат перед заменой core/icons/iconsax).
// Позиции компонентов внутри категорий (positions-*.txt) сняты из Figma и лежат рядом со скриптом.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const [exportsDir, outDir] = process.argv.slice(2);
if (!exportsDir || !outDir) throw new Error('usage: build-iconsax.mjs <exportsDir> <outDir>');
const scriptDir = dirname(fileURLToPath(import.meta.url));

const STYLES = ['linear', 'bold'];
const PLACEHOLDER = new Set(['group', 'frame', 'icon']);
const BASE_COLORS = new Set(['#292D32', '#17191C', 'BLACK', '#000000']);

// ---------- positions ----------
function readPositions(style) {
  return readFileSync(join(scriptDir, `positions-${style}.txt`), 'utf8').trim().split(/\r?\n/).map((line) => {
    const [id, name, size, list] = line.split('|');
    const [fw] = size.split('x').map(Number);
    const icons = list.split(';').map((s) => {
      const p = s.split(',');
      return { name: p[0], x: +p[1], y: +p[2], w: +p[3] };
    });
    return { id, name, fw, icons };
  });
}

// ---------- tiny XML ----------
function parseXml(src) {
  const root = { tag: '#root', attrs: {}, children: [] };
  const stack = [root];
  const re = /<(\/?)([a-zA-Z][\w:-]*)((?:\s+[\w:-]+="[^"]*")*)\s*(\/?)>|<\?[^>]*\?>|<!--[\s\S]*?-->/g;
  let m;
  while ((m = re.exec(src))) {
    if (!m[2]) continue;
    const [, close, tag, attrStr, selfClose] = m;
    if (close) { stack.pop(); continue; }
    const attrs = {};
    for (const a of attrStr.matchAll(/([\w:-]+)="([^"]*)"/g)) attrs[a[1]] = a[2];
    const node = { tag, attrs, children: [], parent: stack.at(-1) };
    stack.at(-1).children.push(node);
    if (!selfClose) stack.push(node);
  }
  return root;
}
const walk = (n, fn) => { fn(n); n.children.forEach((c) => walk(c, fn)); };

// ---------- geometry ----------
const fmt = (v) => {
  const r = Math.round(v * 1000) / 1000;
  return (Object.is(r, -0) ? 0 : r).toString();
};
function translatePath(d, dx, dy) {
  const tokens = d.match(/[a-zA-Z]|-?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/g);
  const out = [];
  let cmd = null; let i = 0; let first = true;
  const pts = { M: 2, L: 2, T: 2, C: 6, S: 4, Q: 4, H: 1, V: 1, A: 7, Z: 0 };
  const bb = { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity };
  const add = (x, y) => { bb.x0 = Math.min(bb.x0, x); bb.x1 = Math.max(bb.x1, x); bb.y0 = Math.min(bb.y0, y); bb.y1 = Math.max(bb.y1, y); };
  while (i < tokens.length) {
    if (/[a-zA-Z]/.test(tokens[i])) { cmd = tokens[i++]; out.push(cmd); if (cmd.toUpperCase() === 'Z') continue; }
    const C = cmd.toUpperCase(); const abs = cmd === C;
    const n = pts[C];
    const args = tokens.slice(i, i + n).map(Number); i += n;
    if (abs || (first && C === 'M')) {
      if (C === 'H') { args[0] += dx; add(args[0], NaN); }
      else if (C === 'V') { args[0] += dy; }
      else if (C === 'A') { args[5] += dx; args[6] += dy; add(args[5], args[6]); }
      else for (let k = 0; k < n; k += 2) { args[k] += dx; args[k + 1] += dy; add(args[k], args[k + 1]); }
      if (!abs) throw new Error('relative path not supported');
    } else {
      throw new Error('relative path command ' + cmd);
    }
    first = false;
    out.push(args.map(fmt).join(' '));
  }
  return { d: out.join(' ').replace(/ ?([a-zA-Z]) ?/g, '$1'), bb };
}

const DROP_ATTRS = new Set(['id']);
function serialize(node, dx, dy, ctx) {
  const a = { ...node.attrs };
  for (const k of DROP_ATTRS) delete a[k];
  for (const k of ['fill', 'stroke']) {
    if (a[k] && a[k] !== 'none' && !a[k].startsWith('url(')) {
      const c = a[k].toUpperCase();
      if (BASE_COLORS.has(c)) a[k] = 'currentColor'; else ctx.colors.add(c);
    }
  }
  if (a.transform) ctx.complex = true;
  for (const v of Object.values(a)) if (v.includes('url(#')) ctx.complex = true;
  if (!ctx.complex) {
    if (node.tag === 'path') { const r = translatePath(a.d, dx, dy); a.d = r.d; ctx.bbs.push(r.bb); }
    else if (['rect', 'image', 'use'].includes(node.tag)) { a.x = fmt(+(a.x ?? 0) + dx); a.y = fmt(+(a.y ?? 0) + dy); }
    else if (['circle', 'ellipse'].includes(node.tag)) { a.cx = fmt(+(a.cx ?? 0) + dx); a.cy = fmt(+(a.cy ?? 0) + dy); }
    else if (node.tag === 'line') { a.x1 = fmt(+a.x1 + dx); a.x2 = fmt(+a.x2 + dx); a.y1 = fmt(+a.y1 + dy); a.y2 = fmt(+a.y2 + dy); }
    else if (['polygon', 'polyline'].includes(node.tag)) {
      a.points = a.points.trim().split(/[\s,]+/).map((v, k) => fmt(+v + (k % 2 ? dy : dx))).join(' ');
    } else if (node.tag !== 'g') ctx.unknown.add(node.tag);
  }
  const attrs = Object.entries(a).map(([k, v]) => ` ${k}="${v}"`).join('');
  const inner = node.children.map((c) => serialize(c, dx, dy, ctx)).join('');
  if (node.tag === 'g' && !attrs) return inner;
  return inner ? `<${node.tag}${attrs}>${inner}</${node.tag}>` : `<${node.tag}${attrs}/>`;
}
function serializeRaw(node) {
  const attrs = Object.entries(node.attrs).filter(([k]) => k !== 'id' || node.tag !== 'g').map(([k, v]) => ` ${k}="${v}"`).join('');
  const inner = node.children.map(serializeRaw).join('');
  return inner ? `<${node.tag}${attrs}>${inner}</${node.tag}>` : `<${node.tag}${attrs}/>`;
}

// ---------- names ----------
const catKey = (n) => n.replace(/‌/g, '').replace(/\s*-\s*(bold|linear)$/i, '').trim().toLowerCase()
  .replace(/^(bold|linear)$/, 'brands');
const cleanName = (n) => n.toLowerCase().replace(/\(([^)]*)\)/g, '-$1-').replace(/[/&\s]+/g, '-')
  .replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '');

// ---------- extract ----------
const errors = []; const warnings = []; const hidden = [];
const extracted = {}; // style -> [{cat, catKey, x, y, name, body, hash, complex}]
for (const style of STYLES) {
  extracted[style] = [];
  for (const frame of readPositions(style)) {
    const file = join(exportsDir, `${style}_${frame.id.replace(':', '-')}.svg`);
    const root = parseXml(readFileSync(file, 'utf8'));
    let frameRect = null; const groups = []; const defs = {};
    walk(root, (n) => {
      if (!frameRect && n.tag === 'rect' && +n.attrs.width === frame.fw) frameRect = n;
      if (n.tag === 'defs') n.children.forEach((c) => { if (c.attrs.id) defs[c.attrs.id] = c; });
      if (n.tag === 'g' && (n.attrs.id || '').startsWith(`vuesax/${style}/`)) {
        let p = n.parent; let nested = false;
        while (p) { if (p.tag === 'g' && (p.attrs.id || '').startsWith(`vuesax/${style}/`)) nested = true; p = p.parent; }
        if (!nested) groups.push(n);
      }
    });
    if (!frameRect) { errors.push(`${style}/${frame.name}: frame rect not found`); continue; }
    const ox = +(frameRect.attrs.x ?? 0); const oy = +(frameRect.attrs.y ?? 0);
    // Скрытые компоненты не попадают в экспорт: выравниваем по именам в порядке слоёв.
    let pi = 0;
    groups.forEach((g, k) => {
      const gname = g.attrs.id.slice(`vuesax/${style}/`.length).replace(/_\d+$/, '').replace(/&#38;/g, '&').replace(/&amp;/g, '&');
      while (pi < frame.icons.length && frame.icons[pi].name !== gname) {
        hidden.push(`${style}/${frame.name}/${frame.icons[pi].name}`); pi++;
      }
      if (pi >= frame.icons.length) { errors.push(`${style}/${frame.name}#${k}: "${gname}" not matched`); return; }
      const ic = frame.icons[pi++];
      const pad = (24 - ic.w) / 2;
      const dx = -(ox + ic.x - pad); const dy = -(oy + ic.y - pad);
      const ctx = { colors: new Set(), complex: false, bbs: [], unknown: new Set() };
      let body = g.children.map((c) => serialize(c, dx, dy, ctx)).join('');
      if (ctx.complex) {
        // Сложная иконка (transform или ссылки url(#…)): сохраняем исходные координаты под общим сдвигом.
        const refs = new Set(); walk(g, (n) => Object.values(n.attrs).forEach((v) => { for (const r of v.matchAll(/url\(#([^)]+)\)/g)) refs.add(r[1]); }));
        const slug = cleanName(ic.name);
        let raw = g.children.map(serializeRaw).join('');
        let defsMarkup = [...refs].map((r) => defs[r] ? serializeRaw({ ...defs[r], attrs: { ...defs[r].attrs } }) : (errors.push(`${style}/${ic.name}: missing def ${r}`), '')).join('');
        // уникализируем id ссылок, чтобы несколько иконок на странице не конфликтовали
        for (const r of refs) {
          const nid = `ix-${style[0]}-${slug}-${[...refs].indexOf(r)}`;
          raw = raw.split(`url(#${r})`).join(`url(#${nid})`);
          defsMarkup = defsMarkup.split(`id="${r}"`).join(`id="${nid}"`);
        }
        raw = raw.replace(/ id="[^"]*"/g, (s) => (s.includes('ix-') ? s : ''));
        for (const c of BASE_COLORS) { raw = raw.split(`"${c}"`).join('"currentColor"'); defsMarkup = defsMarkup.split(`"${c}"`).join('"currentColor"'); }
        body = `${defsMarkup ? `<defs>${defsMarkup}</defs>` : ''}<g transform="translate(${fmt(dx)} ${fmt(dy)})">${raw}</g>`;
      } else {
        const bb = ctx.bbs.reduce((a, b) => ({ x0: Math.min(a.x0, b.x0), y0: Math.min(a.y0, b.y0), x1: Math.max(a.x1, b.x1), y1: Math.max(a.y1, b.y1) }), { x0: Infinity, y0: Infinity, x1: -Infinity, y1: -Infinity });
        if (ctx.bbs.length && (bb.x0 < -1 || bb.y0 < -1 || bb.x1 > 25 || bb.y1 > 25)) errors.push(`${style}/${frame.name}/${ic.name}: bbox out of 24 box ${JSON.stringify(bb)}`);
      }
      if (ctx.unknown.size) warnings.push(`${style}/${ic.name}: unhandled tags ${[...ctx.unknown]}`);
      const hash = createHash('sha1').update(body).digest('hex');
      extracted[style].push({ cat: frame.name, catKey: catKey(frame.name), x: ic.x, y: ic.y, figmaName: ic.name, body, hash, complex: ctx.complex, colors: [...ctx.colors] });
    });
    while (pi < frame.icons.length) hidden.push(`${style}/${frame.name}/${frame.icons[pi++].name}`);
  }
}

// ---------- dedupe exact duplicates (same slot + same drawing) ----------
for (const style of STYLES) {
  const seen = new Set();
  extracted[style] = extracted[style].filter((e) => {
    const k = `${e.catKey}|${Math.round(e.x)}|${Math.round(e.y)}|${e.hash}`;
    if (seen.has(k)) return false; seen.add(k); return true;
  });
}

// ---------- pair linear/bold by slot ----------
const near = (a, b) => a.catKey === b.catKey && Math.abs(a.x - b.x) <= 10 && Math.abs(a.y - b.y) <= 10;
// 1) имя, уникальное в категории в обоих стилях, — пара независимо от позиции
const countIn = (list, e) => list.filter((o) => o.catKey === e.catKey && cleanName(o.figmaName) === cleanName(e.figmaName)).length;
for (const l of extracted.linear) {
  if (PLACEHOLDER.has(cleanName(l.figmaName)) || countIn(extracted.linear, l) !== 1) continue;
  const b = extracted.bold.find((o) => !o.pair && o.catKey === l.catKey && cleanName(o.figmaName) === cleanName(l.figmaName));
  if (b && countIn(extracted.bold, b) === 1) { l.pair = b; b.pair = l; }
}
// 2) остальные — по позиции (одинаковое имя или безымянный слой)
for (const l of extracted.linear) {
  if (l.pair) continue;
  const cands = extracted.bold.filter((b) => !b.pair && near(l, b));
  const ln = cleanName(l.figmaName);
  const pick = cands.find((b) => cleanName(b.figmaName) === ln)
    ?? cands.find((b) => PLACEHOLDER.has(ln) || PLACEHOLDER.has(cleanName(b.figmaName)));
  if (pick) { l.pair = pick; pick.pair = l; }
}
// 3) оставшиеся одноимённые в категории — если осталось ровно по одной
for (const l of extracted.linear) {
  if (l.pair) continue;
  const same = (o) => !o.pair && o.catKey === l.catKey && cleanName(o.figmaName) === cleanName(l.figmaName);
  const ls = extracted.linear.filter(same); const bs = extracted.bold.filter(same);
  if (ls.length === 1 && bs.length === 1) { l.pair = bs[0]; bs[0].pair = l; }
}
const slots = [];
for (const l of extracted.linear) slots.push({ linear: l, bold: l.pair ?? null });
for (const b of extracted.bold) if (!b.pair) slots.push({ linear: null, bold: b });
for (const s of slots) {
  const ln = s.linear && cleanName(s.linear.figmaName); const bn = s.bold && cleanName(s.bold.figmaName);
  s.base = (ln && !PLACEHOLDER.has(ln)) ? ln : (bn && !PLACEHOLDER.has(bn)) ? bn : (ln ?? bn);
  const ref = s.linear ?? s.bold; s.catKey = ref.catKey; s.cat = ref.cat.replace(/‌/g, ''); s.x = ref.x; s.y = ref.y;
}
const catOrder = [...new Set(slots.map((s) => s.catKey))];
slots.sort((a, b) => catOrder.indexOf(a.catKey) - catOrder.indexOf(b.catKey) || a.y - b.y || a.x - b.x);
const used = {};
for (const s of slots) {
  const n = used[s.base] = (used[s.base] ?? -1) + 1;
  s.name = n === 0 ? s.base : `${s.base}-${n}`;
}

// ---------- write ----------
rmSync(outDir, { recursive: true, force: true });
const manifest = { source: 'Vuesax Iconsax v1.0 (Figma NZx2yTmVwyoKZruzUxMN8K)', styles: STYLES, icons: [] };
for (const style of STYLES) mkdirSync(join(outDir, style), { recursive: true });
for (const s of slots) {
  const entry = { name: s.name, category: s.catKey, styles: [] };
  for (const style of STYLES) {
    const e = s[style]; if (!e) continue;
    entry.styles.push(style);
    if (e.colors.length) entry.multicolor = true;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">${e.body}</svg>\n`;
    writeFileSync(join(outDir, style, `${s.name}.svg`), svg);
  }
  manifest.icons.push(entry);
}
writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 1) + '\n');

const stat = (st) => ({ files: readdirSync(join(outDir, st)).length, complex: extracted[st].filter((e) => e.complex).length, multicolor: extracted[st].filter((e) => e.colors.length).map((e) => `${e.figmaName}:${e.colors}`) });
console.log(JSON.stringify({
  errors, hidden, warnings: warnings.length, warningSample: warnings.slice(0, 15),
  slots: slots.length, both: slots.filter((s) => s.linear && s.bold).length,
  onlyLinear: slots.filter((s) => !s.bold).map((s) => s.name), onlyBold: slots.filter((s) => !s.linear).map((s) => s.name),
  renamedFromPlaceholder: slots.filter((s) => s.linear && PLACEHOLDER.has(cleanName(s.linear.figmaName)) && !PLACEHOLDER.has(s.base)).map((s) => s.name),
  stillPlaceholder: slots.filter((s) => PLACEHOLDER.has(s.base)).map((s) => `${s.name}@${s.cat}`),
  linear: stat('linear'), bold: stat('bold'),
}, null, 1));
