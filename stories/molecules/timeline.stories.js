import timeline from '../../../core/project-components/timeline/01-timeline.html?raw';
import tracking from '../../../core/project-components/timeline/02-tracking.html?raw';
import alternating from '../../../core/project-components/timeline/03-alternating.html?raw';
import status from '../../../core/project-components/timeline/04-status.html?raw';
import icons from '../../../core/project-components/timeline/05-icons.html?raw';

export default {
  title: 'Молекулы/Timeline',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-timeline' },
    docs: {
      description: {
        component: [
          'Шкала этапов и шагов процесса: история событий и путь груза (daisyUI `timeline`), шаги оформления со статусами (daisyUI `steps`). Источник — `core/project-components/timeline`. Бывший Stepper — варианты Status и Icons; индикатор заполнения — отдельная молекула Progress.',
          'Default (макет) — `timeline timeline-vertical timeline-compact timeline-snap-icon`; маркер — `size-2.5 rounded-full border border-base-content/40 bg-base-100` в `timeline-middle`; линия — `hr.w-px.bg-base-300`; текст — в `timeline-end pl-2` (заголовок `text-base font-medium`, описание `text-sm text-base-content/70`).',
          'Tracking — история отправления: пройденные статусы — иконка `tick-circle` (Bold) `text-secondary` и линия `bg-secondary`, текущий — иконка по смыслу `text-primary`, будущий — пустой круг. Дата — `time` с `datetime`.',
          'Alternating — события по обе стороны от линии (`timeline-start` с `md:text-end` и `timeline-end`), на мобильных — в одну колонку (`max-md:timeline-compact`).',
          'Status — шаги процесса со статусами (daisyUI `steps`). Список — `ol.steps steps-vertical`, с `sm`/`md` — `steps-horizontal`. Шаг — `li.step` с маркером `span.step-icon`: выполненный — `step-secondary` и залитая галочка `bold/tick-circle` во весь маркер, ошибка — `step-error` и `bold/close-circle`, текущий — `step-secondary` (линия до него закрашена) с маркером `bg-base-100 text-secondary ring-2 ring-secondary` и `aria-current="step"`, будущий — серый номер `text-base-content/70`.',
          'Статус дублируется скрытым текстом `sr-only` («Выполнено:», «Текущий шаг:», «Ошибка:»), потому что цвет и значок экранный диктор не передаёт.',
          'Icons — маркер с иконкой смысла шага (`step-icon size-10`, Iconsax `size-5`) и подпись из двух строк: название `text-sm font-medium` и дата или пояснение `text-xs text-base-content/70`.',
        ].join('\n\n'),
      },
    },
  },
};

const story = (name, html) => ({ name, render: () => html, parameters: { docs: { source: { code: html } } } });

export const Default = story('Default', timeline);
export const Tracking = story('Tracking', tracking);
export const Alternating = story('Alternating', alternating);
export const Status = story('Status', status);
export const Icons = story('Icons', icons);
