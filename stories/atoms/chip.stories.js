import single from '../../../core/project-components/chip/01-single-choice.html?raw';
import multiple from '../../../core/project-components/chip/02-multiple-choice.html?raw';
import removable from '../../../core/project-components/chip/03-removable.html?raw';
import monochrome from '../../../core/project-components/chip/04-monochrome.html?raw';
import onDark from '../../../core/project-components/chip/05-on-dark.html?raw';

export default {
  title: 'Атомы/Chip',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'atom-chip' },
    docs: {
      description: {
        component: [
          'Чипсы — быстрый выбор вариантов. Источник — `core/project-components/chip`.',
          'Один вариант: нативные radio с классом `btn rounded-full font-normal`; выбранный — зелёный (`checked:bg-success`). Несколько вариантов: `label.btn` с `checkbox-success` внутри. Удаляемое значение — `badge` с кнопкой-иконкой. Чипсы плоские; рамка при наведении не меняется.',
          'Размеры: по умолчанию и `btn-sm`. Группе radio задайте уникальный `name` и подпись `aria-label`.',
          'Monochrome — тёмный вариант без цвета: выбранная чипса `checked:border-neutral checked:bg-neutral checked:text-neutral-content`, в множественном выборе — `checkbox-neutral`.',
          'Monochrome на тёмном фоне (фото, `bg-neutral`; в примере — второй блок): невыбранное — `text-neutral-content` и рамка `neutral-content/30…60`, выбранное — белое `base-100` с тёмным содержимым, наведение на невыбранное — `hover:not-checked:bg-neutral-content/10`. Текст ошибки на `bg-neutral` осветлён темой (контраст около 5,2:1).',
        ].join('\n\n'),
      },
    },
  },
};

export const Single = {
  name: 'Single choice',
  render: () => single,
  parameters: { docs: { source: { code: single } } },
};

export const Multiple = {
  name: 'Multiple choice',
  render: () => multiple,
  parameters: { docs: { source: { code: multiple } } },
};

export const Removable = {
  name: 'Removable',
  render: () => removable,
  parameters: { docs: { source: { code: removable } } },
};

export const Monochrome = {
  name: 'Monochrome',
  render: () => `<div class="flex flex-col gap-6">${monochrome}<div class="flex flex-col gap-6 rounded-2xl bg-neutral p-6 text-neutral-content">${onDark}</div></div>`,
  parameters: { docs: { source: { code: `${monochrome}
<!-- На тёмном фоне -->
${onDark}` } } },
};
