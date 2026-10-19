import lead from '../../../core/project-components/form/01-lead.html?raw';
import errors from '../../../core/project-components/form/02-errors.html?raw';
import success from '../../../core/project-components/form/03-success.html?raw';

export default {
  title: 'Организмы/Form',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'organism-form' },
    docs: {
      description: {
        component: [
          'Форма обратной связи (ФОС) для лендингов. Источник — `core/project-components/form`.',
          'Lead — карточка `rounded-2xl bg-base-100 p-5 shadow-card sm:p-8`: заголовок по центру (`h2`, уровень по структуре страницы), подзаголовок с телефоном, поля с плавающей подписью `floating-label` (подпись видна над заполненным полем), согласия — `checkbox checkbox-primary checkbox-sm` с текстом `text-xs` и ссылками `link link-secondary`, кнопка `btn-primary`. Телефон с выбором страны — вариант Input «Phone with flags».',
          'Адаптив: на мобильных поля в один столбец, отступы карточки меньше, кнопка на всю ширину (`max-sm:w-full`); с `sm` имя и телефон — в два столбца (`sm:grid-cols-2`), остальные поля — на всю ширину (`sm:col-span-2`).',
          'Errors — ошибки полей: `input-error`, `aria-invalid="true"` и текст `label text-error` (4 px от поля) с `aria-describedby`; ошибка согласия — текст под чекбоксом; ошибка отправки — нейтральный `alert` с иконкой `info-circle text-error` и `role="alert"`.',
          'Success — после отправки форма заменяется сообщением (иконка `tick-circle` `size-12 text-success`, заголовок и текст) или под кнопкой появляется `alert alert-success alert-soft alert-vertical` (иконка, заголовок и текст друг под другом); у обоих `role="status"`. Отправку и проверку полей выполняет скрипт страницы.',
        ].join('\n\n'),
      },
    },
  },
};

export const Lead = { name: 'Lead', render: () => lead, parameters: { docs: { source: { code: lead } } } };
export const Errors = { name: 'Errors', render: () => errors, parameters: { docs: { source: { code: errors } } } };
export const Success = { name: 'Success', render: () => success, parameters: { docs: { source: { code: success } } } };
