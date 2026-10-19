import { useEffect } from 'storybook/preview-api';
import { resolveDemoImage } from './demo-images.js';
import { mountNavigationPreview } from './navigation.js';
import { mountDataInputPreview } from './data-input.js';
import { mountCalendarPreview } from './calendar.js';
import { mountFoundationsPreview } from './foundations.js';
import { mountFieldsPreview } from './fields.js';
import { mountCalendarWidgets, mountCarouselWidgets } from './widgets.js';
import { mountPopoverPreview } from './popover.js';
import './catalog.css';

export function catalogPreview(story, context) {
  const component = context.parameters.catalog?.component;
  const container = document.createElement('div');
  container.className = 'catalog-preview';
  container.dataset.component = component ?? '';
  container.dataset.theme = 'light';
  // A template keeps remote images inert until their URLs have been replaced.
  const template = document.createElement('template');
  template.innerHTML = story();

  // Preview-only assets never change the source shown by the Code panel.
  for (const image of template.content.querySelectorAll('img[src*="img.daisyui.com/"]')) {
    const original = image.getAttribute('src');
    const local = resolveDemoImage(original);
    if (!local) throw new Error(`Add a local Storybook image for: ${original}`);
    image.src = local.src;
    image.alt = local.alt;
    image.decoding = 'async';
    if (local.blur) image.style.filter = 'blur(8px)';
  }

  // Hero backgrounds are also resolved before the fragment becomes active.
  for (const element of template.content.querySelectorAll('[style*="img.daisyui.com"]')) {
    element.style.backgroundImage = element.style.backgroundImage.replace(
      /url\(\s*(['"]?)(https:\/\/img\.daisyui\.com\/[^'"\s)]+)\1\s*\)/g,
      (_, quote, original) => {
        const local = resolveDemoImage(original);
        if (!local) throw new Error(`Add a local Storybook image for: ${original}`);
        return `url("${local.src}")`;
      },
    );
  }
  container.append(template.content);

  useEffect(() => {
    // Keep demo submissions inside the preview; dialog forms only close a modal.
    const forms = container.querySelectorAll('form');
    const preventSubmit = (event) => {
      const method = event.submitter?.hasAttribute('formmethod')
        ? event.submitter.formMethod
        : event.currentTarget.method;
      if (method !== 'dialog') event.preventDefault();
    };
    for (const form of forms) form.addEventListener('submit', preventSubmit);
    return () => {
      for (const form of forms) form.removeEventListener('submit', preventSubmit);
    };
  }, [container]);

  useEffect(() => mountNavigationPreview(container, component, context.id), [container, component, context.id]);

  useEffect(() => {
    if (!context.title.startsWith('Справочник daisyUI/Data input/')) return undefined;
    return mountDataInputPreview(container, context.parameters.catalog);
  }, [container, context.title, context.parameters.catalog]);

  useEffect(() => {
    if (!component?.startsWith('foundation-')) return undefined;
    return mountFoundationsPreview(container);
  }, [container, component]);

  useEffect(() => {
    if (!['atom-input', 'atom-range', 'atom-select', 'organism-calculator', 'organism-hero'].includes(component)) return undefined;
    return mountFieldsPreview(container);
  }, [container, component]);

  useEffect(() => {
    if (component !== 'molecule-popover') return undefined;
    return mountPopoverPreview(container);
  }, [container, component]);

  useEffect(() => {
    if (component === 'molecule-calendar') return mountCalendarWidgets(container);
    if (['molecule-carousel', 'organism-process', 'organism-features', 'organism-news'].includes(component)) return mountCarouselWidgets(container);
    return undefined;
  }, [container, component]);

  useEffect(() => {
    // Демонстрация табов по шаблону WAI-ARIA Tabs: клик и стрелки переключают таб и панель.
    // На страницах это делает скрипт страницы.
    if (component !== 'molecule-tabs') return undefined;
    const select = (tab) => {
      const list = tab.closest('[role="tablist"]');
      for (const other of list.querySelectorAll('[role="tab"]')) {
        const active = other === tab;
        other.setAttribute('aria-selected', String(active));
        other.tabIndex = active ? 0 : -1;
        const panel = container.querySelector(`#${other.getAttribute('aria-controls')}`);
        if (panel) panel.hidden = !active;
      }
      tab.focus();
      tab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    };
    const onClick = (event) => {
      const tab = event.target.closest('[role="tab"]');
      if (tab) select(tab);
    };
    const onKeyDown = (event) => {
      const tab = event.target.closest('[role="tab"]');
      if (!tab || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      const tabs = [...tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]')];
      const index = tabs.indexOf(tab);
      const next = { ArrowLeft: index - 1, ArrowRight: index + 1, Home: 0, End: tabs.length - 1 }[event.key];
      event.preventDefault();
      select(tabs[(next + tabs.length) % tabs.length]);
    };
    container.addEventListener('click', onClick);
    container.addEventListener('keydown', onKeyDown);
    return () => {
      container.removeEventListener('click', onClick);
      container.removeEventListener('keydown', onKeyDown);
    };
  }, [container, component]);

  useEffect(() => {
    // Демонстрация закрытия Alert и Toast: на страницах это делает скрипт страницы.
    if (component !== 'molecule-alert' && component !== 'molecule-toast') return undefined;
    const onClick = (event) => {
      const button = event.target.closest('[data-dismiss]');
      const alert = button?.closest('.alert, [data-dismissible]');
      if (alert) alert.hidden = true;
    };
    container.addEventListener('click', onClick);
    return () => container.removeEventListener('click', onClick);
  }, [container, component]);

  useEffect(() => {
    if (component !== 'calendar') return undefined;
    return mountCalendarPreview(container, context.id);
  }, [container, component, context.id]);

  useEffect(() => {
    if (component !== 'countdown') return undefined;
    const digits = [...container.querySelectorAll('.countdown [style]')];
    const seconds = digits.at(-1);
    if (!seconds) return undefined;
    let value = Number(seconds.style.getPropertyValue('--value'));
    const timer = window.setInterval(() => {
      value = value > 0 ? value - 1 : 59;
      seconds.style.setProperty('--value', String(value));
      seconds.textContent = String(value);
      seconds.setAttribute('aria-label', String(value));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [container, component]);

  return container;
}
