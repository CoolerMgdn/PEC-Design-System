// Демонстрационное поведение полей в витрине: маска телефона (с выбором страны), степпер,
// связанные ползунок и поле Range. В core и на страницы не переносится — страница реализует его своим скриптом.
const DEFAULT_MASK = '(###) ###-##-##';

// Маска: # — цифра. Лишние цифры отбрасываются; код страны (7 или 8) в начале 11-значного номера срезается.
const formatPhone = (value, mask = DEFAULT_MASK) => {
  const size = mask.split('#').length - 1;
  let digits = value.replace(/\D/g, '');
  if (digits.length > size && /^[78]/.test(digits)) digits = digits.slice(1);
  digits = digits.slice(0, size);
  let result = '';
  let index = 0;
  for (const char of mask) {
    if (index >= digits.length) break;
    result += char === '#' ? digits[index++] : char;
  }
  return result;
};

const maskPlaceholder = (mask) => {
  const sample = '9991234567';
  let index = 0;
  return mask.replace(/#/g, () => sample[index++ % sample.length]);
};

// Селект с вводом (combobox): фильтр пунктов по введённому тексту, выбор мышью и клавишами ↑ ↓ Enter, Escape закрывает.
const comboboxParts = (box) => {
  const field = box.querySelector('[role="combobox"]');
  const list = box.querySelector('[role="listbox"]');
  const options = [...list.querySelectorAll('[role="option"]')];
  return { field, list, options, visible: options.filter((option) => !option.parentElement.hidden) };
};

const setComboboxOpen = (box, open) => {
  const { field, list } = comboboxParts(box);
  list.hidden = !open;
  field.setAttribute('aria-expanded', String(open));
  if (!open) setComboboxActive(box, null);
};

const setComboboxActive = (box, option) => {
  const { field, options } = comboboxParts(box);
  for (const item of options) item.toggleAttribute('data-active', item === option);
  if (option) {
    field.setAttribute('aria-activedescendant', option.id);
    option.scrollIntoView({ block: 'nearest' });
  } else {
    field.removeAttribute('aria-activedescendant');
  }
};

const filterCombobox = (box) => {
  const { field, list, options } = comboboxParts(box);
  const query = field.value.trim().toLowerCase();
  let shown = 0;
  for (const option of options) {
    const match = option.textContent.toLowerCase().includes(query);
    option.parentElement.hidden = !match;
    if (match) shown += 1;
  }
  list.querySelector('[data-combobox-empty]').hidden = shown > 0;
};

// Множественный выбор: выбранные пункты — чипсы в поле (шаблон data-combobox-chip), значение — в скрытом поле через «;».
const renderComboboxChips = (box) => {
  const { field, options } = comboboxParts(box);
  const tags = box.querySelector('[data-combobox-tags]');
  const template = box.querySelector('template[data-combobox-chip]');
  const selected = options.filter((option) => option.getAttribute('aria-selected') === 'true');
  if (field.dataset.placeholder === undefined) field.dataset.placeholder = field.placeholder;
  tags.replaceChildren(...selected.map((option) => {
    const chip = template.content.firstElementChild.cloneNode(true);
    chip.querySelector('[data-chip-label]').textContent = option.textContent.trim();
    const remove = chip.querySelector('[data-chip-remove]');
    remove.dataset.option = option.id;
    remove.setAttribute('aria-label', `Убрать: ${option.textContent.trim()}`);
    return chip;
  }));
  const value = box.querySelector('[data-combobox-value]');
  if (value) value.value = selected.map((option) => option.textContent.trim()).join(';');
  field.placeholder = selected.length ? '' : field.dataset.placeholder;
};

const toggleComboboxOption = (box, option) => {
  const { field } = comboboxParts(box);
  option.setAttribute('aria-selected', String(option.getAttribute('aria-selected') !== 'true'));
  field.value = '';
  filterCombobox(box);
  renderComboboxChips(box);
  field.focus();
  field.dispatchEvent(new Event('change', { bubbles: true }));
};

const chooseComboboxOption = (box, option) => {
  if (box.hasAttribute('data-combobox-multiple')) {
    toggleComboboxOption(box, option);
    return;
  }
  const { field, options } = comboboxParts(box);
  for (const item of options) item.setAttribute('aria-selected', String(item === option));
  field.value = option.textContent;
  filterCombobox(box);
  setComboboxOpen(box, false);
  field.dispatchEvent(new Event('change', { bubbles: true }));
};

const onComboboxKeydown = (event) => {
  const box = event.target.closest?.('[data-combobox]');
  if (!box || !event.target.matches('[role="combobox"]')) return;
  const { list, visible } = comboboxParts(box);
  const active = visible.find((option) => option.hasAttribute('data-active'));
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    if (list.hidden) setComboboxOpen(box, true);
    if (!visible.length) return;
    const step = event.key === 'ArrowDown' ? 1 : -1;
    const index = active ? visible.indexOf(active) + step : (step > 0 ? 0 : visible.length - 1);
    setComboboxActive(box, visible[(index + visible.length) % visible.length]);
  } else if (event.key === 'Enter' && active && !list.hidden) {
    event.preventDefault();
    chooseComboboxOption(box, active);
  } else if (event.key === 'Escape' && !list.hidden) {
    event.preventDefault();
    setComboboxOpen(box, false);
  } else if (event.key === 'Backspace' && !event.target.value && box.hasAttribute('data-combobox-multiple')) {
    const last = comboboxParts(box).options.filter((option) => option.getAttribute('aria-selected') === 'true').pop();
    if (last) toggleComboboxOption(box, last);
  }
};

