import example1 from '../../../core/components/navigation/navbar/01-navbar-with-title-only.html?raw';
import example2 from '../../../core/components/navigation/navbar/02-navbar-with-title-and-icon.html?raw';
import example3 from '../../../core/components/navigation/navbar/03-navbar-with-icon-at-start-and-end.html?raw';
import example4 from '../../../core/components/navigation/navbar/04-navbar-with-menu-and-submenu.html?raw';
import example5 from '../../../core/components/navigation/navbar/05-navbar-with-search-input-and-dropdown.html?raw';
import example6 from '../../../core/components/navigation/navbar/06-navbar-with-icon-indicator-and-dropdown.html?raw';
import example7 from '../../../core/components/navigation/navbar/07-navbar-with-dropdown-center-logo-and-icon.html?raw';
import example8 from '../../../core/components/navigation/navbar/08-responsive-dropdown-menu-on-small-screen-center-menu-on-large-screen.html?raw';
import example9 from '../../../core/components/navigation/navbar/09-responsive-collapse-on-small-screen-full-content-on-large-screen.html?raw';
import example10 from '../../../core/components/navigation/navbar/10-navbar-with-colors.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Navigation/Navbar",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "navbar" },
    docs: {
      description: { component: "HTML-примеров: 10. Источник: [Navbar](https://daisyui.com/components/navbar/) daisyUI 5.7.46. Исходный HTML хранится в core/components/navigation/navbar." },
    },
  },
};

export const Example01 = {
  name: "Navbar with title only",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Navbar with title and icon",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Navbar with icon at start and end",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Navbar with menu and submenu",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Navbar with search input and dropdown",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Navbar with icon, indicator and dropdown",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Navbar with dropdown, center logo and icon",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Responsive (dropdown menu on small screen, center menu on large screen)",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Responsive (collapse on small screen, full content on large screen)",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Navbar with colors",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};
