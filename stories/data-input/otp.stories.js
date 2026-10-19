import example1 from '../../../core/components/data-input/otp/01-otp.html?raw';
import example2 from '../../../core/components/data-input/otp/02-otp-with-6-digits.html?raw';
import example3 from '../../../core/components/data-input/otp/03-otp-joined.html?raw';
import example4 from '../../../core/components/data-input/otp/04-otp-with-different-sizes.html?raw';
import example5 from '../../../core/components/data-input/otp/05-otp-with-different-colors.html?raw';
import example6 from '../../../core/components/data-input/otp/06-otp-disabled.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data input/OTP",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "otp" },
    docs: {
      description: { component: "HTML-примеров: 6. Источник: [OTP](https://daisyui.com/components/otp/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/otp. Нативное поле OTP работает без JavaScript: количество span должно совпадать с maxlength и pattern. Проверка и отправка кода выполняются приложением." },
    },
  },
};

export const Example01 = {
  name: "OTP",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "OTP with 6 digits",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "OTP joined",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "OTP with different sizes",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "OTP with different colors",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "OTP disabled",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};
