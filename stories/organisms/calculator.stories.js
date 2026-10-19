import order from '../../../core/project-components/calculator/01-order.html?raw';
import orderErrors from '../../../core/project-components/calculator/02-order-errors.html?raw';
import estimate from '../../../core/project-components/calculator/03-estimate.html?raw';
import estimatePallets from '../../../core/project-components/calculator/04-estimate-pallets.html?raw';
import estimateErrors from '../../../core/project-components/calculator/05-estimate-errors.html?raw';
import sheet from '../../../core/project-components/calculator/06-sheet.html?raw';

export default {
  title: 'Организмы/Calculator',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'organism-calculator' },
    docs: {
      description: {
        component: [
          'Виджеты калькулятора из макета («Виджет калькулятора»). Источник — `core/project-components/calculator`. В виджетах калькулятора — крупные поля и кнопки (исключение из правила «по умолчанию средний размер»). Цены, сроки и расчёт подставляет скрипт страницы; в разметке — демонстрационные значения из макета.',
          'Order — «Онлайн-калькулятор и заказ перевозки»: карточка `rounded-2xl bg-base-100 shadow-soft p-5 md:p-8`, поля `floating-label` + `select-xl`/`input-xl` (56 px, как кнопки рядом; размера 48 px в шкале нет) (4 в ряд с `lg`, 2 — с `sm`, стопкой на мобильных). Виды перевозки — радио-карточки: `label.group` со скрытым `input.sr-only[type=radio]`, выбранная — `has-checked:bg-secondary has-checked:text-secondary-content has-checked:shadow-card`, фокус с клавиатуры — `has-focus-visible:outline-2`; недоступная — `bg-base-200 text-base-content/50`, радио `disabled`, вместо срока — «Недоступно для выбранного направления». Действия: `btn-primary btn-xl`, телефон-ссылка `tel:`, «Задать вопрос» — светлая `btn btn-xl`.',
          'Order errors — ошибки: поле `input-error`/`select-error`, `aria-invalid`, текст `p.label text-xs text-error` по `aria-describedby`. В макете предел значения не указан (XXX), поэтому текст без числа — «Значение больше допустимого».',
          'Estimate — «Предварительный расчёт стоимости доставки»: карточка `rounded-3xl`, тип груза — Join Track на радио (Коробки/Палеты), поля `input-xl`/`select-xl` с подписью внутри (Input → Label inside). Pallets — дополнительно адрес РЦ, высота палеты (Join Track `btn-sm`) и количество — степпер `data-stepper` из Input; итог — цена `text-xl font-bold` и пояснение в `aria-live`. Набор полей при переключении типа груза меняет скрипт страницы. Estimate errors — пустые поля и подсказка у кнопки с `role="alert"`.',
          'Sheet — мобильный вход: карточка-кнопка «Калькулятор / Рассчитать доставку» (иконка Iconsax `calculator` вместо иллюстрации макета) открывает расчёт снизу — `dialog.modal.modal-bottom md:modal-middle` (шторка с ручкой на мобильных), `commandfor`/`command`.',
          'Поля городов — Combobox с вводом и подсказками (как Select → Combobox): `div.relative[data-combobox]` с `input[role=combobox]` (в Order — с плавающим лейблом, в Estimate — с подписью внутри), шеврон поверх поля, список под полем. Все переключатели и степпер равны полю по высоте: при `-xl` полях вся группа 56 px: подпись `text-xs leading-4` + Join Track `p-1` с сегментами `btn-sm` или степпер `input` (40 px).',
          'Не перенесено из макета: значок «i» у вкладки «Палеты» — текст подсказки в макете не задан.',
        ].join('\n\n'),
      },
    },
  },
};

const story = (name, html) => ({ name, render: () => html, parameters: { docs: { source: { code: html } } } });

export const Order = story('Order', order);
export const OrderErrors = story('Order errors', orderErrors);
export const Estimate = story('Estimate', estimate);
export const EstimatePallets = story('Estimate pallets', estimatePallets);
export const EstimateErrors = story('Estimate errors', estimateErrors);
export const Sheet = story('Sheet', sheet);
