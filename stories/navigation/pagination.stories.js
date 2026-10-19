import example1 from '../../../core/components/navigation/pagination/01-pagination-with-an-active-button.html?raw';
import example2 from '../../../core/components/navigation/pagination/02-sizes.html?raw';
import example3 from '../../../core/components/navigation/pagination/03-with-a-disabled-button.html?raw';
import example4 from '../../../core/components/navigation/pagination/04-extra-small-buttons.html?raw';
import example5 from '../../../core/components/navigation/pagination/05-nex-prev-outline-buttons-with-equal-width.html?raw';
import example6 from '../../../core/components/navigation/pagination/06-using-radio-inputs.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Navigation/Pagination",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "pagination" },
    docs: {
      description: { component: "HTML-примеров: 6. Источник: [Pagination](https://daisyui.com/components/pagination/) daisyUI 5.7.46. Исходный HTML хранится в core/components/navigation/pagination." },
    },
  },
};

export const Example01 = {
  name: "Pagination with an active button",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Sizes",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "With a disabled button",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Extra small buttons",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Nex/Prev outline buttons with equal width",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Using radio inputs",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};
