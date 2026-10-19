import example1 from '../../../core/components/feedback/loading/01-loading-spinner.html?raw';
import example2 from '../../../core/components/feedback/loading/02-loading-dots.html?raw';
import example3 from '../../../core/components/feedback/loading/03-loading-ring.html?raw';
import example4 from '../../../core/components/feedback/loading/04-loading-ball.html?raw';
import example5 from '../../../core/components/feedback/loading/05-loading-bars.html?raw';
import example6 from '../../../core/components/feedback/loading/06-loading-infinity.html?raw';
import example7 from '../../../core/components/feedback/loading/07-loading-with-colors.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Feedback/Loading",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "loading" },
    docs: {
      description: { component: "HTML-примеров: 7. Источник: [Loading](https://daisyui.com/components/loading/) daisyUI 5.7.46. Исходный HTML хранится в core/components/feedback/loading." },
    },
  },
};

export const Example01 = {
  name: "Loading spinner",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Loading dots",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Loading ring",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Loading ball",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Loading bars",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Loading infinity",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Loading with colors",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};
