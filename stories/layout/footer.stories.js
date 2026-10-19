import example1 from '../../../core/components/layout/footer/01-footer-vertical-by-default-horizontal-for-sm-and-up.html?raw';
import example2 from '../../../core/components/layout/footer/02-footer-with-a-logo-section.html?raw';
import example3 from '../../../core/components/layout/footer/03-footer-with-a-form.html?raw';
import example4 from '../../../core/components/layout/footer/04-footer-with-logo-and-social-icons.html?raw';
import example5 from '../../../core/components/layout/footer/05-footer-with-copyright-text.html?raw';
import example6 from '../../../core/components/layout/footer/06-footer-with-copyright-text-and-social-icons.html?raw';
import example7 from '../../../core/components/layout/footer/07-footer-with-links-and-social-icons.html?raw';
import example8 from '../../../core/components/layout/footer/08-footer-with-2-rows.html?raw';
import example9 from '../../../core/components/layout/footer/09-centered-footer-with-logo-and-social-icons.html?raw';
import example10 from '../../../core/components/layout/footer/10-centered-footer-with-social-icons.html?raw';
import example11 from '../../../core/components/layout/footer/11-two-footer.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Layout/Footer",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "footer" },
    docs: {
      description: { component: "HTML-примеров: 11. Источник: [Footer](https://daisyui.com/components/footer/) daisyUI 5.7.46. Исходный HTML хранится в core/components/layout/footer. Шаблонное выражение года из документации заменено на статический 2026 для использования в чистом HTML. Форма подписки демонстрационная: обработку отправки подключайте на своей странице." },
    },
  },
};

export const Example01 = {
  name: "Footer (vertical by default, horizontal for sm and up)",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Footer with a logo section",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Footer with a form",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Footer with logo and social icons",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Footer with copyright text",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Footer with copyright text and social icons",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Footer with links and social icons",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Footer with 2 rows",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Centered footer with logo and social icons",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};

export const Example10 = {
  name: "Centered footer with social icons",
  render: () => example10,
  parameters: { docs: { source: { code: example10 } } },
};

export const Example11 = {
  name: "Two footer",
  render: () => example11,
  parameters: { docs: { source: { code: example11 } } },
};
