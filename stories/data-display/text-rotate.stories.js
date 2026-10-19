import example1 from '../../../core/components/data-display/text-rotate/01-text-rotate.html?raw';
import example2 from '../../../core/components/data-display/text-rotate/02-rotating-6-words.html?raw';
import example3 from '../../../core/components/data-display/text-rotate/03-rotating-words-in-a-sentence.html?raw';
import example4 from '../../../core/components/data-display/text-rotate/04-rotating-3-words-with-custom-duration.html?raw';
import example5 from '../../../core/components/data-display/text-rotate/05-custom-line-height.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Text Rotate",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "text-rotate" },
    docs: {
      description: { component: "HTML-примеров: 5. Источник: [Text Rotate](https://daisyui.com/components/text-rotate/) daisyUI. Исходный HTML хранится в core/components/data-display/text-rotate." },
    },
  },
};

export const Example01 = {
  name: "Text Rotate",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Rotating 6 words",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Rotating words in a sentence",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Rotating 3 words with custom duration",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Custom line height",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};
