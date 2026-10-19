import example1 from '../../../core/components/data-input/validator/01-validator.html?raw';
import example2 from '../../../core/components/data-input/validator/02-validator-and-validator-hint.html?raw';
import example3 from '../../../core/components/data-input/validator/03-password-requirement-validator.html?raw';
import example4 from '../../../core/components/data-input/validator/04-username-requirement-validator.html?raw';
import example5 from '../../../core/components/data-input/validator/05-phone-number-requirement-validator.html?raw';
import example6 from '../../../core/components/data-input/validator/06-url-input-requirement-validator.html?raw';
import example7 from '../../../core/components/data-input/validator/07-date-input-requirement-validator.html?raw';
import example8 from '../../../core/components/data-input/validator/08-number-input-requirement-validator.html?raw';
import example9 from '../../../core/components/data-input/validator/09-checkbox-requirement-validator.html?raw';
import example10 from '../../../core/components/data-input/validator/10-toggle-requirement-validator.html?raw';
import example11 from '../../../core/components/data-input/validator/11-select-requirement-validator.html?raw';
import example12 from '../../../core/components/data-input/validator/12-form-requirement-validator.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/Validator",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "validator" },
    docs: {
      description: { component: "HTML-примеров: 12. Источник: [Validator](https://daisyui.com/components/validator/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/validator." },
    },
  },
};

export const Example01 = {
  name: "Validator",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Validator and validator-hint",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Password requirement validator",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Username requirement validator",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Phone Number requirement validator",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "URL input requirement validator",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Date input requirement validator",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Number input requirement validator",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Checkbox requirement validator",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Toggle requirement validator",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Select requirement validator",
  render: () => example11,
  parameters: {
    docs: {
      source: { code: example11 },
      description: { story: "Пример использует нативную HTML-валидацию формы. В Storybook успешная отправка формы отменяется, чтобы не перезагружать витрину. Обработку данных и отправку задаёт приложение." },
    },
  },
};

export const Example12 = {
  name: "Form requirement validator",
  render: () => example12,
  parameters: {
    docs: {
      source: { code: example12 },
      description: { story: "Пример использует нативную HTML-валидацию формы. В Storybook успешная отправка формы отменяется, чтобы не перезагружать витрину. Обработку данных и отправку задаёт приложение." },
    },
  },
};
