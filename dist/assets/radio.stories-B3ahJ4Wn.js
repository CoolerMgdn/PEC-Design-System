import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<fieldset class="fieldset">
  <legend class="fieldset-legend">Способ доставки</legend>
  <div class="flex flex-col gap-3">
    <label class="label text-base-content">
      <input class="radio radio-secondary radio-sm" type="radio" name="ds-radio-01" checked>
      До терминала
    </label>
    <label class="label text-base-content">
      <input class="radio radio-secondary radio-sm" type="radio" name="ds-radio-01">
      До адреса
    </label>
    <label class="label">
      <input class="radio radio-secondary radio-sm" type="radio" name="ds-radio-01" disabled>
      До постамата — недоступно
    </label>
  </div>
</fieldset>
`})))()}var r;function i(){return(i=e((()=>{r=`<fieldset class="fieldset">
  <legend class="fieldset-legend">Способ доставки</legend>
  <div class="flex flex-col gap-3">
    <label class="label text-base-content">
      <input class="radio radio-neutral radio-sm" type="radio" name="ds-radio-m01" checked>
      До терминала
    </label>
    <label class="label text-base-content">
      <input class="radio radio-neutral radio-sm" type="radio" name="ds-radio-m01">
      До адреса
    </label>
    <label class="label">
      <input class="radio radio-neutral radio-sm" type="radio" name="ds-radio-m01" disabled>
      До постамата — недоступно
    </label>
  </div>
</fieldset>
`})))()}var a;function o(){return(o=e((()=>{a=`<fieldset class="fieldset">
  <legend class="fieldset-legend text-neutral-content">Способ доставки</legend>
  <div class="flex flex-col gap-3">
    <label class="label text-neutral-content">
      <input class="radio radio-sm border-neutral-content/60 bg-transparent text-base-100 checked:border-base-100" type="radio" name="ds-radio-d01" checked>
      До терминала
    </label>
    <label class="label text-neutral-content">
      <input class="radio radio-sm border-neutral-content/60 bg-transparent text-base-100 checked:border-base-100" type="radio" name="ds-radio-d01">
      До адреса
    </label>
    <label class="label">
      <input class="radio radio-sm border-neutral-content/60 bg-transparent text-base-100 checked:border-base-100" type="radio" name="ds-radio-d01" disabled>
      До постамата — недоступно
    </label>
  </div>
</fieldset>
`})))()}var s,c,l,u;function d(){return(d=e((()=>{n(),i(),o(),s={title:`Атомы/Radio`,tags:[`autodocs`],parameters:{catalog:{component:`atom-radio`},docs:{description:{component:["Нативное радио daisyUI в группе `fieldset` с `legend`. Источник — `core/project-components/radio`.","`radio radio-secondary radio-sm`; подпись — `label.label text-base-content`. Группе задайте уникальный `name`.","Monochrome — тёмный вариант: `radio-neutral` вместо `radio-secondary`.","Monochrome на тёмном фоне (фото, `bg-neutral`; в примере — второй блок): невыбранное — `text-neutral-content` и рамка `neutral-content/30…60`, выбранное — белое `base-100` с тёмным содержимым, наведение на невыбранное — `hover:not-checked:bg-neutral-content/10`. Текст ошибки на `bg-neutral` осветлён темой (контраст около 5,2:1). Радио: `border-neutral-content/60 bg-transparent text-base-100 checked:border-base-100`."].join(`

`)}}}},c={name:`Radio group`,render:()=>t,parameters:{docs:{source:{code:t}}}},l={name:`Monochrome`,render:()=>`<div class="flex flex-col gap-6">${r}<div class="flex flex-col gap-6 rounded-2xl bg-neutral p-6 text-neutral-content">${a}</div></div>`,parameters:{docs:{source:{code:`${r}
<!-- На тёмном фоне -->
${a}`}}}},u=[`Group`,`Monochrome`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Radio group',
  render: () => radio,
  parameters: {
    docs: {
      source: {
        code: radio
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
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Group,l as Monochrome,u as __namedExportsOrder,s as default};