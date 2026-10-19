import example1 from '../../../core/components/mockup/window/01-window-mockup-with-border.html?raw';
import example2 from '../../../core/components/mockup/window/02-window-mockup-with-background-color.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Mockup/Window",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "mockup-window" },
    docs: {
      description: { component: "HTML-примеров: 2. Источник: [Window](https://daisyui.com/components/mockup-window/) daisyUI 5.7.46. Исходный HTML хранится в core/components/mockup/window." },
    },
  },
};

export const Example01 = {
  name: "window mockup with border",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "window mockup with background color",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};
