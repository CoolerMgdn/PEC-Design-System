import { fileURLToPath } from 'node:url';
import { globalSettings } from 'storybook/internal/cli';

// Initialize the shared settings store before the pinned Storybook CLI starts.
await globalSettings(fileURLToPath(new URL('../.cache/storybook/settings.json', import.meta.url)));
