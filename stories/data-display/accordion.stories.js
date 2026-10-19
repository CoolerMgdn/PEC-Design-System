import example1 from '../../../core/components/data-display/accordion/01-accordion-using-radio-inputs.html?raw';
import example2 from '../../../core/components/data-display/accordion/02-accordion-using-details.html?raw';
import example3 from '../../../core/components/data-display/accordion/03-accordion-with-arrow-icon.html?raw';
import example4 from '../../../core/components/data-display/accordion/04-accordion-with-plus-minus-icon.html?raw';
import example5 from '../../../core/components/data-display/accordion/05-using-accordion-and-join-together.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Accordion",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "accordion" },
    docs: {
      description: { component: "HTML-примеров: 5. Источник: [Accordion](https://daisyui.com/components/accordion/) daisyUI. Исходный HTML хранится в core/components/data-display/accordion." },
    },
  },
};

export const Example01 = {
  name: "Accordion using radio inputs",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Accordion using details",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Accordion with arrow icon",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Accordion with plus/minus icon",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Using Accordion and Join together",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};
