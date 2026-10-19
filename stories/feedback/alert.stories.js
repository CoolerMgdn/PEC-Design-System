import example1 from '../../../core/components/feedback/alert/01-alert.html?raw';
import example2 from '../../../core/components/feedback/alert/02-info-color.html?raw';
import example3 from '../../../core/components/feedback/alert/03-success-color.html?raw';
import example4 from '../../../core/components/feedback/alert/04-warning-color.html?raw';
import example5 from '../../../core/components/feedback/alert/05-error-color.html?raw';
import example6 from '../../../core/components/feedback/alert/06-alert-soft-style.html?raw';
import example7 from '../../../core/components/feedback/alert/07-alert-outline-style.html?raw';
import example8 from '../../../core/components/feedback/alert/08-alert-dash-style.html?raw';
import example9 from '../../../core/components/feedback/alert/09-alert-with-buttons-responsive.html?raw';
import example10 from '../../../core/components/feedback/alert/10-alert-with-title-and-description.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Feedback/Alert",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "alert" },
    docs: {
      description: { component: "HTML-примеров: 10. Источник: [Alert](https://daisyui.com/components/alert/) daisyUI 5.7.46. Исходный HTML хранится в core/components/feedback/alert." },
    },
  },
};

export const Example01 = {
  name: "Alert",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Info color",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Success color",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Warning color",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Error color",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Alert soft style",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Alert outline style",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Alert dash style",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Alert with buttons + responsive",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Alert with title and description",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};
