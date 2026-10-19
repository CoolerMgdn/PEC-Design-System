import manifest from '../../../core/icons/iconsax/manifest.json';

const files = import.meta.glob('../../../core/icons/iconsax/{linear,bold}/*.svg', {
  eager: true,
  query: '?raw',
  import: 'default',
});
const svg = (style, name) => files[`../../../core/icons/iconsax/${style}/${name}.svg`] ?? '';
const withClass = (markup, cls) => markup.replace('<svg ', `<svg class="${cls}" aria-hidden="true" `);

const categories = [...new Set(manifest.icons.map((icon) => icon.category))];

const cell = (icon) => `
      <button type="button" class="flex flex-col items-center gap-2 rounded-sm p-3 text-center hover:bg-base-200 focus-visible:bg-base-200" data-icon="${icon.name}" data-category="${icon.category}" title="Скопировать SVG">
        <span data-icon-style="linear">${withClass(svg('linear', icon.name), 'size-6')}</span>
        <span data-icon-style="bold" class="hidden">${withClass(svg('bold', icon.name), 'size-6')}</span>
        <span class="w-full break-all text-xs text-neutral-500">${icon.name}</span>
      </button>`;

const gallery = `<div class="flex w-full flex-col gap-6" data-icons-gallery>
  <div class="flex flex-col gap-4 md:flex-row md:items-end">
    <label class="input w-full md:max-w-sm">
      ${withClass(svg('linear', 'search-normal'), 'size-5 opacity-50')}
      <input type="search" placeholder="Поиск по названию, например truck" data-icons-search aria-label="Поиск иконки">
    </label>
    <div class="join" role="radiogroup" aria-label="Стиль">
      <input class="join-item btn btn-sm" type="radio" name="icons-style" value="linear" aria-label="Linear" checked>
      <input class="join-item btn btn-sm" type="radio" name="icons-style" value="bold" aria-label="Bold">
    </div>
    <span class="text-xs text-neutral-500 md:ml-auto" data-icons-count></span>
  </div>
  <p class="text-xs text-neutral-500" data-icons-status role="status">Нажмите на иконку, чтобы скопировать её SVG.</p>
  ${categories.map((category) => `
  <section class="flex flex-col gap-3" data-icons-section>
    <h2 class="text-base font-medium capitalize">${category}</h2>
    <div class="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">${manifest.icons.filter((icon) => icon.category === category).map(cell).join('')}
    </div>
  </section>`).join('')}
</div>`;

const usage = `<!-- Декоративная иконка рядом с текстом: SVG из core/icons/iconsax/linear/truck-fast.svg -->
<span class="inline-flex items-center gap-2">
  <svg class="size-6 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">…</svg>
  Экспресс-доставка
</span>

<!-- Кнопка только с иконкой: подпись обязательна -->
<button class="btn btn-square btn-ghost" type="button" aria-label="Поиск">
  <svg class="size-6" aria-hidden="true" …>…</svg>
</button>`;

const sizes = `<div class="flex flex-col gap-6">
  <div class="flex flex-wrap items-end gap-6">${[['size-4', 16], ['size-5', 20], ['size-6', 24], ['size-8', 32], ['size-10', 40]].map(([cls, px]) => `
    <div class="flex flex-col items-center gap-2">${withClass(svg('linear', 'truck-fast'), cls)}<code class="text-xs">${cls} · ${px}</code></div>`).join('')}
  </div>
  <div class="flex flex-wrap items-center gap-6">
    ${withClass(svg('bold', 'truck-fast'), 'size-8 text-primary')}
    ${withClass(svg('bold', 'truck-fast'), 'size-8 text-secondary')}
    ${withClass(svg('bold', 'truck-fast'), 'size-8 text-accent')}
    ${withClass(svg('bold', 'truck-fast'), 'size-8 text-brand-blue')}
    <span class="rounded-sm bg-secondary p-3 text-secondary-content">${withClass(svg('linear', 'truck-fast'), 'size-6')}</span>
  </div>
</div>`;

export default {
  title: 'Основы/Иконки',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'foundation-icons' },
    docs: {
      description: {
        component: `Vuesax Iconsax v1.0, стили Linear и Bold: ${manifest.icons.length} иконок. Исходники — \`core/icons/iconsax/{linear,bold}/<name>.svg\`, список — \`manifest.json\`. Иконки 24×24 и окрашиваются через \`currentColor\`: цвет задаёт класс \`text-*\`, размер — \`size-*\`. Вставляйте SVG в разметку целиком; декоративной иконке добавляйте \`aria-hidden="true"\`, кнопке только с иконкой — \`aria-label\`. Иконки флагов, карт и расширений документов из макета остаются прежними и будут отдельным набором.`,
      },
    },
  },
};

export const Gallery = {
  name: 'Все иконки',
  render: () => gallery,
  parameters: { docs: { source: { code: usage } } },
};

export const SizesAndColors = {
  name: 'Размеры и цвет',
  render: () => sizes,
  parameters: { docs: { source: { code: usage } } },
};
