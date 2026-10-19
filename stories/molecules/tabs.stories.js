import box from '../../../core/project-components/tabs/02-box.html?raw';
import line from '../../../core/project-components/tabs/03-line.html?raw';
import monochrome from '../../../core/project-components/tabs/04-monochrome.html?raw';
import onDark from '../../../core/project-components/tabs/05-on-dark.html?raw';

export default {
  title: 'Молекулы/Tabs',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-tabs' },
    docs: {
      description: {
        component: [
          'Табы daisyUI по шаблону WAI-ARIA Tabs. Источник — `core/project-components/tabs`. Список — `tabs … w-max min-w-full flex-nowrap` с `role="tablist"` и `aria-label` внутри `overflow-x-auto`: на узких экранах табы не переносятся, а прокручиваются. Таб — `button.tab shrink-0 whitespace-nowrap` с `role="tab"`, `aria-selected`, `aria-controls`; панель — отдельный блок с `role="tabpanel"`, неактивные — `hidden`. Переключение (клик, стрелки, Home/End) выполняет скрипт страницы; в Storybook — демонстрационный. Для ссылок на другие страницы используйте `nav` + `a.tab` с `aria-current="page"` без ролей tab.',
          'Line — основной вид, как в макетах: у списка постоянная серая линия `border-b-2 border-base-300`, у табов `-mb-0.5`; красная линия активного таба 2 px на всю ширину таба ложится на серую и выглядит с ней единой полосой (тема ПЭК).',
          'Уменьшенный Line — `tabs-sm`. Вида без серой линии нет: у табов-подчёркиваний линия под списком всегда. Box — `tabs tabs-box`: «пилюли», неактивные серые, активный синий `secondary`; размеры `tabs-sm` и по умолчанию.',
          'Monochrome — тёмные варианты Line и Box: линия активного таба `aria-selected:before:border-neutral` (вместо красной), активная «пилюля» `aria-selected:bg-neutral aria-selected:text-neutral-content` (вместо синей). Правила темы для табов нулевой специфичности (`:where`), поэтому утилиты варианта их перекрывают.',
          'Monochrome на тёмном фоне (фото, `bg-neutral`; в примере — второй блок): невыбранное — `text-neutral-content` и рамка `neutral-content/30…60`, выбранное — белое `base-100` с тёмным содержимым, наведение на невыбранное — `hover:not-checked:bg-neutral-content/10`. Текст ошибки на `bg-neutral` осветлён темой (контраст около 5,2:1). Line — серая линия списка `border-neutral-content/20`, линия активного таба `aria-selected:before:border-base-100`; Box — «пилюли» `bg-neutral-content/10`, активная `aria-selected:bg-base-100`.',
        ].join('\n\n'),
      },
    },
  },
};

export const Line = {
  name: 'Line',
  render: () => line,
  parameters: { docs: { source: { code: line } } },
};

export const Box = {
  name: 'Box',
  render: () => box,
  parameters: { docs: { source: { code: box } } },
};

export const Monochrome = {
  name: 'Monochrome',
  render: () => `<div class="flex flex-col gap-6">${monochrome}<div class="flex flex-col gap-6 rounded-2xl bg-neutral p-6 text-neutral-content">${onDark}</div></div>`,
  parameters: { docs: { source: { code: `${monochrome}
<!-- На тёмном фоне -->
${onDark}` } } },
};
