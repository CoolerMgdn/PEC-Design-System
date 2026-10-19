import input from '../../../core/project-components/input/01-input.html?raw';
import withIcon from '../../../core/project-components/input/02-with-icon.html?raw';
import floating from '../../../core/project-components/input/03-floating-label.html?raw';
import states from '../../../core/project-components/input/04-states.html?raw';
import sizes from '../../../core/project-components/input/05-sizes.html?raw';
import phone from '../../../core/project-components/input/06-phone.html?raw';
import stepper from '../../../core/project-components/input/07-number-stepper.html?raw';
import phoneCountry from '../../../core/project-components/input/08-phone-country.html?raw';
import phoneFlags from '../../../core/project-components/input/09-phone-flags.html?raw';
import flag_ru from '../../../core/icons/flags/ru.svg?url';
import flag_kz from '../../../core/icons/flags/kz.svg?url';
import flag_by from '../../../core/icons/flags/by.svg?url';
import flag_uz from '../../../core/icons/flags/uz.svg?url';
import flag_kg from '../../../core/icons/flags/kg.svg?url';
import flag_tj from '../../../core/icons/flags/tj.svg?url';
import flag_am from '../../../core/icons/flags/am.svg?url';
import flag_az from '../../../core/icons/flags/az.svg?url';
import code from '../../../core/project-components/input/10-code.html?raw';
import phoneAuto from '../../../core/project-components/input/11-phone-auto.html?raw';
import affix from '../../../core/project-components/input/12-affix.html?raw';
import amount from '../../../core/project-components/input/13-amount.html?raw';
import errorTooltip from '../../../core/project-components/input/14-error-tooltip.html?raw';
import clearable from '../../../core/project-components/input/15-clearable.html?raw';

// Пути флагов в разметке — как на странице (/core/icons/flags/…); в Storybook подменяются адресами сборки.
const flags = { ru: flag_ru, kz: flag_kz, by: flag_by, uz: flag_uz, kg: flag_kg, tj: flag_tj, am: flag_am, az: flag_az };
const phoneFlagsPreview = Object.entries(flags).reduce((html, [code, url]) => html.replaceAll(`/core/icons/flags/${code}.svg`, url), phoneFlags);

export default {
  title: 'Атомы/Input',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'atom-input' },
    docs: {
      description: {
        component: [
          'Поле ввода daisyUI `input`. Источник — `core/project-components/input`.',
          'Состояния задаёт тема ПЭК (`core/theme.css`) без дополнительных классов: при наведении рамка светло-синяя, в фокусе — синяя `secondary`, без кольца; ошибка сохраняет красную рамку. Подсказка под полем — 4 px. Те же правила действуют для Select и Textarea.',
          'Подпись поля — `fieldset` с `label.fieldset-legend` и связью `for`/`id`; подсказка — `p.label`, связанная через `aria-describedby`. Ошибка — `input-error`, текст `label text-error` и `aria-invalid="true"`; для нативной проверки — `validator` и `validator-hint hidden`.',
          'Иконка внутри поля — `label.input` с Iconsax `size-5 opacity-60`. Размеры — `input-sm`, по умолчанию (основной), `input-xl` (шрифт 16 px). Идентификаторы делайте уникальными на странице.',
          'Phone — `type="tel"`, префикс `+7`, `autocomplete="tel-national"` и `pattern`, который принимает `(999) 123-45-67` или 10 цифр. Атрибут `data-phone-mask` — точка подключения маски: в витрине её показывает демо-скрипт, на странице маску реализует её собственный скрипт.',
          'Phone with country — `join`: `select join-item w-28` с кодами стран (`data-phone-country` — id поля, у option `data-mask` и `data-placeholder`) и `input join-item`. Маска (# — цифра) и плейсхолдер меняются при выборе страны скриптом страницы. Phone with flags — то же с флагами из `core/icons/flags` (библиотека Figma): `button > selectedcontent` первым в select, в option — `img.h-auto.w-5` с пустым `alt` и название страны `sr-only`. В браузерах без `appearance: base-select` флаги не показываются, остаются коды.',
          'Number stepper — `div.input` с кнопками `btn-ghost btn-square` и иконками Iconsax `minus`/`add`, число `type="number"` с `min`, `max`, `step`. Нативные стрелки скрыты темой. Кнопки связаны с полем через `aria-controls`; изменение значения и отключение кнопок на границах (`data-step`, `data-stepper`) реализует скрипт страницы — в витрине работает демо-скрипт.',
          'OTP — ввод одноразового кода из СМС или письма: группа `div.flex.gap-2[role=group][data-code]` с `aria-label`, клетки `input input-xl w-12 px-0 text-center text-xl font-medium`, `inputmode="numeric"`, у первой `autocomplete="one-time-code"`, у каждой `aria-label="Цифра N из M"`. Ошибка — `input-error` у клеток, `aria-invalid` и текст `label text-error`. Поведение — скрипт страницы (в витрине — демонстрационный): одна цифра в клетке и переход к следующей, Backspace — к предыдущей, вставка и автоподстановка кода раскладываются по клеткам.',
          'Phone with auto country — один инпут без выбора страны: код страны определяется по первым цифрам (+7 — Россия, с +76/+77 — Казахстан; +375, +998, +996, +992, +374, +994; ведущая 8 — как +7), маска и флаг подстраиваются. Флаги из `core/icons/flags` лежат в разметке скрытыми (`[data-country]`), до ввода — иконка `global`. Поле `type="tel"`, `autocomplete="tel"`, атрибут `data-phone-auto`. Поведение — скрипт страницы (в витрине — демонстрационный).',
          'Affix — неизменяемая часть значения внутри поля: `label.input` с `span.text-base-content/60` после `input.grow` (единица: ₽, кг, м³, мм) или перед ним (начало адреса, префикс номера). Подпись поля — `fieldset-legend` с `for`, чтобы единица не попадала в название. Если единицу выбирает пользователь (валюта, мм / см / м), она — селект в `join`: `input join-item w-full` + `select join-item w-24`.',
          'Amount — ввод денежной суммы: `inputmode="decimal"`, `data-amount`, `tabular-nums`, знак валюты — Affix. Скрипт страницы делит рубли на разряды неразрывным пробелом, точку и запятую превращает в запятую перед копейками, после неё — не больше 2 знаков; при уходе из поля дописывает копейки (`1 234,50`). Курсор сохраняет положение при переформатировании.',
          'Error tooltip — текст ошибки в подсказке, а не под полем: справа в поле кнопка-значок `bold/info-circle text-error` в `tooltip tooltip-left`; текст — `tooltip-content` с `id`, на него ссылаются `aria-describedby` поля и кнопки (экранный диктор читает ошибку сразу). Подсказка открывается наведением и фокусом на значке. Для крупного поля с плавающим лейблом значок позиционируется поверх поля.',
          'With label в крупном размере (`input-xl`, `select-xl`) — подпись внутри поля, классическое поле крупного размера (`input-xl`, `select-xl`) с подписью внутри: `label.absolute.top-2.left-3.text-xs.text-base-content/70` над значением, у поля `pt-5`; обёртка `div.relative`. Плавающий лейбл (Floating label) — отдельный вид: подсказка в поле поднимается на рамку.',
          'Clearable — кнопка очистки в поле: `btn btn-ghost btn-sm btn-circle` с `bold/close-circle` и `aria-label="Очистить поле «…»"`, атрибут `data-clear`. Видна, только пока в поле есть текст: у input класс `peer`, у кнопки `peer-placeholder-shown:hidden` (плейсхолдер обязателен). Стоит сразу после текста — перед единицей (Affix), значком ошибки (Error tooltip) и другими элементами в поле. Очистку и возврат фокуса выполняет скрипт страницы.',
        ].join('\n\n'),
      },
    },
  },
};

