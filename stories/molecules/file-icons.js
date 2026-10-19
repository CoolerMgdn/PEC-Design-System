import excel from '../../../core/icons/files/excel.svg?url';
import word from '../../../core/icons/files/word.svg?url';
import pdf from '../../../core/icons/files/pdf.svg?url';
import image from '../../../core/icons/files/image.svg?url';
import zip from '../../../core/icons/files/zip.svg?url';

// Пути иконок файлов в разметке — как на странице (/core/icons/files/…); в Storybook подменяются адресами сборки.
const icons = { excel, word, pdf, image, zip };

export const fillFileIcons = (html) =>
  Object.entries(icons).reduce((out, [type, url]) => out.replaceAll(`/core/icons/files/${type}.svg`, url), html);
