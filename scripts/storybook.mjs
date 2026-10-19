import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const [command, ...args] = process.argv.slice(2);

if (!['dev', 'build'].includes(command)) {
  console.error('Use this launcher with dev or build.');
  process.exit(1);
}

const packagePath = require.resolve('storybook/package.json');
const storybookPackage = JSON.parse(readFileSync(packagePath, 'utf8'));
const bin = typeof storybookPackage.bin === 'string'
  ? storybookPackage.bin
  : storybookPackage.bin.storybook;
const settingsPreload = new URL('./storybook-settings.mjs', import.meta.url).href;

const child = spawn(process.execPath, ['--import', settingsPreload, resolve(dirname(packagePath), bin), command, ...args], {
  cwd: projectRoot,
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_COMPILE_CACHE: resolve(projectRoot, '.cache/node-compile'),
    STORYBOOK_DISABLE_TELEMETRY: 'true',
    STORYBOOK_ENABLE_CRASH_REPORTS: 'false',
  },
});

child.on('error', (error) => {
  console.error(error.message);
  process.exitCode = 1;
});

child.on('exit', (code) => {
  process.exitCode = code ?? 1;
});
