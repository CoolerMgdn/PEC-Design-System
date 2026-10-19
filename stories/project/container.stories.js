import container from '../../../core/project-components/container/01-container.html?raw';

const wrapSections = (sections) => `<div class="flex flex-col">\n${sections
  .map((section) => section.trim().split(/\r?\n/).map((line) => `  ${line}`).join('\n'))
  .join('\n\n')}\n</div>`;

const basic = wrapSections([container]);
const twoSections = wrapSections([container, container]);

export default {
  title: 'Наши компоненты/Container',
  tags: ['autodocs'],
  parameters: {
    catalog: { component: 'project-container' },
  },
};

export const Basic = {
  name: 'Default',
  render: () => basic,
  parameters: { docs: { source: { code: basic } } },
};

export const TwoSections = {
  name: 'Two adjacent sections',
  render: () => twoSections,
  parameters: { docs: { source: { code: twoSections } } },
};
