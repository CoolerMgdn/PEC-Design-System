import example1 from '../../../core/components/data-input/textarea/01-textarea.html?raw';
import example2 from '../../../core/components/data-input/textarea/02-ghost-no-background.html?raw';
import example3 from '../../../core/components/data-input/textarea/03-with-form-control-and-labels.html?raw';
import example4 from '../../../core/components/data-input/textarea/04-textarea-colors.html?raw';
import example5 from '../../../core/components/data-input/textarea/05-sizes.html?raw';
import example6 from '../../../core/components/data-input/textarea/06-disabled.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/Textarea",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "textarea" },
    docs: {
      description: { component: "HTML-примеров: 6. Источник: [Textarea](https://daisyui.com/components/textarea/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/textarea." },
    },
  },
};

export const Example01 = {
  name: "Textarea",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Ghost (no background)",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "With form control and labels",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Textarea colors",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Sizes",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Disabled",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};
