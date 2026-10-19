import example1 from '../../../core/components/data-display/status/01-status.html?raw';
import example2 from '../../../core/components/data-display/status/02-status-sizes.html?raw';
import example3 from '../../../core/components/data-display/status/03-status-with-colors.html?raw';
import example4 from '../../../core/components/data-display/status/04-status-with-ping-animation.html?raw';
import example5 from '../../../core/components/data-display/status/05-status-with-bounce-animation.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Status",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "status" },
    docs: {
      description: { component: "HTML-примеров: 5. Источник: [Status](https://daisyui.com/components/status/) daisyUI. Исходный HTML хранится в core/components/data-display/status." },
    },
  },
};

export const Example01 = {
  name: "Status",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Status sizes",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Status with colors",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Status with ping animation",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Status with bounce animation",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};
