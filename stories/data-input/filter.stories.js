import example1 from '../../../core/components/data-input/filter/01-filter-using-html-form-radio-buttons-and-reset-button.html?raw';
import example2 from '../../../core/components/data-input/filter/02-filter-without-html-form.html?raw';
import example3 from '../../../core/components/data-input/filter/03-filter-using-html-form-checkboxes-and-a-reset-button.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/Filter",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "filter" },
    docs: {
      description: { component: "HTML-примеров: 3. Источник: [Filter](https://daisyui.com/components/filter/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/filter. Переключение и сброс выбора работают на HTML и CSS. Фильтрацию данных приложения нужно реализовать отдельно." },
    },
  },
};

export const Example01 = {
  name: "Filter using HTML form, radio buttons and reset button",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Filter without HTML form",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Filter using HTML form, checkboxes, and a reset button",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};
