import example1 from '../../../core/components/feedback/toast/01-toast-with-alert-inside.html?raw';
import example2 from '../../../core/components/feedback/toast/02-toast-top-toast-start.html?raw';
import example3 from '../../../core/components/feedback/toast/03-toast-top-toast-center.html?raw';
import example4 from '../../../core/components/feedback/toast/04-toast-top-toast-end.html?raw';
import example5 from '../../../core/components/feedback/toast/05-toast-start-toast-middle.html?raw';
import example6 from '../../../core/components/feedback/toast/06-toast-center-toast-middle.html?raw';
import example7 from '../../../core/components/feedback/toast/07-toast-end-toast-middle.html?raw';
import example8 from '../../../core/components/feedback/toast/08-toast-start-toast-bottom-default.html?raw';
import example9 from '../../../core/components/feedback/toast/09-toast-center-toast-bottom-default.html?raw';
import example10 from '../../../core/components/feedback/toast/10-toast-end-default-toast-bottom-default.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Feedback/Toast",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "toast" },
    docs: {
      description: { component: "HTML-примеров: 10. Источник: [Toast](https://daisyui.com/components/toast/) daisyUI 5.7.46. Исходный HTML хранится в core/components/feedback/toast." },
    },
  },
};

export const Example01 = {
  name: "toast with alert inside",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "toast-top toast-start",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "toast-top toast-center",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "toast-top toast-end",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "toast-start toast-middle",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "toast-center toast-middle",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "toast-end toast-middle",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "toast-start toast-bottom (default)",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "toast-center toast-bottom (default)",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "toast-end (default) toast-bottom (default)",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};
