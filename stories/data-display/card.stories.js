import example1 from '../../../core/components/data-display/card/01-card.html?raw';
import example2 from '../../../core/components/data-display/card/02-pricing-card.html?raw';
import example3 from '../../../core/components/data-display/card/03-card-sizes.html?raw';
import example4 from '../../../core/components/data-display/card/04-card-with-a-card-border.html?raw';
import example5 from '../../../core/components/data-display/card/05-card-with-a-dash-border.html?raw';
import example6 from '../../../core/components/data-display/card/06-card-with-badge.html?raw';
import example7 from '../../../core/components/data-display/card/07-card-with-bottom-image.html?raw';
import example8 from '../../../core/components/data-display/card/08-card-with-centered-content-and-paddings.html?raw';
import example9 from '../../../core/components/data-display/card/09-card-with-image-overlay.html?raw';
import example10 from '../../../core/components/data-display/card/10-card-with-no-image.html?raw';
import example11 from '../../../core/components/data-display/card/11-card-with-custom-color.html?raw';
import example12 from '../../../core/components/data-display/card/12-centered-card-with-neutral-color.html?raw';
import example13 from '../../../core/components/data-display/card/13-card-with-action-on-top.html?raw';
import example14 from '../../../core/components/data-display/card/14-card-with-image-on-side.html?raw';
import example15 from '../../../core/components/data-display/card/15-responsive-card-vertical-on-small-screen-horizontal-on-large-screen.html?raw';
import example16 from '../../../core/components/data-display/card/16-selectable-cards.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Card",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "card" },
    docs: {
      description: { component: "HTML-примеров: 16. Источник: [Card](https://daisyui.com/components/card/) daisyUI. Исходный HTML хранится в core/components/data-display/card." },
    },
  },
};

export const Example01 = {
  name: "Card",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Pricing Card",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Card sizes",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Card with a card-border",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Card with a dash border",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Card with badge",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Card with bottom image",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Card with centered content and paddings",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Card with image overlay",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Card with no image",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Card with custom color",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};

export const Example12 = {
  name: "Centered card with neutral color",
  render: () => example12,
  parameters: { docs: { source: { code: example12 } } },
};

export const Example13 = {
  name: "Card with action on top",
  render: () => example13,
  parameters: { docs: { source: { code: example13 } } },
};

export const Example14 = {
  name: "Card with image on side",
  render: () => example14,
  parameters: { docs: { source: { code: example14 } } },
};

export const Example15 = {
  name: "Responsive card (vertical on small screen, horizontal on large screen)",
  render: () => example15,
  parameters: { docs: { source: { code: example15 } } },
};

export const Example16 = {
  name: "Selectable cards",
  render: () => example16,
  parameters: { docs: { source: { code: example16 } } },
};
