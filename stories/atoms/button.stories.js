import variants from '../../../core/project-components/button/01-variants.html?raw';
import sizes from '../../../core/project-components/button/02-sizes.html?raw';
import icons from '../../../core/project-components/button/03-icons.html?raw';
import states from '../../../core/project-components/button/04-states.html?raw';
import onColor from '../../../core/project-components/button/05-on-color.html?raw';
import soft from '../../../core/project-components/button/06-soft.html?raw';

export default {
  title: 'Атомы/Button',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'atom-button' },
    docs: {
      description: {
        component: [
          'Кнопки на основе `btn` daisyUI. Источник — `core/project-components/button`.',
          'Варианты: основная `btn-primary` — главное действие экрана (одно на блок); дополнительная `btn-secondary`; успех `btn-success` — подтверждение выполненного действия, например после отправки формы (сообщение о результате дублируйте в элементе `role="status"`); светлая `btn`; контурная `btn-outline btn-secondary`; прозрачная `btn-ghost`; ссылка `btn-link`. Монохромные: на светлом фоне — тёмная `btn btn-neutral` и контурная тёмная `btn btn-outline btn-neutral`; на цветном и тёмном фоне — основная, светлая `btn` или контурная светлая `btn btn-outline border-white text-white hover:bg-white hover:text-base-content`; прозрачную там не используйте.',
          'Кнопки плоские, без теней (токен темы `--depth: 0`). Наведение и нажатие — штатное затемнение daisyUI.',
          'Soft — приглушённые кнопки `btn btn-soft` + цветовая роль (`btn-primary`, `btn-secondary`, `btn-accent`, `btn-success`, `btn-info`, `btn-warning`, `btn-error`): светлый фон оттенка роли и цветной текст. У primary, accent, success, warning и error тема ПЭК затемняет текст (`--btn-rest-fg`), чтобы контраст был не ниже 4,5:1. Для второстепенных действий рядом с основной кнопкой и в плотных интерфейсах; пока в макетах не используется.',
          'Размеры: `btn-sm` (32 px), по умолчанию (40 px), `btn-xl` (56 px); основной — средний, шрифт у `btn-xl` 16 px. Иконки Iconsax `size-5`; кнопке только с иконкой нужен `aria-label`.',
        ].join('\n\n'),
      },
    },
  },
};

export const Colors = {
  name: 'Colors',
  render: () => variants,
  parameters: { docs: { source: { code: variants } } },
};

export const Soft = {
  name: 'Soft',
  render: () => soft,
  parameters: { docs: { source: { code: soft } } },
};

export const Sizes = {
  name: 'Sizes',
  render: () => sizes,
  parameters: { docs: { source: { code: sizes } } },
};

export const Icons = {
  name: 'With icons',
  render: () => icons,
  parameters: { docs: { source: { code: icons } } },
};

export const States = {
  name: 'States',
  render: () => states,
  parameters: { docs: { source: { code: states } } },
};

export const OnColor = {
  name: 'Monochrome',
  render: () => onColor,
  parameters: { docs: { source: { code: onColor } } },
};
