import example1 from '../../../core/components/data-input/checkbox/01-checkbox.html?raw';
import example2 from '../../../core/components/data-input/checkbox/02-with-fieldset-and-label.html?raw';
import example3 from '../../../core/components/data-input/checkbox/03-sizes.html?raw';
import example4 from '../../../core/components/data-input/checkbox/04-colors.html?raw';
import example5 from '../../../core/components/data-input/checkbox/05-disabled.html?raw';
import example6 from '../../../core/components/data-input/checkbox/06-indeterminate.html?raw';
import example7 from '../../../core/components/data-input/checkbox/07-checkbox-with-custom-colors.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/Checkbox",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "checkbox" },
    docs: {
      description: { component: "HTML-примеров: 7. Источник: [Checkbox](https://daisyui.com/components/checkbox/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/checkbox. Для примера Indeterminate нужна установка DOM-свойства через JavaScript; она реализована только в Storybook." },
    },
  },
};

export const Example01 = {
  name: "Checkbox",
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
  name: "Checkbox with custom colors",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};
