import example1 from '../../../core/components/feedback/skeleton/01-skeleton.html?raw';
import example2 from '../../../core/components/feedback/skeleton/02-skeleton-circle-with-content.html?raw';
import example3 from '../../../core/components/feedback/skeleton/03-skeleton-rectangle-with-content.html?raw';
import example4 from '../../../core/components/feedback/skeleton/04-skeleton-text-animated-gradient-text.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Feedback/Skeleton",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "skeleton" },
    docs: {
      description: { component: "HTML-примеров: 4. Источник: [Skeleton](https://daisyui.com/components/skeleton/) daisyUI 5.7.46. Исходный HTML хранится в core/components/feedback/skeleton." },
    },
  },
};

export const Example01 = {
  name: "Skeleton",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Skeleton - circle with content",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Skeleton - rectangle with content",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "skeleton-text - animated gradient text",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};
