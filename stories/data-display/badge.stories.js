import example1 from '../../../core/components/data-display/badge/01-badge.html?raw';
import example2 from '../../../core/components/data-display/badge/02-badge-sizes.html?raw';
import example3 from '../../../core/components/data-display/badge/03-badge-with-colors.html?raw';
import example4 from '../../../core/components/data-display/badge/04-badge-with-soft-style.html?raw';
import example5 from '../../../core/components/data-display/badge/05-badge-with-outline-style.html?raw';
import example6 from '../../../core/components/data-display/badge/06-badge-with-dash-style.html?raw';
import example7 from '../../../core/components/data-display/badge/07-neutral-badge-with-outline-or-dash-style.html?raw';
import example8 from '../../../core/components/data-display/badge/08-badge-ghost.html?raw';
import example9 from '../../../core/components/data-display/badge/09-empty-badge.html?raw';
import example10 from '../../../core/components/data-display/badge/10-badge-with-icon.html?raw';
import example11 from '../../../core/components/data-display/badge/11-badge-in-a-text.html?raw';
import example12 from '../../../core/components/data-display/badge/12-badge-in-a-button.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Badge",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "badge" },
    docs: {
      description: { component: "HTML-примеров: 12. Источник: [Badge](https://daisyui.com/components/badge/) daisyUI. Исходный HTML хранится в core/components/data-display/badge." },
    },
  },
};

export const Example01 = {
  name: "Badge",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Badge sizes",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Badge with colors",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Badge with soft style",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Badge with outline style",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Badge with dash style",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "neutral badge with outline or dash style",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Badge ghost",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Empty badge",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Badge with icon",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Badge in a text",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "Badge in a button",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};
