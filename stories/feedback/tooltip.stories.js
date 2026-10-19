import example1 from '../../../core/components/feedback/tooltip/01-tooltip.html?raw';
import example2 from '../../../core/components/feedback/tooltip/02-tooltip-with-tooltip-content.html?raw';
import example3 from '../../../core/components/feedback/tooltip/03-force-open.html?raw';
import example4 from '../../../core/components/feedback/tooltip/04-top.html?raw';
import example5 from '../../../core/components/feedback/tooltip/05-bottom.html?raw';
import example6 from '../../../core/components/feedback/tooltip/06-left.html?raw';
import example7 from '../../../core/components/feedback/tooltip/07-right.html?raw';
import example8 from '../../../core/components/feedback/tooltip/08-primary-color.html?raw';
import example9 from '../../../core/components/feedback/tooltip/09-secondary-color.html?raw';
import example10 from '../../../core/components/feedback/tooltip/10-accent-color.html?raw';
import example11 from '../../../core/components/feedback/tooltip/11-info-color.html?raw';
import example12 from '../../../core/components/feedback/tooltip/12-success-color.html?raw';
import example13 from '../../../core/components/feedback/tooltip/13-warning-color.html?raw';
import example14 from '../../../core/components/feedback/tooltip/14-error-color.html?raw';
import example15 from '../../../core/components/feedback/tooltip/15-responsive-tooltip-only-show-for-large-screen.html?raw';
import example16 from '../../../core/components/feedback/tooltip/16-responsive-tooltip-position.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Feedback/Tooltip",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "tooltip" },
    docs: {
      description: { component: "HTML-примеров: 16. Источник: [Tooltip](https://daisyui.com/components/tooltip/) daisyUI 5.7.46. Исходный HTML хранится в core/components/feedback/tooltip." },
    },
  },
};

export const Example01 = {
  name: "Tooltip",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Tooltip with tooltip-content",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Force open",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Top",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Bottom",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Left",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Right",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Primary color",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Secondary color",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Accent color",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Info color",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "Success color",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};

export const Example13 = {
  name: "Warning color",
  render: () => example13,
  parameters: { docs: { source: { code: example13 } } },
};

export const Example14 = {
  name: "Error color",
  render: () => example14,
  parameters: { docs: { source: { code: example14 } } },
};

export const Example15 = {
  name: "Responsive tooltip. only show for large screen",
  render: () => example15,
  parameters: { docs: { source: { code: example15 } } },
};

export const Example16 = {
  name: "Responsive tooltip position",
  render: () => example16,
  parameters: { docs: { source: { code: example16 } } },
};
