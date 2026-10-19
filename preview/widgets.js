// Демонстрационное поведение календаря и карусели дизайн-системы в витрине.
// В core и на страницы не переносится — страница реализует его своим скриптом.

const pad = (value) => String(value).padStart(2, '0');
const toIso = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
const toRu = (iso) => iso.split('-').reverse().join('.');

// Календарь (Cally): шапка с месяцем и годом, стрелки, поле даты или периода.
export function mountCalendarWidgets(container) {
  let disposed = false;
  const cleanups = [];
  const on = (target, type, handler) => {
    target.addEventListener(type, handler);
    cleanups.push(() => target.removeEventListener(type, handler));
  };

  import('cally').then(() => {
    if (disposed) return;
    for (const root of container.querySelectorAll('[data-calendar]')) {
      const calendar = root.querySelector('calendar-date, calendar-range');
      // Шапка: селекты месяца и года или подпись «Месяц ГГГГ» (компактный вариант).
      const month = root.querySelector('[data-calendar-month]');
      const year = root.querySelector('[data-calendar-year]');
      const label = root.querySelector('[data-calendar-label]');
      if (!calendar || !((month && year) || label)) continue;

      const current = () => new Date(`${calendar.focusedDate || calendar.getAttribute('focused-date') || toIso(new Date())}T00:00:00`);
      const show = (date) => {
        if (month && year) {
          month.value = String(date.getMonth() + 1);
          year.value = String(date.getFullYear());
        }
        if (label) {
          const text = date.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' }).replace(/\s*г\.$/, '');
          label.textContent = text.charAt(0).toUpperCase() + text.slice(1);
        }
      };
      const focus = (date) => {
        calendar.focusedDate = toIso(date);
        show(date);
      };
      const shift = (step) => {
        const date = current();
        focus(new Date(date.getFullYear(), date.getMonth() + step, 1));
      };

      show(current());
      on(calendar, 'focusday', (event) => show(event.detail));
      if (month && year) {
        on(month, 'change', () => focus(new Date(Number(year.value), Number(month.value) - 1, 1)));
        on(year, 'change', () => focus(new Date(Number(year.value), Number(month.value) - 1, 1)));
      }
      on(root.querySelector('[data-calendar-prev]'), 'click', () => shift(-1));
      on(root.querySelector('[data-calendar-next]'), 'click', () => shift(1));

      // Поле даты: список открывается при фокусе поля и закрывается кликом вне поля, Escape или выбором даты.
      // Состояние задаётся классами dropdown-open / dropdown-close, а не фокусом: раскрытые селекты месяца
      // и года не закрывают календарь.
      const field = root.closest('[data-calendar-field]');
      const input = field?.querySelector('[data-calendar-input]');
      if (field && input) {
        const setOpen = (open) => {
          field.classList.toggle('dropdown-open', open);
          field.classList.toggle('dropdown-close', !open);
        };
        // До загрузки скрипта список открывается по фокусу (CSS daisyUI), затем управление переходит к скрипту.
        setOpen(field.contains(document.activeElement));
        on(field, 'focusin', () => setOpen(true));
        on(input, 'click', () => setOpen(true));
        on(document, 'pointerdown', (event) => {
          if (!event.composedPath().includes(field)) setOpen(false);
        });
        on(field, 'keydown', (event) => {
          if (event.key !== 'Escape') return;
          setOpen(false);
          input.focus();
        });
        on(calendar, 'change', () => {
          if (!calendar.value) return;
          // У периода change приходит и после первого клика (только начало) — закрываем после выбора конца.
          if (calendar.localName === 'calendar-range' && !calendar.value.includes('/')) return;
          input.value = calendar.value.split('/').map(toRu).join(' — ');
          setOpen(false);
        });
      }
    }
  }).catch((error) => console.error('Calendar widgets failed', error));

  return () => {
    disposed = true;
    cleanups.forEach((cleanup) => cleanup());
  };
}

// Карусель: точки и стрелки прокручивают ленту, текущая точка следует за прокруткой.
// Точка соответствует положению прокрутки: если на экране видно несколько слайдов, точки, ведущие
// в уже достижимое положение (конец ленты), скрываются; активна ближайшая к текущей прокрутке.
export function mountCarouselWidgets(container) {
  const cleanups = [];
  for (const root of container.querySelectorAll('[data-carousel]')) {
    const track = root.querySelector('[data-carousel-track]');
    const dots = [...root.querySelectorAll('[data-carousel-dot]')];
    const slides = dots.map((dot) => container.querySelector(`#${dot.getAttribute('aria-controls')}`));
    const max = () => track.scrollWidth - track.clientWidth;
    const target = (i) => Math.min(slides[i].offsetLeft - slides[0].offsetLeft, max());
    // Видимые точки — только с разными положениями прокрутки.
    const visible = () => dots.filter((dot, i) => i === 0 || target(i) - target(i - 1) > 2);
    const layout = () => dots.forEach((dot, i) => { dot.hidden = !(i === 0 || target(i) - target(i - 1) > 2); });
    const current = () => {
      const shown = visible();
      let best = shown[0];
      for (const dot of shown) {
        if (Math.abs(target(dots.indexOf(dot)) - track.scrollLeft) < Math.abs(target(dots.indexOf(best)) - track.scrollLeft)) best = dot;
      }
      return best;
    };
    const go = (dot) => track.scrollTo({ left: target(dots.indexOf(dot)), behavior: 'smooth' });
    const step = (delta) => {
      const shown = visible();
      const next = shown[(shown.indexOf(current()) + delta + shown.length) % shown.length];
      go(next);
    };
    const mark = () => {
      const active = current();
      dots.forEach((dot) => { if (dot === active) dot.setAttribute('aria-current', 'true'); else dot.removeAttribute('aria-current'); });
    };
    const onClick = (event) => {
      const dot = event.target.closest('[data-carousel-dot]');
      if (dot) go(dot);
      if (event.target.closest('[data-carousel-prev]')) step(-1);
      if (event.target.closest('[data-carousel-next]')) step(1);
    };
    const onResize = () => { layout(); mark(); };
    layout();
    mark();
    root.addEventListener('click', onClick);
    track.addEventListener('scroll', mark, { passive: true });
    window.addEventListener('resize', onResize);
    cleanups.push(() => {
      root.removeEventListener('click', onClick);
      track.removeEventListener('scroll', mark);
      window.removeEventListener('resize', onResize);
    });
  }
  return () => cleanups.forEach((cleanup) => cleanup());
}