// Телефон с автоопределением страны: код страны по первым цифрам, маска и флаг подстраиваются.
const PHONE_COUNTRIES = [
  ['998', 'uz', '+998 (##) ###-##-##'],
  ['996', 'kg', '+996 (###) ###-###'],
  ['994', 'az', '+994 (##) ###-##-##'],
  ['992', 'tj', '+992 (##) ###-####'],
  ['375', 'by', '+375 (##) ###-##-##'],
  ['374', 'am', '+374 (##) ###-###'],
  ['7', 'ru', '+7 (###) ###-##-##'],
];

const formatPhoneAuto = (value) => {
  let digits = value.replace(/\D/g, '');
  if (digits.startsWith('8')) digits = `7${digits.slice(1)}`;
  const match = PHONE_COUNTRIES.find(([code]) => digits.startsWith(code));
  if (!match) return { text: digits ? `+${digits.slice(0, 15)}` : '', country: '' };
  const [code, iso, mask] = match;
  const country = iso === 'ru' && /^7[67]/.test(digits) ? 'kz' : iso;
  const rest = digits.slice(code.length);
  let text = `+${code}`;
  let index = 0;
  for (const char of mask.slice(code.length + 1)) {
    if (index >= rest.length) break;
    text += char === '#' ? rest[index++] : char;
  }
  return { text, country };
};

const applyPhoneAuto = (field) => {
  const { text, country } = formatPhoneAuto(field.value);
  field.value = text;
  const flags = field.closest('.input')?.querySelector('[data-phone-flag]');
  for (const flag of flags?.querySelectorAll('[data-country]') || []) flag.hidden = flag.dataset.country !== country;
};

// Сумма: разряды через неразрывный пробел, запятая перед копейками (точка тоже ставит запятую), не больше 2 знаков после неё.
const formatAmount = (value, final = false) => {
  const clean = value.replace(/\./g, ',').replace(/[^\d,]/g, '');
  const comma = clean.indexOf(',');
  let whole = comma === -1 ? clean : clean.slice(0, comma);
  let cents = comma === -1 ? null : clean.slice(comma + 1).replace(/,/g, '').slice(0, 2);
  whole = whole.replace(/^0+(?=\d)/, '');
  if (final && (whole || cents)) cents = (cents || '').padEnd(2, '0');
  if (cents !== null && !whole) whole = '0';
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return cents === null ? grouped : `${grouped},${cents}`;
};

