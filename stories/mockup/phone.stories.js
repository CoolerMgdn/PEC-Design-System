import example1 from '../../../core/components/mockup/phone/01-iphone-mockup.html?raw';
import example2 from '../../../core/components/mockup/phone/02-with-color-and-wallpaper.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Mockup/Phone",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "mockup-phone" },
    docs: {
      story: { iframeHeight: 940 },
      description: { component: "HTML-примеров: 2. Источник: [Phone](https://daisyui.com/components/mockup-phone/) daisyUI 5.7.46. Исходный HTML хранится в core/components/mockup/phone. Картинка локально подменяется только в превью Storybook. В исходном HTML сохранён URL из документации." },
    },
  },
};

export const Example01 = {
  name: "iPhone mockup",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "With color and wallpaper",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};
