import dots from '../../../core/project-components/carousel/01-dots.html?raw';
import slider from '../../../core/project-components/carousel/02-slider.html?raw';
import monochrome from '../../../core/project-components/carousel/03-monochrome.html?raw';

export default {
  title: 'Молекулы/Carousel',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-carousel' },
    docs: {
      description: {
        component: [
          'Карусель на основе `carousel` daisyUI и навигация по слайдам (Slider nav из макета). Источник — `core/project-components/carousel`.',
          'Dots — точки-«таблетки»: `button.group.flex.h-6` (область нажатия 24 px) с `aria-label` и полосой `span.h-1.5.w-4.rounded-full.bg-base-300`; текущий слайд — `aria-current="true"` у кнопки, полоса удлиняется до `w-10` и становится `secondary` (`group-aria-[current=true]:…`), смена анимирована. Наведение на неактивную точку — `secondary/50`, активная при наведении остаётся `secondary`. Компактные — кнопка `h-4`, круглая точка `h-1.5 w-1.5`, текущая `w-5`, промежуток `gap-1.5`.',
          'Slider — лента `carousel w-full gap-4` со слайдами `carousel-item w-full` (`role="group"`, `aria-roledescription="слайд"`, `aria-label="N из M"`), под ней точки (`aria-controls` — id слайда) и стрелки `btn btn-sm btn-square border-base-300 bg-base-100` (`arrow-left-1`/`arrow-right-1`). Ленту листают свайпом, точками и стрелками; синхронизацию точек с прокруткой выполняет скрипт страницы.',
          'Monochrome — для фото и цветных фонов: тёмные точки `bg-base-content/20`, текущая `bg-base-content`; светлые на тёмном фоне — `bg-base-100/40`, текущая `bg-base-100`. Оба размера.',
        ].join('\n\n'),
      },
    },
  },
};

export const Dots = {
  name: 'Dots',
  render: () => dots,
  parameters: { docs: { source: { code: dots } } },
};

export const Slider = {
  name: 'Slider',
  render: () => slider,
  parameters: { docs: { source: { code: slider } } },
};

export const Monochrome = {
  name: 'Monochrome',
  render: () => monochrome,
  parameters: { docs: { source: { code: monochrome } } },
};
