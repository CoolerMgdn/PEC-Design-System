import example1 from '../../../core/components/navigation/steps/01-horizontal.html?raw';
import example2 from '../../../core/components/navigation/steps/02-vertical.html?raw';
import example3 from '../../../core/components/navigation/steps/03-responsive-vertical-on-small-screen-horizontal-on-large-screen.html?raw';
import example4 from '../../../core/components/navigation/steps/04-with-custom-content-in-step-icon.html?raw';
import example5 from '../../../core/components/navigation/steps/05-with-data-content.html?raw';
import example6 from '../../../core/components/navigation/steps/06-custom-colors.html?raw';
import example7 from '../../../core/components/navigation/steps/07-with-scrollable-wrapper.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Navigation/Steps",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "steps" },
    docs: {
      description: { component: "HTML-примеров: 7. Источник: [Steps](https://daisyui.com/components/steps/) daisyUI 5.7.46. Исходный HTML хранится в core/components/navigation/steps." },
    },
  },
};

export const Example01 = {
  name: "Horizontal",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Vertical",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "responsive (vertical on small screen, horizontal on large screen)",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "With custom content in step-icon",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "With data-content",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Custom colors",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "With scrollable wrapper",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};
