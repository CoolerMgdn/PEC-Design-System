import example1 from '../../../core/components/data-display/hover-3d/01-3d-image-hover-effect.html?raw';
import example2 from '../../../core/components/data-display/hover-3d/02-3d-card-hover-effect.html?raw';
import example3 from '../../../core/components/data-display/hover-3d/03-3d-hover-effect-for-image-gallery.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Hover 3D card",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "hover-3d" },
    docs: {
      description: { component: "HTML-примеров: 3. Источник: [Hover 3D card](https://daisyui.com/components/hover-3d/) daisyUI. Исходный HTML хранится в core/components/data-display/hover-3d." },
    },
  },
};

export const Example01 = {
  name: "3D image hover effect",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "3D card hover effect",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "3D hover effect for image gallery",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};
