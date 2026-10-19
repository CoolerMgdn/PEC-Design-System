import date from '../../../core/project-components/calendar/01-date.html?raw';
import range from '../../../core/project-components/calendar/02-range.html?raw';
import compact from '../../../core/project-components/calendar/03-compact.html?raw';
import field from '../../../core/project-components/calendar/04-field.html?raw';

export default {
  title: 'Молекулы/Calendar',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-calendar' },
    docs: {
      description: {
        component: [
          'Календарь на веб-компонентах Cally (`calendar-date`, `calendar-range`) с классом `cally`, который стилизует daisyUI. Источник — `core/project-components/calendar`. На странице Cally подключается её скриптом (пакет `cally`).',
          'Карточка — `rounded-lg border border-base-300 bg-base-100 p-4 shadow-card`, как у Dropdown. Атрибуты календаря — `locale="ru-RU"` и `first-day-of-week="1"`; значение — `value` в формате ГГГГ-ММ-ДД (период — через `/`), показанный месяц — `focused-date`.',
          'Шапка как в макете: обёртка `data-calendar`, стрелки `btn btn-ghost btn-sm btn-square` (`arrow-left-1`/`arrow-right-1`, `data-calendar-prev`/`-next`), месяц и год — `select select-sm w-auto` (`data-calendar-month`/`-year`); собственная шапка Cally скрыта темой. Связь шапки с календарём (`focusedDate`, событие `focusday`) — скрипт страницы.',
          'Compact — без селектов: стрелки и подпись «Месяц ГГГГ» по центру (`p.text-sm.font-medium` с `data-calendar-label` и `aria-live="polite"`), подпись обновляет скрипт страницы.',
          'Дни (тема ПЭК): сегодня — подчёркивание `secondary`, выбранный день и концы периода — заливка `secondary`, дни внутри периода — серая полоса `base-300`, наведение — серый фон, недоступные (`min`/`max`, `isDateDisallowed`) — бледные, дни соседних месяцев скрыты; дни недели — с заглавной буквы и без наведения.',
          'Field — поле даты или периода: `dropdown` + `label.input` с иконкой `calendar` и календарём в `dropdown-content`; список открывается при фокусе или клике по полю и закрывается кликом вне поля, Escape или выбором даты (классы `dropdown-open`/`dropdown-close` ставит скрипт — раскрытые селекты месяца и года календарь не закрывают); после выбора скрипт записывает дату `ДД.ММ.ГГГГ` (период — через « — ») и закрывает список.',
        ].join('\n\n'),
      },
    },
  },
};

export const SingleDate = {
  name: 'Date',
  render: () => date,
  parameters: { docs: { source: { code: date } } },
};

export const Range = {
  name: 'Range',
  render: () => range,
  parameters: { docs: { source: { code: range } } },
};

export const Compact = {
  name: 'Compact',
  render: () => compact,
  parameters: { docs: { source: { code: compact } } },
};

export const Field = {
  name: 'Field',
  render: () => field,
  parameters: { docs: { source: { code: field } } },
};
