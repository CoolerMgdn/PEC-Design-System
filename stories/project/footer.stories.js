import footer from '../../../core/project-components/footer/01-footer.html?raw';
import full from '../../../core/project-components/footer/02-full.html?raw';
import logo from '../../../core/project-components/footer/assets/logo-dark.svg?url';
import support from '../../../core/project-components/footer/assets/support_footer.svg?url';
import flag from '../../../core/project-components/footer/assets/us_flag.svg?url';
import appStore from '../../../core/project-components/footer/assets/app_store.svg?url';
import googlePlay from '../../../core/project-components/footer/assets/google-play.svg?url';
import appGallery from '../../../core/project-components/footer/assets/app-gallery.svg?url';
import ruStore from '../../../core/project-components/footer/assets/rustore.svg?url';

const assets = {
  'logo-dark.svg': logo,
  'support_footer.svg': support,
  'us_flag.svg': flag,
  'app_store.svg': appStore,
  'google-play.svg': googlePlay,
  'app-gallery.svg': appGallery,
  'rustore.svg': ruStore,
};

const withAssets = (source) => Object.entries(assets).reduce(
  (html, [filename, url]) => html.replaceAll(`/core/project-components/footer/assets/${filename}`, url),
  source,
);

export default {
  title: 'Наши компоненты/Footer',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'project-footer' },
    docs: {
      description: {
        component: [
          'Подвал сайта. Источник — `core/project-components/footer`.',
          'Prototype — временный прототип, основной для страниц: ссылки и кнопки не дорабатываются (см. `docs/page-build.md`, «Прототипные Header и Footer»).',
          'Full — по макету Figma: те же ссылки и реквизиты, что в прототипе; на мобильных сверху кнопка «Меню сайта» (светлая `btn` во всю ширину, вместо колонок ссылок), блок приложений над копирайтом, логотип скрыт; нижняя полоса темнее (`bg-black/20`), логотип в ней приглушён (`opacity-20`). Поля страницы — `px-4`. Соцсети — как в прототипе (MAX вместо WhatsApp из макета).',
        ].join('\n\n'),
      },
    },
  },
};

export const Prototype = {
  name: 'Prototype',
  render: () => withAssets(footer),
  parameters: { docs: { source: { code: footer } } },
};

export const Full = {
  name: 'Full',
  render: () => withAssets(full),
  parameters: { docs: { source: { code: full } } },
};