export const WithLabel = {
  name: 'With label',
  render: () => input,
  parameters: { docs: { source: { code: input } } },
};

export const WithIcon = {
  name: 'With icon',
  render: () => withIcon,
  parameters: { docs: { source: { code: withIcon } } },
};

export const FloatingLabel = {
  name: 'Floating label',
  render: () => floating,
  parameters: { docs: { source: { code: floating } } },
};

export const States = {
  name: 'States',
  render: () => states,
  parameters: { docs: { source: { code: states } } },
};

export const Sizes = {
  name: 'Sizes',
  render: () => sizes,
  parameters: { docs: { source: { code: sizes } } },
};

export const Phone = {
  name: 'Phone',
  render: () => phone,
  parameters: { docs: { source: { code: phone } } },
};

export const NumberStepper = {
  name: 'Number stepper',
  render: () => stepper,
  parameters: { docs: { source: { code: stepper } } },
};

export const PhoneWithCountry = {
  name: 'Phone with country',
  render: () => phoneCountry,
  parameters: { docs: { source: { code: phoneCountry } } },
};

export const PhoneWithFlags = {
  name: 'Phone with flags',
  render: () => phoneFlagsPreview,
  parameters: { docs: { source: { code: phoneFlags } } },
};

export const Otp = {
  name: 'OTP',
  render: () => code,
  parameters: { docs: { source: { code: code } } },
};

export const PhoneWithAutoCountry = {
  name: 'Phone with auto country',
  render: () => Object.entries(flags).reduce((html, [code, url]) => html.replaceAll(`/core/icons/flags/${code}.svg`, url), phoneAuto),
  parameters: { docs: { source: { code: phoneAuto } } },
};

export const Affix = {
  name: 'Affix',
  render: () => affix,
  parameters: { docs: { source: { code: affix } } },
};

export const Amount = {
  name: 'Amount',
  render: () => amount,
  parameters: { docs: { source: { code: amount } } },
};

export const ErrorTooltip = {
  name: 'Error tooltip',
  render: () => errorTooltip,
  parameters: { docs: { source: { code: errorTooltip } } },
};

export const Clearable = {
  name: 'Clearable',
  render: () => clearable,
  parameters: { docs: { source: { code: clearable } } },
};
