import roles from '../../../core/project-components/alert/01-roles.html?raw';
import withTitle from '../../../core/project-components/alert/02-with-title.html?raw';
import outline from '../../../core/project-components/alert/03-outline-and-solid.html?raw';
import inline from '../../../core/project-components/alert/04-inline-and-note.html?raw';
import dismissible from '../../../core/project-components/alert/05-dismissible.html?raw';
import actions from '../../../core/project-components/alert/06-actions.html?raw';

export default {
  title: 'Молекулы/Alert',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-alert' },
    docs: {
      description: {
        component: [
          'Сообщения и уведомления на основе `alert` daisyUI. Источник — `core/project-components/alert`.',
          'Светлые `alert-soft` — основной вид; контурные `alert-outline` — для компактных уведомлений; сплошной `alert-error` — для критичной ошибки формы; нейтральный — `alert bg-base-200`. У светлых и контурных текст основной, цвет роли — только у иконки Iconsax (тема ПЭК). Скругление алертов — 12 px (`--radius-xl`, тема ПЭК), классы радиуса не нужны.',
          'Иконки: info — `info-circle`, success — `tick-circle`, warning — `danger`, error — `close-circle` или `info-circle`. Заголовок внутри алерта — абзац `font-semibold`, а не `h*`, чтобы не нарушать иерархию страницы.',
          'Роль: `role="alert"` — только для ошибок, требующих немедленного внимания; для остальных — `role="status"` или `role="note"`. Заметка с линией слева — `border-l-4 border-warning pl-4`.',
          'Закрытие — последняя в алерте кнопка `btn btn-ghost btn-sm btn-square` с иконкой `add` и `rotate-45`, `aria-label="Закрыть уведомление"` и `data-dismiss="alert"`; скрывает алерт скрипт страницы. Раскладка — `alert-horizontal`: текст растягивается, кнопка прижата вправо.',
          'Действия — `alert-vertical items-center sm:alert-horizontal`: на мобильных кнопки под текстом, на десктопе выровнены по центру. Кнопки в алертах и тостах — без заливки: основное действие — `btn btn-sm btn-outline btn-secondary` с глаголом по смыслу («Включить», «Переподключиться», «Добавить», «Повторить»), второстепенное — `btn-ghost`; не больше двух кнопок и закрытия.',
        ].join('\n\n'),
      },
    },
  },
};

export const Colors = {
  name: 'Colors',
  render: () => roles,
  parameters: { docs: { source: { code: roles } } },
};

export const WithTitle = {
  name: 'With title',
  render: () => withTitle,
  parameters: { docs: { source: { code: withTitle } } },
};

export const SolidAndOutline = {
  name: 'Solid and outline',
  render: () => outline,
  parameters: { docs: { source: { code: outline } } },
};

export const InlineAndNote = {
  name: 'Inline and note',
  render: () => inline,
  parameters: { docs: { source: { code: inline } } },
};

export const Dismissible = {
  name: 'Dismissible',
  render: () => dismissible,
  parameters: { docs: { source: { code: dismissible } } },
};

export const WithActions = {
  name: 'With actions',
  render: () => actions,
  parameters: { docs: { source: { code: actions } } },
};
