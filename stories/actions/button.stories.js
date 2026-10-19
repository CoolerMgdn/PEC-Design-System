import example1 from '../../../core/components/actions/button/01-button.html?raw';
import example2 from '../../../core/components/actions/button/02-button-sizes.html?raw';
import example3 from '../../../core/components/actions/button/03-responsive-button.html?raw';
import example4 from '../../../core/components/actions/button/04-buttons-colors.html?raw';
import example5 from '../../../core/components/actions/button/05-soft-buttons.html?raw';
import example6 from '../../../core/components/actions/button/06-outline-buttons.html?raw';
import example7 from '../../../core/components/actions/button/07-dash-buttons.html?raw';
import example8 from '../../../core/components/actions/button/08-neutral-button-with-outline-or-dash-style.html?raw';
import example9 from '../../../core/components/actions/button/09-active-buttons.html?raw';
import example10 from '../../../core/components/actions/button/10-buttons-ghost-and-button-link.html?raw';
import example11 from '../../../core/components/actions/button/11-wide-button.html?raw';
import example12 from '../../../core/components/actions/button/12-buttons-with-any-html-tags.html?raw';
import example13 from '../../../core/components/actions/button/13-disabled-buttons.html?raw';
import example14 from '../../../core/components/actions/button/14-square-button-and-circle-button.html?raw';
import example15 from '../../../core/components/actions/button/15-button-with-icon.html?raw';
import example16 from '../../../core/components/actions/button/16-button-block.html?raw';
import example17 from '../../../core/components/actions/button/17-button-with-loading-spinner.html?raw';
import example18 from '../../../core/components/actions/button/18-login-buttons.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Actions/Button",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "button" },
    docs: {
      description: { component: "HTML-примеров: 18. Источник: [Button](https://daisyui.com/components/button/) daisyUI 5.7.46. Исходный HTML хранится в core/components/actions/button. Цветовые варианты btn-primary, btn-secondary, btn-accent, btn-success, btn-warning и btn-error используют токены проекта. Login buttons сохраняют фирменные цвета сервисов и показывают только внешний вид: авторизация не подключена." },
    },
  },
};

export const Example01 = {
  name: "Button",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Button sizes",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Responsive button",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Buttons colors",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Soft buttons",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Outline buttons",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Dash buttons",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "neutral button with outline or dash style",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Active buttons",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Buttons ghost and button link",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Wide button",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "Buttons with any HTML tags",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};

export const Example13 = {
  name: "Disabled buttons",
  render: () => example13,
  parameters: { docs: { source: { code: example13 } } },
};

export const Example14 = {
  name: "Square button and circle button",
  render: () => example14,
  parameters: { docs: { source: { code: example14 } } },
};

export const Example15 = {
  name: "Button with Icon",
  render: () => example15,
  parameters: { docs: { source: { code: example15 } } },
};

export const Example16 = {
  name: "Button block",
  render: () => example16,
  parameters: { docs: { source: { code: example16 } } },
};

export const Example17 = {
  name: "Button with loading spinner",
  render: () => example17,
  parameters: { docs: { source: { code: example17 } } },
};

export const Example18 = {
  name: "Login buttons",
  render: () => example18,
  parameters: { docs: { source: { code: example18 } } },
};
