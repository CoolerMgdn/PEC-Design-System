import example1 from '../../../core/components/data-input/rating/01-rating.html?raw';
import example2 from '../../../core/components/data-input/rating/02-read-only-rating.html?raw';
import example3 from '../../../core/components/data-input/rating/03-mask-star-2-with-warning-color.html?raw';
import example4 from '../../../core/components/data-input/rating/04-mask-heart-with-multiple-colors.html?raw';
import example5 from '../../../core/components/data-input/rating/05-mask-star-2-with-green-500-color.html?raw';
import example6 from '../../../core/components/data-input/rating/06-sizes.html?raw';
import example7 from '../../../core/components/data-input/rating/07-with-rating-hidden.html?raw';
import example8 from '../../../core/components/data-input/rating/08-half-stars.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/Rating",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "rating" },
    docs: {
      description: { component: "HTML-примеров: 8. Источник: [Rating](https://daisyui.com/components/rating/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/rating." },
    },
  },
};

export const Example01 = {
  name: "Rating",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Read-only Rating",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "mask-star-2 with warning color",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "mask-heart with multiple colors",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "mask-star-2 with green-500 color",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Sizes",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "with rating-hidden",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "half stars",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};
