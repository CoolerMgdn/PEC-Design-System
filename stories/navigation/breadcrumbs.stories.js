import example1 from '../../../core/components/navigation/breadcrumbs/01-breadcrumbs.html?raw';
import example2 from '../../../core/components/navigation/breadcrumbs/02-breadcrumbs-with-icons.html?raw';
import example3 from '../../../core/components/navigation/breadcrumbs/03-breadcrumbs-with-max-width.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Navigation/Breadcrumbs",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "breadcrumbs" },
    docs: {
      description: { component: "HTML-примеров: 3. Источник: [Breadcrumbs](https://daisyui.com/components/breadcrumbs/) daisyUI 5.7.46. Исходный HTML хранится в core/components/navigation/breadcrumbs." },
    },
  },
};

export const Example01 = {
  name: "Breadcrumbs",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Breadcrumbs with icons",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Breadcrumbs with max-width",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};
