import toast from '../../../core/project-components/toast/01-toast.html?raw';
import dismissible from '../../../core/project-components/toast/02-dismissible.html?raw';
import cookie from '../../../core/project-components/toast/03-cookie.html?raw';

export default {
  title: 'Молекулы/Toast',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'molecule-toast' },
    docs: {
      description: {
        component: [
          'Всплывающие уведомления поверх страницы на основе `toast` daisyUI. Источник — `core/project-components/toast`.',
          'Контейнер — `toast toast-end toast-bottom` с `aria-live="polite"`, закреплён в углу экрана (в Storybook показан внутри рамки примера). Уведомление — `alert w-80 border-base-300 bg-base-100 shadow-card` с иконкой роли Iconsax Bold (`info-circle`, `tick-circle`, `danger`, `close-circle`) и текстом `text-sm`; новые добавляются снизу стопки.',
          'Dismissible — `alert-horizontal`, справа кнопка закрытия `btn btn-ghost btn-sm btn-square` с `add rotate-45`, `aria-label` и `data-dismiss="alert"`; действие («Отменить») — `btn btn-ghost btn-sm text-secondary`. Кнопки с заливкой в тостах не используются. Появление — плавный выезд снизу (тема ПЭК).',
          'Cookie — уведомление о файлах cookie в левом нижнем углу (`toast toast-start toast-bottom`), на мобильных — во всю ширину снизу. Карточка `section[role=region]` с `aria-label`, `rounded-2xl border border-base-300 bg-base-100 p-4 shadow-card sm:w-96`; текст `text-sm` со ссылкой на политику, кнопки без заливки, как во всех тостах: «Понятно» (`btn-outline btn-secondary btn-sm`, `data-dismiss`) и «Подробнее» (`btn-ghost`). Не перекрывает содержимое и не блокирует страницу; после согласия скрипт страницы запоминает выбор и больше не показывает уведомление.',
          'Toast — для коротких подтверждений действия пользователя; скрывается скриптом через 4–6 секунд, ошибки и уведомления с действием — только вручную. Сообщения, которые нужно прочитать до продолжения работы, выводите Alert в контенте.',
        ].join('\n\n'),
      },
    },
  },
};

export const Default = {
  name: 'Default',
  render: () => toast,
  parameters: { docs: { source: { code: toast } } },
};

export const Dismissible = {
  name: 'Dismissible',
  render: () => dismissible,
  parameters: { docs: { source: { code: dismissible } } },
};

export const Cookie = {
  name: 'Cookie',
  render: () => cookie,
  parameters: { docs: { source: { code: cookie } } },
};
