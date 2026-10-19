// Calendar packages and demo behavior stay in Storybook, outside core.
export function mountCalendarPreview(container, storyId) {
  let disposed = false;
  const cleanups = [];

  const showLoadError = (error) => {
    if (disposed) return;
    const message = document.createElement('p');
    message.setAttribute('role', 'alert');
    message.textContent = 'Не удалось загрузить календарь. Перезагрузите пример.';
    container.append(message);
    console.error(`Calendar preview failed (${storyId})`, error);
  };

  const callyCalendars = [...container.querySelectorAll('calendar-date')];
  if (callyCalendars.length) {
    for (const calendar of callyCalendars) {
      calendar.setAttribute('locale', 'ru-RU');
      calendar.setAttribute('first-day-of-week', '1');
      calendar.querySelector('[slot="previous"]')?.setAttribute('aria-label', 'Предыдущий месяц');
      calendar.querySelector('[slot="next"]')?.setAttribute('aria-label', 'Следующий месяц');

      const popover = calendar.closest('[popover]');
      const trigger = popover && [...container.querySelectorAll('[popovertarget]')]
        .find((button) => button.getAttribute('popovertarget') === popover.id);
      if (!trigger) continue;

      trigger.textContent = 'Выберите дату';
      const onChange = () => {
        if (!calendar.value) return;
        const [year, month, day] = calendar.value.split('-');
        trigger.textContent = `${day}.${month}.${year}`;
      };
      calendar.addEventListener('change', onChange);
      cleanups.push(() => {
        calendar.removeEventListener('change', onChange);
        if (popover.matches(':popover-open')) popover.hidePopover();
      });
    }
    import('cally').catch(showLoadError);
  }

  const vanillaHost = container.querySelector('.vc');
  if (vanillaHost) {
    import('vanilla-calendar-pro').then(({ Calendar }) => {
      if (disposed) return;
      const calendar = new Calendar(vanillaHost, {
        locale: 'ru-RU',
        firstWeekday: 1,
        selectedTheme: 'light',
      });
      calendar.init();
      cleanups.push(() => calendar.destroy());
    }).catch(showLoadError);
  }

  return () => {
    disposed = true;
    cleanups.forEach((cleanup) => cleanup());
  };
}
