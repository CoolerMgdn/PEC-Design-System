import example1 from '../../../core/components/actions/modal/01-dialog-modal.html?raw';
import example2 from '../../../core/components/actions/modal/02-dialog-modal-closes-when-clicked-outside.html?raw';
import example3 from '../../../core/components/actions/modal/03-dialog-modal-with-a-close-button-at-corner.html?raw';
import example4 from '../../../core/components/actions/modal/04-dialog-modal-with-custom-width.html?raw';
import example5 from '../../../core/components/actions/modal/05-responsive.html?raw';
import example6 from '../../../core/components/actions/modal/06-popover-modal.html?raw';
import example7 from '../../../core/components/actions/modal/07-popover-modal-closes-when-clicked-outside.html?raw';
import example8 from '../../../core/components/actions/modal/08-modal-using-checkbox.html?raw';
import example9 from '../../../core/components/actions/modal/09-modal-that-closes-when-clicked-outside.html?raw';
import example10 from '../../../core/components/actions/modal/10-modal-using-anchor-link.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Actions/Modal",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "modal" },
    docs: {
      description: { component: "HTML-примеров: 10. Источник: [Modal](https://daisyui.com/components/modal/) daisyUI 5.7.46. Исходный HTML хранится в core/components/actions/modal. Пять примеров dialog используют нативные Invoker Commands: command=\"show-modal\" и commandfor вместо inline onclick. Нужна поддержка этих атрибутов браузером; в старых браузерах открывайте dialog через .showModal() в JavaScript своей страницы. Закрытие через form method=\"dialog\" остаётся нативным. Также представлены Popover API и legacy-варианты checkbox и anchor link; последние не блокируют фокус снаружи и не закрываются клавишей Esc." },
    },
  },
};

export const Example01 = {
  name: "Dialog modal",
  render: () => example1,
  parameters: { docs: { source: { code: example1 }, description: { story: "Открытие: нативные command=\"show-modal\" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method=\"dialog\" и Esc работает средствами dialog." } } },
};

export const Example02 = {
  name: "Dialog modal, closes when clicked outside",
  render: () => example2,
  parameters: { docs: { source: { code: example2 }, description: { story: "Открытие: нативные command=\"show-modal\" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method=\"dialog\" и Esc работает средствами dialog." } } },
};

export const Example03 = {
  name: "Dialog modal with a close button at corner",
  render: () => example3,
  parameters: { docs: { source: { code: example3 }, description: { story: "Открытие: нативные command=\"show-modal\" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method=\"dialog\" и Esc работает средствами dialog." } } },
};

export const Example04 = {
  name: "Dialog modal with custom width",
  render: () => example4,
  parameters: { docs: { source: { code: example4 }, description: { story: "Открытие: нативные command=\"show-modal\" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method=\"dialog\" и Esc работает средствами dialog." } } },
};

export const Example05 = {
  name: "Responsive",
  render: () => example5,
  parameters: { docs: { source: { code: example5 }, description: { story: "Открытие: нативные command=\"show-modal\" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method=\"dialog\" и Esc работает средствами dialog." } } },
};

export const Example06 = {
  name: "Popover modal",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Popover modal closes when clicked outside",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Modal using checkbox",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Modal that closes when clicked outside",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Modal using anchor link",
  render: () => example10,
  parameters: { docs: { source: { code: example10 }, description: { story: "Legacy-вариант использует :target и меняет hash URL. Закрытие ссылкой href=\"#\" может прокрутить страницу к началу; Esc и ограничение фокуса здесь не реализованы." } } },
};
