import select from '../../../core/project-components/select/01-select.html?raw';
import native from '../../../core/project-components/select/02-native.html?raw';
import combobox from '../../../core/project-components/select/03-combobox.html?raw';
import withIcon from '../../../core/project-components/select/04-with-icon.html?raw';
import multiple from '../../../core/project-components/select/05-multiple.html?raw';
import clearable from '../../../core/project-components/select/06-clearable.html?raw';

export default {
  title: 'Атомы/Select',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'atom-select' },
    docs: {
      description: {
        component: [
          'Выпадающий список daisyUI `select` на основе нативного `select`. Источник — `core/project-components/select`.',
          'Наведение, фокус и раскрытое состояние — как у Input (тема ПЭК). Первый пункт-подсказка — `option value="" disabled selected`. Ошибка — `select-error`, `aria-invalid="true"` и текст `label text-error`.',
          'Раскрытый список повторяет эталон Dropdown (тема ПЭК; браузеры с `appearance: base-select`, в остальных — системный): скругление 8 px, рамка `base-300`, тень карточки, без галочек; наведение — серый фон, выбранный пункт — синий текст на светло-синей подложке, нажатый — заливка `secondary`.',
          'Native — системный список устройства: класс `appearance-none`. Для длинных списков и мобильных форм, где привычнее системное колесо выбора.',
          'Combobox — селект с вводом текста (поиск по длинному списку, например городов). Паттерн WAI-ARIA Combobox: `label.input` с `input[role=combobox]` (`aria-expanded`, `aria-controls`, `aria-autocomplete="list"`, `aria-activedescendant`), список `ul.menu[role=listbox]` в оформлении эталона Dropdown (`rounded-lg border border-base-300 p-2 shadow-card`, `max-h-60 overflow-y-auto`). Пункт `role="option"`: выбранный — `aria-selected:bg-secondary/10 aria-selected:text-secondary`, подсвеченный с клавиатуры — `data-active:bg-base-200`; «Ничего не найдено» — `data-combobox-empty`. Фильтр, ↑ ↓ Enter и Escape — скрипт страницы (в витрине — демонстрационный).',
          'With icon — иконка в начале селекта: `label.select` с Iconsax `size-5 opacity-60` и `select` внутри (стили daisyUI для вложенного select); для поля с вводом — `label.input` в Combobox. Стрелка у Select и Combobox одинаковая — шеврон `arrow-down-1`, у открытого списка повёрнут вверх (тема ПЭК для Select, `group-has-aria-expanded:rotate-180` для Combobox).',
          'Multiple — Combobox с множественным выбором: `[data-combobox-multiple]`, список `aria-multiselectable="true"`, выбранные пункты отмечены `tick-circle` и показаны чипсами в поле (шаблон `template[data-combobox-chip]`, крестик с `aria-label="Убрать: …"`); список не закрывается после выбора, Backspace в пустом поле убирает последний; значение — в скрытом поле через «;».',
          'Clearable — очистка выбранного: у Combobox — та же кнопка, что у Input (`peer-placeholder-shown:hidden`); у обычного селекта кнопка стоит поверх поля слева от стрелки (`absolute right-8`, у селекта `pr-16`) и показывается скриптом, пока выбрано значение (`select[data-clearable]`). Очистка возвращает пункт-подсказку `value=""`.',
        ].join('\n\n'),
      },
    },
  },
};

export const States = {
  name: 'States',
  render: () => select,
  parameters: { docs: { source: { code: select } } },
};

export const Native = {
  name: 'Native',
  render: () => native,
  parameters: { docs: { source: { code: native } } },
};

export const Combobox = {
  name: 'Combobox',
  render: () => combobox,
  parameters: { docs: { source: { code: combobox } } },
};

export const WithIcon = {
  name: 'With icon',
  render: () => withIcon,
  parameters: { docs: { source: { code: withIcon } } },
};

export const Multiple = {
  name: 'Multiple',
  render: () => multiple,
  parameters: { docs: { source: { code: multiple } } },
};

export const Clearable = {
  name: 'Clearable',
  render: () => clearable,
  parameters: { docs: { source: { code: clearable } } },
};
