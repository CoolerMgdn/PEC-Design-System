import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<div class="flex flex-wrap items-center gap-6 px-4 py-16">
  <div class="tooltip" data-tip="Укажите общие параметры груза, чтобы получить быстрый расчёт">
    <button class="btn" type="button">Сверху</button>
  </div>
  <div class="tooltip tooltip-bottom" data-tip="Укажите общие параметры груза">
    <button class="btn" type="button">Снизу</button>
  </div>
  <div class="tooltip tooltip-right" data-tip="Подсказка справа">
    <button class="btn" type="button">Справа</button>
  </div>
  <div class="tooltip tooltip-left" data-tip="Подсказка слева">
    <button class="btn" type="button">Слева</button>
  </div>
  <div class="tooltip" data-tip="Возмещение стоимости груза при утрате или повреждении">
    <button class="btn btn-ghost btn-xs btn-circle text-neutral-400" type="button" aria-label="Что такое страхование груза">
      <svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM11.25 8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75C11.59 13.75 11.25 13.41 11.25 13V8ZM12.92 16.38C12.87 16.51 12.8 16.61 12.71 16.71C12.61 16.8 12.5 16.87 12.38 16.92C12.26 16.97 12.13 17 12 17C11.87 17 11.74 16.97 11.62 16.92C11.5 16.87 11.39 16.8 11.29 16.71C11.2 16.61 11.13 16.51 11.08 16.38C11.03 16.26 11 16.13 11 16C11 15.87 11.03 15.74 11.08 15.62C11.13 15.5 11.2 15.39 11.29 15.29C11.39 15.2 11.5 15.13 11.62 15.08C11.86 14.98 12.14 14.98 12.38 15.08C12.5 15.13 12.61 15.2 12.71 15.29C12.8 15.39 12.87 15.5 12.92 15.62C12.97 15.74 13 15.87 13 16C13 16.13 12.97 16.26 12.92 16.38Z" fill="currentColor"/></svg>
    </button>
  </div>
</div>
`})))()}var r;function i(){return(i=e((()=>{r=`<div class="flex px-4 py-16">
  <div class="tooltip tooltip-secondary tooltip-right">
    <div class="tooltip-content max-w-sm p-4 text-left">
      <p class="text-sm font-medium">Надлежащим образом заверенная копия документа — это:</p>
      <ul class="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm">
        <li>копия, заверенная подписью руководителя и печатью юридического лица;</li>
        <li>копия, заверенная уполномоченным сотрудником с приложением доверенности;</li>
        <li>нотариально заверенная копия.</li>
      </ul>
    </div>
    <button class="cursor-pointer text-secondary underline decoration-dotted underline-offset-4 hover:text-primary" type="button">заверенная копия</button>
  </div>
</div>
`})))()}var a;function o(){return(o=e((()=>{a=`<div class="flex px-4 py-16">
  <div class="tooltip tooltip-primary tooltip-bottom tooltip-open">
    <div class="tooltip-content flex max-w-xs gap-2 p-4 text-left text-xs leading-relaxed">
      <svg class="size-4 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.995 16H12.003" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <p>Размеры груза не должны превышать допустимые: максимальный габарит до 3 м, вес до 32 кг.</p>
    </div>
    <label class="input input-error w-40">
      <input type="text" value="3,5" aria-label="Длина, м" aria-invalid="true">
      <span class="text-xs text-base-content/70">м</span>
    </label>
  </div>
</div>
`})))()}var s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o(),s={title:`Молекулы/Tooltip`,tags:[`autodocs`],parameters:{catalog:{component:`molecule-tooltip`},docs:{description:{component:["Подсказки daisyUI `tooltip`: появляются при наведении и фокусе с клавиатуры. Источник — `core/project-components/tooltip`.","Короткая подсказка — атрибут `data-tip`, тёмная (`neutral`); положение — `tooltip-bottom`, `tooltip-left`, `tooltip-right`, по умолчанию сверху. Иконка-триггер — кнопка `btn-ghost btn-xs btn-circle` с `info-circle` и `aria-label`.","Развёрнутая подсказка со списком — `tooltip tooltip-secondary` с `tooltip-content`. Триггер должен быть фокусируемым элементом (кнопкой); важную информацию в одну подсказку не прячьте.","Warning — предупреждение у поля или условия (замена сносок со звёздочками): `tooltip tooltip-primary` с `tooltip-content flex gap-2` и иконкой `info-circle`; у поля с ошибкой подсказку можно держать открытой классом `tooltip-open`."].join(`

`)}}}},c={name:`Positions`,render:()=>t,parameters:{docs:{source:{code:t}}}},l={name:`Rich content`,render:()=>r,parameters:{docs:{source:{code:r}}}},u={name:`Warning`,render:()=>a,parameters:{docs:{source:{code:a}}}},d=[`Basic`,`Rich`,`Warning`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Positions',
  render: () => basic,
  parameters: {
    docs: {
      source: {
        code: basic
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Rich content',
  render: () => rich,
  parameters: {
    docs: {
      source: {
        code: rich
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Warning',
  render: () => warning,
  parameters: {
    docs: {
      source: {
        code: warning
      }
    }
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Basic,l as Rich,u as Warning,d as __namedExportsOrder,s as default};