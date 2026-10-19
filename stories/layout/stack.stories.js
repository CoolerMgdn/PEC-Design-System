import example1 from '../../../core/components/layout/stack/01-3-divs-in-a-stack.html?raw';
import example2 from '../../../core/components/layout/stack/02-stacked-images.html?raw';
import example3 from '../../../core/components/layout/stack/03-stacked-cards.html?raw';
import example4 from '../../../core/components/layout/stack/04-stacked-cards-top-direction.html?raw';
import example5 from '../../../core/components/layout/stack/05-stacked-cards-start-direction.html?raw';
import example6 from '../../../core/components/layout/stack/06-stacked-cards-end-direction.html?raw';
import example7 from '../../../core/components/layout/stack/07-stacked-cards-with-shadow.html?raw';
import example8 from '../../../core/components/layout/stack/08-stacked-cards.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Layout/Stack",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "stack" },
    docs: {
      description: { component: "HTML-примеров: 8. Источник: [Stack](https://daisyui.com/components/stack/) daisyUI 5.7.46. Исходный HTML хранится в core/components/layout/stack." },
    },
  },
};

export const Example01 = {
  name: "3 divs in a stack",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "stacked images",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "stacked cards",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "stacked cards (top direction)",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "stacked cards (start direction)",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "stacked cards (end direction)",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "stacked cards with shadow",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "stacked cards",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};
