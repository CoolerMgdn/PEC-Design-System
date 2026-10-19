import breadcrumbs from '../../../core/project-components/breadcrumbs/01-default.html?raw';
import onDark from '../../../core/project-components/breadcrumbs/02-on-dark.html?raw';

export default {
  title: 'Молекулы/Breadcrumbs',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-breadcrumbs' },
    docs: {
      description: {
        component: [
          'Хлебные крошки по макету (Figma «Breadcrumbs», Hero). Источник — `core/project-components/breadcrumbs`. Свой список вместо класса `breadcrumbs` daisyUI: в мобильном виде пункты идут столбиком, а разделитель стоит в конце строки после ссылки, как в макете.',
          'Разметка: `nav[aria-label="Хлебные крошки"]` > `ol.flex.flex-wrap.items-center.gap-x-2.gap-y-1` — на мобильных `max-sm:flex-col max-sm:items-start max-sm:gap-4`; пункт `li.flex.items-center.gap-2` со ссылкой и шевроном Iconsax `arrow-right-1` (`size-4`, декоративный); текущая страница — `span[aria-current="page"]` без ссылки. Текст `text-sm`.',
          'Default — на светлом фоне, наведение `hover:text-primary`. On dark — на фото и тёмном фоне (Hero): цвет наследуется от секции (`text-neutral-content`), наведение — подчёркивание.',
        ].join('\n\n'),
      },
    },
  },
};

export const Default = { name: 'Default', render: () => breadcrumbs, parameters: { docs: { source: { code: breadcrumbs } } } };
export const OnDark = {
  name: 'On dark',
  render: () => `<div class="rounded-2xl bg-neutral p-4 text-neutral-content">${onDark}</div>`,
  parameters: { docs: { source: { code: onDark } } },
};
