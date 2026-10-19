// Точечно обновляет ui-kit/core-baseline.json только для перечисленных путей core.
// Любое другое отличие от снимка останавливает обновление: неизвестные изменения сначала выясняются.
//
//   npm run core:baseline -- ui.min.css theme.css project-components/button/
//
// Путь с завершающим «/» означает папку целиком. После обновления запустите npm run check:core.
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const core = join(root, 'core');
const baselinePath = join(root, 'ui-kit', 'core-baseline.json');
const allow = process.argv.slice(2);
if (allow.length === 0) {
  console.error('Укажите пути внутри core, например: ui.min.css project-components/button/');
  process.exit(1);
}

const baseline = JSON.parse(readFileSync(baselinePath, 'utf8'));
const allowed = (path) => allow.some((a) => (a.endsWith('/') ? path.startsWith(a) : path === a));

const current = new Map();
const walk = (directory) => {
  for (const name of readdirSync(directory)) {
    const absolute = join(directory, name);
    if (statSync(absolute).isDirectory()) walk(absolute);
    else current.set(relative(core, absolute).split(sep).join('/'), createHash('sha256').update(readFileSync(absolute)).digest('hex'));
  }
};
walk(core);

const unexpected = [];
for (const [path, hash] of current) if (baseline.files[path] !== hash && !allowed(path)) unexpected.push(`изменён или добавлен: ${path}`);
for (const path of Object.keys(baseline.files)) if (!current.has(path) && !allowed(path)) unexpected.push(`удалён: ${path}`);
if (unexpected.length) {
  console.error(`Снимок не обновлён, есть изменения вне указанных путей:\n  ${unexpected.join('\n  ')}`);
  process.exit(1);
}

// Порядок существующих записей сохраняется, новые добавляются в конец по алфавиту — минимальный diff.
const files = {};
for (const path of Object.keys(baseline.files)) if (current.has(path)) files[path] = current.get(path);
for (const path of [...current.keys()].filter((p) => !(p in baseline.files)).sort((a, b) => a.localeCompare(b))) files[path] = current.get(path);
const updated = Object.keys(files).filter((p) => baseline.files[p] !== files[p]).length
  + Object.keys(baseline.files).filter((p) => !(p in files)).length;
writeFileSync(baselinePath, `${JSON.stringify({ ...baseline, files }, null, 2)}\n`);
console.log(`Обновлено записей: ${updated}, всего файлов: ${Object.keys(files).length}.`);
