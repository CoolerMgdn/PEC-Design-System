import pagination from '../../../core/project-components/pagination/01-pagination.html?raw';
import joined from '../../../core/project-components/pagination/02-join.html?raw';
import prevNext from '../../../core/project-components/pagination/03-prev-next.html?raw';

export default {
  title: 'Молекулы/Pagination',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-pagination' },
    docs: {
      description: {
        component: [
          'Постраничная навигация: `nav` с `aria-label`, ссылки на основе `btn`; у каждого `li` — класс `flex`, чтобы номера и «Назад»/«Вперёд» были выровнены по центру строки. Источник — `core/project-components/pagination`.',
          'Default (макет) — страница `btn btn-sm min-w-8 rounded-sm border-base-300 bg-base-100 px-2 font-normal hover:bg-base-200`, компактно — `btn-xs min-w-6 px-1.5`. Текущая — `aria-current="page"`, синий `secondary`. «Назад» и «Вперёд» — после номеров, `link link-secondary` с иконками `arrow-left` и `arrow-right`; на первой странице «Назад» не выводится, на последней — «Вперёд».',
          'Правило сокращения: всегда видны первая и последняя страницы, текущая и соседние с ней; пропуски — «…» (`aria-hidden="true"`). Если страниц не больше 6, выводятся все.',
          'Варианты из daisyUI в стиле ПЭК: Join — номера одной группой `join rounded-sm border border-base-300` со стрелками `arrow-left-1`/`arrow-right-1` (`aria-label` у стрелок); Prev and next — две контурные кнопки или «Показать ещё» для лент новостей и каталога.',
        ].join('\n\n'),
      },
    },
  },
};

export const Default = {
  name: 'Default',
  render: () => pagination,
  parameters: { docs: { source: { code: pagination } } },
};

export const Join = {
  name: 'Join',
  render: () => joined,
  parameters: { docs: { source: { code: joined } } },
};

export const PrevNext = {
  name: 'Prev and next',
  render: () => prevNext,
  parameters: { docs: { source: { code: prevNext } } },
};
