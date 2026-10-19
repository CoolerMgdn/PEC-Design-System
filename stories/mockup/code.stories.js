import example1 from '../../../core/components/mockup/code/01-mockup-code-with-line-prefix.html?raw';
import example2 from '../../../core/components/mockup/code/02-multi-line.html?raw';
import example3 from '../../../core/components/mockup/code/03-highlighted-line.html?raw';
import example4 from '../../../core/components/mockup/code/04-long-line-will-scroll.html?raw';
import example5 from '../../../core/components/mockup/code/05-without-prefix.html?raw';
import example6 from '../../../core/components/mockup/code/06-with-color.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Mockup/Code",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "mockup-code" },
    docs: {
      description: { component: "HTML-примеров: 6. Источник: [Code](https://daisyui.com/components/mockup-code/) daisyUI 5.7.46. Исходный HTML хранится в core/components/mockup/code." },
    },
  },
};

export const Example01 = {
  name: "mockup code with line prefix",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Multi line",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Highlighted line",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Long line will scroll",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Without prefix",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "With color",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};
