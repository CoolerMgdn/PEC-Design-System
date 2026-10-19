import { createHash } from 'node:crypto';
import { lstat, readFile, readdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const coreDirectory = resolve(scriptDirectory, '../../core');
const baselinePath = resolve(scriptDirectory, '../core-baseline.json');

function validateBaseline(baseline) {
  if (
    baseline === null ||
    typeof baseline !== 'object' ||
    baseline.algorithm !== 'sha256' ||
    baseline.files === null ||
    typeof baseline.files !== 'object' ||
    Array.isArray(baseline.files)
  ) {
    throw new Error('Некорректный формат core-baseline.json.');
  }

  for (const [relativePath, hash] of Object.entries(baseline.files)) {
    const segments = relativePath.split('/');
    if (
      /[\\:\0]/u.test(relativePath) ||
      segments.some((segment) => segment === '' || segment === '.' || segment === '..') ||
      typeof hash !== 'string' ||
      !/^[a-f0-9]{64}$/u.test(hash)
    ) {
      throw new Error(`Некорректная запись в core-baseline.json: ${relativePath}`);
    }
  }

  return new Map(Object.entries(baseline.files));
}

async function collectHashes(directory, relativeDirectory = '', hashes = new Map()) {
  const entries = await readdir(directory, { withFileTypes: true });
  entries.sort((left, right) => left.name.localeCompare(right.name));

  for (const entry of entries) {
    const relativePath = relativeDirectory ? `${relativeDirectory}/${entry.name}` : entry.name;
    const absolutePath = join(directory, entry.name);

    if (entry.isSymbolicLink()) {
      throw new Error(`Символические ссылки в core не допускаются: ${relativePath}`);
    }

    if (entry.isDirectory()) {
      await collectHashes(absolutePath, relativePath, hashes);
    } else if (entry.isFile()) {
      const content = await readFile(absolutePath);
      hashes.set(relativePath, createHash('sha256').update(content).digest('hex'));
    } else {
      throw new Error(`Неподдерживаемый тип файла в core: ${relativePath}`);
    }
  }

  return hashes;
}

async function main() {
  if (process.argv.length > 2) {
    throw new Error('Проверка не принимает аргументы и не обновляет исходный снимок.');
  }

  const coreStat = await lstat(coreDirectory);
  if (coreStat.isSymbolicLink() || !coreStat.isDirectory()) {
    throw new Error('core должен быть обычной папкой, а не символической ссылкой.');
  }

  const baseline = validateBaseline(JSON.parse(await readFile(baselinePath, 'utf8')));
  const current = await collectHashes(coreDirectory);
  const added = [...current.keys()].filter((path) => !baseline.has(path)).sort();
  const removed = [...baseline.keys()].filter((path) => !current.has(path)).sort();
  const changed = [...baseline.keys()]
    .filter((path) => current.has(path) && current.get(path) !== baseline.get(path))
    .sort();

  if (added.length || removed.length || changed.length) {
    console.error('Проверка core не пройдена:');
    for (const path of added) console.error(`  Добавлен: ${path}`);
    for (const path of removed) console.error(`  Удалён: ${path}`);
    for (const path of changed) console.error(`  Изменён: ${path}`);
    process.exitCode = 1;
    return;
  }

  console.log(`core без изменений: проверено файлов — ${current.size}.`);
}

main().catch((error) => {
  console.error(`Проверка core не выполнена: ${error.message}`);
  process.exitCode = 1;
});
