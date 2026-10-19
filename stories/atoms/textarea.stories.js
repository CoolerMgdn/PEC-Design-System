import textarea from '../../../core/project-components/textarea/01-textarea.html?raw';
import labelInside from '../../../core/project-components/textarea/02-label-inside.html?raw';
import floatingLabel from '../../../core/project-components/textarea/03-floating-label.html?raw';

export default {
  title: 'Атомы/Textarea',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'atom-textarea' },
    docs: {
      description: {
        component: [
          'Многострочное поле daisyUI `textarea`. Источник — `core/project-components/textarea`.',
          'Наведение и фокус — как у Input (тема ПЭК). Ограничение длины — `maxlength` с подсказкой; ошибка — `textarea-error`, `aria-invalid="true"` и текст `label text-error`.',
          'Label inside — подпись внутри поля: `label.absolute.top-2.5.left-3.text-xs.text-base-content/70` над текстом, у поля `pt-7`.',
          'Floating label — `label.floating-label` с `span` и `textarea`: подсказка в поле при вводе поднимается на рамку, как у Input.',
        ].join('\n\n'),
      },
    },
  },
};

export const States = {
  name: 'States',
  render: () => textarea,
  parameters: { docs: { source: { code: textarea } } },
};

export const LabelInside = {
  name: 'Label inside',
  render: () => labelInside,
  parameters: { docs: { source: { code: labelInside } } },
};

export const FloatingLabel = {
  name: 'Floating label',
  render: () => floatingLabel,
  parameters: { docs: { source: { code: floatingLabel } } },
};
