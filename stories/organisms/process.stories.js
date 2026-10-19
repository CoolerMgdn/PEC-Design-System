import carousel from '../../../core/project-components/process/01-carousel.html?raw';
import detailed from '../../../core/project-components/process/02-detailed.html?raw';
import withImage from '../../../core/project-components/process/03-with-image.html?raw';
import { fillDemoImage } from './demo-image.js';

export default {
  title: 'Организмы/Process',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'organism-process' },
    docs: {
      description: {
        component: [
          'Этапы услуги (блоки «Этапы» из «Вариантов блоков для страниц»). Источник — `core/project-components/process`. Номер этапа — `size-7 rounded-md bg-secondary/10 text-sm text-secondary`, стрелки между этапами — `arrow-right text-secondary` (`aria-hidden`).',
          'Carousel — панель `rounded-2xl bg-base-200` с заголовком и стрелками `btn btn-sm btn-circle` в шапке, лента `carousel flex -mx-4 px-4 scroll-px-4 md:-mx-6 md:px-6 md:scroll-px-6` (у панели `overflow-hidden`) — карточки уходят под край панели, а не под её внутренний отступ; карточки `rounded-xl bg-base-100` (`w-64 md:w-72`, крупная иконка Bold `text-secondary/50` внизу справа), точки Carousel обычного размера. Точка соответствует положению прокрутки: если видно несколько карточек, лишние точки скрываются; листание и точки — скрипт карусели. Заголовок панели задаёт страница.',
          'Detailed — три подробных этапа со списками (маркер `size-1.5 bg-secondary`); на десктопе в ряд, на мобильных столбиком со стрелками вниз. Список — `role="list"`/`listitem`, стрелки вне списка.',
          'With image — фото (компонент Image) и нумерованный список строк `rounded-2xl bg-base-200 px-4 py-3 md:px-5 md:py-4` с номером и иконкой в белых квадратах `size-8 rounded-lg` (между ними 4 px, до текста 16 px).',
        ].join('\n\n'),
      },
    },
  },
};

export const Carousel = { name: 'Carousel', render: () => carousel, parameters: { docs: { source: { code: carousel } } } };
export const Detailed = { name: 'Detailed', render: () => detailed, parameters: { docs: { source: { code: detailed } } } };
export const WithImage = { name: 'With image', render: () => fillDemoImage(withImage, '(min-width: 64rem) 31rem, calc(100vw - 2rem)'), parameters: { docs: { source: { code: withImage } } } };
