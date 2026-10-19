import example1 from '../../../core/components/layout/drawer/01-drawer-sidebar.html?raw';
import example2 from '../../../core/components/layout/drawer/02-navbar-menu-for-desktop-sidebar-drawer-for-mobile.html?raw';
import example3 from '../../../core/components/layout/drawer/03-responsive-sidebar-is-always-visible-on-large-screen-can-be-toggled-on-small-screen.html?raw';
import example4 from '../../../core/components/layout/drawer/04-responsive-collapsible-icon-only-drawer-sidebar-using-is-drawer-close-and-is-drawer-open.html?raw';
import example5 from '../../../core/components/layout/drawer/05-drawer-sidebar-that-opens-from-right-side-of-page.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Layout/Drawer",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "drawer" },
    docs: {
      description: { component: "HTML-примеров: 5. Источник: [Drawer](https://daisyui.com/components/drawer/) daisyUI 5.7.46. Исходный HTML хранится в core/components/layout/drawer. Панель открывается через checkbox и связанные label без JavaScript; адаптивные примеры меняются на breakpoint lg. Для вариантов is-drawer-close и is-drawer-open нужны соответствующие стили daisyUI из core/ui.min.css." },
    },
  },
};

export const Example01 = {
  name: "Drawer sidebar",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Navbar menu for desktop + sidebar drawer for mobile",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Responsive: Sidebar is always visible on large screen, can be toggled on small screen",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Responsive collapsible Icon-only drawer sidebar. Using is-drawer-close and is-drawer-open",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Drawer sidebar that opens from right side of page",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};
