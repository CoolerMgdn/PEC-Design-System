import simple from '../../../core/project-components/card/01-simple.html?raw';
import steps from '../../../core/project-components/card/02-steps.html?raw';
import service from '../../../core/project-components/card/03-service.html?raw';
import product from '../../../core/project-components/card/04-product.html?raw';
import feature from '../../../core/project-components/card/05-feature.html?raw';
import link from '../../../core/project-components/card/06-link.html?raw';
import { fillDemoImage } from './demo-image.js';

const featurePreview = fillDemoImage(feature, '(min-width: 48rem) 48rem, calc(100vw - 2rem)');

export default {
  title: 'Организмы/Card',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'organism-card' },
    docs: {
      description: {
        component: [
          'Карточки на основе `card` daisyUI. Источник — `core/project-components/card`.',
          'Простая — `card rounded-2xl border border-base-300 bg-base-100` + `card-body p-6`; заголовок `card-title text-lg font-medium text-secondary`, текст `text-sm leading-relaxed`. Иконка — Iconsax в круге `rounded-full bg-base-200 text-secondary` (фирменные иллюстрации ПЭК не используются). Ссылка «Узнать больше» — `link link-secondary` с `arrow-right`; кликабельная карточка — тень при наведении `hover:shadow-card`.',
          'Шаги — `card rounded-2xl shadow-card` без рамки, содержимое по центру, список `ol`. Товар — название, размеры `text-xs text-base-content/70`, цена `text-xl font-semibold text-secondary`, справка — Tooltip. Сложная — изображение (компонент Image, параметры `{{IMAGE_*}}` заполняются на странице), список с тире и кнопки.',
          'Link — карточка-ссылка «Полезная информация»: `a.group` `rounded-2xl border border-base-300 p-5 hover:border-secondary`, иконка в `size-11 rounded-lg bg-base-200`, справа стрелка `arrow-right-1` в `size-6 rounded-md border`, при наведении — синяя.',
          'Заголовок карточки — `h3` (уровень подбирается по структуре страницы).',
        ].join('\n\n'),
      },
    },
  },
};

export const Simple = { name: 'Simple', render: () => simple, parameters: { docs: { source: { code: simple } } } };
export const Numbered = { name: 'Numbered', render: () => steps, parameters: { docs: { source: { code: steps } } } };
export const Service = { name: 'Service', render: () => service, parameters: { docs: { source: { code: service } } } };
export const Product = { name: 'Product', render: () => product, parameters: { docs: { source: { code: product } } } };
export const Feature = { name: 'Feature', render: () => featurePreview, parameters: { docs: { source: { code: feature } } } };
export const Link = { name: 'Link', render: () => link, parameters: { docs: { source: { code: link } } } };
