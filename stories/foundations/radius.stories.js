const scale = [
  ['rounded-xs', '--radius-xs', 'Мелкие детали: индикаторы, метки на графиках'],
  ['rounded-sm', '--radius-sm', 'Карточки, блоки, таблицы, модальные окна'],
  ['rounded-md', '--radius-md', 'Вложенные элементы внутри карточек'],
  ['rounded-lg', '--radius-lg', 'Кнопки, поля, чипсы, бейджи'],
  ['rounded-xl', '--radius-xl', 'Крупные промо-блоки, баннеры'],
  ['rounded-2xl', '--radius-2xl', 'Крупные изображения, обложки'],
  ['rounded-3xl', '--radius-3xl', 'Декоративные формы'],
  ['rounded-4xl', '--radius-4xl', 'Декоративные формы'],
  ['rounded-full', null, 'Круглые кнопки-иконки, аватары, radio, чипсы-«пилюли»'],
];

const daisy = [
  ['--radius-field', '--radius-lg', 'Button, Input, Select, Textarea, Chip'],
  ['--radius-box', '--radius-sm', 'Card, Modal, Alert, Dropdown, Table'],
  ['--radius-selector', '--radius-lg', 'Badge, Checkbox, Toggle'],
];

const page = `<div class="flex w-full flex-col gap-10">
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">Шкала Tailwind</h2>
      <p class="text-sm text-neutral-500">Стандартная шкала скруглений Tailwind — та же, что на сайте ПЭК. Для собственной разметки выбирайте класс шкалы; произвольные значения в квадратных скобках не используются.</p>
    </div>
    <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">${scale.map(([cls, token, use]) => `
      <div class="flex flex-col gap-3">
        <div class="flex h-24 items-center justify-center border-2 border-secondary bg-base-200 ${cls}">
          <code class="text-xs">${cls}</code>
        </div>
        <div class="flex flex-col gap-1 text-xs">
          ${token ? `<span><code>${token}</code> = <span data-token="${token}"></span></span>` : '<span>50%</span>'}
          <span class="text-neutral-500">${use}</span>
        </div>
      </div>`).join('')}
    </div>
  </section>
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">Радиусы компонентов daisyUI</h2>
      <p class="text-sm text-neutral-500">Компоненты daisyUI читают три своих переменные. В <code>core/tokens.min.css</code> они ссылаются на шкалу Tailwind, поэтому отдельных значений у них нет. Не добавляйте готовым компонентам классы <code>rounded-*</code> только ради повторения радиуса.</p>
    </div>
    <div class="overflow-x-auto rounded-sm border border-base-300">
      <table class="table">
        <thead><tr><th>Переменная daisyUI</th><th>Ссылается на</th><th>Компоненты</th></tr></thead>
        <tbody>${daisy.map(([token, ref, use]) => `<tr><td><code>${token}</code></td><td><code>${ref}</code> (<span data-token="${ref}"></span>)</td><td>${use}</td></tr>`).join('')}</tbody>
      </table>
    </div>
  </section>
</div>`;

const usage = `<article class="rounded-sm bg-base-200 p-6">Карточка</article>
<span class="rounded-lg bg-base-300 px-3 py-1">Метка</span>
<img class="rounded-2xl" src="…" alt="…">`;

export default {
  title: 'Основы/Скругления',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'foundation-radius' },
    docs: { description: { component: 'Шкала скруглений Tailwind — `core/theme.css` (`--radius-*`). Радиусы компонентов daisyUI ссылаются на неё в `core/tokens.min.css`. Правила — `docs/rules-template.md#скругления`.' } },
  },
};

export const Radius = {
  name: 'Скругления',
  render: () => page,
  parameters: { docs: { source: { code: usage } } },
};
