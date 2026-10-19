import example1 from '../../../core/components/data-input/fieldset/01-fieldset-fieldset-legend-and-label.html?raw';
import example2 from '../../../core/components/data-input/fieldset/02-fieldset-with-background-and-border.html?raw';
import example3 from '../../../core/components/data-input/fieldset/03-fieldset-with-multiple-inputs.html?raw';
import example4 from '../../../core/components/data-input/fieldset/04-fieldset-with-multiple-join-items.html?raw';
import example5 from '../../../core/components/data-input/fieldset/05-login-form-with-fieldset.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/Fieldset",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "fieldset" },
    docs: {
      description: { component: "HTML-примеров: 5. Источник: [Fieldset](https://daisyui.com/components/fieldset/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/fieldset." },
    },
  },
};

export const Example01 = {
  name: "Fieldset fieldset-legend and label",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Fieldset with background and border",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Fieldset with multiple inputs",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Fieldset with multiple join items",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Login form with fieldset",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};
