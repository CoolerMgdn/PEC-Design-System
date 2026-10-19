import example1 from '../../../core/components/data-display/hover-gallery/01-hover-gallery.html?raw';
import example2 from '../../../core/components/data-display/hover-gallery/02-hover-gallery-in-a-card.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Hover Gallery",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "hover-gallery" },
    docs: {
      description: { component: "HTML-примеров: 2. Источник: [Hover Gallery](https://daisyui.com/components/hover-gallery/) daisyUI. Исходный HTML хранится в core/components/data-display/hover-gallery." },
    },
  },
};

export const Example01 = {
  name: "Hover Gallery",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Hover Gallery in a card",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};
