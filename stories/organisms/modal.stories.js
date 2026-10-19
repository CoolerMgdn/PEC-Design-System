import form from '../../../core/project-components/modal/01-form.html?raw';
import result from '../../../core/project-components/modal/02-result.html?raw';
import important from '../../../core/project-components/modal/03-important.html?raw';
import conditional from '../../../core/project-components/modal/04-conditional.html?raw';
import documentHtml from '../../../core/project-components/modal/05-document.html?raw';

export default {
  title: 'Организмы/Modal',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'organism-modal' },
    docs: {
      description: {
        component: [
          'Модальные окна на нативном `dialog` с классами `modal` и `modal-box` daisyUI. Источник — `core/project-components/modal`. Откройте окно кнопкой в примере.',
          'Открытие и закрытие без JavaScript: у кнопки `commandfor="<id окна>"` и `command="show-modal"` / `command="close"` (Invoker Commands; для старых браузеров страница может добавить вызов `showModal()`). Закрытие кликом по фону — `form.modal-backdrop` с `method="dialog"`, клавишей Escape — штатно. Окно получает `aria-labelledby` с id заголовка. Затенение — `neutral` 70% (тема ПЭК).',
          'На мобильных окна открываются шторкой снизу, как Drawer: `dialog.modal.modal-bottom md:modal-middle`, у окна `rounded-t-3xl md:rounded-2xl` и ручка `span.h-1.w-10.rounded-full.bg-base-300.md:hidden` (`aria-hidden`). Исключение — Important: важное предупреждение всегда по центру.',
          'Окно — `modal-box rounded-2xl p-6 md:p-8`, крестик — `btn btn-ghost btn-sm btn-square absolute top-3 right-3` с иконкой `add rotate-45` и `aria-label="Закрыть"`. Form — ФОС в окне; Result — успех (`tick-circle text-success`) или ошибка (`close-circle text-error`) по центру.',
          'Important — важное уведомление, закрывается только кнопкой: без крестика и фона-закрывашки, у `dialog` атрибут `closedby="none"` (Escape и клик вне окна не закрывают). Conditional — поля появляются при отметке чекбокса без скрипта: обёртка `group`, блок `hidden group-has-checked:flex`; кнопки «Принять» (`btn-primary`) и «Отменить» (`btn-outline btn-secondary`).',
          'Document — текст документа (политика обработки персональных данных) по ссылке у чекбокса согласия: `modal-box flex max-w-2xl flex-col overflow-hidden p-0`; шапка и низ закреплены (`shrink-0`), прокручивается только тело `min-h-0 grow overflow-y-auto` (`tabindex="0"` и `aria-label` — для прокрутки с клавиатуры); кнопка «Принять» закрывает окно.',
        ].join('\n\n'),
      },
    },
  },
};

export const Form = { name: 'Form', render: () => form, parameters: { docs: { source: { code: form } } } };
export const Result = { name: 'Result', render: () => result, parameters: { docs: { source: { code: result } } } };
export const Important = { name: 'Important', render: () => important, parameters: { docs: { source: { code: important } } } };
export const Conditional = { name: 'Conditional', render: () => conditional, parameters: { docs: { source: { code: conditional } } } };
export const Document = { name: 'Document', render: () => documentHtml, parameters: { docs: { source: { code: documentHtml } } } };
