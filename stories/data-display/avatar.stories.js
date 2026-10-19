import example1 from '../../../core/components/data-display/avatar/01-avatar.html?raw';
import example2 from '../../../core/components/data-display/avatar/02-avatar-in-custom-sizes.html?raw';
import example3 from '../../../core/components/data-display/avatar/03-avatar-rounded.html?raw';
import example4 from '../../../core/components/data-display/avatar/04-avatar-with-mask.html?raw';
import example5 from '../../../core/components/data-display/avatar/05-avatar-group.html?raw';
import example6 from '../../../core/components/data-display/avatar/06-avatar-group-with-counter.html?raw';
import example7 from '../../../core/components/data-display/avatar/07-avatar-with-ring.html?raw';
import example8 from '../../../core/components/data-display/avatar/08-avatar-with-presence-indicator.html?raw';
import example9 from '../../../core/components/data-display/avatar/09-avatar-placeholder.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Avatar",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "avatar" },
    docs: {
      description: { component: "HTML-примеров: 9. Источник: [Avatar](https://daisyui.com/components/avatar/) daisyUI. Исходный HTML хранится в core/components/data-display/avatar." },
    },
  },
};

export const Example01 = {
  name: "Avatar",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Avatar in custom sizes",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Avatar rounded",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Avatar with mask",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Avatar group",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Avatar group with counter",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Avatar with ring",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Avatar with presence indicator",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Avatar placeholder",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};
