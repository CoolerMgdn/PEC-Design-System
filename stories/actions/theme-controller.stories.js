import example1 from '../../../core/components/actions/theme-controller/01-theme-controller-using-a-toggle.html?raw';
import example2 from '../../../core/components/actions/theme-controller/02-theme-controller-using-a-checkbox.html?raw';
import example3 from '../../../core/components/actions/theme-controller/03-theme-controller-using-a-swap.html?raw';
import example4 from '../../../core/components/actions/theme-controller/04-theme-controller-using-a-toggle-with-text.html?raw';
import example5 from '../../../core/components/actions/theme-controller/05-theme-controller-using-a-toggle-with-icons.html?raw';
import example6 from '../../../core/components/actions/theme-controller/06-theme-controller-using-a-toggle-with-icons-inside.html?raw';
import example7 from '../../../core/components/actions/theme-controller/07-theme-controller-using-a-toggle-with-custom-colors.html?raw';
import example8 from '../../../core/components/actions/theme-controller/08-theme-controller-using-a-radio-input.html?raw';
import example9 from '../../../core/components/actions/theme-controller/09-theme-controller-using-a-radio-button.html?raw';
import example10 from '../../../core/components/actions/theme-controller/10-theme-controller-using-a-dropdown.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Actions/Theme Controller",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "theme-controller" },
    docs: {
      description: { component: "HTML-примеров: 10. Источник: [Theme Controller](https://daisyui.com/components/theme-controller/) daisyUI 5.7.46. Исходный HTML хранится в core/components/actions/theme-controller. Сейчас показан только внешний вид компонента: дополнительные темы synthwave, retro, cyberpunk, valentine и aqua не подключены в CSS. Checkbox и radio нативно меняют своё состояние, а светлая тема страницы остаётся прежней; переключение темы и сохранение выбора не подключены. В оригинале theme-controller переключает подключённые темы средствами CSS по checked и value, без отдельного JavaScript. Для сохранения выбора между загрузками страницы понадобится JavaScript своей страницы и, например, localStorage. Каждый пример в Storybook изолирован отдельным iframe." },
    },
  },
};

export const Example01 = {
  name: "Theme Controller using a toggle",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Theme Controller using a checkbox",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Theme Controller using a swap",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Theme Controller using a toggle with text",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Theme Controller using a toggle with icons",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Theme Controller using a toggle with icons inside",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Theme Controller using a toggle with custom colors",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Theme Controller using a radio input",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Theme Controller using a radio button",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Theme Controller using a dropdown",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};
