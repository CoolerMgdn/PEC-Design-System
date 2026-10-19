import example1 from '../../../core/components/data-input/range/01-range.html?raw';
import example2 from '../../../core/components/data-input/range/02-with-steps-and-measure.html?raw';
import example3 from '../../../core/components/data-input/range/03-neutral-color.html?raw';
import example4 from '../../../core/components/data-input/range/04-primary-color.html?raw';
import example5 from '../../../core/components/data-input/range/05-secondary-color.html?raw';
import example6 from '../../../core/components/data-input/range/06-accent-color.html?raw';
import example7 from '../../../core/components/data-input/range/07-success-color.html?raw';
import example8 from '../../../core/components/data-input/range/08-warning-color.html?raw';
import example9 from '../../../core/components/data-input/range/09-info-color.html?raw';
import example10 from '../../../core/components/data-input/range/10-error-color.html?raw';
import example11 from '../../../core/components/data-input/range/11-sizes.html?raw';
import example12 from '../../../core/components/data-input/range/12-range-with-custom-color-and-no-fill.html?raw';
import example13 from '../../../core/components/data-input/range/13-vertical.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/Range",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "range" },
    docs: {
      description: { component: "HTML-примеров: 13. Источник: [Range](https://daisyui.com/components/range/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/range." },
    },
  },
};

export const Example01 = {
  name: "Range",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "With steps and measure",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Neutral color",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Primary color",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Secondary color",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Accent color",
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
  name: "Info color",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Error color",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Sizes",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "Range with custom color and no fill",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};

export const Example13 = {
  name: "Vertical",
  render: () => example13,
  parameters: { docs: { source: { code: example13 } } },
};
