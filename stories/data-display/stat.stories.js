import example1 from '../../../core/components/data-display/stat/01-stat.html?raw';
import example2 from '../../../core/components/data-display/stat/02-stat-with-icons-or-image.html?raw';
import example3 from '../../../core/components/data-display/stat/03-stat.html?raw';
import example4 from '../../../core/components/data-display/stat/04-centered-items.html?raw';
import example5 from '../../../core/components/data-display/stat/05-vertical.html?raw';
import example6 from '../../../core/components/data-display/stat/06-responsive-vertical-on-small-screen-horizontal-on-large-screen.html?raw';
import example7 from '../../../core/components/data-display/stat/07-with-custom-colors-and-button.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Stat",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "stat" },
    docs: {
      description: { component: "HTML-примеров: 7. Источник: [Stat](https://daisyui.com/components/stat/) daisyUI. Исходный HTML хранится в core/components/data-display/stat." },
    },
  },
};

export const Example01 = {
  name: "Stat",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Stat with icons or image",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Stat",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Centered items",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Vertical",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Responsive (vertical on small screen, horizontal on large screen)",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "With custom colors and button",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};
