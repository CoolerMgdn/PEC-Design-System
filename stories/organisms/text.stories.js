import framed from '../../../core/project-components/text/01-framed.html?raw';
import sections from '../../../core/project-components/text/02-sections.html?raw';
import lists from '../../../core/project-components/text/03-lists.html?raw';
import note from '../../../core/project-components/text/04-note.html?raw';
import callout from '../../../core/project-components/text/05-callout.html?raw';
import footnotes from '../../../core/project-components/text/06-footnotes.html?raw';
import requirements from '../../../core/project-components/text/07-requirements.html?raw';
import lines from '../../../core/project-components/text/08-lines.html?raw';
import advantages from '../../../core/project-components/text/09-advantages.html?raw';
import { fillFileIcons } from '../molecules/file-icons.js';

export default {
  title: 'Организмы/Text',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'organism-text' },
    docs: {
      description: {
        component: [
          'Оформление текста на страницах: списки, сноски, плашки, заметки, акцентные абзацы (бывший Text Block вошёл сюда). Источник — `core/project-components/text`.',
          'Маркеры списков: галочка — иконка `linear/tick-circle text-secondary`; тире — `span.mt-2.5.h-px.w-3.bg-base-content/40`; квадрат — `span.mt-2.size-1.5.bg-base-content/60` (оба `aria-hidden="true"`). Нумерованный список — `ol` со ссылками `link link-secondary font-semibold`.',
          'Framed — текст в рамке `rounded-2xl border border-base-300 p-5 md:p-8`, список в две колонки, термины с подсказкой `tooltip`. Sections — строки «заголовок + список» (`md:grid-cols-3`) с разделителями. Note — серая плашка «Обратите внимание» `rounded-2xl bg-base-200`. Footnotes — сноски со звёздочкой `text-primary`.',
          'Файлы для скачивания — отдельная молекула Download. Requirements — список требований с выделенными значениями, сноской и ссылкой на файл (Download).',
          'Callout — заметка с иконкой: `alert alert-warning alert-soft items-start` (`role="note"`), заголовок `font-semibold`, ссылка-вопрос с иконкой `message-question`.',
          'Lines — абзац между линиями: `border-y border-base-300 py-6 text-center md:py-8 md:text-base`.',
          'Advantages — преимущества с номерами на шкале Timeline: номер `text-xl font-semibold text-secondary` (в макете — зелёный, но зелёный текст на белом не проходит по контрасту), заголовок `font-medium`, описание `text-sm text-base-content/70`.',
        ].join('\n\n'),
      },
    },
  },
};

const story = (name, html) => ({ name, render: () => html, parameters: { docs: { source: { code: html } } } });

export const Framed = story('Framed', framed);
export const Sections = story('Sections', sections);
export const Lists = story('Lists', lists);
export const Note = story('Note', note);
export const Callout = story('Callout', callout);
export const Footnotes = story('Footnotes', footnotes);
export const Requirements = { ...story('Requirements', requirements), render: () => fillFileIcons(requirements) };
export const Lines = story('Lines', lines);
export const Advantages = story('Advantages', advantages);
