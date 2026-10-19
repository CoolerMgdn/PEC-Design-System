import progress from '../../../core/project-components/progress/01-progress.html?raw';

export default {
  title: 'Молекулы/Progress',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-progress' },
    docs: {
      description: {
        component: [
          'Индикатор продвижения — daisyUI `progress` на нативном `progress` (значение `value` из `max`). Источник — `core/project-components/progress`.',
          'Steps — «Шаг 1 из 6» над полосой (`text-sm font-medium`, по центру), полоса `progress progress-primary h-2`. Percent — подпись слева и процент справа (`tabular-nums`), `progress-secondary`. Thin — тонкая полоса `h-1 progress-success` с подписью `text-xs`.',
          'Дорожка серая (`bg-base-200`), а не оттенок цвета полосы. Полоса связана с подписью `aria-labelledby`; экранный диктор читает значение и максимум самого `progress`.',
        ].join('\n\n'),
      },
    },
  },
};

export const Default = { name: 'Default', render: () => progress, parameters: { docs: { source: { code: progress } } } };
