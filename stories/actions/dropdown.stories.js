import example1 from '../../../core/components/actions/dropdown/01-dropdown-using-details-and-summary.html?raw';
import example2 from '../../../core/components/actions/dropdown/02-dropdown-using-popover-api-and-anchor-positioning.html?raw';
import example3 from '../../../core/components/actions/dropdown/03-dropdown-menu.html?raw';
import example4 from '../../../core/components/actions/dropdown/04-dropdown-aligns-to-start-of-button-horizontally.html?raw';
import example5 from '../../../core/components/actions/dropdown/05-dropdown-aligns-to-end-of-button-horizontally.html?raw';
import example6 from '../../../core/components/actions/dropdown/06-dropdown-aligns-to-center-of-button-horizontally.html?raw';
import example7 from '../../../core/components/actions/dropdown/07-dropdown-top.html?raw';
import example8 from '../../../core/components/actions/dropdown/08-dropdown-top-aligns-to-center-of-button-horizontally.html?raw';
import example9 from '../../../core/components/actions/dropdown/09-dropdown-top-aligns-to-end-of-button-horizontally.html?raw';
import example10 from '../../../core/components/actions/dropdown/10-dropdown-bottom-default.html?raw';
import example11 from '../../../core/components/actions/dropdown/11-dropdown-bottom-default-aligns-to-center-of-button-horizontally.html?raw';
import example12 from '../../../core/components/actions/dropdown/12-dropdown-bottom-default-aligns-to-end-of-button-horizontally.html?raw';
import example13 from '../../../core/components/actions/dropdown/13-dropdown-left.html?raw';
import example14 from '../../../core/components/actions/dropdown/14-dropdown-left-aligns-to-center-of-button-vertically.html?raw';
import example15 from '../../../core/components/actions/dropdown/15-dropdown-left-aligns-to-end-of-button-vertically.html?raw';
import example16 from '../../../core/components/actions/dropdown/16-dropdown-right.html?raw';
import example17 from '../../../core/components/actions/dropdown/17-dropdown-right-aligns-to-end-of-button-vertically.html?raw';
import example18 from '../../../core/components/actions/dropdown/18-dropdown-right-aligns-to-center-of-button-vertically.html?raw';
import example19 from '../../../core/components/actions/dropdown/19-dropdown-on-hover.html?raw';
import example20 from '../../../core/components/actions/dropdown/20-force-open.html?raw';
import example21 from '../../../core/components/actions/dropdown/21-force-close.html?raw';
import example22 from '../../../core/components/actions/dropdown/22-card-as-dropdown.html?raw';
import example23 from '../../../core/components/actions/dropdown/23-dropdown-in-navbar.html?raw';
import example24 from '../../../core/components/actions/dropdown/24-helper-dropdown.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Actions/Dropdown",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "dropdown" },
    docs: {
      description: { component: "HTML-примеров: 24. Источник: [Dropdown](https://daisyui.com/components/dropdown/) daisyUI 5.7.46. Исходный HTML хранится в core/components/actions/dropdown. Представлены нативные details/summary, Popover API с CSS Anchor Positioning и варианты на CSS :focus-within. Popover и привязка к кнопке требуют поддержки соответствующих браузерных API. Варианты dropdown-open и dropdown-close показывают принудительное состояние." },
    },
  },
};

export const Example01 = {
  name: "Dropdown using details and summary",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Dropdown using popover API and anchor positioning",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Dropdown menu",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Dropdown / aligns to start of button horizontally",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Dropdown / aligns to end of button horizontally",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Dropdown / aligns to center of button horizontally",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Dropdown top",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Dropdown top / aligns to center of button horizontally",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Dropdown top / aligns to end of button horizontally",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Dropdown bottom (default)",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Dropdown bottom (default) / aligns to center of button horizontally",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "Dropdown bottom (default) / aligns to end of button horizontally",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};

export const Example13 = {
  name: "Dropdown left",
  render: () => example13,
  parameters: { docs: { source: { code: example13 } } },
};

export const Example14 = {
  name: "Dropdown left / aligns to center of button vertically",
  render: () => example14,
  parameters: { docs: { source: { code: example14 } } },
};

export const Example15 = {
  name: "Dropdown left / aligns to end of button vertically",
  render: () => example15,
  parameters: { docs: { source: { code: example15 } } },
};

export const Example16 = {
  name: "Dropdown right",
  render: () => example16,
  parameters: { docs: { source: { code: example16 } } },
};

export const Example17 = {
  name: "Dropdown right / aligns to end of button vertically",
  render: () => example17,
  parameters: { docs: { source: { code: example17 } } },
};

export const Example18 = {
  name: "Dropdown right / aligns to center of button vertically",
  render: () => example18,
  parameters: { docs: { source: { code: example18 } } },
};

export const Example19 = {
  name: "Dropdown on hover",
  render: () => example19,
  parameters: { docs: { source: { code: example19 } } },
};

export const Example20 = {
  name: "Force open",
  render: () => example20,
  parameters: { docs: { source: { code: example20 } } },
};

export const Example21 = {
  name: "Force close",
  render: () => example21,
  parameters: { docs: { source: { code: example21 } } },
};

export const Example22 = {
  name: "Card as dropdown",
  render: () => example22,
  parameters: { docs: { source: { code: example22 } } },
};

export const Example23 = {
  name: "Dropdown in navbar",
  render: () => example23,
  parameters: { docs: { source: { code: example23 } } },
};

export const Example24 = {
  name: "Helper dropdown",
  render: () => example24,
  parameters: { docs: { source: { code: example24 } } },
};
