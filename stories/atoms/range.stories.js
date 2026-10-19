import range from '../../../core/project-components/range/01-range.html?raw';

export default {
  title: 'Атомы/Range',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'atom-range' },
    docs: {
      description: {
        component: [
          'Ползунок daisyUI `range` на основе нативного `input type="range"`. Источник — `core/project-components/range`.',
          '`range range-secondary range-xs`; подпись — `fieldset-legend`. Вариант с числовым полем рядом: обёртка `data-range-sync`, ползунок и поле синхронизирует скрипт страницы (значение поля ограничивается `min`/`max`); в Storybook — демонстрационный.',
        ].join('\n\n'),
      },
    },
  },
};

export const Default = {
  name: 'Default',
  render: () => range,
  parameters: { docs: { source: { code: range } } },
};
