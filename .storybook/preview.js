import '../../core/fonts.min.css';
import '../../core/ui.min.css';
import '../../core/tokens.min.css';
import { catalogPreview } from '../preview/catalog.js';

// Let Dock account for iOS safe areas inside its Storybook iframe.
const viewport = document.querySelector('meta[name="viewport"]');
if (viewport && !viewport.content.includes('viewport-fit=')) {
  viewport.content += ', viewport-fit=cover';
}

/** @type {import('@storybook/html-vite').Preview} */
export default {
  decorators: [catalogPreview],
  parameters: {
    layout: 'fullscreen',
    options: {
      storySort: {
        order: [
          'Дизайн-система', ['Введение'],
          'Основы', ['Цвета', 'Типографика', 'Сетка и отступы', 'Скругления', 'Тени', 'Иконки'],
          'Атомы', ['Button', 'Link', 'Chip', 'Badge', 'Checkbox', 'Radio', 'Toggle', 'Input', 'Select', 'Textarea', 'Range'],
          'Молекулы', ['Breadcrumbs', 'Alert', 'Toast', 'Collapse', 'Tabs', 'Tooltip', 'Popover', 'Table', 'Radio Card', 'Download', 'Dropdown', 'Pagination', 'Join', 'File Input', 'Timeline', 'Progress', 'Carousel', 'Calendar'],
          'Организмы', ['Hero', 'Card', 'Features', 'Process', 'News', 'Text', 'Form', 'Calculator', 'Modal', 'Drawer', 'Loading'],
          'Наши компоненты', ['Container', 'Image', 'Header', 'Footer', 'Page'],
          'Примеры',
          'Справочник daisyUI', [
            'Actions', ['Button', 'Dropdown', 'FAB — Speed Dial', 'Modal', 'Swap', 'Theme Controller'],
            'Data display', ['Accordion', 'Avatar', 'Aura', 'Badge', 'Card', 'Carousel', 'Chat bubble', 'Collapse', 'Countdown', 'Diff', 'Hover 3D card', 'Hover Gallery', 'Kbd', 'List', 'Stat', 'Status', 'Table', 'Text Rotate', 'Timeline'],
            'Navigation', ['Breadcrumbs', 'Dock', 'Link', 'Megamenu', 'Menu', 'Navbar', 'Pagination', 'Steps', 'Tabs'],
            'Feedback', ['Alert', 'Loading', 'Progress', 'Radial progress', 'Skeleton', 'Toast', 'Tooltip'],
            'Data input', ['Calendar', 'Checkbox', 'Fieldset', 'File Input', 'Filter', 'Label', 'Radio', 'Range', 'Rating', 'Select', 'Input', 'Textarea', 'Toggle', 'Validator', 'OTP'],
            'Layout', ['Divider', 'Drawer', 'Footer', 'Hero', 'Indicator', 'Join', 'Mask', 'Stack'],
            'Mockup', ['Browser', 'Code', 'Phone', 'Window'],
          ],
        ],
      },
    },
    docs: {
      codePanel: true,
      story: { inline: false, iframeHeight: 520 },
      source: {
        language: 'html',
        type: 'code',
      },
    },
  },
};
