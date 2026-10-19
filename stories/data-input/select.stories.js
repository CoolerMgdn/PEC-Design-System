import example1 from '../../../core/components/data-input/select/01-select.html?raw';
import example2 from '../../../core/components/data-input/select/02-ghost-no-background.html?raw';
import example3 from '../../../core/components/data-input/select/03-with-fieldset-and-labels.html?raw';
import example4 from '../../../core/components/data-input/select/04-primary-color.html?raw';
import example5 from '../../../core/components/data-input/select/05-secondary-color.html?raw';
import example6 from '../../../core/components/data-input/select/06-accent-color.html?raw';
import example7 from '../../../core/components/data-input/select/07-neutral-color.html?raw';
import example8 from '../../../core/components/data-input/select/08-info-color.html?raw';
import example9 from '../../../core/components/data-input/select/09-success-color.html?raw';
import example10 from '../../../core/components/data-input/select/10-warning-color.html?raw';
import example11 from '../../../core/components/data-input/select/11-error-color.html?raw';
import example12 from '../../../core/components/data-input/select/12-sizes.html?raw';
import example13 from '../../../core/components/data-input/select/13-disabled.html?raw';
import example14 from '../../../core/components/data-input/select/14-using-os-native-style-for-the-options-dropdown.html?raw';
import example15 from '../../../core/components/data-input/select/15-select-with-custom-dropdown-height.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/Select",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "select" },
    docs: {
      description: { component: "HTML-примеров: 15. Источник: [Select](https://daisyui.com/components/select/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/select." },
    },
  },
};

export const Example01 = {
  name: "Select",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Ghost (no background)",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "With fieldset and labels",
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
  name: "Neutral color",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Info color",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Success color",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Warning color",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Error color",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "Sizes",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};

export const Example13 = {
  name: "Disabled",
  render: () => example13,
  parameters: { docs: { source: { code: example13 } } },
};

export const Example14 = {
  name: "Using OS native style for the options dropdown",
  render: () => example14,
  parameters: { docs: { source: { code: example14 } } },
};

export const Example15 = {
  name: "Select with custom dropdown height",
  render: () => example15,
  parameters: { docs: { source: { code: example15 } } },
};
