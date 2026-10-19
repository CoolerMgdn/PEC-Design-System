import example1 from '../../../core/components/actions/fab/01-fab-and-speed-dial-vertical.html?raw';
import example2 from '../../../core/components/actions/fab/02-fab-and-speed-dial-with-svg-icons.html?raw';
import example3 from '../../../core/components/actions/fab/03-fab-and-speed-dial-with-labels.html?raw';
import example4 from '../../../core/components/actions/fab/04-fab-and-speed-dial-with-rectangle-buttons.html?raw';
import example5 from '../../../core/components/actions/fab/05-fab-and-speed-dial-with-labels-and-fab-close-button.html?raw';
import example6 from '../../../core/components/actions/fab/06-fab-and-speed-dial-with-labels-and-fab-main-action-button.html?raw';
import example7 from '../../../core/components/actions/fab/07-a-single-fab-floating-action-button.html?raw';
import example8 from '../../../core/components/actions/fab/08-fab-flower-and-speed-dial.html?raw';
import example9 from '../../../core/components/actions/fab/09-fab-flower-without-a-main-action-button.html?raw';
import example10 from '../../../core/components/actions/fab/10-fab-and-flower-speed-dial-with-svg-icons.html?raw';
import example11 from '../../../core/components/actions/fab/11-fab-and-flower-speed-dial-with-tooltip.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Actions/FAB — Speed Dial",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "fab" },
    docs: {
      description: { component: "HTML-примеров: 11. Источник: [FAB / Speed Dial](https://daisyui.com/components/fab/) daisyUI 5.7.46. Исходный HTML хранится в core/components/actions/fab. FAB закреплён в нижнем углу iframe. Меню раскрывается через CSS при фокусе, обработчики действий кнопок не подключены. В вариантах с fab-close закрытие выполняется потерей фокуса без JavaScript." },
    },
  },
};

export const Example01 = {
  name: "FAB and Speed Dial (vertical)",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "FAB and Speed Dial with SVG icons",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "FAB and Speed Dial with labels",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "FAB and Speed Dial with rectangle buttons",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "FAB and Speed Dial with labels and fab-close button",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "FAB and Speed Dial with labels and fab-main-action Button",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "A single FAB (Floating Action Button)",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "FAB Flower and Speed Dial",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "FAB Flower without a main action button",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "FAB and Flower Speed Dial with SVG icons",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "FAB and Flower Speed Dial with tooltip",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};