const applyAmount = (field) => {
  const caret = field.selectionStart ?? field.value.length;
  const significant = field.value.slice(0, caret).replace(/\./g, ',').replace(/[^\d,]/g, '').length;
  field.value = formatAmount(field.value);
  let count = 0;
  let position = 0;
  while (position < field.value.length && count < significant) {
    if (/[\d,]/.test(field.value[position])) count += 1;
    position += 1;
  }
  field.setSelectionRange(position, position);
};

// У селекта кнопка очистки видна только при выбранном значении (у input это делает CSS: peer-placeholder-shown:hidden).
const syncClearableSelect = (select) => {
  const clear = select.parentElement.querySelector('[data-clear]');
  if (clear) clear.hidden = !select.value;
};

// Поле кода (СМС, почта): одна цифра в клетке, переход к следующей, Backspace — назад,
// вставка или автоподстановка всего кода раскладывается по клеткам.
const fillCode = (cell, digits) => {
  const cells = [...cell.closest('[data-code]').querySelectorAll('input')];
  let index = cells.indexOf(cell);
  for (const digit of digits) {
    if (index >= cells.length) break;
    cells[index].value = digit;
    index += 1;
  }
  cells[Math.min(index, cells.length - 1)].focus();
};

const onCodeKeydown = (event) => {
  const cell = event.target;
  if (!cell.closest?.('[data-code]') || event.key !== 'Backspace' || cell.value) return;
  const previous = cell.previousElementSibling;
  if (previous) {
    event.preventDefault();
    previous.value = '';
    previous.focus();
  }
};

const onCodePaste = (event) => {
  const cell = event.target;
  if (!cell.closest?.('[data-code]')) return;
  event.preventDefault();
  fillCode(cell, (event.clipboardData?.getData('text') || '').replace(/\D/g, ''));
};

