const layers = [
  ['Основы', 'Цвета, типографика, сетка и отступы, скругления, тени, иконки. Только токены и классы — без собственной разметки.'],
  ['Атомы', 'Кнопки, ссылки, поля, чекбоксы, переключатели, бейджи. Это классы daisyUI с вариантами ПЭК.'],
  ['Молекулы', 'Поле с подписью, табы, хлебные крошки, выпадающие списки, алерты, пагинация, загрузка файла.'],
  ['Организмы', 'Хедер, футер, формы, карточки, FAQ, таблицы, блоки текста, модальные окна, калькулятор.'],
  ['Примеры', 'Лендинги из Figma, собранные только из компонентов выше.'],
  ['Справочник daisyUI', 'Исходный каталог библиотеки: все штатные варианты для подбора и сверки.'],
];

const sources = [
  ['core/tokens.min.css', 'Цветовые роли daisyUI, фирменные цвета, радиусы, размеры полей'],
  ['core/theme.css', 'Токены Tailwind: шрифт, шкала скруглений, тени, тема компонентов ПЭК; шкала текста — стандартная Tailwind'],
  ['core/ui.min.css', 'Собранный CSS: Tailwind + daisyUI + токены theme.css (пересборка по docs/css-build.md)'],
  ['core/icons/iconsax', 'Иконки Iconsax Linear и Bold'],
  ['core/project-components', 'HTML общих компонентов ПЭК; истории читают их без копий'],
];

const page = `<div class="flex w-full max-w-5xl flex-col gap-10">
  <section class="flex flex-col gap-3">
    <h1 class="text-2xl md:text-4xl font-semibold">Дизайн-система ПЭК</h1>
    <p class="text-base">Единый набор токенов, классов и HTML-компонентов для страниц услуг и продуктов ПЭК. Основа — Tailwind CSS 4 и daisyUI 5; оформление задаётся токенами проекта, поэтому одинаковые элементы выглядят одинаково на всех страницах.</p>
  </section>
  <section class="flex flex-col gap-4">
    <h2 class="text-xl font-semibold">Уровни</h2>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">${layers.map(([title, text]) => `
      <div class="flex flex-col gap-2 rounded-sm bg-base-200 p-5">
        <h3 class="text-base font-medium">${title}</h3>
        <p class="text-sm">${text}</p>
      </div>`).join('')}
    </div>
  </section>
  <section class="flex flex-col gap-4">
    <h2 class="text-xl font-semibold">Источники</h2>
    <div class="overflow-x-auto rounded-sm border border-base-300">
      <table class="table">
        <tbody>${sources.map(([path, text]) => `<tr><td><code>${path}</code></td><td>${text}</td></tr>`).join('')}</tbody>
      </table>
    </div>
  </section>
  <section class="flex flex-col gap-3">
    <h2 class="text-xl font-semibold">Правила</h2>
    <ul class="flex list-disc flex-col gap-2 pl-5 text-sm md:text-base">
      <li>Используйте классы ролей и токенов (<code>bg-primary</code>, <code>text-2xl</code>, <code>rounded-sm</code>, <code>shadow-card</code>), а не HEX, пиксели и произвольные значения вида <code>[…]</code>.</li>
      <li>Новый токен вводится только после согласования и добавляется в его источник, а не в разметку страницы.</li>
      <li>Сначала штатный компонент daisyUI и его модификаторы; собственная разметка — только когда готового варианта нет.</li>
      <li>Иконки — только Iconsax (Linear и Bold), кроме флагов, карт и расширений документов.</li>
      <li>Класс, которого нет в <code>core/ui.min.css</code>, появляется после пересборки по <code>docs/css-build.md</code>.</li>
    </ul>
  </section>
</div>`;

export default {
  title: 'Дизайн-система/Введение',
  parameters: { catalog: { component: 'design-system-intro' }, docs: { codePanel: false } },
};

export const Intro = {
  name: 'Введение',
  render: () => page,
};
