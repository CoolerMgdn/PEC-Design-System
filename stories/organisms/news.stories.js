import cards from '../../../core/project-components/news/01-cards.html?raw';
import list from '../../../core/project-components/news/02-list.html?raw';
import panel from '../../../core/project-components/news/03-panel.html?raw';
import { fillDemoImage } from './demo-image.js';

export default {
  title: 'Организмы/News',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'organism-news' },
    docs: {
      description: {
        component: [
          'Блок новостей. Источник — `core/project-components/news`.',
          'Cards — карточки `card rounded-2xl border border-base-300 hover:shadow-card`: дата `time` (`text-xs text-base-content/70`), заголовок `h3 text-base font-medium`, анонс `text-sm`, ссылка «Читать полностью» — `link link-secondary` с `arrow-right`. Для публикаций в СМИ над заголовком — источник и дата.',
          'Panel — блок «Новости» из «Вариантов блоков для страниц»: панель `rounded-2xl bg-base-200` с заголовком и ссылкой «Все новости», карточки `rounded-xl bg-base-100 p-3` с фото `aspect-video rounded-lg` (компонент Image, `alt=""` — фото иллюстративное), датой и ссылкой; сетка `sm:grid-cols-2 lg:grid-cols-4`.',
          'List — та же новость без карточки, список с разделителями `divide-y divide-base-300`.',
        ].join('\n\n'),
      },
    },
  },
};

export const Cards = { name: 'Cards', render: () => cards, parameters: { docs: { source: { code: cards } } } };
export const List = { name: 'List', render: () => list, parameters: { docs: { source: { code: list } } } };
export const Panel = { name: 'Panel', render: () => fillDemoImage(panel, '(min-width: 64rem) 14rem, 16rem'), parameters: { docs: { source: { code: panel } } } };
