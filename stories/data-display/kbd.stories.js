import example1 from '../../../core/components/data-display/kbd/01-kbd.html?raw';
import example2 from '../../../core/components/data-display/kbd/02-kbd-sizes.html?raw';
import example3 from '../../../core/components/data-display/kbd/03-in-text.html?raw';
import example4 from '../../../core/components/data-display/kbd/04-key-combination.html?raw';
import example5 from '../../../core/components/data-display/kbd/05-function-keys.html?raw';
import example6 from '../../../core/components/data-display/kbd/06-a-full-keyboard.html?raw';
import example7 from '../../../core/components/data-display/kbd/07-arrow-keys.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Kbd",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "kbd" },
    docs: {
      description: { component: "HTML-примеров: 7. Источник: [Kbd](https://daisyui.com/components/kbd/) daisyUI. Исходный HTML хранится в core/components/data-display/kbd." },
    },
  },
};

export const Example01 = {
  name: "Kbd",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Kbd sizes",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "In text",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Key combination",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Function Keys",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "A full keyboard",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Arrow Keys",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};
