import header from '../../../core/project-components/header/01-header.html?raw';
import full from '../../../core/project-components/header/02-full.html?raw';
import logo from '../../../core/project-components/header/assets/logo.svg?url';

const withLogo = (html) => html.replaceAll('/core/project-components/header/assets/logo.svg', logo);

export default {
  title: 'Наши компоненты/Header',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'project-header' },
    docs: {
      description: {
        component: [
          'Шапка сайта. Источник — `core/project-components/header`.',
          'Prototype — временный прототип, основной для страниц: его кнопки и ссылки не дорабатываются (см. `docs/page-build.md`, «Прототипные Header и Footer»).',
          'Full — шапка по макету Figma («Основные компоненты»), отдельный вариант. С `xl` — одна строка: логотип, направления (`text-xs`), город, «Связаться с нами», поиск, «Войти»; ниже — основное меню с кнопкой «Меню сайта» (`element-3`) и красной ссылкой «Акции». С `md` до `xl` направления — отдельной строкой сверху, в меню часть пунктов уходит под «Ещё» (`more`). На мобильных — логотип и пять кнопок-иконок с `aria-label`: расчёт, отслеживание, оплата, связь, меню. Иконки — Iconsax; адреса ссылок — как в прототипе Footer (маршруты основного сайта), у «Тарифов» и «Войти» маршрута нет — заглушка `#`. Обработчики кнопок (город, меню, поиск) — скрипт страницы.',
        ].join('\n\n'),
      },
    },
  },
};

export const Prototype = {
  name: 'Prototype',
  render: () => withLogo(header),
  parameters: { docs: { source: { code: header } } },
};

export const Full = {
  name: 'Full',
  render: () => withLogo(full),
  parameters: { docs: { source: { code: full } } },
};
