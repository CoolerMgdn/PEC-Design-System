const swatch = (bg, fg, token, label) => `
    <div class="overflow-hidden rounded-sm border border-base-300">
      <div class="flex h-20 items-end p-3 ${bg} ${fg}">
        <span class="text-sm font-medium">${label}</span>
      </div>
      <div class="flex flex-col gap-1 bg-base-100 p-3 text-xs">
        <code class="font-medium">${bg}</code>
        <span class="text-neutral-500" data-token="${token}"></span>
      </div>
    </div>`;

const group = (title, description, items) => `
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">${title}</h2>
      <p class="text-sm text-neutral-500">${description}</p>
    </div>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">${items.join('')}
    </div>
  </section>`;

const roles = [
  ['bg-primary', 'text-primary-content', '--color-primary', 'primary'],
  ['bg-secondary', 'text-secondary-content', '--color-secondary', 'secondary'],
  ['bg-accent', 'text-accent-content', '--color-accent', 'accent'],
  ['bg-neutral', 'text-neutral-content', '--color-neutral', 'neutral'],
];
const states = [
  ['bg-success', 'text-success-content', '--color-success', 'success'],
  ['bg-warning', 'text-warning-content', '--color-warning', 'warning'],
  ['bg-error', 'text-error-content', '--color-error', 'error'],
  ['bg-info', 'text-info-content', '--color-info', 'info'],
];
const surfaces = [
  ['bg-base-100', 'text-base-content', '--color-base-100', 'base-100'],
  ['bg-base-200', 'text-base-content', '--color-base-200', 'base-200'],
  ['bg-base-300', 'text-base-content', '--color-base-300', 'base-300'],
  ['bg-base-content', 'text-base-100', '--color-base-content', 'base-content'],
];
const brand = [
  ['bg-brand-blue', 'text-white', '--color-brand-blue', 'brand-blue'],
  ['bg-primary', 'text-primary-content', '--color-primary', 'red (primary)'],
];

const grey = [
  ['#FAFAFA', 'bg-neutral-50'], ['#F5F5F5 / #F6F6F6', 'bg-base-200'], ['#E4E6E7', 'bg-base-300'],
  ['#DBDBDB', 'bg-neutral-300'], ['#AAAAAA', 'bg-neutral-400'], ['#757575', 'bg-neutral-500'],
  ['#2B2B2B', 'bg-base-content'], ['#FFF6D2', 'bg-yellow-50'],
];
const greyTable = `
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">Вспомогательные серые</h2>
      <p class="text-sm text-neutral-500">Цвета-помощники из Figma не вводятся отдельными токенами: используйте поверхность base-* или стандартную палитру Tailwind.</p>
    </div>
    <div class="overflow-x-auto rounded-sm border border-base-300">
      <table class="table">
        <thead><tr><th>Figma</th><th>Класс</th><th>Образец</th></tr></thead>
        <tbody>${grey.map(([hex, cls]) => `
          <tr><td>${hex}</td><td><code>${cls}</code></td><td><span class="block h-6 w-16 rounded-lg border border-base-300 ${cls}"></span></td></tr>`).join('')}
        </tbody>
      </table>
    </div>
  </section>`;

const page = `<div class="flex w-full flex-col gap-10">
  ${group('Смысловые роли', 'Фон всегда используется в паре со своим цветом содержимого: bg-primary + text-primary-content.', roles.map((r) => swatch(...r)))}
  ${group('Состояния', 'Сообщения об успехе, предупреждении, ошибке и информации.', states.map((r) => swatch(...r)))}
  ${group('Поверхности', 'Фон страницы и UI-компонентов; основной текст — text-base-content.', surfaces.map((r) => swatch(...r)))}
  ${group('Фирменные цвета', 'Сигнальный синий и карминово-красный (роль primary). Титан из брендбука в интерфейсах не используется. Для фонов секций действуют правила backgrounds брендбука.', brand.map((r) => swatch(...r)))}
  ${greyTable}
</div>`;

const usage = `<!-- Цветная поверхность: фон + парный цвет содержимого -->
<div class="bg-secondary text-secondary-content rounded-sm p-6">…</div>

<!-- Базовая поверхность -->
<div class="bg-base-200 text-base-content rounded-sm p-6">…</div>

<!-- Фирменный синий -->
<section class="bg-brand-blue text-white">…</section>`;

export default {
  title: 'Основы/Цвета',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'foundation-colors' },
    docs: {
      description: {
        component: 'Источник значений — `core/tokens.min.css` (значения ниже читаются из него в момент показа). Используйте классы ролей, а не HEX. Правила применения — `docs/rules-template.md#цвета-и-состояния`.',
      },
    },
  },
};

export const Palette = {
  name: 'Цвета',
  render: () => page,
  parameters: { docs: { source: { code: usage } } },
};
