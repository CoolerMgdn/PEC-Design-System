import example1 from '../../../core/components/data-display/aura/01-aura.html?raw';
import example2 from '../../../core/components/data-display/aura/02-aura-around-a-button.html?raw';
import example3 from '../../../core/components/data-display/aura/03-aura-dual.html?raw';
import example4 from '../../../core/components/data-display/aura/04-aura-rainbow.html?raw';
import example5 from '../../../core/components/data-display/aura/05-aura-holo.html?raw';
import example6 from '../../../core/components/data-display/aura/06-aura-glow.html?raw';
import example7 from '../../../core/components/data-display/aura/07-aura-gold.html?raw';
import example8 from '../../../core/components/data-display/aura/08-aura-silver.html?raw';
import example9 from '../../../core/components/data-display/aura/09-aura-with-custom-color.html?raw';
import example10 from '../../../core/components/data-display/aura/10-aura-with-custom-color-and-custom-background-color.html?raw';
import example11 from '../../../core/components/data-display/aura/11-aura-rainbow-around-a-pricing-card.html?raw';
import example12 from '../../../core/components/data-display/aura/12-aura-sizes.html?raw';
import example13 from '../../../core/components/data-display/aura/13-aura-with-custom-animation-duration.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Aura",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "aura" },
    docs: {
      description: { component: "HTML-примеров: 13. Источник: [Aura](https://daisyui.com/components/aura/) daisyUI. Исходный HTML хранится в core/components/data-display/aura." },
    },
  },
};

export const Example01 = {
  name: "Aura",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Aura around a button",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Aura dual",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Aura rainbow",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Aura holo",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Aura glow",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Aura gold",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Aura silver",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Aura with custom color",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Aura with custom color and custom background color",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Aura rainbow around a pricing card",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "Aura sizes",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};

export const Example13 = {
  name: "Aura with custom animation duration",
  render: () => example13,
  parameters: { docs: { source: { code: example13 } } },
};
