// Заполнение параметров изображения {{IMAGE_*}} демо-фото витрины (ui-kit/assets/demo/responsive-image).
// На странице эти параметры заполняются её собственными файлами AVIF и WebP (docs/html-image-template.md).
import manifest from '../../assets/demo/responsive-image/manifest.json';

const images = import.meta.glob('../../assets/demo/responsive-image/*.{avif,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const variants = (mimeType) => manifest.files
  .filter((file) => file.mimeType === mimeType)
  .sort((left, right) => left.width - right.width);
const url = (file) => images[`../../assets/demo/responsive-image/${file.file}`];
const srcset = (files) => files.map((file) => `${url(file)} ${file.width}w`).join(', ');

export function fillDemoImage(html, sizes) {
  const fallback = variants('image/webp').at(-1);
  const values = {
    IMAGE_AVIF_SRCSET: srcset(variants('image/avif')),
    IMAGE_WEBP_SRCSET: srcset(variants('image/webp')),
    IMAGE_SRC: url(fallback),
    IMAGE_SIZES: sizes,
    IMAGE_WIDTH: fallback.width,
    IMAGE_HEIGHT: fallback.height,
    IMAGE_ALT: manifest.alt,
  };
  return Object.entries(values)
    .reduce((result, [key, value]) => result.replaceAll(`{{${key}}}`, String(value).replaceAll('"', '&quot;')), html);
}
