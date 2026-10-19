import example1 from '../../../core/components/data-display/list/01-list-second-column-grows-default.html?raw';
import example2 from '../../../core/components/data-display/list/02-list-third-column-grows.html?raw';
import example3 from '../../../core/components/data-display/list/03-list-third-column-wraps-to-next-row.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/List",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "list" },
    docs: {
      description: { component: "HTML-примеров: 3. Источник: [List](https://daisyui.com/components/list/) daisyUI. Исходный HTML хранится в core/components/data-display/list." },
    },
  },
};

export const Example01 = {
  name: "List (second column grows - default)",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "List (third column grows)",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "List (third column wraps to next row)",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};
