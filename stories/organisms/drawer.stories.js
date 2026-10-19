import drawer from '../../../core/project-components/drawer/01-drawer.html?raw';

export default {
  title: 'Организмы/Drawer',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'organism-drawer' },
    docs: {
      description: {
        component: [
          'Боковая панель с подробностями (например, пояснение к тарифу). Источник — `core/project-components/drawer`. Откройте панель ссылкой в примере.',
          'Нативный `dialog` `modal modal-bottom md:modal-end`: на десктопе панель справа с отступом 24 px от краёв экрана (`md:m-6 md:self-stretch md:max-w-md md:rounded-3xl`), на мобильных выезжает снизу (`rounded-t-3xl`, полоска-ручка `h-1 w-10 rounded-full bg-base-300`). Открытие и закрытие — как у Modal (`commandfor`/`command`, `form.modal-backdrop`, Escape).',
          'Панель — `modal-box flex flex-col overflow-hidden p-0` из трёх частей: шапка (ручка, заголовок `h2` с отступом под крестик `pr-10`, крестик) и нижняя часть с действиями (`border-t border-base-300`, например `btn btn-primary w-full`) закреплены (`shrink-0`), прокручивается только содержимое между ними (`min-h-0 grow overflow-y-auto`). Нижняя часть необязательна. В содержимом — текст, заметка `alert alert-warning alert-outline`, подзаголовки `h3 text-base font-semibold` и списки `list-disc pl-5`.',
        ].join('\n\n'),
      },
    },
  },
};

export const Default = { name: 'Default', render: () => drawer, parameters: { docs: { source: { code: drawer } } } };
