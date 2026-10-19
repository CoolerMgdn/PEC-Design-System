import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<div class="flex w-full max-w-md flex-col items-center gap-3">
  <p class="text-sm font-medium" id="ds-progress-01-label">Шаг 1 из 6</p>
  <progress class="progress progress-primary h-2 w-full bg-base-200" value="1" max="6" aria-labelledby="ds-progress-01-label"></progress>
</div>
<div class="flex w-full max-w-md flex-col gap-2">
  <div class="flex items-center justify-between text-sm">
    <span id="ds-progress-02-label">Загрузка документов</span>
    <span class="font-medium tabular-nums">64%</span>
  </div>
  <progress class="progress progress-secondary h-2 w-full bg-base-200" value="64" max="100" aria-labelledby="ds-progress-02-label"></progress>
</div>
<div class="flex w-full max-w-md flex-col gap-2">
  <span class="text-xs text-base-content/70" id="ds-progress-03-label">Заполнено 3 из 4 разделов</span>
  <progress class="progress progress-success h-1 w-full bg-base-200" value="3" max="4" aria-labelledby="ds-progress-03-label"></progress>
</div>
`})))()}var r,i,a;function o(){return(o=e((()=>{n(),r={title:`Молекулы/Progress`,tags:[`autodocs`],parameters:{catalog:{component:`molecule-progress`},docs:{description:{component:["Индикатор продвижения — daisyUI `progress` на нативном `progress` (значение `value` из `max`). Источник — `core/project-components/progress`.","Steps — «Шаг 1 из 6» над полосой (`text-sm font-medium`, по центру), полоса `progress progress-primary h-2`. Percent — подпись слева и процент справа (`tabular-nums`), `progress-secondary`. Thin — тонкая полоса `h-1 progress-success` с подписью `text-xs`.","Дорожка серая (`bg-base-200`), а не оттенок цвета полосы. Полоса связана с подписью `aria-labelledby`; экранный диктор читает значение и максимум самого `progress`."].join(`

`)}}}},i={name:`Default`,render:()=>t,parameters:{docs:{source:{code:t}}}},a=[`Default`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => progress,
  parameters: {
    docs: {
      source: {
        code: progress
      }
    }
  }
}`,...i.parameters?.docs?.source}}}})))()}o();export{i as Default,a as __namedExportsOrder,r as default};