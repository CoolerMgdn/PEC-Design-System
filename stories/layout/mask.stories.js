import example1 from '../../../core/components/layout/mask/01-squircle.html?raw';
import example2 from '../../../core/components/layout/mask/02-heart.html?raw';
import example3 from '../../../core/components/layout/mask/03-hexagon.html?raw';
import example4 from '../../../core/components/layout/mask/04-hexagon-2-horizontal-hexagon.html?raw';
import example5 from '../../../core/components/layout/mask/05-decagon.html?raw';
import example6 from '../../../core/components/layout/mask/06-pentagon.html?raw';
import example7 from '../../../core/components/layout/mask/07-diamond.html?raw';
import example8 from '../../../core/components/layout/mask/08-circle.html?raw';
import example9 from '../../../core/components/layout/mask/09-star.html?raw';
import example10 from '../../../core/components/layout/mask/10-star-2-bold-star.html?raw';
import example11 from '../../../core/components/layout/mask/11-triangle-pointing-top.html?raw';
import example12 from '../../../core/components/layout/mask/12-triangle-2-pointing-down.html?raw';
import example13 from '../../../core/components/layout/mask/13-triangle-3-pointing-left.html?raw';
import example14 from '../../../core/components/layout/mask/14-triangle-4-pointing-right.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Layout/Mask",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "mask" },
    docs: {
      description: { component: "HTML-примеров: 14. Источник: [Mask](https://daisyui.com/components/mask/) daisyUI 5.7.46. Исходный HTML хранится в core/components/layout/mask." },
    },
  },
};

export const Example01 = {
  name: "Squircle",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Heart",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Hexagon",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Hexagon-2 (horizontal hexagon)",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Decagon",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Pentagon",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Diamond",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Circle",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Star",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Star-2 (bold star)",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Triangle (pointing top)",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "Triangle-2 (pointing down)",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};

export const Example13 = {
  name: "Triangle-3 (pointing left)",
  render: () => example13,
  parameters: { docs: { source: { code: example13 } } },
};

export const Example14 = {
  name: "Triangle-4 (pointing right)",
  render: () => example14,
  parameters: { docs: { source: { code: example14 } } },
};
