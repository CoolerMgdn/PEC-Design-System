import example1 from '../../../core/components/mockup/browser/01-browser-mockup-with-border.html?raw';
import example2 from '../../../core/components/mockup/browser/02-browser-mockup-with-background-color.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Mockup/Browser",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "mockup-browser" },
    docs: {
      description: { component: "HTML-примеров: 2. Источник: [Browser](https://daisyui.com/components/mockup-browser/) daisyUI 5.7.46. Исходный HTML хранится в core/components/mockup/browser." },
    },
  },
};

export const Example01 = {
  name: "browser mockup with border",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "browser mockup with background color",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};
