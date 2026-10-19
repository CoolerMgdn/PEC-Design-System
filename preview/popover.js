// Демонстрационное поведение Popover (details.dropdown[data-popover]) в витрине: открытый поповер закрывается
// кликом вне его, клавишей Escape (фокус возвращается на кнопку) и кнопкой [data-popover-close].
// Открыт одновременно только один. На странице поведение реализует её скрипт.
export function mountPopoverPreview(container) {
  const popovers = () => [...container.querySelectorAll('details[data-popover]')];

  const close = (details, restoreFocus = false) => {
    if (!details.open) return;
    details.open = false;
    if (restoreFocus) details.querySelector('summary')?.focus();
  };

  const onClick = (event) => {
    const closer = event.target.closest('[data-popover-close]');
    if (closer) {
      close(closer.closest('details[data-popover]'), true);
      return;
    }
    const current = event.target.closest('details[data-popover]');
    for (const details of popovers()) if (details !== current) close(details);
  };

  const onKeydown = (event) => {
    if (event.key !== 'Escape') return;
    const open = popovers().find((details) => details.open);
    if (open) close(open, true);
  };

  document.addEventListener('click', onClick);
  document.addEventListener('keydown', onKeydown);
  return () => {
    document.removeEventListener('click', onClick);
    document.removeEventListener('keydown', onKeydown);
  };
}
