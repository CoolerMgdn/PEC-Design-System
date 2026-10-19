// Витринное поведение раздела «Основы». В core и на страницы не переносится.
export function mountFoundationsPreview(container) {
  // Значения токенов читаются из подключённого CSS, чтобы витрина не расходилась с tokens.min.css.
  const styles = getComputedStyle(container);
  for (const node of container.querySelectorAll('[data-token]')) {
    node.textContent = styles.getPropertyValue(node.dataset.token).trim();
  }

  const gallery = container.querySelector('[data-icons-gallery]');
  if (!gallery) return undefined;

  const search = gallery.querySelector('[data-icons-search]');
  const count = gallery.querySelector('[data-icons-count]');
  const status = gallery.querySelector('[data-icons-status]');
  const buttons = [...gallery.querySelectorAll('[data-icon]')];
  let style = 'linear';

  const update = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    for (const button of buttons) {
      const match = !query || button.dataset.icon.includes(query) || button.dataset.category.includes(query);
      const available = button.querySelector(`[data-icon-style="${style}"] svg`);
      const show = match && available;
      button.classList.toggle('hidden', !show);
      if (show) visible += 1;
      for (const variant of button.querySelectorAll('[data-icon-style]')) {
        variant.classList.toggle('hidden', variant.dataset.iconStyle !== style);
      }
    }
    for (const section of gallery.querySelectorAll('[data-icons-section]')) {
      section.classList.toggle('hidden', !section.querySelector('[data-icon]:not(.hidden)'));
    }
    count.textContent = `Показано: ${visible}`;
  };

  const onStyle = (event) => {
    if (event.target.name !== 'icons-style') return;
    style = event.target.value;
    update();
  };

  const onCopy = async (event) => {
    const button = event.target.closest('[data-icon]');
    if (!button) return;
    const markup = button.querySelector(`[data-icon-style="${style}"]`).innerHTML.trim();
    try {
      await navigator.clipboard.writeText(markup);
      status.textContent = `SVG «${button.dataset.icon}» (${style}) скопирован.`;
    } catch {
      status.textContent = `Не удалось скопировать: core/icons/iconsax/${style}/${button.dataset.icon}.svg`;
    }
  };

  search.addEventListener('input', update);
  gallery.addEventListener('change', onStyle);
  gallery.addEventListener('click', onCopy);
  update();

  return () => {
    search.removeEventListener('input', update);
    gallery.removeEventListener('change', onStyle);
    gallery.removeEventListener('click', onCopy);
  };
}
