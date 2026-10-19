import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<fieldset class="fieldset w-full max-w-md">
  <label class="fieldset-legend" for="ds-range-01">Количество пломб</label>
  <input class="range range-secondary range-xs w-full" id="ds-range-01" type="range" min="1" max="10" value="1">
  <div class="flex justify-between text-xs text-neutral-500" aria-hidden="true">
    <span>1</span>
    <span>10</span>
  </div>
</fieldset>
<fieldset class="fieldset w-full max-w-md">
  <label class="fieldset-legend" for="ds-range-01-count">Количество, шт</label>
  <div class="flex items-center gap-4" data-range-sync>
    <input class="range range-secondary range-xs grow" type="range" min="1" max="50" value="1" aria-label="Количество, шт, ползунок">
    <input class="input input-sm w-20" id="ds-range-01-count" type="number" min="1" max="50" value="1">
  </div>
</fieldset>
`})))()}var r,i,a;function o(){return(o=e((()=>{n(),r={title:`Атомы/Range`,tags:[`autodocs`],parameters:{catalog:{component:`atom-range`},docs:{description:{component:['Ползунок daisyUI `range` на основе нативного `input type="range"`. Источник — `core/project-components/range`.',"`range range-secondary range-xs`; подпись — `fieldset-legend`. Вариант с числовым полем рядом: обёртка `data-range-sync`, ползунок и поле синхронизирует скрипт страницы (значение поля ограничивается `min`/`max`); в Storybook — демонстрационный."].join(`

`)}}}},i={name:`Default`,render:()=>t,parameters:{docs:{source:{code:t}}}},a=[`Default`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => range,
  parameters: {
    docs: {
      source: {
        code: range
      }
    }
  }
}`,...i.parameters?.docs?.source}}}})))()}o();export{i as Default,a as __namedExportsOrder,r as default};