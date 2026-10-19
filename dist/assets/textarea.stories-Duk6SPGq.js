import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<fieldset class="fieldset w-full max-w-md">
  <label class="fieldset-legend" for="ds-textarea-01">Комментарий</label>
  <textarea class="textarea h-28 w-full" id="ds-textarea-01" maxlength="500" placeholder="Опишите вопрос" aria-describedby="ds-textarea-01-hint"></textarea>
  <p class="label" id="ds-textarea-01-hint">До 500 символов</p>
</fieldset>
<fieldset class="fieldset w-full max-w-md">
  <label class="fieldset-legend" for="ds-textarea-01-error">Текст обращения</label>
  <textarea class="textarea textarea-error h-28 w-full" id="ds-textarea-01-error" aria-invalid="true" aria-describedby="ds-textarea-01-error-text"></textarea>
  <p class="label text-error" id="ds-textarea-01-error-text">Обязательное поле</p>
</fieldset>
`})))()}var r;function i(){return(i=e((()=>{r=`<div class="relative w-full max-w-md">
  <label class="pointer-events-none absolute top-2.5 left-3 z-10 text-xs text-base-content/70" for="ds-textarea-02">Комментарий к заказу</label>
  <textarea class="textarea h-28 w-full pt-7" id="ds-textarea-02" placeholder="Например, код домофона или время доставки"></textarea>
</div>
`})))()}var a;function o(){return(o=e((()=>{a=`<label class="floating-label w-full max-w-md">
  <span>Описание груза</span>
  <textarea class="textarea h-28 w-full" placeholder="Описание груза"></textarea>
</label>
`})))()}var s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o(),s={title:`Атомы/Textarea`,tags:[`autodocs`],parameters:{catalog:{component:`atom-textarea`},docs:{description:{component:["Многострочное поле daisyUI `textarea`. Источник — `core/project-components/textarea`.",'Наведение и фокус — как у Input (тема ПЭК). Ограничение длины — `maxlength` с подсказкой; ошибка — `textarea-error`, `aria-invalid="true"` и текст `label text-error`.',"Label inside — подпись внутри поля: `label.absolute.top-2.5.left-3.text-xs.text-base-content/70` над текстом, у поля `pt-7`.","Floating label — `label.floating-label` с `span` и `textarea`: подсказка в поле при вводе поднимается на рамку, как у Input."].join(`

`)}}}},c={name:`States`,render:()=>t,parameters:{docs:{source:{code:t}}}},l={name:`Label inside`,render:()=>r,parameters:{docs:{source:{code:r}}}},u={name:`Floating label`,render:()=>a,parameters:{docs:{source:{code:a}}}},d=[`States`,`LabelInside`,`FloatingLabel`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'States',
  render: () => textarea,
  parameters: {
    docs: {
      source: {
        code: textarea
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Label inside',
  render: () => labelInside,
  parameters: {
    docs: {
      source: {
        code: labelInside
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Floating label',
  render: () => floatingLabel,
  parameters: {
    docs: {
      source: {
        code: floatingLabel
      }
    }
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as FloatingLabel,l as LabelInside,c as States,d as __namedExportsOrder,s as default};