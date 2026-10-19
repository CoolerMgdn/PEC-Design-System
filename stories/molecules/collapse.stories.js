import accordion from '../../../core/project-components/collapse/01-collapse.html?raw';
import compact from '../../../core/project-components/collapse/02-compact.html?raw';
import textToggle from '../../../core/project-components/collapse/03-text-toggle.html?raw';
import divided from '../../../core/project-components/collapse/04-divided.html?raw';
import textTogglePanel from '../../../core/project-components/collapse/05-text-toggle-panel.html?raw';

export default {
  title: 'Молекулы/Collapse',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-collapse' },
    docs: {
      description: {
        component: [
          'Раскрывающиеся блоки на нативном `details`/`summary` (без JS). Источник — `core/project-components/collapse`.',
          'Блок — `details.collapse.group rounded-sm border border-base-300 bg-base-100 hover:border-secondary`; заголовок — `summary.collapse-title flex items-center justify-between gap-4 pe-4` с иконкой `arrow-down-1` (`transition-transform duration-250 group-open:rotate-180`) вместо стрелки `collapse-arrow` daisyUI; содержимое — `collapse-content`. Раскрытие — только анимация высоты 0,25 с (тема ПЭК), без собственных переходов daisyUI. Крупный заголовок — `text-lg font-medium text-secondary`, компактный — `text-sm font-medium`.',
          'Divided — основной вид (вопросы и ответы на лендингах): список `details.group` с разделителями `border-b border-base-300` (у обёртки — `border-t`), заголовок в `summary.list-none` (`text-sm font-medium md:text-base`, наведение — `hover:text-secondary`), справа иконка `arrow-down-1`, содержимое — `text-xs text-base-content/70 md:text-sm`. Работает как аккордеон: общий `name` у `details`. Отступы без отрицательных значений: вопрос `pt-4 pb-2`, у `details` `pb-2 open:pb-0 transition-all duration-250` (отступ анимируется вместе с высотой), ответ `pb-4`. Заголовок секции в компонент не входит — он часть страницы.',
          'Accordion (открыт только один блок) — одинаковый атрибут `name` у всех `details` группы. Текстовый переключатель — `details.group` и `summary.list-none` с иконкой `arrow-down-1`, которая поворачивается классом `group-open:rotate-180`.',
          'Text toggle panel — компактная ссылка-переключатель `text-xs underline underline-offset-4`, стрелка необязательна (`size-3.5`); раскрытый текст — на серой подложке `mt-2 rounded-xl bg-base-200 p-4 text-sm`.',
        ].join('\n\n'),
      },
    },
  },
};

export const Divided = {
  name: 'Divided',
  render: () => divided,
  parameters: { docs: { source: { code: divided } } },
};

export const Accordion = {
  name: 'Accordion',
  render: () => accordion,
  parameters: { docs: { source: { code: accordion } } },
};

export const Compact = {
  name: 'Compact',
  render: () => compact,
  parameters: { docs: { source: { code: compact } } },
};

export const TextToggle = {
  name: 'Text toggle',
  render: () => textToggle,
  parameters: { docs: { source: { code: textToggle } } },
};

export const TextTogglePanel = {
  name: 'Text toggle panel',
  render: () => textTogglePanel,
  parameters: { docs: { source: { code: textTogglePanel } } },
};
