import checkbox from '../../../core/project-components/checkbox/01-checkbox.html?raw';
import monochrome from '../../../core/project-components/checkbox/02-monochrome.html?raw';
import onDark from '../../../core/project-components/checkbox/03-on-dark.html?raw';

export default {
  title: 'Атомы/Checkbox',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'atom-checkbox' },
    docs: {
      description: {
        component: [
          'Нативный чекбокс daisyUI с подписью в `label.label`. Источник — `core/project-components/checkbox`.',
          '`checkbox checkbox-primary checkbox-sm`: серая рамка, без заливки, красная галочка (тема ПЭК в `core/theme.css`). Красная рамка появляется только при ошибке — `aria-invalid="true"` или невыполненный `required` после взаимодействия.',
          'Подпись активного поля — `text-base-content`; у недоступного остаётся приглушённый цвет `label`. Согласие на обработку данных оформляется по `docs/html-form-template.md`.',
          'Monochrome — тёмный вариант: `checkbox-neutral` вместо `checkbox-primary`, состояния те же.',
          'Monochrome на тёмном фоне (фото, `bg-neutral`; в примере — второй блок): невыбранное — `text-neutral-content` и рамка `neutral-content/30…60`, выбранное — белое `base-100` с тёмным содержимым, наведение на невыбранное — `hover:not-checked:bg-neutral-content/10`. Текст ошибки на `bg-neutral` осветлён темой (контраст около 5,2:1). Чекбокс: `border-neutral-content/60 checked:border-base-100 checked:bg-base-100 checked:text-neutral`.',
        ].join('\n\n'),
      },
    },
  },
};

export const States = {
  name: 'States',
  render: () => checkbox,
  parameters: { docs: { source: { code: checkbox } } },
};

export const Monochrome = {
  name: 'Monochrome',
  render: () => `<div class="flex flex-col gap-6">${monochrome}<div class="flex flex-col gap-6 rounded-2xl bg-neutral p-6 text-neutral-content">${onDark}</div></div>`,
  parameters: { docs: { source: { code: `${monochrome}
<!-- На тёмном фоне -->
${onDark}` } } },
};
