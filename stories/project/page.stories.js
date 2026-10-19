import pageTemplate from '../../../docs/html-template.md?raw';
import headTemplate from '../../../docs/html-head-template.md?raw';
import bodyTemplate from '../../../docs/html-body-template.md?raw';
import mainTemplate from '../../../docs/html-main-template.md?raw';
import header from '../../../core/project-components/header/01-header.html?raw';
import footer from '../../../core/project-components/footer/01-footer.html?raw';
import fonts from '../../../core/fonts.min.css?inline';
import styles from '../../../core/ui.min.css?inline';
import tokens from '../../../core/tokens.min.css?inline';

const images = import.meta.glob('../../../core/project-components/{header,footer}/assets/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

function htmlFrom(markdown, filename) {
  const match = markdown.match(/```html\r?\n([\s\S]*?)\r?\n```/);
  if (!match) throw new Error(`HTML template not found: ${filename}`);
  return match[1].replaceAll('\r\n', '\n');
}

function replaceOnce(html, marker, content) {
  const parts = html.split(marker);
  if (parts.length !== 2) throw new Error(`Expected one template marker: ${marker}`);
  return parts[0] + content + parts[1];
}

function insertFragment(html, marker, fragment) {
  const line = html.split('\n').find((value) => value.trim() === marker);
  if (line === undefined) throw new Error(`Template marker not found: ${marker}`);
  const indentation = line.match(/^\s*/)[0];
  const content = fragment.trim().split(/\r?\n/).map((value) => indentation + value).join('\n');
  return replaceOnce(html, line, content);
}

// These values describe the Storybook example; no page is created in pages/.
// The example has no public URL, so both Code and preview omit canonical.
let head = replaceOnce(
  htmlFrom(headTemplate, 'html-head-template.md'),
  '  <link rel="canonical" href="{{PAGE_CANONICAL_URL}}{{PAGE_SLUG}}/{{PAGE_NAME}}/">\n',
  '',
);
head = replaceOnce(head, '<title></title>', '<title>Пустая страница — ПЭК</title>');
head = replaceOnce(head, '<meta name="description" content="">', '<meta name="description" content="Пример пустой страницы ПЭК с хедером и футером.">');
let main = htmlFrom(mainTemplate, 'html-main-template.md');
main = replaceOnce(main, '  <!-- Вставить блоки страницы -->\n', '');

let body = htmlFrom(bodyTemplate, 'html-body-template.md');
body = insertFragment(body, '<!-- Вставить полный HTML из core/project-components/header/01-header.html -->', header);
body = insertFragment(body, '<!-- Вставить полный main по docs/html-main-template.md -->', main);
body = insertFragment(body, '<!-- Вставить полный HTML из core/project-components/footer/01-footer.html -->', footer);

let source = htmlFrom(pageTemplate, 'html-template.md');
source = insertFragment(source, '<!-- Вставить полный head по docs/html-head-template.md -->', head);
source = insertFragment(source, '<!-- Вставить полный body по docs/html-body-template.md -->', body);

// Only the preview uses bundled assets and inline CSS. The Code panel keeps
// the standalone HTML, including resource paths and font preload from head.
let preview = source.replace(/\s*<link\b[^>]*\brel="preload"[^>]*>/g, '');
for (const [filename, css] of [['fonts.min.css', fonts], ['ui.min.css', styles], ['tokens.min.css', tokens]]) {
  preview = replaceOnce(preview, `<link rel="stylesheet" href="../../../core/${filename}">`, `<style>${css}</style>`);
}
for (const [filename, url] of Object.entries(images)) {
  preview = preview.replaceAll(filename.replace('../../../core/', '/core/'), url);
}

const escapeAttribute = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

export default {
  title: 'Наши компоненты/Page',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'project-page' },
    docs: {
      description: {
        component: 'Пустая страница по html-template: готовые хедер и футер, пустой main. В панели кода — полный HTML для `pages/<PAGE_SLUG>/<PAGE_NAME>/index.html` с демонстрационными title и description. У примера нет публичного URL, поэтому canonical отсутствует в коде и превью. Превью использует отдельный документ и локальные ресурсы Storybook, без preload шрифтов.',
      },
    },
  },
};

export const Empty = {
  name: 'Empty page',
  render: () => `<iframe title="Пустая страница ПЭК" sandbox="allow-same-origin" srcdoc="${escapeAttribute(preview)}"></iframe>`,
  parameters: { docs: { source: { code: source } } },
};
