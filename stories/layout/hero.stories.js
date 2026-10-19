import example1 from '../../../core/components/layout/hero/01-centered-hero.html?raw';
import example2 from '../../../core/components/layout/hero/02-hero-with-figure.html?raw';
import example3 from '../../../core/components/layout/hero/03-hero-with-figure-but-reverse-order.html?raw';
import example4 from '../../../core/components/layout/hero/04-hero-with-form.html?raw';
import example5 from '../../../core/components/layout/hero/05-hero-with-overlay-image.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Layout/Hero",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "hero" },
    docs: {
      description: { component: "HTML-примеров: 5. Источник: [Hero](https://daisyui.com/components/hero/) daisyUI 5.7.46. Исходный HTML хранится в core/components/layout/hero. Картинки, включая фоновую, локально подменяются только в превью Storybook. В исходном HTML сохранены URL из документации." },
    },
  },
};

export const Example01 = {
  name: "Centered hero",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Hero with figure",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Hero with figure but reverse order",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Hero with form",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Hero with overlay image",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};
