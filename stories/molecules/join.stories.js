import segmented from '../../../core/project-components/join/01-segmented.html?raw';
import track from '../../../core/project-components/join/02-track.html?raw';
import monochrome from '../../../core/project-components/join/03-monochrome.html?raw';
import onDark from '../../../core/project-components/join/04-on-dark.html?raw';

export default {
  title: 'Молекулы/Join',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-join' },
    docs: {
      description: {
        component: [
          'Сегментированный переключатель (Segmented control) на основе `join` daisyUI и нативных radio. Источник — `core/project-components/join`.',
          'Группа — `join rounded-lg ring-1 ring-base-300` (рамка без собственной высоты: группа 40/32 px, как поля и кнопки) с `role="radiogroup"` и `aria-label`; сегмент — `btn join-item border-0 bg-base-100 px-6 font-normal shadow-none hover:not-checked:bg-base-300 checked:bg-secondary checked:text-secondary-content`, подпись — `aria-label`. Компактно — `btn-sm px-4`.',
          'Тема ПЭК для `join` из radio: сегменты скруглены (`--radius-field`) и не наезжают друг на друга (без отрицательного отступа daisyUI), без разделителей. Наведение на невыбранный сегмент — серый фон `base-300`.',
          'Track — на серой подложке (как «Коробки/Палеты» в калькуляторе): группа `join rounded-lg bg-base-300 p-0.5`, сегмент `btn join-item rounded-md border-0 bg-transparent font-normal shadow-none hover:not-checked:bg-base-200 checked:bg-base-100 checked:text-base-content`; сегменты `h-9` (вместе с подложкой 2 px — 40 px), компактно — `btn-sm h-7 px-5` (32 px). В калькуляторе вместе с подписью `text-xs leading-4` группа занимает 56 px.',
          'На мобильных Join растягивается на всю ширину, сегменты делят её поровну: у группы `max-sm:flex max-sm:w-full`, у сегментов `max-sm:grow max-sm:basis-0`. Для 2–4 взаимоисключающих вариантов в форме. Для переключения разделов контента используйте Tabs.',
          'Monochrome — Segmented и Track с тёмным выбранным сегментом: `checked:bg-neutral checked:text-neutral-content`.',
          'Monochrome на тёмном фоне (фото, `bg-neutral`; в примере — второй блок): невыбранное — `text-neutral-content` и рамка `neutral-content/30…60`, выбранное — белое `base-100` с тёмным содержимым, наведение на невыбранное — `hover:not-checked:bg-neutral-content/10`. Текст ошибки на `bg-neutral` осветлён темой (контраст около 5,2:1). Segmented — `ring-1 ring-neutral-content/30`; Track — подложка `bg-neutral-content/15`.',
        ].join('\n\n'),
      },
    },
  },
};

export const Segmented = {
  name: 'Segmented',
  render: () => segmented,
  parameters: { docs: { source: { code: segmented } } },
};

export const Track = {
  name: 'Track',
  render: () => track,
  parameters: { docs: { source: { code: track } } },
};

export const Monochrome = {
  name: 'Monochrome',
  render: () => `<div class="flex flex-col gap-6">${monochrome}<div class="flex flex-col gap-6 rounded-2xl bg-neutral p-6 text-neutral-content">${onDark}</div></div>`,
  parameters: { docs: { source: { code: `${monochrome}
<!-- На тёмном фоне -->
${onDark}` } } },
};
