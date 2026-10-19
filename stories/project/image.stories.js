import image from '../../../core/project-components/image/01-image.html?raw';
import container from '../../../core/project-components/container/01-container.html?raw';
import manifest from '../../assets/demo/responsive-image/manifest.json';

const assetDirectory = '../../assets/demo/responsive-image/';
const images = import.meta.glob('../../assets/demo/responsive-image/*.{avif,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const variants = (mimeType) => manifest.files
  .filter((file) => file.mimeType === mimeType)
  .sort((left, right) => left.width - right.width);

function imageUrl(file) {
  const url = images[assetDirectory + file.file];
  if (!url) throw new Error(`Missing image demo asset: ${file.file}`);
  return url;
}

const srcset = (files) => files.map((file) => `${imageUrl(file)} ${file.width}w`).join(', ');
const webp = variants('image/webp');
const fallback = webp.at(-1);

// This slot fills the existing project container. Recalculate sizes for a card or column.
const values = {
  IMAGE_AVIF_SRCSET: srcset(variants('image/avif')),
  IMAGE_WEBP_SRCSET: srcset(webp),
  IMAGE_SRC: imageUrl(fallback),
  IMAGE_SIZES: '(min-width: 80rem) 78.5rem, (min-width: 64rem) 62.5rem, (min-width: 48rem) 46.5rem, calc(100vw - 1.5rem)',
  IMAGE_WIDTH: fallback.width,
  IMAGE_HEIGHT: fallback.height,
  IMAGE_ALT: manifest.alt,
};

const escapeAttribute = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

// Substitution belongs only to the showcase. A real page contains completed static HTML.
const preview = image.replace(/\{\{([A-Z_]+)\}\}/g, (_, name) => {
  if (!Object.hasOwn(values, name)) throw new Error(`Unknown image template parameter: ${name}`);
  return escapeAttribute(values[name]);
});
const contentMarker = '    Содержимое';
if (!container.includes(contentMarker)) throw new Error('Project container content marker not found');
const wrappedPreview = container.replace(
  contentMarker,
  preview.trim().split(/\r?\n/).map((line) => `    ${line}`).join('\n'),
);

export default {
  title: 'Наши компоненты/Image',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'project-image' },
    docs: {
      description: {
        component: [
          'Нативный `<picture>`: AVIF и резервный WebP, полная ширина родителя и исходные пропорции. JavaScript для работы изображения не нужен.',
          'В Code показан HTML-шаблон из `core/project-components/image/01-image.html`. Перед вставкой на страницу заполните все `{{IMAGE_*}}` обычными значениями; обработчик шаблона на сайте не требуется.',
          '`IMAGE_SRC` — постоянный путь к WebP. `IMAGE_AVIF_SRCSET` и `IMAGE_WEBP_SRCSET` — списки реальных файлов с их шириной (`480w` и т. п.). Все варианты должны сохранять один кадр и пропорции.',
          '`IMAGE_SIZES` задаёт фактическую ширину места изображения и заполняется одинаково у source и img. Превью использует полный проектный контейнер с боковыми полями; для карточки или колонки значение нужно пересчитать.',
          '`IMAGE_WIDTH` и `IMAGE_HEIGHT` — размеры резервного файла; `IMAGE_ALT` — описание по смыслу изображения, либо пустая строка для декоративного. Текст и значения атрибутов нужно HTML-экранировать.',
          'Пример виден на первом экране, поэтому использует `loading="eager"`. Для изображения ниже первого экрана замените его на `loading="lazy"`. При необходимости скругления добавьте существующий `rounded-sm` на img.',
          'Демонстрационные изображения находятся только в ui-kit. На странице используйте собственные ресурсы. Максимальный исходник — 1536 × 1024 px; он не обеспечивает полную детализацию DPR 2 при ширине 1256 CSS px.',
        ].join('\n\n'),
      },
    },
  },
};

export const Basic = {
  name: 'Responsive image',
  render: () => wrappedPreview,
  parameters: { docs: { story: { iframeHeight: 600 }, source: { code: image } } },
};
