import { fileURLToPath } from 'node:url';

/** @type {import('@storybook/html-vite').StorybookConfig} */
export default {
  framework: '@storybook/html-vite',
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-docs'],
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    const { searchForWorkspaceRoot } = await import('vite');
    const fontDirectory = fileURLToPath(new URL('../../core/fonts/roboto/', import.meta.url));

    config.server = {
      ...config.server,
      fs: {
        ...config.server?.fs,
        allow: [
          ...(config.server?.fs?.allow ?? [searchForWorkspaceRoot(config.root)]),
          fontDirectory,
        ],
      },
    };

    return config;
  },
};
