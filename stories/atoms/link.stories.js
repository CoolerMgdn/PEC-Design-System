import textLinks from '../../../core/project-components/link/01-text-links.html?raw';
import standalone from '../../../core/project-components/link/02-standalone-links.html?raw';
import term from '../../../core/project-components/link/03-term-tooltip.html?raw';

export default {
  title: 'Атомы/Link',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'atom-link' },
    docs: {
      description: {
        component: [
          'Источник — `core/project-components/link`. Правила — `docs/rules-template.md#ссылки`.',
          'Ссылки без подчёркивания (тема ПЭК в `core/theme.css`), их выделяют цвет и смена цвета при наведении: `link link-secondary hover:text-primary`, `link link-primary hover:text-secondary`, второстепенная — `link text-neutral-500 hover:text-base-content`. Обычная `link` наследует цвет текста.',
          'Ссылка с иконкой — те же классы плюс `inline-flex items-center gap-2` и иконка Iconsax `size-4` (`size-5` для текста 16 px).',
          'Термин с пояснением — не ссылка, а кнопка с пунктирным подчёркиванием `underline decoration-dotted` внутри `tooltip`.',
        ].join('\n\n'),
      },
    },
  },
};

export const TextLinks = {
  name: 'Text links',
  render: () => textLinks,
  parameters: { docs: { source: { code: textLinks } } },
};

export const Standalone = {
  name: 'Standalone links',
  render: () => standalone,
  parameters: { docs: { source: { code: standalone } } },
};

export const Term = {
  name: 'Term with tooltip',
  render: () => term,
  parameters: { docs: { source: { code: term } } },
};
