import example1 from '../../../core/components/data-input/label/01-label-for-input.html?raw';
import example2 from '../../../core/components/data-input/label/02-label-for-input-at-the-end.html?raw';
import example3 from '../../../core/components/data-input/label/03-label-for-select.html?raw';
import example4 from '../../../core/components/data-input/label/04-label-for-date-input.html?raw';
import example5 from '../../../core/components/data-input/label/05-floating-label.html?raw';
import example6 from '../../../core/components/data-input/label/06-floating-label-with-different-sizes.html?raw';
import example7 from '../../../core/components/data-input/label/07-responsive-size-floating-label.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/Label",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "label" },
    docs: {
      description: { component: "HTML-примеров: 7. Источник: [Label](https://daisyui.com/components/label/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/label." },
    },
  },
};

export const Example01 = {
  name: "Label for input",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Label for input at the end",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Label for select",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Label for date input",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Floating Label",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Floating Label with Different Sizes",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Responsive Size Floating Label",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};