export function mountFieldsPreview(container) {
  const onInput = (event) => {
    const field = event.target;
    if (field.matches?.('[data-phone-auto]')) {
      applyPhoneAuto(field);
      return;
    }
    if (field.matches?.('[data-amount]')) {
      applyAmount(field);
      return;
    }
    if (field.closest?.('[data-code]')) {
      const digits = field.value.replace(/\D/g, '');
      field.value = '';
      if (digits) fillCode(field, digits);
      return;
    }
    const combobox = field.closest?.('[data-combobox]');
    if (combobox) {
      filterCombobox(combobox);
      setComboboxOpen(combobox, true);
      setComboboxActive(combobox, null);
      return;
    }
    if (field.matches?.('[data-phone-mask]')) {
      field.value = formatPhone(field.value, field.dataset.phoneMask || DEFAULT_MASK);
      return;
    }
    const pair = field.closest?.('[data-range-sync]');
    if (pair) {
      for (const other of pair.querySelectorAll('input')) {
        if (other !== field) other.value = field.value;
      }
    }
  };

  const sync = (stepper) => {
    const field = stepper.querySelector('input');
    const [minus, plus] = stepper.querySelectorAll('[data-step]');
    const value = Number(field.value);
    minus.disabled = field.disabled || (field.min !== '' && value <= Number(field.min));
    plus.disabled = field.disabled || (field.max !== '' && value >= Number(field.max));
  };

  const onClick = (event) => {
    // Кнопка очистки: поле рядом (input или select) получает пустое значение, фокус возвращается в поле.
    const clear = event.target.closest('[data-clear]');
    if (clear) {
      event.preventDefault();
      const field = clear.parentElement.querySelector('input:not([type="hidden"]), select, textarea');
      field.value = '';
      field.focus();
      field.dispatchEvent(new Event('input', { bubbles: true }));
      field.dispatchEvent(new Event('change', { bubbles: true }));
      return;
    }
    const combobox = event.target.closest('[data-combobox]');
    if (combobox) {
      const remove = event.target.closest('[data-chip-remove]');
      if (remove) {
        event.preventDefault();
        toggleComboboxOption(combobox, combobox.querySelector(`#${remove.dataset.option}`));
        return;
      }
      const option = event.target.closest('[role="option"]');
      if (option) chooseComboboxOption(combobox, option);
      else if (event.target.closest('.input')) setComboboxOpen(combobox, true);
      return;
    }
    const button = event.target.closest('[data-step]');
    if (!button) return;
    const stepper = button.closest('[data-stepper]');
    const field = stepper.querySelector('input');
    if (button.dataset.step === '1') field.stepUp(); else field.stepDown();
    field.dispatchEvent(new Event('input', { bubbles: true }));
    field.dispatchEvent(new Event('change', { bubbles: true }));
    sync(stepper);
  };

  const onChange = (event) => {
    if (event.target.matches?.('select[data-clearable]')) syncClearableSelect(event.target);
    const country = event.target.closest?.('[data-phone-country]');
    if (country) {
      const field = container.querySelector(`#${country.dataset.phoneCountry}`);
      const option = country.selectedOptions[0];
      const mask = option?.dataset.mask || DEFAULT_MASK;
      field.dataset.phoneMask = mask;
      field.placeholder = option?.dataset.placeholder || maskPlaceholder(mask);
      field.value = formatPhone(field.value, mask);
      return;
    }
    const pair = event.target.closest?.('[data-range-sync]');
    if (pair) {
      const number = pair.querySelector('input[type="number"]');
      const value = Math.min(Number(number.max), Math.max(Number(number.min), Number(number.value) || Number(number.min)));
      for (const field of pair.querySelectorAll('input')) field.value = value;
      return;
    }
    const stepper = event.target.closest?.('[data-stepper]');
    if (stepper) sync(stepper);
  };

  // Клик по пункту не должен уводить фокус из поля до выбора; уход фокуса из combobox закрывает список.
  const onMousedown = (event) => {
    if (event.target.closest('[data-combobox] [role="listbox"]')) event.preventDefault();
  };
  const onFocusout = (event) => {
    if (event.target.matches?.('[data-amount]') && event.target.value) {
      event.target.value = formatAmount(event.target.value, true);
    }
    const box = event.target.closest?.('[data-combobox]');
    if (box && !box.contains(event.relatedTarget)) setComboboxOpen(box, false);
  };

  container.addEventListener('input', onInput);
  container.addEventListener('click', onClick);
  container.addEventListener('change', onChange);
  container.addEventListener('keydown', onComboboxKeydown);
  container.addEventListener('keydown', onCodeKeydown);
  container.addEventListener('paste', onCodePaste);
  container.addEventListener('mousedown', onMousedown);
  container.addEventListener('focusout', onFocusout);
  for (const stepper of container.querySelectorAll('[data-stepper]')) sync(stepper);
  for (const field of container.querySelectorAll('[data-phone-auto]')) applyPhoneAuto(field);
  for (const select of container.querySelectorAll('select[data-clearable]')) syncClearableSelect(select);
  for (const field of container.querySelectorAll('[data-amount]')) {
    if (field.value) field.value = formatAmount(field.value, true);
  }
  for (const box of container.querySelectorAll('[data-combobox-multiple]')) renderComboboxChips(box);
  // Демонстрация раскрытого списка: поле с data-combobox-open показывает отфильтрованные пункты сразу.
  for (const field of container.querySelectorAll('[data-combobox-open]')) {
    const box = field.closest('[data-combobox]');
    filterCombobox(box);
    setComboboxOpen(box, true);
  }

  return () => {
    container.removeEventListener('input', onInput);
    container.removeEventListener('click', onClick);
    container.removeEventListener('change', onChange);
    container.removeEventListener('keydown', onComboboxKeydown);
    container.removeEventListener('keydown', onCodeKeydown);
    container.removeEventListener('paste', onCodePaste);
    container.removeEventListener('mousedown', onMousedown);
    container.removeEventListener('focusout', onFocusout);
  };
}
