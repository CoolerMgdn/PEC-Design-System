import popover from '../../../core/project-components/popover/01-popover.html?raw';

export default {
  title: 'Молекулы/Popover',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-popover' },
    docs: {
      description: {
        component: [
          'Всплывающая панель поверх интерфейса с любым содержимым: текст, кнопки, ссылки (например, выбор способа связи). В отличие от Tooltip открывается по нажатию и не скрывается сама. Источник — `core/project-components/popover`.',
          'Основа — daisyUI `dropdown` на `details`/`summary`: кнопка-триггер — `summary.btn`, панель — `dropdown-content z-30 mt-2 w-72 rounded-xl border border-base-300 bg-base-100 p-4 shadow-card` с `role="dialog"` и `aria-label`. Выравнивание по правому краю — `dropdown-end`, вверх — `dropdown-top`.',
          'Закрытие кликом вне панели, клавишей Escape (фокус возвращается на кнопку) и кнопкой `[data-popover-close]`; одновременно открыт один поповер — скрипт страницы (в витрине — демонстрационный, `data-popover`). Без скрипта панель закрывается повторным нажатием на кнопку.',
        ].join('\n\n'),
      },
    },
  },
};

export const Default = {
  name: 'Default',
  render: () => `<div class="flex min-h-72 items-start justify-between gap-6">${popover}</div>`,
  parameters: { docs: { source: { code: popover } } },
};
