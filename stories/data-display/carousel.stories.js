import example1 from '../../../core/components/data-display/carousel/01-snap-to-start-default.html?raw';
import example2 from '../../../core/components/data-display/carousel/02-snap-to-center.html?raw';
import example3 from '../../../core/components/data-display/carousel/03-snap-to-end.html?raw';
import example4 from '../../../core/components/data-display/carousel/04-carousel-with-full-width-items.html?raw';
import example5 from '../../../core/components/data-display/carousel/05-vertical-carousel.html?raw';
import example6 from '../../../core/components/data-display/carousel/06-carousel-with-half-width-items.html?raw';
import example7 from '../../../core/components/data-display/carousel/07-full-bleed-carousel.html?raw';
import example8 from '../../../core/components/data-display/carousel/08-carousel-with-indicator-buttons.html?raw';
import example9 from '../../../core/components/data-display/carousel/09-carousel-with-next-prev-buttons.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Carousel",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "carousel" },
    docs: {
      description: { component: "HTML-примеров: 9. Источник: [Carousel](https://daisyui.com/components/carousel/) daisyUI. Исходный HTML хранится в core/components/data-display/carousel." },
    },
  },
};

export const Example01 = {
  name: "Snap to start (default)",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Snap to center",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Snap to end",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Carousel with full width items",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Vertical carousel",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Carousel with half width items",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Full-bleed carousel",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Carousel with indicator buttons",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Carousel with next/prev buttons",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};
