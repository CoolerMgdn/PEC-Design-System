import example1 from '../../../core/components/data-display/diff/01-diff.html?raw';
import example2 from '../../../core/components/data-display/diff/02-diff-text.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Diff",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "diff" },
    docs: {
      description: { component: "HTML-примеров: 2. Источник: [Diff](https://daisyui.com/components/diff/) daisyUI. Исходный HTML хранится в core/components/data-display/diff." },
    },
  },
};

export const Example01 = {
  name: "Diff",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Diff text",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};
