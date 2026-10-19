import cta from '../../../core/project-components/hero/01-cta.html?raw';
import calculator from '../../../core/project-components/hero/02-calculator.html?raw';
import { fillDemoImage } from './demo-image.js';

export default {
  title: 'Организмы/Hero',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'organism-hero' },
    docs: {
      description: {
        component: [
          'Первый экран страницы услуги (блок «Hero» из «Вариантов блоков для страниц»). Источник — `core/project-components/hero`.',
          'Секция `relative isolate bg-neutral text-neutral-content`: фоновое фото — `picture` с `absolute inset-0 -z-10` и `img.size-full.object-cover` (декоративное, `alt=""`, `fetchpriority="high"`), затемнение `bg-neutral/60` для контраста белого текста. Содержимое — в сетке Container (`mx-auto px-3 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl`).',
          'Состав: хлебные крошки `breadcrumbs` (как в макете блоков), H1 первого экрана `text-3xl leading-tight font-semibold md:text-4xl lg:text-5xl`, подзаголовок, кнопка `btn-primary` и телефон, плитки с цифрами `rounded-xl bg-base-100/15` с иконкой Bold в `bg-base-100/20`. Цифры — только подтверждённые.',
          'Calculator — вместо подзаголовка и кнопки форма расчёта на белой карточке `rounded-2xl bg-base-100`: поля с плавающей подписью (`floating-label`), кнопка, результат с `aria-live="polite"` и пояснение `text-xs`. Расчёт выполняет скрипт страницы.',
        ].join('\n\n'),
      },
    },
  },
};

export const Cta = { name: 'CTA', render: () => fillDemoImage(cta, '100vw'), parameters: { layout: 'fullscreen', docs: { source: { code: cta } } } };
export const Calculator = { name: 'Calculator', render: () => fillDemoImage(calculator, '100vw'), parameters: { layout: 'fullscreen', docs: { source: { code: calculator } } } };
