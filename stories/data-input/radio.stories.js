import example1 from '../../../core/components/data-input/radio/01-radio.html?raw';
import example2 from '../../../core/components/data-input/radio/02-radio-sizes.html?raw';
import example3 from '../../../core/components/data-input/radio/03-neutral-color.html?raw';
import example4 from '../../../core/components/data-input/radio/04-primary-color.html?raw';
import example5 from '../../../core/components/data-input/radio/05-secondary-color.html?raw';
import example6 from '../../../core/components/data-input/radio/06-accent-color.html?raw';
import example7 from '../../../core/components/data-input/radio/07-success-color.html?raw';
import example8 from '../../../core/components/data-input/radio/08-warning-color.html?raw';
import example9 from '../../../core/components/data-input/radio/09-info-color.html?raw';
import example10 from '../../../core/components/data-input/radio/10-error-color.html?raw';
import example11 from '../../../core/components/data-input/radio/11-disabled.html?raw';
import example12 from '../../../core/components/data-input/radio/12-radio-with-custom-colors.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/Radio",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "radio" },
    docs: {
      description: { component: "HTML-примеров: 12. Источник: [Radio](https://daisyui.com/components/radio/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/radio." },
    },
  },
};

export const Example01 = {
  name: "Radio",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Radio sizes",
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
  name: "Disabled",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "Radio with custom colors",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};
