import upload from '../../../core/project-components/file-input/01-upload.html?raw';
import dropzone from '../../../core/project-components/file-input/02-dropzone.html?raw';

export default {
  title: 'Молекулы/File Input',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-file-input' },
    docs: {
      description: {
        component: [
          'Прикрепление файлов к форме. Источник — `core/project-components/file-input`.',
          'Кнопка — `label.btn rounded-sm border-base-300 bg-base-100 font-medium hover:border-secondary` с иконкой `document-upload` и скрытым `input type="file" class="sr-only"`; требования к файлам — `text-xs text-base-content/70`, связаны с полем через `aria-describedby`. На десктопе подсказка справа от кнопки, на мобильных — под кнопкой, кнопка во всю ширину.',
          'Подпись кнопки зависит от назначения: «Прикрепить файлы», «Прикрепить фото», «Прикрепить файл с резюме»; `accept` и текст требований — по форме.',
          'Список прикреплённых файлов и ошибка размера выводятся скриптом формы. Удаление — `btn btn-ghost btn-square btn-xs text-primary` с иконкой `add` и `rotate-45`, `aria-label` с именем файла. Ошибка — нейтральный `alert` с иконкой `info-circle text-error` и списком файлов.',
          'Dropzone (предложение) — зона `label` с `border-2 border-dashed border-base-300 rounded-xl`, наведение и фокус — `secondary`; файлы — карточки `rounded-lg border border-base-300 p-3` с иконкой типа, размером и удалением `trash`. Загрузка — `progress progress-secondary h-1`, ошибка — рамка `border-error`, иконка `danger`, причина у самого файла. Перетаскивание и прогресс выводит скрипт формы; без скрипта зона работает как обычный выбор файлов.',
        ].join('\n\n'),
      },
    },
  },
};

export const Upload = {
  name: 'Upload',
  render: () => upload,
  parameters: { docs: { source: { code: upload } } },
};

export const Dropzone = {
  name: 'Dropzone',
  render: () => dropzone,
  parameters: { docs: { source: { code: dropzone } } },
};
