const breakpoints = [
  ['—', '0–639', 'Смартфоны 360–480 px', 'базовые классы без префикса'],
  ['sm', '640', 'Крупные смартфоны', 'sm:'],
  ['md', '768', 'Планшеты 769–1279 px', 'md:'],
  ['lg', '1024', 'Планшеты в альбомной ориентации', 'lg:'],
  ['xl', '1280', 'Десктопы 1280–1920 px', 'xl:'],
];

const bpTable = `
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">Брейкпоинты</h2>
      <p class="text-sm text-neutral-500">Стандартные брейкпоинты Tailwind. Вёрстка mobile-first: сначала узкий экран, затем префиксы для широких. Макеты Figma рисуются на ширинах 360, 480, 769, 1280 (фон до 1920).</p>
    </div>
    <div class="overflow-x-auto rounded-sm border border-base-300">
      <table class="table">
        <thead><tr><th>Префикс</th><th>От, px</th><th>Устройства в Figma</th><th>Использование</th></tr></thead>
        <tbody>${breakpoints.map((r) => `<tr>${r.map((c, i) => `<td>${i === 3 ? `<code>${c}</code>` : c}</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
  </section>`;

const container = `
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">Контейнер</h2>
      <p class="text-sm text-neutral-500">Ширина содержимого и боковые поля задаёт компонент «Наши компоненты/Container». Не дублируйте его max-w и px внутри секции.</p>
    </div>
    <div class="overflow-x-auto rounded-sm border border-base-300">
      <table class="table">
        <thead><tr><th>Экран</th><th>Ширина содержимого</th><th>Поля</th><th>Отступ секции</th></tr></thead>
        <tbody>
          <tr><td>&lt; 768</td><td>100%</td><td><code>px-3</code> (12)</td><td><code>my-5</code> (20)</td></tr>
          <tr><td>md</td><td><code>max-w-3xl</code> (768)</td><td>12</td><td><code>md:my-8</code> (32)</td></tr>
          <tr><td>lg</td><td><code>max-w-5xl</code> (1024)</td><td>12</td><td><code>lg:my-10</code> (40)</td></tr>
          <tr><td>xl</td><td><code>max-w-7xl</code> (1280)</td><td>12</td><td>40</td></tr>
        </tbody>
      </table>
    </div>
  </section>`;

const scaleBar = (cls, width, px) => `
      <div class="flex items-center gap-4">
        <code class="w-24 shrink-0 text-xs">${cls}</code>
        <span class="h-3 rounded-lg bg-secondary ${width}"></span>
        <span class="text-xs text-neutral-500">${px} px</span>
      </div>`;

const scale = (title, description, items) => `
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">${title}</h2>
      <p class="text-sm text-neutral-500">${description}</p>
    </div>
    <div class="flex flex-col gap-3">${items.map((item) => scaleBar(...item)).join('')}
    </div>
  </section>`;

const inner = (cls, label) => `
      <div class="rounded-sm border border-dashed border-secondary ${cls}">
        <div class="rounded-lg bg-base-200 px-3 py-2 text-xs">${label}</div>
      </div>`;

const innerBlock = `
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">Внутренние отступы</h2>
      <p class="text-sm text-neutral-500">Поля внутри блока по бокам. Крупные блоки — 32–60, средние карточки — 20–28, компактные элементы — 12–16 px.</p>
    </div>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      ${inner('p-3', 'p-3 · 12')}${inner('p-4', 'p-4 · 16')}${inner('p-5', 'p-5 · 20')}${inner('p-6', 'p-6 · 24')}${inner('p-7', 'p-7 · 28')}
      ${inner('p-8', 'p-8 · 32')}${inner('p-10', 'p-10 · 40')}${inner('p-15', 'p-15 · 60')}
    </div>
  </section>`;

const page = `<div class="flex w-full flex-col gap-12">
  <section class="flex flex-col gap-2">
    <h2 class="text-xl font-semibold">Шаг сетки</h2>
    <p class="text-base">Все отступы кратны шагу Tailwind <code>--spacing</code> = 4 px: <code>p-4</code> = 16 px, <code>gap-6</code> = 24 px. Новые значения отступов не вводятся.</p>
  </section>
  ${bpTable}
  ${container}
  ${scale('Глобальные отступы', 'Расстояния между крупными объектами внутри секции и между блоками на лендингах: 40–120 px, на мобильных — на ступень-две меньше.', [['py-10', 'w-10', 40], ['py-15', 'w-15', 60], ['py-20', 'w-20', 80], ['py-25', 'w-25', 100], ['py-30', 'w-30', 120]])}
  ${innerBlock}
</div>`;

const usage = `<!-- Отступ между крупными блоками: мобильный → десктоп -->
<div class="flex flex-col gap-10 lg:gap-20">…</div>

<!-- Карточка: внутренние поля -->
<div class="rounded-sm bg-base-200 p-5 md:p-7">…</div>`;

export default {
  title: 'Основы/Сетка и отступы',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'foundation-spacing' },
    docs: { description: { component: 'Брейкпоинты и шкала отступов — стандартные Tailwind. Правила применения — `docs/rules-template.md#адаптивность-и-отступы`.' } },
  },
};

export const Spacing = {
  name: 'Сетка и отступы',
  render: () => page,
  parameters: { docs: { source: { code: usage } } },
};
