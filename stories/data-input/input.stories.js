import example1 from '../../../core/components/data-input/input/01-text-input.html?raw';
import example2 from '../../../core/components/data-input/input/02-text-input-with-text-label-inside.html?raw';
import example3 from '../../../core/components/data-input/input/03-ghost-style.html?raw';
import example4 from '../../../core/components/data-input/input/04-with-fieldset-and-fieldset-legend.html?raw';
import example5 from '../../../core/components/data-input/input/05-with-fieldset-and-label.html?raw';
import example6 from '../../../core/components/data-input/input/06-input-colors.html?raw';
import example7 from '../../../core/components/data-input/input/07-sizes.html?raw';
import example8 from '../../../core/components/data-input/input/08-disabled.html?raw';
import example9 from '../../../core/components/data-input/input/09-text-input-with-data-list-suggestion.html?raw';
import example10 from '../../../core/components/data-input/input/10-date-input.html?raw';
import example11 from '../../../core/components/data-input/input/11-time-input.html?raw';
import example12 from '../../../core/components/data-input/input/12-datetime-local-input.html?raw';
import example13 from '../../../core/components/data-input/input/13-username-text-input-with-icon-and-validator.html?raw';
import example14 from '../../../core/components/data-input/input/14-search-input-with-icon.html?raw';
import example15 from '../../../core/components/data-input/input/15-email-input-with-icon-and-validator.html?raw';
import example16 from '../../../core/components/data-input/input/16-email-input-with-icon-validator-button-join.html?raw';
import example17 from '../../../core/components/data-input/input/17-password-input-with-icon-and-validator.html?raw';
import example18 from '../../../core/components/data-input/input/18-number-input-with-validator.html?raw';
import example19 from '../../../core/components/data-input/input/19-telephone-number-input-with-icon-and-validator.html?raw';
import example20 from '../../../core/components/data-input/input/20-url-with-icon-and-validator.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/Input",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "input" },
    docs: {
      description: { component: "HTML-примеров: 20. Источник: [Input](https://daisyui.com/components/input/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/input." },
    },
  },
};

export const Example01 = {
  name: "Text input",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Text input with text label inside",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Ghost style",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "With fieldset and fieldset-legend",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "With fieldset and label",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Input colors",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Sizes",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Disabled",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Text input with data list suggestion",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Date input",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Time input",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "datetime-local input",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};

export const Example13 = {
  name: "Username text input with icon and validator",
  render: () => example13,
  parameters: { docs: { source: { code: example13 } } },
};

export const Example14 = {
  name: "Search input with icon",
  render: () => example14,
  parameters: { docs: { source: { code: example14 } } },
};

export const Example15 = {
  name: "Email input with icon and validator",
  render: () => example15,
  parameters: { docs: { source: { code: example15 } } },
};

export const Example16 = {
  name: "Email input with icon, validator, button, join",
  render: () => example16,
  parameters: { docs: { source: { code: example16 } } },
};

export const Example17 = {
  name: "Password input with icon and validator",
  render: () => example17,
  parameters: { docs: { source: { code: example17 } } },
};

export const Example18 = {
  name: "Number input with validator",
  render: () => example18,
  parameters: { docs: { source: { code: example18 } } },
};

export const Example19 = {
  name: "Telephone number input with icon and validator",
  render: () => example19,
  parameters: { docs: { source: { code: example19 } } },
};

export const Example20 = {
  name: "URL with icon and validator",
  render: () => example20,
  parameters: { docs: { source: { code: example20 } } },
};
