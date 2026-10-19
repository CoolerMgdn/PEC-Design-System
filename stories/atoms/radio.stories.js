import radio from '../../../core/project-components/radio/01-radio.html?raw';
import monochrome from '../../../core/project-components/radio/02-monochrome.html?raw';
import onDark from '../../../core/project-components/radio/03-on-dark.html?raw';

export default {
  title: 'Атомы/Radio',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'atom-radio' },
    docs: {
      description: {
        component: [
          'Нативное радио daisyUI в группе `fieldset` с `legend`. Источник — `core/project-components/radio`.',
          '`radio radio-secondary radio-sm`; подпись — `label.label text-base-content`. Группе задайте уникальный `name`.',
          'Monochrome — тёмный вариант: `radio-neutral` вместо `radio-secondary`.',
          'Monochrome на тёмном фоне (фото, `bg-neutral`; в примере — второй блок): невыбранное — `text-neutral-content` и рамка `neutral-content/30…60`, выбранное — белое `base-100` с тёмным содержимым, наведение на невыбранное — `hover:not-checked:bg-neutral-content/10`. Текст ошибки на `bg-neutral` осветлён темой (контраст около 5,2:1). Радио: `border-neutral-content/60 bg-transparent text-base-100 checked:border-base-100`.',
        ].join('\n\n'),
      },
    },
  },
};

export const Group = {
  name: 'Radio group',
  render: () => radio,
  parameters: { docs: { source: { code: radio } } },
};

export const Monochrome = {
  name: 'Monochrome',
  render: () => `<div class="flex flex-col gap-6">${monochrome}<div class="flex flex-col gap-6 rounded-2xl bg-neutral p-6 text-neutral-content">${onDark}</div></div>`,
  parameters: { docs: { source: { code: `${monochrome}
<!-- На тёмном фоне -->
${onDark}` } } },
};
