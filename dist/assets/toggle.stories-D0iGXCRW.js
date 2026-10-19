import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<div class="flex flex-col gap-3">
  <label class="label text-base-content">
    <input class="toggle toggle-secondary toggle-sm" type="checkbox" checked>
    Включено
  </label>
  <label class="label text-base-content">
    <input class="toggle toggle-secondary toggle-sm" type="checkbox">
    Выключено
  </label>
  <label class="label">
    <input class="toggle toggle-secondary toggle-sm" type="checkbox" checked disabled>
    Недоступно, включено
  </label>
  <label class="label">
    <input class="toggle toggle-secondary toggle-sm" type="checkbox" disabled>
    Недоступно
  </label>
</div>
`})))()}var r;function i(){return(i=e((()=>{r=`<div class="flex flex-col gap-3">
  <label class="label text-base-content">
    <input class="toggle toggle-neutral toggle-sm" type="checkbox" checked>
    Включено
  </label>
  <label class="label text-base-content">
    <input class="toggle toggle-neutral toggle-sm" type="checkbox">
    Выключено
  </label>
  <label class="label">
    <input class="toggle toggle-neutral toggle-sm" type="checkbox" checked disabled>
    Недоступно, включено
  </label>
  <label class="label">
    <input class="toggle toggle-neutral toggle-sm" type="checkbox" disabled>
    Недоступно
  </label>
</div>
`})))()}var a;function o(){return(o=e((()=>{a=`<div class="flex flex-col gap-3">
  <label class="label text-neutral-content">
    <input class="toggle toggle-sm border-neutral-content/40 bg-transparent text-neutral-content/70 checked:border-base-100 checked:bg-base-100 checked:text-neutral" type="checkbox" checked>
    Включено
  </label>
  <label class="label text-neutral-content">
    <input class="toggle toggle-sm border-neutral-content/40 bg-transparent text-neutral-content/70 checked:border-base-100 checked:bg-base-100 checked:text-neutral" type="checkbox">
    Выключено
  </label>
  <label class="label">
    <input class="toggle toggle-sm border-neutral-content/40 bg-transparent text-neutral-content/70 checked:border-base-100 checked:bg-base-100 checked:text-neutral" type="checkbox" checked disabled>
    Недоступно, включено
  </label>
  <label class="label">
    <input class="toggle toggle-sm border-neutral-content/40 bg-transparent text-neutral-content/70 checked:border-base-100 checked:bg-base-100 checked:text-neutral" type="checkbox" disabled>
    Недоступно
  </label>
</div>
`})))()}var s,c,l,u;function d(){return(d=e((()=>{n(),i(),o(),s={title:`Атомы/Toggle`,tags:[`autodocs`],parameters:{catalog:{component:`atom-toggle`},docs:{description:{component:["Переключатель daisyUI на основе нативного чекбокса. Источник — `core/project-components/toggle`.","`toggle toggle-secondary toggle-sm`; подпись — `label.label text-base-content`.","Monochrome — тёмный вариант: `toggle-neutral` вместо `toggle-secondary`.","Monochrome на тёмном фоне (фото, `bg-neutral`; в примере — второй блок): невыбранное — `text-neutral-content` и рамка `neutral-content/30…60`, выбранное — белое `base-100` с тёмным содержимым, наведение на невыбранное — `hover:not-checked:bg-neutral-content/10`. Текст ошибки на `bg-neutral` осветлён темой (контраст около 5,2:1). Переключатель: `border-neutral-content/40 bg-transparent text-neutral-content/70 checked:border-base-100 checked:bg-base-100 checked:text-neutral`."].join(`

`)}}}},c={name:`States`,render:()=>t,parameters:{docs:{source:{code:t}}}},l={name:`Monochrome`,render:()=>`<div class="flex flex-col gap-6">${r}<div class="flex flex-col gap-6 rounded-2xl bg-neutral p-6 text-neutral-content">${a}</div></div>`,parameters:{docs:{source:{code:`${r}
<!-- На тёмном фоне -->
${a}`}}}},u=[`States`,`Monochrome`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => toggle,
  parameters: {
    docs: {
      source: {
        code: toggle
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Monochrome',
  render: () => \`<div class="flex flex-col gap-6">\${monochrome}<div class="flex flex-col gap-6 rounded-2xl bg-neutral p-6 text-neutral-content">\${onDark}</div></div>\`,
  parameters: {
    docs: {
      source: {
        code: \`\${monochrome}
<!-- На тёмном фоне -->
\${onDark}\`
      }
    }
  }
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Monochrome,c as States,u as __namedExportsOrder,s as default};