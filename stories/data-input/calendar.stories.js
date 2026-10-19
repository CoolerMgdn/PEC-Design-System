import example1 from '../../../core/components/data-input/calendar/01-cally-calendar.html?raw';
import example2 from '../../../core/components/data-input/calendar/02-cally-date-picker.html?raw';
import example3 from '../../../core/components/data-input/calendar/03-vanilla-calendar-pro.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: 'Справочник daisyUI/Data input/Calendar',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'calendar' },
    docs: {
      description: {
        component: 'HTML-примеров: 3. Источник: [Calendar](https://daisyui.com/components/calendar/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/calendar. Для реальной страницы необходимо отдельно подключить JavaScript Cally или Vanilla Calendar Pro: daisyUI предоставляет только стили календарей. Инициализация, русский язык и обработчик выбора даты находятся только в ui-kit/preview/calendar.js. Стили библиотек дополнительно не подключаются. Вариант React исключён; npm и CDN для Vanilla Calendar Pro используют одну разметку.',
      },
    },
  },
};

export const Example01 = {
  name: 'Cally calendar',
  render: () => example1,
  parameters: {
    docs: {
      source: { code: example1 },
      description: { story: 'Для регистрации элементов calendar-date и calendar-month подключите модуль Cally. В Storybook библиотека загружается локально и только при открытии Calendar.' },
    },
  },
};

export const Example02 = {
  name: 'Cally date picker',
  render: () => example2,
  parameters: {
    docs: {
      source: { code: example2 },
      description: { story: 'Нужны JavaScript Cally и обработчик события change у calendar-date, который обновляет текст кнопки. Открытие и закрытие выполняет нативный Popover API; расположение задаёт CSS Anchor Positioning. При повторном использовании измените id, popovertarget и имя CSS-якоря согласованно.' },
    },
  },
};

export const Example03 = {
  name: 'Vanilla Calendar Pro',
  render: () => example3,
  parameters: {
    docs: {
      source: { code: example3 },
      description: { story: 'Подключите Calendar из vanilla-calendar-pro, создайте экземпляр с DOM-элементом .vc и вызовите init(). При удалении календаря вызовите destroy(). В Storybook это выполняет отдельный helper; скопированный HTML сам по себе календарь не создаёт.' },
    },
  },
};
