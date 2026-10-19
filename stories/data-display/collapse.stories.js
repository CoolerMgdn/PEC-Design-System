import example1 from '../../../core/components/data-display/collapse/01-collapse-with-focus.html?raw';
import example2 from '../../../core/components/data-display/collapse/02-collapse-with-checkbox.html?raw';
import example3 from '../../../core/components/data-display/collapse/03-collapse-with-checkbox-and-close-on-click-outside.html?raw';
import example4 from '../../../core/components/data-display/collapse/04-collapse-using-details-and-summary-tag.html?raw';
import example5 from '../../../core/components/data-display/collapse/05-without-border-and-background-color.html?raw';
import example6 from '../../../core/components/data-display/collapse/06-with-arrow-icon.html?raw';
import example7 from '../../../core/components/data-display/collapse/07-with-arrow-plus-minus-icon.html?raw';
import example8 from '../../../core/components/data-display/collapse/08-moving-collapse-icon-to-the-start.html?raw';
import example9 from '../../../core/components/data-display/collapse/09-force-open.html?raw';
import example10 from '../../../core/components/data-display/collapse/10-force-close.html?raw';
import example11 from '../../../core/components/data-display/collapse/11-custom-colors-for-collapse-that-works-with-focus.html?raw';
import example12 from '../../../core/components/data-display/collapse/12-custom-colors-for-collapse-that-works-with-checkbox.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Collapse",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "collapse" },
    docs: {
      description: { component: "HTML-примеров: 12. Источник: [Collapse](https://daisyui.com/components/collapse/) daisyUI. Исходный HTML хранится в core/components/data-display/collapse." },
    },
  },
};

export const Example01 = {
  name: "Collapse with focus",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Collapse with checkbox",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Collapse with checkbox and close on click outside",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Collapse using details and summary tag",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Without border and background color",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "With arrow icon",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "With arrow plus/minus icon",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Moving collapse icon to the start",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Force open",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Force close",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Custom colors for collapse that works with focus",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "Custom colors for collapse that works with checkbox",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};
