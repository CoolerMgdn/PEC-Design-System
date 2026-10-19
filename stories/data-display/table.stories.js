import example1 from '../../../core/components/data-display/table/01-table.html?raw';
import example2 from '../../../core/components/data-display/table/02-table-with-border-and-background.html?raw';
import example3 from '../../../core/components/data-display/table/03-table-with-an-active-row.html?raw';
import example4 from '../../../core/components/data-display/table/04-table-with-a-row-that-highlights-on-hover.html?raw';
import example5 from '../../../core/components/data-display/table/05-zebra.html?raw';
import example6 from '../../../core/components/data-display/table/06-table-with-visual-elements.html?raw';
import example7 from '../../../core/components/data-display/table/07-table-xs.html?raw';
import example8 from '../../../core/components/data-display/table/08-table-with-pinned-rows.html?raw';
import example9 from '../../../core/components/data-display/table/09-table-with-pinned-rows-and-pinned-cols.html?raw';

/** @type {import('@storybook/html-vite').Meta} */
export default {
  title: "Справочник daisyUI/Data display/Table",
  tags: ['autodocs'],
  parameters: {
    catalog: { component: "table" },
    docs: {
      description: { component: "HTML-примеров: 9. Источник: [Table](https://daisyui.com/components/table/) daisyUI. Исходный HTML хранится в core/components/data-display/table." },
    },
  },
};

export const Example01 = {
  name: "Table",
  render: () => example1,
  parameters: { docs: { source: { code: example1 } } },
};

export const Example02 = {
  name: "Table with border and background",
  render: () => example2,
  parameters: { docs: { source: { code: example2 } } },
};

export const Example03 = {
  name: "Table with an active row",
  render: () => example3,
  parameters: { docs: { source: { code: example3 } } },
};

export const Example04 = {
  name: "Table with a row that highlights on hover",
  render: () => example4,
  parameters: { docs: { source: { code: example4 } } },
};

export const Example05 = {
  name: "Zebra",
  render: () => example5,
  parameters: { docs: { source: { code: example5 } } },
};

export const Example06 = {
  name: "Table with visual elements",
  render: () => example6,
  parameters: { docs: { source: { code: example6 } } },
};

export const Example07 = {
  name: "Table xs",
  render: () => example7,
  parameters: { docs: { source: { code: example7 } } },
};

export const Example08 = {
  name: "Table with pinned-rows",
  render: () => example8,
  parameters: { docs: { source: { code: example8 } } },
};

export const Example09 = {
  name: "Table with pinned-rows and pinned-cols",
  render: () => example9,
  parameters: { docs: { source: { code: example9 } } },
};
