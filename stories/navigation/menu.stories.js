import example1 from '../../../core/components/navigation/menu/01-menu.html?raw';
import example2 from '../../../core/components/navigation/menu/02-responsive-vertical-on-small-screen-horizontal-on-large-screen.html?raw';
import example3 from '../../../core/components/navigation/menu/03-paged-menu-with-nested-submenus.html?raw';
import example4 from '../../../core/components/navigation/menu/04-menu-with-icon-only.html?raw';
import example5 from '../../../core/components/navigation/menu/05-menu-with-icon-only-horizontal.html?raw';
import example6 from '../../../core/components/navigation/menu/06-menu-with-icon-only-with-tooltip.html?raw';
import example7 from '../../../core/components/navigation/menu/07-menu-with-icon-only-horizontal-with-tooltip.html?raw';
import example8 from '../../../core/components/navigation/menu/08-menu-sizes.html?raw';
import example9 from '../../../core/components/navigation/menu/09-menu-with-disabled-items.html?raw';
import example10 from '../../../core/components/navigation/menu/10-menu-with-icons.html?raw';
import example11 from '../../../core/components/navigation/menu/11-menu-with-icons-and-badge-responsive.html?raw';
import example12 from '../../../core/components/navigation/menu/12-menu-without-padding-and-border-radius.html?raw';
import example13 from '../../../core/components/navigation/menu/13-menu-with-title.html?raw';
import example14 from '../../../core/components/navigation/menu/14-menu-with-title-as-a-parent.html?raw';
import example15 from '../../../core/components/navigation/menu/15-submenu.html?raw';
import example16 from '../../../core/components/navigation/menu/16-collapsible-submenu.html?raw';
import example17 from '../../../core/components/navigation/menu/17-collapsible-submenu-that-works-with-class-names.html?raw';
import example18 from '../../../core/components/navigation/menu/18-file-tree.html?raw';
import example19 from '../../../core/components/navigation/menu/19-menu-with-active-item.html?raw';
import example20 from '../../../core/components/navigation/menu/20-horizontal-menu.html?raw';
import example21 from '../../../core/components/navigation/menu/21-horizontal-submenu.html?raw';
import example22 from '../../../core/components/navigation/menu/22-mega-menu-with-submenu-responsive.html?raw';
import example23 from '../../../core/components/navigation/menu/23-collapsible-with-submenu-responsive.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Navigation/Menu",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "menu" },
    docs: {
      description: { component: "HTML-примеров: 23. Источник: [Menu](https://daisyui.com/components/menu/) daisyUI 5.7.46. Исходный HTML хранится в core/components/navigation/menu." },
    },
  },
};

export const Example01 = {
  name: "Menu",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Responsive: vertical on small screen, horizontal on large screen",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Paged menu with nested submenus",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Menu with icon only",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Menu with icon only (horizontal)",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Menu with icon only with tooltip",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Menu with icon only (horizontal) with tooltip",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Menu sizes",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Menu with disabled items",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Menu with icons",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Menu with icons and badge (responsive)",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "Menu without padding and border radius",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};

export const Example13 = {
  name: "Menu with title",
  render: () => example13,
  parameters: { docs: { source: { code: example13 } } },
};

export const Example14 = {
  name: "Menu with title as a parent",
  render: () => example14,
  parameters: { docs: { source: { code: example14 } } },
};

export const Example15 = {
  name: "Submenu",
  render: () => example15,
  parameters: { docs: { source: { code: example15 } } },
};

export const Example16 = {
  name: "Collapsible submenu",
  render: () => example16,
  parameters: { docs: { source: { code: example16 } } },
};

export const Example17 = {
  name: "Collapsible submenu that works with class names",
  render: () => example17,
  parameters: { docs: {
    source: { code: example17 },
    description: { story: 'В Storybook подменю раскрывается мышью, Enter и Space. Для этого варианта на своей странице нужен JavaScript, переключающий menu-dropdown-show на триггере и вложенном списке. Демонстрационный JS витрины в исходный HTML не входит.' },
  } },
};

export const Example18 = {
  name: "File tree",
  render: () => example18,
  parameters: { docs: { source: { code: example18 } } },
};

export const Example19 = {
  name: "Menu with active item",
  render: () => example19,
  parameters: { docs: { source: { code: example19 } } },
};

export const Example20 = {
  name: "Horizontal menu",
  render: () => example20,
  parameters: { docs: { source: { code: example20 } } },
};

export const Example21 = {
  name: "Horizontal submenu",
  render: () => example21,
  parameters: { docs: { source: { code: example21 } } },
};

export const Example22 = {
  name: "Mega menu with submenu (responsive)",
  render: () => example22,
  parameters: { docs: { source: { code: example22 } } },
};

export const Example23 = {
  name: "Collapsible with submenu (responsive)",
  render: () => example23,
  parameters: { docs: { source: { code: example23 } } },
};
