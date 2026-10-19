import example1 from '../../../core/components/navigation/tab/01-tabs.html?raw';
import example2 from '../../../core/components/navigation/tab/02-tabs-border.html?raw';
import example3 from '../../../core/components/navigation/tab/03-tabs-lift.html?raw';
import example4 from '../../../core/components/navigation/tab/04-tabs-box.html?raw';
import example5 from '../../../core/components/navigation/tab/05-tabs-box-using-radio-inputs.html?raw';
import example6 from '../../../core/components/navigation/tab/06-sizes.html?raw';
import example7 from '../../../core/components/navigation/tab/07-radio-tabs-border-tab-content.html?raw';
import example8 from '../../../core/components/navigation/tab/08-radio-tabs-lift-tab-content.html?raw';
import example9 from '../../../core/components/navigation/tab/09-radio-tabs-lift-with-icons-tab-content.html?raw';
import example10 from '../../../core/components/navigation/tab/10-radio-tabs-lift-tab-content-on-bottom.html?raw';
import example11 from '../../../core/components/navigation/tab/11-radio-tabs-box-tab-content.html?raw';
import example12 from '../../../core/components/navigation/tab/12-tabs-box-with-a-horizontal-scroll-when-theres-no-space.html?raw';
import example13 from '../../../core/components/navigation/tab/13-tabs-with-custom-color.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Navigation/Tabs",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "tab" },
    docs: {
      description: { component: "HTML-примеров: 13. Источник: [Tabs](https://daisyui.com/components/tab/) daisyUI 5.7.46. Исходный HTML хранится в core/components/navigation/tab." },
    },
  },
};

export const Example01 = {
  name: "tabs",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "tabs-border",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "tabs-lift",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "tabs-box",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "tabs-box using radio inputs",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Sizes",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "radio tabs-border + tab content",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "radio tabs-lift + tab content",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "radio tabs-lift with icons + tab content",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "radio tabs-lift + tab content on bottom",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "radio tabs-box + tab content",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "tabs-box with a horizontal scroll when there's no space",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};

export const Example13 = {
  name: "Tabs with custom color",
  render: () => example13,
  parameters: { docs: { source: { code: example13 } } },
};
