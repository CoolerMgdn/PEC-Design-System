import example1 from '../../../core/components/data-display/timeline/01-timeline-with-text-on-both-sides-and-icon.html?raw';
import example2 from '../../../core/components/data-display/timeline/02-timeline-with-bottom-side-only.html?raw';
import example3 from '../../../core/components/data-display/timeline/03-timeline-with-top-side-only.html?raw';
import example4 from '../../../core/components/data-display/timeline/04-timeline-with-different-sides.html?raw';
import example5 from '../../../core/components/data-display/timeline/05-timeline-with-colorful-lines.html?raw';
import example6 from '../../../core/components/data-display/timeline/06-timeline-without-icons.html?raw';
import example7 from '../../../core/components/data-display/timeline/07-vertical-timeline-with-text-on-both-sides-and-icon.html?raw';
import example8 from '../../../core/components/data-display/timeline/08-vertical-timeline-with-right-side-only.html?raw';
import example9 from '../../../core/components/data-display/timeline/09-vertical-timeline-with-left-side-only.html?raw';
import example10 from '../../../core/components/data-display/timeline/10-vertical-timeline-with-different-sides.html?raw';
import example11 from '../../../core/components/data-display/timeline/11-vertical-timeline-with-colorful-lines.html?raw';
import example12 from '../../../core/components/data-display/timeline/12-vertical-timeline-without-icons.html?raw';
import example13 from '../../../core/components/data-display/timeline/13-responsive-vertical-by-default-horizontal-on-large-screen.html?raw';
import example14 from '../../../core/components/data-display/timeline/14-timeline-with-icon-snapped-to-the-start.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Timeline",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "timeline" },
    docs: {
      description: { component: "HTML-примеров: 14. Источник: [Timeline](https://daisyui.com/components/timeline/) daisyUI. Исходный HTML хранится в core/components/data-display/timeline." },
    },
  },
};

export const Example01 = {
  name: "Timeline with text on both sides and icon",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Timeline with bottom side only",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Timeline with top side only",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Timeline with different sides",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Timeline with colorful lines",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Timeline without icons",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Vertical timeline with text on both sides and icon",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Vertical timeline with right side only",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Vertical timeline with left side only",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Vertical timeline with different sides",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Vertical timeline with colorful lines",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "Vertical timeline without icons",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};

export const Example13 = {
  name: "Responsive: vertical by default, horizontal on large screen",
  render: () => example13,
  parameters: { docs: { source: { code: example13 } } },
};

export const Example14 = {
  name: "Timeline with icon snapped to the start",
  render: () => example14,
  parameters: { docs: { source: { code: example14 } } },
};
