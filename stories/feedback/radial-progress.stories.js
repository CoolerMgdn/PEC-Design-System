import example1 from '../../../core/components/feedback/radial-progress/01-radial-progress.html?raw';
import example2 from '../../../core/components/feedback/radial-progress/02-different-values.html?raw';
import example3 from '../../../core/components/feedback/radial-progress/03-custom-color.html?raw';
import example4 from '../../../core/components/feedback/radial-progress/04-with-background-color-and-border.html?raw';
import example5 from '../../../core/components/feedback/radial-progress/05-custom-size-and-custom-thickness.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Feedback/Radial progress",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "radial-progress" },
    docs: {
      description: { component: "HTML-примеров: 5. Источник: [Radial progress](https://daisyui.com/components/radial-progress/) daisyUI 5.7.46. Исходный HTML хранится в core/components/feedback/radial-progress." },
    },
  },
};

export const Example01 = {
  name: "Radial progress",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Different values",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Custom color",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "With background color and border",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Custom size and custom thickness",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};
