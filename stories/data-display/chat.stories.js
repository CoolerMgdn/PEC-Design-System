import example1 from '../../../core/components/data-display/chat/01-chat-start-and-chat-end.html?raw';
import example2 from '../../../core/components/data-display/chat/02-chat-with-image.html?raw';
import example3 from '../../../core/components/data-display/chat/03-chat-with-image-header-and-footer.html?raw';
import example4 from '../../../core/components/data-display/chat/04-chat-with-header-and-footer.html?raw';
import example5 from '../../../core/components/data-display/chat/05-chat-bubble-with-colors.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Chat bubble",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "chat" },
    docs: {
      description: { component: "HTML-примеров: 5. Источник: [Chat bubble](https://daisyui.com/components/chat/) daisyUI. Исходный HTML хранится в core/components/data-display/chat." },
    },
  },
};

export const Example01 = {
  name: "chat-start and chat-end",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Chat with image",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Chat with image, header and footer",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Chat with header and footer",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Chat Bubble with colors",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};
