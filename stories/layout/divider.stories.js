import example1 from '../../../core/components/layout/divider/01-divider.html?raw';
import example2 from '../../../core/components/layout/divider/02-divider-horizontal.html?raw';
import example3 from '../../../core/components/layout/divider/03-divider-with-no-text.html?raw';
import example4 from '../../../core/components/layout/divider/04-responsive-lg-divider-horizontal.html?raw';
import example5 from '../../../core/components/layout/divider/05-divider-with-colors.html?raw';
import example6 from '../../../core/components/layout/divider/06-divider-in-different-positions.html?raw';
import example7 from '../../../core/components/layout/divider/07-divider-in-different-positions-horizontal.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Layout/Divider",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "divider" },
    docs: {
      description: { component: "HTML-примеров: 7. Источник: [Divider](https://daisyui.com/components/divider/) daisyUI 5.7.46. Исходный HTML хранится в core/components/layout/divider." },
    },
  },
};

export const Example01 = {
  name: "Divider",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Divider horizontal",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Divider with no text",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "responsive (lg:divider-horizontal)",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Divider with colors",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Divider in different positions",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Divider in different positions (horizontal)",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};
