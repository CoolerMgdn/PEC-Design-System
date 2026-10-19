import example1 from '../../../core/components/feedback/progress/01-progress.html?raw';
import example2 from '../../../core/components/feedback/progress/02-primary-color.html?raw';
import example3 from '../../../core/components/feedback/progress/03-secondary-color.html?raw';
import example4 from '../../../core/components/feedback/progress/04-accent-color.html?raw';
import example5 from '../../../core/components/feedback/progress/05-neutral-color.html?raw';
import example6 from '../../../core/components/feedback/progress/06-info-color.html?raw';
import example7 from '../../../core/components/feedback/progress/07-success-color.html?raw';
import example8 from '../../../core/components/feedback/progress/08-warning-color.html?raw';
import example9 from '../../../core/components/feedback/progress/09-error-color.html?raw';
import example10 from '../../../core/components/feedback/progress/10-indeterminate-without-value.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Feedback/Progress",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "progress" },
    docs: {
      description: { component: "HTML-примеров: 10. Источник: [Progress](https://daisyui.com/components/progress/) daisyUI 5.7.46. Исходный HTML хранится в core/components/feedback/progress." },
    },
  },
};

export const Example01 = {
  name: "Progress",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Primary color",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Secondary color",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Accent color",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Neutral color",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Info color",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Success color",
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
  name: "Indeterminate (without value)",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};
