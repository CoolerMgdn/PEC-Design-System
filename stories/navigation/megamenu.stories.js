import example1 from '../../../core/components/navigation/megamenu/01-responsive-megamenu-with-small-vertical-menus.html?raw';
import example2 from '../../../core/components/navigation/megamenu/02-megamenu-with-wide-popovers-and-horizontal-menus.html?raw';
import example3 from '../../../core/components/navigation/megamenu/03-megamenu-with-a-menus-and-lots-of-links.html?raw';
import example4 from '../../../core/components/navigation/megamenu/04-megamenu-in-a-navbar.html?raw';
import example5 from '../../../core/components/navigation/megamenu/05-megamenu-without-arrows.html?raw';
import example6 from '../../../core/components/navigation/megamenu/06-megamenu-in-different-sizes.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Navigation/Megamenu",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "megamenu" },
    docs: {
      description: { component: "HTML-примеров: 6. Источник: [Megamenu](https://daisyui.com/components/megamenu/) daisyUI 5.7.46. Исходный HTML хранится в core/components/navigation/megamenu." },
    },
  },
};

export const Example01 = {
  name: "Responsive megamenu with small vertical menus",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Megamenu with wide popovers and horizontal menus",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Megamenu with a menus and lots of links",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Megamenu in a navbar",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "megamenu without arrows",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Megamenu in different sizes",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};
