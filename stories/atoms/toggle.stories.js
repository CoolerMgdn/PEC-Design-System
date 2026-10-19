import toggle from '../../../core/project-components/toggle/01-toggle.html?raw';
import monochrome from '../../../core/project-components/toggle/02-monochrome.html?raw';
import onDark from '../../../core/project-components/toggle/03-on-dark.html?raw';

export default {
  title: 'Атомы/Toggle',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'atom-toggle' },
    docs: {
      description: {
        component: [
          'Переключатель daisyUI на основе нативного чекбокса. Источник — `core/project-components/toggle`.',
          '`toggle toggle-secondary toggle-sm`; подпись — `label.label text-base-content`.',
          'Monochrome — тёмный вариант: `toggle-neutral` вместо `toggle-secondary`.',
          'Monochrome на тёмном фоне (фото, `bg-neutral`; в примере — второй блок): невыбранное — `text-neutral-content` и рамка `neutral-content/30…60`, выбранное — белое `base-100` с тёмным содержимым, наведение на невыбранное — `hover:not-checked:bg-neutral-content/10`. Текст ошибки на `bg-neutral` осветлён темой (контраст около 5,2:1). Переключатель: `border-neutral-content/40 bg-transparent text-neutral-content/70 checked:border-base-100 checked:bg-base-100 checked:text-neutral`.',
        ].join('\n\n'),
      },
    },
  },
};

export const States = {
  name: 'States',
  render: () => toggle,
  parameters: { docs: { source: { code: toggle } } },
};

export const Monochrome = {
  name: 'Monochrome',
  render: () => `<div class="flex flex-col gap-6">${monochrome}<div class="flex flex-col gap-6 rounded-2xl bg-neutral p-6 text-neutral-content">${onDark}</div></div>`,
  parameters: { docs: { source: { code: `${monochrome}
<!-- На тёмном фоне -->
${onDark}` } } },
};
