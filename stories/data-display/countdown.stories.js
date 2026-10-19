import example1 from '../../../core/components/data-display/countdown/01-countdown.html?raw';
import example2 from '../../../core/components/data-display/countdown/02-large-text-with-2-digits.html?raw';
import example3 from '../../../core/components/data-display/countdown/03-clock-countdown.html?raw';
import example4 from '../../../core/components/data-display/countdown/04-clock-countdown-with-colons.html?raw';
import example5 from '../../../core/components/data-display/countdown/05-large-text-with-labels.html?raw';
import example6 from '../../../core/components/data-display/countdown/06-large-text-with-labels-under.html?raw';
import example7 from '../../../core/components/data-display/countdown/07-in-boxes.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Countdown",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "countdown" },
    docs: {
      description: { component: "HTML-примеров: 7. Источник: [Countdown](https://daisyui.com/components/countdown/) daisyUI. Исходный HTML хранится в core/components/data-display/countdown." },
    },
  },
};

export const Example01 = {
  name: "Countdown",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Large text with 2 digits",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Clock countdown",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Clock countdown with colons",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Large text with labels",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Large text with labels under",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "In boxes",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};
