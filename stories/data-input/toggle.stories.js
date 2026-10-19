import example1 from '../../../core/components/data-input/toggle/01-toggle-switch.html?raw';
import example2 from '../../../core/components/data-input/toggle/02-with-fieldset-and-label.html?raw';
import example3 from '../../../core/components/data-input/toggle/03-sizes.html?raw';
import example4 from '../../../core/components/data-input/toggle/04-colors.html?raw';
import example5 from '../../../core/components/data-input/toggle/05-disabled.html?raw';
import example6 from '../../../core/components/data-input/toggle/06-indeterminate.html?raw';
import example7 from '../../../core/components/data-input/toggle/07-toggle-with-icons-inside.html?raw';
import example8 from '../../../core/components/data-input/toggle/08-toggle-with-custom-colors.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/Toggle",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "toggle" },
    docs: {
      description: { component: "HTML-примеров: 8. Источник: [Toggle](https://daisyui.com/components/toggle/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/toggle. Для примера Indeterminate нужна установка DOM-свойства через JavaScript; она реализована только в Storybook." },
    },
  },
};

export const Example01 = {
  name: "Toggle (switch)",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "With fieldset and label",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Sizes",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Colors",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Disabled",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Indeterminate",
  render: () => example6,
  parameters: {
    catalog: { indeterminate: true },
    docs: {
      source: { code: example6 },
      description: { story: "Состояние indeterminate задаётся через DOM-свойство input.indeterminate = true после вставки HTML. В Storybook это делает код витрины; при использовании фрагмента подключите эту инициализацию в JavaScript своей страницы." },
    },
  },
};

export const Example07 = {
  name: "Toggle with icons inside",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Toggle with custom colors",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};
