import example1 from '../../../core/components/data-input/file-input/01-file-input.html?raw';
import example2 from '../../../core/components/data-input/file-input/02-file-input-ghost.html?raw';
import example3 from '../../../core/components/data-input/file-input/03-with-fieldset-and-label.html?raw';
import example4 from '../../../core/components/data-input/file-input/04-sizes.html?raw';
import example5 from '../../../core/components/data-input/file-input/05-primary-color.html?raw';
import example6 from '../../../core/components/data-input/file-input/06-disabled.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/File Input",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "file-input" },
    docs: {
      description: { component: "HTML-примеров: 6. Источник: [File input](https://daisyui.com/components/file-input/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/file-input." },
    },
  },
};

export const Example01 = {
  name: "File input",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "File input ghost",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "With fieldset and label",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Sizes",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Primary color",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Disabled",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};
