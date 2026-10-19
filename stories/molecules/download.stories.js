import list from '../../../core/project-components/download/01-list.html?raw';
import types from '../../../core/project-components/download/02-types.html?raw';
import single from '../../../core/project-components/download/03-single.html?raw';
import cards from '../../../core/project-components/download/04-cards.html?raw';
import icon from '../../../core/project-components/download/05-icon.html?raw';
import { fillFileIcons } from './file-icons.js';
import cardsCompact from '../../../core/project-components/download/06-cards-compact.html?raw';

export default {
  title: 'Молекулы/Download',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-download' },
    docs: {
      description: {
        component: [
          'Ссылки на файлы для скачивания. Источник — `core/project-components/download`.',
          'Иконки типов файлов — из макета (компонент `icon-document`), а не Iconsax: `core/icons/files/<тип>.svg` — `excel`, `word`, `pdf`, `image`, `zip`. Подключаются `img.size-6.shrink-0` с пустым `alt` (тип файла назван в подписи).',
          'Ссылка — `a.group` с атрибутом `download`, название `text-secondary group-hover:text-primary`, тип и размер — `text-xs text-base-content/70` (серый из макета не проходит по контрасту).',
          'List — список файлов как в макете: `divide-y divide-base-300 border-b`, отступ строки `py-4 md:py-5`, текст `text-sm md:text-base`. Types — все типы файлов. Single — отдельные ссылки на файл внутри текста, `text-sm`.',
          'Cards — карточки файлов в сетке (`grid sm:grid-cols-2 lg:grid-cols-3`) для раздела документов: карточка `rounded-2xl border border-base-300 p-4 hover:border-secondary`, иконка файла `size-10`, справа значок скачивания `import` на подложке `bg-base-200` (при наведении — `bg-secondary`), декоративный (`aria-hidden`), вся карточка — одна ссылка.',
          'Icon — простой вид без иконок типов: ссылки `text-secondary hover:text-primary` с Iconsax `import` (`size-5`), тип и размер — `text-xs text-base-content/70`; кнопкой — `btn btn-outline btn-secondary` или светлая `btn` с той же иконкой, на мобильных во всю ширину (`max-sm:w-full`).',
          'Cards compact — уменьшенные карточки: `rounded-xl p-3 gap-2`, иконка файла `size-8`, название `text-sm`, значок скачивания `size-8` (`import` `size-4`), сетка до 4 колонок.',
        ].join('\n\n'),
      },
    },
  },
};

export const List = { name: 'List', render: () => fillFileIcons(list), parameters: { docs: { source: { code: list } } } };
export const Types = { name: 'Types', render: () => fillFileIcons(types), parameters: { docs: { source: { code: types } } } };
export const Single = { name: 'Single', render: () => fillFileIcons(single), parameters: { docs: { source: { code: single } } } };
export const Cards = { name: 'Cards', render: () => fillFileIcons(cards), parameters: { docs: { source: { code: cards } } } };
export const Icon = { name: 'Icon', render: () => icon, parameters: { docs: { source: { code: icon } } } };

export const CardsCompact = {
  name: 'Cards compact',
  render: () => fillFileIcons(cardsCompact),
  parameters: { docs: { source: { code: cardsCompact } } },
};
