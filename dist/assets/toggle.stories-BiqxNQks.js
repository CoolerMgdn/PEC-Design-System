import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<input type="checkbox" checked="checked" class="toggle" />
`})))()}var r;function i(){return(i=e((()=>{r=`<fieldset class="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
  <legend class="fieldset-legend">Login options</legend>
  <label class="label">
    <input type="checkbox" checked="checked" class="toggle" />
    Remember me
  </label>
</fieldset>
`})))()}var a;function o(){return(o=e((()=>{a=`<input type="checkbox" checked="checked" class="toggle toggle-xs" />
<input type="checkbox" checked="checked" class="toggle toggle-sm" />
<input type="checkbox" checked="checked" class="toggle toggle-md" />
<input type="checkbox" checked="checked" class="toggle toggle-lg" />
<input type="checkbox" checked="checked" class="toggle toggle-xl" />
`})))()}var s;function c(){return(c=e((()=>{s=`<input type="checkbox" checked="checked" class="toggle toggle-primary" />
<input type="checkbox" checked="checked" class="toggle toggle-secondary" />
<input type="checkbox" checked="checked" class="toggle toggle-accent" />
<input type="checkbox" checked="checked" class="toggle toggle-neutral" />

<input type="checkbox" checked="checked" class="toggle toggle-info" />
<input type="checkbox" checked="checked" class="toggle toggle-success" />
<input type="checkbox" checked="checked" class="toggle toggle-warning" />
<input type="checkbox" checked="checked" class="toggle toggle-error" />
`})))()}var l;function u(){return(u=e((()=>{l=`<input type="checkbox" class="toggle" disabled />
<input type="checkbox" class="toggle" disabled checked="checked" />
`})))()}var d;function f(){return(f=e((()=>{d=`<!-- Set the input.indeterminate DOM property to true in page JavaScript after mounting this HTML. -->
<input type="checkbox" class="toggle" id="data-input-toggle-06-my-toggle" />
`})))()}var p;function m(){return(m=e((()=>{p=`<label class="toggle text-base-content">
  <input type="checkbox" />
  <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="4"
      fill="none"
      stroke="currentColor"
    >
      <path d="M20 6 9 17l-5-5"></path>
    </g>
  </svg>
  <svg
    aria-label="disabled"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
</label>
`})))()}var h;function g(){return(g=e((()=>{h=`<input
  type="checkbox"
  checked="checked"
  class="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
/>
`})))()}var _,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),i(),o(),c(),u(),f(),m(),g(),_={title:`Справочник daisyUI/Data input/Toggle`,tags:[`autodocs`],parameters:{catalog:{component:`toggle`},docs:{description:{component:`HTML-примеров: 8. Источник: [Toggle](https://daisyui.com/components/toggle/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/toggle. Для примера Indeterminate нужна установка DOM-свойства через JavaScript; она реализована только в Storybook.`}}}},v={name:`Toggle (switch)`,render:()=>t,parameters:{docs:{source:{code:t}}}},y={name:`With fieldset and label`,render:()=>r,parameters:{docs:{source:{code:r}}}},b={name:`Sizes`,render:()=>a,parameters:{docs:{source:{code:a}}}},x={name:`Colors`,render:()=>s,parameters:{docs:{source:{code:s}}}},S={name:`Disabled`,render:()=>l,parameters:{docs:{source:{code:l}}}},C={name:`Indeterminate`,render:()=>d,parameters:{catalog:{indeterminate:!0},docs:{source:{code:d},description:{story:`Состояние indeterminate задаётся через DOM-свойство input.indeterminate = true после вставки HTML. В Storybook это делает код витрины; при использовании фрагмента подключите эту инициализацию в JavaScript своей страницы.`}}}},w={name:`Toggle with icons inside`,render:()=>p,parameters:{docs:{source:{code:p}}}},T={name:`Toggle with custom colors`,render:()=>h,parameters:{docs:{source:{code:h}}}},E=[`Example01`,`Example02`,`Example03`,`Example04`,`Example05`,`Example06`,`Example07`,`Example08`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Toggle (switch)",
  render: () => example1,
  parameters: {
    docs: {
      source: {
        code: example1
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "With fieldset and label",
  render: () => example2,
  parameters: {
    docs: {
      source: {
        code: example2
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Sizes",
  render: () => example3,
  parameters: {
    docs: {
      source: {
        code: example3
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Colors",
  render: () => example4,
  parameters: {
    docs: {
      source: {
        code: example4
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Disabled",
  render: () => example5,
  parameters: {
    docs: {
      source: {
        code: example5
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Indeterminate",
  render: () => example6,
  parameters: {
    catalog: {
      indeterminate: true
    },
    docs: {
      source: {
        code: example6
      },
      description: {
        story: "Состояние indeterminate задаётся через DOM-свойство input.indeterminate = true после вставки HTML. В Storybook это делает код витрины; при использовании фрагмента подключите эту инициализацию в JavaScript своей страницы."
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Toggle with icons inside",
  render: () => example7,
  parameters: {
    docs: {
      source: {
        code: example7
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Toggle with custom colors",
  render: () => example8,
  parameters: {
    docs: {
      source: {
        code: example8
      }
    }
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{v as Example01,y as Example02,b as Example03,x as Example04,S as Example05,C as Example06,w as Example07,T as Example08,E as __namedExportsOrder,_ as default};