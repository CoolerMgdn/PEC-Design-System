import selectable from '../../../core/project-components/table/01-selectable.html?raw';
import priceList from '../../../core/project-components/table/02-price-list.html?raw';
import keyValue from '../../../core/project-components/table/03-key-value.html?raw';
import tariffs from '../../../core/project-components/table/04-tariffs.html?raw';
import tiers from '../../../core/project-components/table/05-tiers.html?raw';
import rich from '../../../core/project-components/table/06-rich.html?raw';
import stacked from '../../../core/project-components/table/07-stacked.html?raw';

export default {
  title: 'Молекулы/Table',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-table' },
    docs: {
      description: {
        component: [
          'Таблицы daisyUI `table` в обёртке `overflow-x-auto` для узких экранов. Источник — `core/project-components/table`.',
          'Шапка — `thead.bg-base-200 text-base-content`; наведение строки — `hover:bg-base-200`; выбранная строка — `bg-base-200`; недоступная — `text-neutral-400` и `disabled` у чекбокса. Выбор — Checkbox `checkbox-primary checkbox-sm` с `aria-label`. Суммы — `text-right`.',
          'Прайс — двухколоночная таблица с заголовками строк `th.font-normal`; старая цена — `line-through text-neutral-500`, скидка — `badge badge-primary badge-sm`. Название таблицы для экранных дикторов — `caption.sr-only`.',
          'Key-value — «ключ — значение» (статус отправления): `table-sm table-zebra`, ключи — `th.font-normal text-base-content/70`, видимый `caption`, статус — Badge, пояснение — Tooltip. Tariffs — тарифная сетка: единицы измерения в шапке `font-normal text-base-content/60`, суммы `text-right`. Tiers — уровни программы: рамка `rounded-2xl border border-base-300`, колонки разделены `border-r`, текст по центру.',
          'Rich — большая таблица с абзацами и списками в ячейках (`*:align-top` у строк), маркеры-квадраты как в Text. Stacked — мобильный вид строки таблицы: `dl`, подпись `text-xs text-base-content/70` над значением, разделители `divide-y`.',
        ].join('\n\n'),
      },
    },
  },
};

export const Selectable = {
  name: 'Selectable',
  render: () => selectable,
  parameters: { docs: { source: { code: selectable } } },
};

export const PriceList = {
  name: 'Price list',
  render: () => priceList,
  parameters: { docs: { source: { code: priceList } } },
};

export const KeyValue = { name: 'Key-value', render: () => keyValue, parameters: { docs: { source: { code: keyValue } } } };
export const Tariffs = { name: 'Tariffs', render: () => tariffs, parameters: { docs: { source: { code: tariffs } } } };
export const Tiers = { name: 'Tiers', render: () => tiers, parameters: { docs: { source: { code: tiers } } } };
export const Rich = { name: 'Rich', render: () => rich, parameters: { docs: { source: { code: rich } } } };
export const Stacked = { name: 'Stacked', render: () => stacked, parameters: { docs: { source: { code: stacked } } } };
