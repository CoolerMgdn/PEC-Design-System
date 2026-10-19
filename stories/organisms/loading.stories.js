import loader from '../../../core/project-components/loading/01-loader.html?raw';
import brand from '../../../core/project-components/loading/02-brand.html?raw';

export default {
  title: 'Организмы/Loading',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'organism-loading' },
    docs: {
      description: {
        component: [
          'Индикаторы загрузки на основе `loading` daisyUI, цвет `text-primary`. Источник — `core/project-components/loading`.',
          'Отдельный индикатор — `loading loading-spinner loading-lg` или `loading-dots` с `role="status"` и `aria-label="Загрузка"`. В кнопке — `loading-sm` перед текстом, кнопка `disabled` и `aria-busy="true"`. Поверх блока — слой `absolute inset-0 bg-base-100/80` с индикатором по центру, у блока — `relative` и `aria-busy="true"`.',
          'Brand — фирменный лоадер из макета: два красных квадрата `size-3 rotate-12 bg-primary` в противоположных углах блока `size-10`, который вращается (`animate-spin`, при «уменьшить движение» — `motion-reduce:animate-none`); крупно — на сером квадрате `bg-base-200`, компактно — `size-6` с квадратами `size-2`.',
        ].join('\n\n'),
      },
    },
  },
};

export const Default = { name: 'Default', render: () => loader, parameters: { docs: { source: { code: loader } } } };
export const Brand = { name: 'Brand', render: () => brand, parameters: { docs: { source: { code: brand } } } };
