// Автоматизация рецепта docs/css-build.md: сборка кандидата, AST-сравнение, применение и очистка.
// Входные файлы (package.json, input.css, extract-templates.mjs) берутся из блоков кода самого рецепта,
// поэтому рецепт остаётся единственным источником настроек.
//
//   npm run css:build -- <id>   собрать tmp/css-build-<id>/candidate.min.css и сравнить с core/ui.min.css
//   npm run css:apply -- <id>   заменить core/ui.min.css проверенным кандидатом (с контролем SHA-256) и удалить tmp
//   npm run css:clean -- <id>   удалить tmp/css-build-<id> без замены
//
// Браузерная проверка и обновление core-baseline.json выполняются отдельно (см. docs/css-build.md).
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, lstatSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const [command, id] = process.argv.slice(2);
if (!['build', 'apply', 'clean'].includes(command) || !/^[\w-]+$/.test(id ?? '')) {
  console.error('Использование: css-rebuild.mjs <build|apply|clean> <id>');
  process.exit(1);
}

const tmpRoot = join(root, 'tmp');
const dir = join(tmpRoot, `css-build-${id}`);
const uiCss = join(root, 'core', 'ui.min.css');
const sha = (file) => createHash('sha256').update(readFileSync(file)).digest('hex');
const isWin = process.platform === 'win32';

function run(cmd, args) {
  const result = spawnSync(cmd, args, { cwd: dir, stdio: 'inherit', shell: isWin });
  if (result.status !== 0) throw new Error(`Команда завершилась с ошибкой: ${cmd} ${args.join(' ')}`);
}

function assertInsideTmp() {
  if (!existsSync(dir)) throw new Error(`Нет папки ${dir}`);
  if (lstatSync(dir).isSymbolicLink() || lstatSync(tmpRoot).isSymbolicLink()) throw new Error('tmp не должен быть ссылкой');
  if (!resolve(dir).startsWith(resolve(tmpRoot))) throw new Error('Папка вне tmp/');
}

function block(doc, lang, marker) {
  for (const match of doc.matchAll(new RegExp('```' + lang + '\\r?\\n([\\s\\S]*?)\\r?\\n```', 'g'))) {
    if (match[1].includes(marker)) return match[1] + '\n';
  }
  throw new Error(`В docs/css-build.md не найден блок ${lang} с «${marker}»`);
}

const compareSource = `import { readFileSync } from 'node:fs';
import postcss from 'postcss';
const collect = (file) => {
  const map = new Map();
  const ctx = (node) => { const p = []; for (let n = node.parent; n && n.type !== 'root'; n = n.parent) if (n.type === 'atrule') p.unshift('@' + n.name + ' ' + n.params); return p.join(' > '); };
  postcss.parse(readFileSync(file, 'utf8')).walk((node) => {
    let key; let value;
    if (node.type === 'rule') { key = ctx(node) + ' | ' + node.selector; value = node.nodes.filter((n) => n.type === 'decl').map((d) => d.prop + ':' + d.value + (d.important ? '!important' : '')).join(';'); }
    else if (node.type === 'atrule' && ['property', 'keyframes'].includes(node.name)) { key = ctx(node) + ' | @' + node.name + ' ' + node.params; value = node.toString(); }
    else return;
    map.set(key, [...(map.get(key) ?? []), value]);
  });
  return map;
};
const a = collect(process.argv[2]); const b = collect(process.argv[3]);
const removed = [...a.keys()].filter((k) => !b.has(k));
const added = [...b.keys()].filter((k) => !a.has(k));
const changed = [...a.keys()].filter((k) => b.has(k) && JSON.stringify(a.get(k)) !== JSON.stringify(b.get(k))).map((k) => {
  const before = a.get(k).join(';').split(';'); const after = b.get(k).join(';').split(';');
  return { rule: k, removedDecls: before.filter((d) => !after.includes(d)), addedDecls: after.filter((d) => !before.includes(d)) };
});
console.log(JSON.stringify({ before: a.size, after: b.size, removed, changed, added }, null, 1));
`;

if (command === 'build') {
  if (existsSync(dir)) throw new Error(`Папка уже существует: ${dir}`);
  mkdirSync(dir, { recursive: true });
  const doc = readFileSync(join(root, 'docs', 'css-build.md'), 'utf8');
  writeFileSync(join(dir, 'package.json'), block(doc, 'json', 'ai-pages-css-build'));
  writeFileSync(join(dir, 'input.css'), block(doc, 'css', '@plugin "daisyui"'));
  writeFileSync(join(dir, 'extract-templates.mjs'), block(doc, 'js', 'templates.html'));
  writeFileSync(join(dir, 'compare.mjs'), compareSource);
  copyFileSync(uiCss, join(dir, 'original.min.css'));
  writeFileSync(join(dir, 'original.sha256'), sha(uiCss));

  run('npm', ['install', '--cache', './.npm-cache', '--no-audit', '--no-fund', '--ignore-scripts']);
  run('npm', ['install', 'postcss@8.5.6', '--cache', './.npm-cache', '--no-audit', '--no-fund', '--ignore-scripts', '--no-save']);
  run(process.execPath, ['extract-templates.mjs']);
  run(process.execPath, ['node_modules/@tailwindcss/cli/dist/index.mjs', '-i', 'input.css', '-o', 'candidate.min.css', '--minify']);

  const result = spawnSync(process.execPath, ['compare.mjs', 'original.min.css', 'candidate.min.css'], { cwd: dir, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  if (result.status !== 0) throw new Error(result.stderr);
  writeFileSync(join(dir, 'compare.json'), result.stdout);
  const report = JSON.parse(result.stdout);
  console.log(`\nПравил: было ${report.before}, стало ${report.after}; удалено ${report.removed.length}, изменено ${report.changed.length}, добавлено ${report.added.length}.`);
  for (const rule of report.removed) console.log(`  − ${rule}`);
  for (const c of report.changed) console.log(`  ~ ${c.rule}\n      −${c.removedDecls.join('; ')}\n      +${c.addedDecls.join('; ')}`);
  for (const rule of report.added) console.log(`  + ${rule}`);
  console.log(`\nКандидат: ${join(dir, 'candidate.min.css')}. Разберите каждое удаление и изменение, затем: npm run css:apply -- ${id}`);
}

if (command === 'apply') {
  assertInsideTmp();
  const expected = readFileSync(join(dir, 'original.sha256'), 'utf8').trim();
  if (sha(uiCss) !== expected) throw new Error('core/ui.min.css изменился после сборки кандидата: пересоберите на актуальной основе.');
  copyFileSync(join(dir, 'candidate.min.css'), uiCss);
  rmSync(dir, { recursive: true, force: true });
  console.log('core/ui.min.css заменён проверенным кандидатом, временная папка удалена.');
  console.log('Дальше: перезапустите Storybook (Vite может кешировать CSS), проверьте отображение и обновите снимок: npm run core:baseline -- ui.min.css');
}

if (command === 'clean') {
  assertInsideTmp();
  rmSync(dir, { recursive: true, force: true });
  console.log(`Удалено: ${dir}`);
}
