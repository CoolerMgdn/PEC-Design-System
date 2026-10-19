import soft from '../../../core/project-components/badge/01-soft.html?raw';
import solid from '../../../core/project-components/badge/02-solid-and-outline.html?raw';
import sizes from '../../../core/project-components/badge/03-sizes.html?raw';
import status from '../../../core/project-components/badge/04-icon-and-status.html?raw';
import counter from '../../../core/project-components/badge/05-counter.html?raw';
import ad from '../../../core/project-components/badge/06-ad.html?raw';

export default {
  title: 'Атомы/Badge',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'atom-badge' },
    docs: {
      description: {
        component: [
          'Бейджи daisyUI для статусов, меток и счётчиков. Источник — `core/project-components/badge`.',
          'Soft — основной вид: `badge badge-soft badge-<роль>`; у primary, accent, success, warning, error текст затемнён до контраста ≥ 4,5:1 (тема ПЭК). Статусы груза: в пути — info, доставлен — success, ожидает оплаты — warning, отменён — error; акции — primary; нейтральная метка — `badge` без роли.',
          'Solid — только `badge-primary`, `badge-secondary`, `badge-info`, `badge-neutral` (у success, warning, error и accent белый текст не проходит по контрасту). Outline — `badge-outline` для фильтров и тегов.',
          'Размеры — `badge-xs`, `badge-sm`, по умолчанию, `badge-lg`. Иконка — Iconsax Bold `size-4` перед текстом. Точка статуса — `status status-<роль>` с подписью рядом. Счётчик — бейдж внутри кнопки или `indicator` + `indicator-item badge badge-xs badge-primary` на иконке; число дублируется в `aria-label` кнопки.',
          'Ad — пометка «Реклама» с данными для маркировки по закону: кнопка `badge badge-sm cursor-help` с иконкой `info-circle`, текст — `tooltip-content` (`aria-describedby`), открывается наведением и фокусом. Текст подсказки подставляется для каждого креатива: «Реклама», рекламодатель с ИНН, erid — токен из ОРД. На фото и тёмном фоне — `bg-neutral-content/20 text-neutral-content`.',
        ].join('\n\n'),
      },
    },
  },
};

export const Soft = {
  name: 'Soft',
  render: () => soft,
  parameters: { docs: { source: { code: soft } } },
};

export const SolidAndOutline = {
  name: 'Solid and outline',
  render: () => solid,
  parameters: { docs: { source: { code: solid } } },
};

export const Sizes = {
  name: 'Sizes',
  render: () => sizes,
  parameters: { docs: { source: { code: sizes } } },
};

export const IconAndStatus = {
  name: 'Icon and status',
  render: () => status,
  parameters: { docs: { source: { code: status } } },
};

export const Counter = {
  name: 'Counter',
  render: () => counter,
  parameters: { docs: { source: { code: counter } } },
};

export const Ad = {
  name: 'Ad',
  render: () => ad,
  parameters: { docs: { source: { code: ad } } },
};
