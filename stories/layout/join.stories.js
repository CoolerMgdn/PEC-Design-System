import example1 from '../../../core/components/layout/join/01-join.html?raw';
import example2 from '../../../core/components/layout/join/02-group-items-vertically.html?raw';
import example3 from '../../../core/components/layout/join/03-responsive-it-s-vertical-on-small-screen-and-horizontal-on-large-screen.html?raw';
import example4 from '../../../core/components/layout/join/04-with-extra-elements-in-the-group.html?raw';
import example5 from '../../../core/components/layout/join/05-custom-border-radius.html?raw';
import example6 from '../../../core/components/layout/join/06-join-radio-inputs-with-btn-style.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Layout/Join",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "join" },
    docs: {
      description: { component: "HTML-примеров: 6. Источник: [Join](https://daisyui.com/components/join/) daisyUI 5.7.46. Исходный HTML хранится в core/components/layout/join." },
    },
  },
};

export const Example01 = {
  name: "Join",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Group items vertically",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Responsive: it's vertical on small screen and horizontal on large screen",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "With extra elements in the group",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Custom border radius",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Join radio inputs with btn style",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};
