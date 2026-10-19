import basic from '../../../core/project-components/tooltip/01-tooltip.html?raw';
import rich from '../../../core/project-components/tooltip/02-rich.html?raw';
import warning from '../../../core/project-components/tooltip/03-warning.html?raw';

export default {
  title: 'Молекулы/Tooltip',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-tooltip' },
    docs: {
      description: {
        component: [
          'Подсказки daisyUI `tooltip`: появляются при наведении и фокусе с клавиатуры. Источник — `core/project-components/tooltip`.',
          'Короткая подсказка — атрибут `data-tip`, тёмная (`neutral`); положение — `tooltip-bottom`, `tooltip-left`, `tooltip-right`, по умолчанию сверху. Иконка-триггер — кнопка `btn-ghost btn-xs btn-circle` с `info-circle` и `aria-label`.',
          'Развёрнутая подсказка со списком — `tooltip tooltip-secondary` с `tooltip-content`. Триггер должен быть фокусируемым элементом (кнопкой); важную информацию в одну подсказку не прячьте.',
          'Warning — предупреждение у поля или условия (замена сносок со звёздочками): `tooltip tooltip-primary` с `tooltip-content flex gap-2` и иконкой `info-circle`; у поля с ошибкой подсказку можно держать открытой классом `tooltip-open`.',
        ].join('\n\n'),
      },
    },
  },
};

export const Basic = {
  name: 'Positions',
  render: () => basic,
  parameters: { docs: { source: { code: basic } } },
};

export const Rich = {
  name: 'Rich content',
  render: () => rich,
  parameters: { docs: { source: { code: rich } } },
};

export const Warning = {
  name: 'Warning',
  render: () => warning,
  parameters: { docs: { source: { code: warning } } },
};
