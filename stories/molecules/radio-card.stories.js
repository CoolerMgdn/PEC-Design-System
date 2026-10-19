import price from '../../../core/project-components/radio-card/01-price.html?raw';
import icon from '../../../core/project-components/radio-card/02-icon.html?raw';
import text from '../../../core/project-components/radio-card/03-text.html?raw';

export default {
  title: 'Молекулы/Radio Card',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-radio-card' },
    docs: {
      description: {
        component: [
          'Карточки выбора — радио в виде карточек (калькулятор pecom.ru: тариф, вид перевозки, договор). Источник — `core/project-components/radio-card`.',
          'Устройство: `fieldset` с `aria-label` (видимый заголовок группы — часть страницы, не компонента), карточка — `label.group.relative` со скрытым `input.sr-only[type=radio]` (стрелки клавиатуры переключают группу); фокус с клавиатуры — `has-focus-visible:outline-2 outline-secondary`; недоступная — радио `disabled`, `has-disabled:bg-base-200 text-base-content/40`.',
          'Шрифты 16 и 12 px, отступы карточки `px-4 py-3` (у Icon и Text текст отступает от отметки `pr-6`). Price — тариф с ценой: `rounded-xl bg-base-100 shadow-card`, наведение — `hover:shadow-soft`, выбранная — `has-checked:bg-secondary text-secondary-content`; иконка Iconsax `size-10`, срок `text-xs text-base-content/70`, название и цена `text-base`. Плашка «Самый выгодный» / «Самый быстрый» — `badge badge-sm absolute -bottom-3 left-4 bg-base-100 shadow-card` с иконкой `moneys text-success` / `flash text-warning`.',
          'Icon — вид перевозки: иконка `size-12`, отметка `tick-circle` в правом верхнем углу — серая `text-base-300`, у выбранной `group-has-checked:text-success`; наведение — `hover:text-secondary hover:shadow-soft`. Text — заголовок `text-base` и пояснение `text-xs` в рамке `border-base-300`, у выбранной — `has-checked:border-secondary` и зелёная отметка.',
          'Иллюстрации с сайта заменены иконками Iconsax (фирменные иллюстрации не используются).',
        ].join('\n\n'),
      },
    },
  },
};

export const Price = { name: 'Price', render: () => price, parameters: { docs: { source: { code: price } } } };
export const Icon = { name: 'Icon', render: () => icon, parameters: { docs: { source: { code: icon } } } };
export const Text = { name: 'Text', render: () => text, parameters: { docs: { source: { code: text } } } };
