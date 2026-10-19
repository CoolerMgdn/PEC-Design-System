import example1 from '../../../core/components/navigation/link/01-link.html?raw';
import example2 from '../../../core/components/navigation/link/02-link.html?raw';
import example3 from '../../../core/components/navigation/link/03-primary-color.html?raw';
import example4 from '../../../core/components/navigation/link/04-secondary-color.html?raw';
import example5 from '../../../core/components/navigation/link/05-accent-color.html?raw';
import example6 from '../../../core/components/navigation/link/06-success-color.html?raw';
import example7 from '../../../core/components/navigation/link/07-info-color.html?raw';
import example8 from '../../../core/components/navigation/link/08-warning-color.html?raw';
import example9 from '../../../core/components/navigation/link/09-error-color.html?raw';
import example10 from '../../../core/components/navigation/link/10-show-underline-only-on-hover.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Navigation/Link",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "link" },
    docs: {
      description: { component: "HTML-примеров: 10. Источник: [Link](https://daisyui.com/components/link/) daisyUI 5.7.46. Исходный HTML хранится в core/components/navigation/link." },
    },
  },
};

export const Example01 = {
  name: "Link",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Link",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Primary color",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Secondary color",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Accent color",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Success color",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Info color",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Warning color",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Error color",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Show underline only on hover",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};
