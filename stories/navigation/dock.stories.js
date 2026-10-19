import example1 from '../../../core/components/navigation/dock/01-dock.html?raw';
import example2 from '../../../core/components/navigation/dock/02-dock-extra-small-size.html?raw';
import example3 from '../../../core/components/navigation/dock/03-dock-small-size.html?raw';
import example4 from '../../../core/components/navigation/dock/04-dock-medium-size.html?raw';
import example5 from '../../../core/components/navigation/dock/05-dock-large-size.html?raw';
import example6 from '../../../core/components/navigation/dock/06-dock-extra-large-size.html?raw';
import example7 from '../../../core/components/navigation/dock/07-dock-with-custom-colors.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Navigation/Dock",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "dock" },
    docs: {
      description: { component: "HTML-примеров: 7. Источник: [Dock](https://daisyui.com/components/dock/) daisyUI 5.7.46. Исходный HTML хранится в core/components/navigation/dock." },
    },
  },
};

export const Example01 = {
  name: "Dock",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Dock Extra Small size",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Dock Small size",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Dock Medium size",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Dock Large size",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Dock Extra Large size",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Dock with custom colors",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};
