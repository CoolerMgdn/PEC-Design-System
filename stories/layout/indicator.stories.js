import example1 from '../../../core/components/layout/indicator/01-status-indicator.html?raw';
import example2 from '../../../core/components/layout/indicator/02-badge-as-indicator.html?raw';
import example3 from '../../../core/components/layout/indicator/03-for-button.html?raw';
import example4 from '../../../core/components/layout/indicator/04-for-tab.html?raw';
import example5 from '../../../core/components/layout/indicator/05-for-avatar.html?raw';
import example6 from '../../../core/components/layout/indicator/06-for-an-input.html?raw';
import example7 from '../../../core/components/layout/indicator/07-a-button-as-an-indicator-for-a-card.html?raw';
import example8 from '../../../core/components/layout/indicator/08-in-center-of-an-image.html?raw';
import example9 from '../../../core/components/layout/indicator/09-indicator-top-default-indicator-start.html?raw';
import example10 from '../../../core/components/layout/indicator/10-indicator-top-default-indicator-center.html?raw';
import example11 from '../../../core/components/layout/indicator/11-indicator-top-default-indicator-end-default.html?raw';
import example12 from '../../../core/components/layout/indicator/12-indicator-middle-indicator-start.html?raw';
import example13 from '../../../core/components/layout/indicator/13-indicator-middle-indicator-center.html?raw';
import example14 from '../../../core/components/layout/indicator/14-indicator-middle-indicator-end-default.html?raw';
import example15 from '../../../core/components/layout/indicator/15-indicator-bottom-indicator-start.html?raw';
import example16 from '../../../core/components/layout/indicator/16-indicator-bottom-indicator-center.html?raw';
import example17 from '../../../core/components/layout/indicator/17-indicator-bottom-indicator-end-default.html?raw';
import example18 from '../../../core/components/layout/indicator/18-multiple-indicators.html?raw';
import example19 from '../../../core/components/layout/indicator/19-responsive.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Layout/Indicator",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "indicator" },
    docs: {
      description: { component: "HTML-примеров: 19. Источник: [Indicator](https://daisyui.com/components/indicator/) daisyUI 5.7.46. Исходный HTML хранится в core/components/layout/indicator." },
    },
  },
};

export const Example01 = {
  name: "Status Indicator",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Badge as indicator",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "for button",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "for tab",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "for avatar",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "for an input",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "A button as an indicator for a card",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "in center of an image",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "indicator-top (default) indicator-start",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "indicator-top (default) indicator-center",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "indicator-top (default) indicator-end (default)",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "indicator-middle indicator-start",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};

export const Example13 = {
  name: "indicator-middle indicator-center",
  render: () => example13,
  parameters: { docs: { source: { code: example13 } } },
};

export const Example14 = {
  name: "indicator-middle indicator-end (default)",
  render: () => example14,
  parameters: { docs: { source: { code: example14 } } },
};

export const Example15 = {
  name: "indicator-bottom indicator-start",
  render: () => example15,
  parameters: { docs: { source: { code: example15 } } },
};

export const Example16 = {
  name: "indicator-bottom indicator-center",
  render: () => example16,
  parameters: { docs: { source: { code: example16 } } },
};

export const Example17 = {
  name: "indicator-bottom indicator-end (default)",
  render: () => example17,
  parameters: { docs: { source: { code: example17 } } },
};

export const Example18 = {
  name: "multiple indicators",
  render: () => example18,
  parameters: { docs: { source: { code: example18 } } },
};

export const Example19 = {
  name: "Responsive",
  render: () => example19,
  parameters: { docs: { source: { code: example19 } } },
};
