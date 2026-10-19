import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a;function o(){return(o=e((()=>{t=`<div class="flex w-full flex-col gap-8">
  <p class="text-base">Четыре тени из стилей Figma — для карточек и всплывающих блоков. Кнопки, поля и чипсы плоские, без теней. Стандартные shadow-sm…shadow-2xl Tailwind в дизайн-системе не применяются.</p>
  <div class="grid grid-cols-1 gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3">${[[`shadow-card`,`стиль 01`,`Карточки и всплывающие блоки на белом фоне`],[`shadow-soft`,`стиль 04`,`Мягкая тень вокруг элемента: поля поиска, плавающие панели`],[`shadow-brand`,`стиль 02`,`Акцентные карточки, фирменный оттенок синего`],[`shadow-dark`,`стиль 03`,`Элементы поверх изображений и тёмных фонов`]].map(([e,t,n])=>`
    <div class="flex flex-col gap-4 rounded-sm bg-base-100 p-6 ${e}">
      <code class="text-sm font-medium">${e}</code>
      <span class="text-xs text-neutral-500">Figma: ${t}</span>
      <span class="text-sm">${n}</span>
    </div>`).join(``)}
  </div>
</div>`,n=`<article class="rounded-sm bg-base-100 p-6 shadow-card">…</article>`,r={title:`Основы/Тени`,tags:[`autodocs`],parameters:{catalog:{component:`foundation-shadows`},docs:{description:{component:"Токены `--shadow-*` — `core/theme.css`."}}}},i={name:`Тени`,render:()=>t,parameters:{docs:{source:{code:n}}}},a=[`Shadows`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Тени',
  render: () => page,
  parameters: {
    docs: {
      source: {
        code: usage
      }
    }
  }
}`,...i.parameters?.docs?.source}}}})))()}o();export{i as Shadows,a as __namedExportsOrder,r as default};