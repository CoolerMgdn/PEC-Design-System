import inline from '../../../core/project-components/features/01-inline.html?raw';
import stats from '../../../core/project-components/features/02-stats.html?raw';
import list from '../../../core/project-components/features/03-list.html?raw';
import instructions from '../../../core/project-components/features/04-instructions.html?raw';
import panel from '../../../core/project-components/features/05-panel.html?raw';
import services from '../../../core/project-components/features/06-services.html?raw';
import tags from '../../../core/project-components/features/07-tags.html?raw';
import withImage from '../../../core/project-components/features/08-with-image.html?raw';
import { fillDemoImage } from './demo-image.js';

export default {
  title: 'Организмы/Features',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'organism-features' },
    docs: {
      description: {
        component: [
          'Тексты с иконками: преимущества, цифры, услуги и инструкции. Источник — `core/project-components/features`. Иконка — Iconsax Linear в круге `rounded-full bg-base-200 text-secondary` (`size-12` + иконка `size-6`, крупно — `size-14` + `size-7`) или Bold в квадрате `size-11 rounded-lg bg-secondary/10 text-secondary`.',
          'Inline — иконка и короткий текст в сетке `sm:grid-cols-2 lg:grid-cols-3`. Stats — цифра `text-xl font-medium` и подпись `text-sm text-base-content/70`; цифры берутся только из подтверждённых материалов. List — иконка, заголовок `text-lg font-medium` и описание. Instructions — карточки `rounded-2xl shadow-card` с полосой `bg-secondary` и белой иконкой слева, ссылки внутри текста — `link link-secondary font-medium`.',
          'Panel — услуги в серой панели `rounded-2xl bg-base-200`, карточки `rounded-xl bg-base-100 p-5`. Services — список услуг в серых плашках `rounded-2xl bg-base-200 p-5`. Tags — панель с метками `rounded-full bg-base-100 px-3 py-2 text-sm` и иконкой (например, «Дополнительные услуги»). Services и Tags можно ставить рядом в сетке `lg:grid-cols-2`. With image — фото и преимущества в серых плашках с иконкой `tick-circle` `text-success` в белом квадрате.',
        ].join('\n\n'),
      },
    },
  },
};

export const Inline = { name: 'Inline', render: () => inline, parameters: { docs: { source: { code: inline } } } };
export const Stats = { name: 'Stats', render: () => stats, parameters: { docs: { source: { code: stats } } } };
export const List = { name: 'List', render: () => list, parameters: { docs: { source: { code: list } } } };
export const Instructions = { name: 'Instructions', render: () => instructions, parameters: { docs: { source: { code: instructions } } } };
export const Panel = { name: 'Panel', render: () => panel, parameters: { docs: { source: { code: panel } } } };
export const Services = { name: 'Services', render: () => services, parameters: { docs: { source: { code: services } } } };
export const Tags = { name: 'Tags', render: () => tags, parameters: { docs: { source: { code: tags } } } };
export const WithImage = { name: 'With image', render: () => fillDemoImage(withImage, '(min-width: 64rem) 31rem, calc(100vw - 2rem)'), parameters: { docs: { source: { code: withImage } } } };
