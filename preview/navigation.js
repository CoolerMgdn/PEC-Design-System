// Only the class-based Menu example needs demo JavaScript.
// Native details, popover and radio examples keep their browser behavior.
export function mountNavigationPreview(container, component, storyId) {
  if (component !== 'menu') return undefined;

  const cleanups = [];
  const toggles = container.querySelectorAll('.menu-dropdown-toggle');
  toggles.forEach((toggle, index) => {
    const submenu = toggle.nextElementSibling;
    if (!submenu?.classList.contains('menu-dropdown')) return;

    submenu.id ||= `${storyId}-submenu-${index + 1}`;
    toggle.setAttribute('role', 'button');
    toggle.tabIndex = 0;
    toggle.setAttribute('aria-controls', submenu.id);

    const setExpanded = (expanded) => {
      toggle.classList.toggle('menu-dropdown-show', expanded);
      submenu.classList.toggle('menu-dropdown-show', expanded);
      toggle.setAttribute('aria-expanded', String(expanded));
    };
    setExpanded(submenu.classList.contains('menu-dropdown-show'));

    const onClick = () => setExpanded(!submenu.classList.contains('menu-dropdown-show'));
    const onKeyDown = (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      onClick();
    };
    toggle.addEventListener('click', onClick);
    toggle.addEventListener('keydown', onKeyDown);
    cleanups.push(() => {
      toggle.removeEventListener('click', onClick);
      toggle.removeEventListener('keydown', onKeyDown);
    });
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}
