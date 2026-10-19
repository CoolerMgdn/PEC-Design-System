import example1 from '../../../core/components/actions/swap/01-swap-text.html?raw';
import example2 from '../../../core/components/actions/swap/02-swap-volume-icons.html?raw';
import example3 from '../../../core/components/actions/swap/03-swap-icons-with-rotate-effect.html?raw';
import example4 from '../../../core/components/actions/swap/04-hamburger-button.html?raw';
import example5 from '../../../core/components/actions/swap/05-swap-icons-with-flip-effect.html?raw';
import example6 from '../../../core/components/actions/swap/06-activate-using-class-name-instead-of-checkbox.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Actions/Swap",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "swap" },
    docs: {
      description: { component: "HTML-примеров: 6. Источник: [Swap](https://daisyui.com/components/swap/) daisyUI 5.7.46. Исходный HTML хранится в core/components/actions/swap. Первые пять примеров переключаются нативным checkbox и CSS. Вариант swap-active показывает два фиксированных состояния; чтобы менять класс программно, понадобится JavaScript страницы. Иконки солнца и луны демонстрируют только Swap и не переключают тему оформления." },
    },
  },
};

export const Example01 = {
  name: "Swap text",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Swap volume icons",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Swap icons with rotate effect",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Hamburger button",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Swap icons with flip effect",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Activate using class name instead of checkbox",
  render: () => example6,
  parameters: { docs: { source: { code: example6 }, description: { story: "Оба состояния показаны статически: второе имеет класс swap-active. Нажатие не меняет класс; для динамики нужен обработчик страницы." } } },
};
