import dropdown from '../../../core/project-components/dropdown/01-dropdown.html?raw';
import navigation from '../../../core/project-components/dropdown/02-navigation.html?raw';
import grouped from '../../../core/project-components/dropdown/03-grouped.html?raw';

export default {
  title: 'Молекулы/Dropdown',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-dropdown' },
    docs: {
      description: {
        component: [
          'Выпадающий список на основе `dropdown` и `menu` daisyUI — эталон выпадающего списка системы (так же выглядит раскрытый Select). Открывается по фокусу, без JS. Источник — `core/project-components/dropdown`.',
          'Обёртка — `dropdown group`; триггер — элемент с `tabindex="0"` и `role="button"`, иконка `arrow-down-1` поворачивается классом `group-focus-within:rotate-180`. Список — `dropdown-content menu w-64 rounded-lg border border-base-300 bg-base-100 p-2 shadow-card` с `tabindex="-1"`.',
          'Пункты — штатные `li > a` daisyUI: наведение — серый фон; выбранный пункт (`aria-current`) — синий текст на светло-синей подложке; нажатие — заливка `secondary` (тема ПЭК, у daisyUI — чёрная). Недоступный — `li.menu-disabled`. Иконки — Iconsax Linear `size-5 text-secondary`.',
          'Default — триггер-кнопка для действий и выбора; Navigation — текстовый триггер для меню шапки, по наведению — `dropdown-hover`. В примерах список открыт классом `dropdown-open`; на странице его не ставят. Для значения поля формы используйте Select.',
          'Grouped — пункты с пояснением (`a.flex.flex-col.items-start` и вторая строка `text-xs text-base-content/70`), заголовки групп `li.menu-title text-xs font-normal text-base-content/70` и разделитель между группами `li.my-1.h-px.bg-base-300[role=separator]` — по желанию: в примере слева он есть, справа группы разделены только заголовками. Заголовок можно использовать и для поясняющего текста над вариантами.',
        ].join('\n\n'),
      },
    },
  },
};

export const Default = {
  name: 'Default',
  render: () => dropdown,
  parameters: { docs: { source: { code: dropdown } } },
};

export const Navigation = {
  name: 'Navigation',
  render: () => navigation,
  parameters: { docs: { source: { code: navigation } } },
};

export const Grouped = {
  name: 'Grouped',
  render: () => `<div class="grid min-h-96 w-full max-w-3xl items-start gap-8 sm:grid-cols-2">${grouped}</div>`,
  parameters: { docs: { source: { code: grouped } } },
};
