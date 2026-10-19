import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<nav class="text-sm" aria-label="Хлебные крошки">
  <ol class="flex flex-wrap items-center gap-x-2 gap-y-1 max-sm:flex-col max-sm:items-start max-sm:gap-4">
    <li class="flex items-center gap-2"><a class="hover:text-primary" href="#">Главная</a><svg class="size-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></li>
    <li class="flex items-center gap-2"><a class="hover:text-primary" href="#">Услуги</a><svg class="size-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></li>
    <li><span aria-current="page">Международные перевозки</span></li>
  </ol>
</nav>
`})))()}var r;function i(){return(i=e((()=>{r=`<nav class="text-sm" aria-label="Хлебные крошки">
  <ol class="flex flex-wrap items-center gap-x-2 gap-y-1 max-sm:flex-col max-sm:items-start max-sm:gap-4">
    <li class="flex items-center gap-2"><a class="hover:underline" href="#">Главная</a><svg class="size-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></li>
    <li class="flex items-center gap-2"><a class="hover:underline" href="#">Услуги</a><svg class="size-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></li>
    <li><span aria-current="page">Международные перевозки</span></li>
  </ol>
</nav>
`})))()}var a,o,s,c;function l(){return(l=e((()=>{n(),i(),a={title:`Молекулы/Breadcrumbs`,tags:[`autodocs`],parameters:{catalog:{component:`molecule-breadcrumbs`},docs:{description:{component:["Хлебные крошки по макету (Figma «Breadcrumbs», Hero). Источник — `core/project-components/breadcrumbs`. Свой список вместо класса `breadcrumbs` daisyUI: в мобильном виде пункты идут столбиком, а разделитель стоит в конце строки после ссылки, как в макете.",'Разметка: `nav[aria-label="Хлебные крошки"]` > `ol.flex.flex-wrap.items-center.gap-x-2.gap-y-1` — на мобильных `max-sm:flex-col max-sm:items-start max-sm:gap-4`; пункт `li.flex.items-center.gap-2` со ссылкой и шевроном Iconsax `arrow-right-1` (`size-4`, декоративный); текущая страница — `span[aria-current="page"]` без ссылки. Текст `text-sm`.',"Default — на светлом фоне, наведение `hover:text-primary`. On dark — на фото и тёмном фоне (Hero): цвет наследуется от секции (`text-neutral-content`), наведение — подчёркивание."].join(`

`)}}}},o={name:`Default`,render:()=>t,parameters:{docs:{source:{code:t}}}},s={name:`On dark`,render:()=>`<div class="rounded-2xl bg-neutral p-4 text-neutral-content">${r}</div>`,parameters:{docs:{source:{code:r}}}},c=[`Default`,`OnDark`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => breadcrumbs,
  parameters: {
    docs: {
      source: {
        code: breadcrumbs
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'On dark',
  render: () => \`<div class="rounded-2xl bg-neutral p-4 text-neutral-content">\${onDark}</div>\`,
  parameters: {
    docs: {
      source: {
        code: onDark
      }
    }
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{o as Default,s as OnDark,c as __namedExportsOrder,a as default};