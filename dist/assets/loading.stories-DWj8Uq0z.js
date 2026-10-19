import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<div class="flex flex-wrap items-center gap-8">
  <span class="loading loading-spinner loading-lg text-primary" role="status" aria-label="Загрузка"></span>
  <span class="loading loading-dots loading-md text-primary" role="status" aria-label="Загрузка"></span>
  <button class="btn btn-primary" type="button" disabled aria-busy="true">
    <span class="loading loading-spinner loading-sm" aria-hidden="true"></span>
    Отправляем
  </button>
</div>
<div class="relative w-full max-w-md overflow-hidden rounded-sm border border-base-300 p-6" aria-busy="true">
  <p class="text-base font-medium">Расчёт стоимости</p>
  <p class="mt-2 text-sm leading-relaxed text-base-content/70">Москва — Екатеринбург, 1 место, 20 кг</p>
  <div class="absolute inset-0 flex items-center justify-center bg-base-100/80" role="status">
    <span class="loading loading-spinner loading-lg text-primary" aria-hidden="true"></span>
    <span class="sr-only">Загрузка</span>
  </div>
</div>
`})))()}var r;function i(){return(i=e((()=>{r=`<div class="flex flex-wrap items-center gap-8">
  <div class="flex size-24 items-center justify-center bg-base-200" role="status" aria-label="Загрузка">
    <span class="relative block size-10 animate-spin motion-reduce:animate-none" aria-hidden="true">
      <span class="absolute top-0 right-1 block size-3 rotate-12 bg-primary"></span>
      <span class="absolute bottom-0 left-1 block size-3 rotate-12 bg-primary"></span>
    </span>
  </div>
  <span class="relative block size-6 animate-spin motion-reduce:animate-none" role="status" aria-label="Загрузка">
    <span class="absolute top-0 right-0.5 block size-2 rotate-12 bg-primary" aria-hidden="true"></span>
    <span class="absolute bottom-0 left-0.5 block size-2 rotate-12 bg-primary" aria-hidden="true"></span>
  </span>
</div>
`})))()}var a,o,s,c;function l(){return(l=e((()=>{n(),i(),a={title:`Организмы/Loading`,tags:[`autodocs`],parameters:{catalog:{component:`organism-loading`},docs:{description:{component:["Индикаторы загрузки на основе `loading` daisyUI, цвет `text-primary`. Источник — `core/project-components/loading`.",'Отдельный индикатор — `loading loading-spinner loading-lg` или `loading-dots` с `role="status"` и `aria-label="Загрузка"`. В кнопке — `loading-sm` перед текстом, кнопка `disabled` и `aria-busy="true"`. Поверх блока — слой `absolute inset-0 bg-base-100/80` с индикатором по центру, у блока — `relative` и `aria-busy="true"`.',"Brand — фирменный лоадер из макета: два красных квадрата `size-3 rotate-12 bg-primary` в противоположных углах блока `size-10`, который вращается (`animate-spin`, при «уменьшить движение» — `motion-reduce:animate-none`); крупно — на сером квадрате `bg-base-200`, компактно — `size-6` с квадратами `size-2`."].join(`

`)}}}},o={name:`Default`,render:()=>t,parameters:{docs:{source:{code:t}}}},s={name:`Brand`,render:()=>r,parameters:{docs:{source:{code:r}}}},c=[`Default`,`Brand`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => loader,
  parameters: {
    docs: {
      source: {
        code: loader
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Brand',
  render: () => brand,
  parameters: {
    docs: {
      source: {
        code: brand
      }
    }
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Brand,o as Default,c as __namedExportsOrder,a as default};