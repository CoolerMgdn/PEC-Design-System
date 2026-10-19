import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<form class="filter">
  <input class="btn btn-square" type="reset" value="×"/>
  <input class="btn" type="radio" name="data-input-filter-01-frameworks" aria-label="Svelte"/>
  <input class="btn" type="radio" name="data-input-filter-01-frameworks" aria-label="Vue"/>
  <input class="btn" type="radio" name="data-input-filter-01-frameworks" aria-label="React"/>
</form>
`})))()}var r;function i(){return(i=e((()=>{r=`<div class="filter">
  <input class="btn filter-reset" type="radio" name="data-input-filter-02-metaframeworks" aria-label="All"/>
  <input class="btn" type="radio" name="data-input-filter-02-metaframeworks" aria-label="Sveltekit"/>
  <input class="btn" type="radio" name="data-input-filter-02-metaframeworks" aria-label="Nuxt"/>
  <input class="btn" type="radio" name="data-input-filter-02-metaframeworks" aria-label="Next.js"/>
</div>
`})))()}var a;function o(){return(o=e((()=>{a=`<form class="filter">
  <input class="btn" type="checkbox" name="data-input-filter-03-frameworks" aria-label="Svelte"/>
  <input class="btn" type="checkbox" name="data-input-filter-03-frameworks" aria-label="Vue"/>
  <input class="btn" type="checkbox" name="data-input-filter-03-frameworks" aria-label="React"/>
  <input class="btn btn-square" type="reset" value="×"/>
</form>
`})))()}var s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o(),s={title:`Справочник daisyUI/Data input/Filter`,tags:[`autodocs`],parameters:{catalog:{component:`filter`},docs:{description:{component:`HTML-примеров: 3. Источник: [Filter](https://daisyui.com/components/filter/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/filter. Переключение и сброс выбора работают на HTML и CSS. Фильтрацию данных приложения нужно реализовать отдельно.`}}}},c={name:`Filter using HTML form, radio buttons and reset button`,render:()=>t,parameters:{docs:{source:{code:t}}}},l={name:`Filter without HTML form`,render:()=>r,parameters:{docs:{source:{code:r}}}},u={name:`Filter using HTML form, checkboxes, and a reset button`,render:()=>a,parameters:{docs:{source:{code:a}}}},d=[`Example01`,`Example02`,`Example03`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Filter using HTML form, radio buttons and reset button",
  render: () => example1,
  parameters: {
    docs: {
      source: {
        code: example1
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Filter without HTML form",
  render: () => example2,
  parameters: {
    docs: {
      source: {
        code: example2
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Filter using HTML form, checkboxes, and a reset button",
  render: () => example3,
  parameters: {
    docs: {
      source: {
        code: example3
      }
    }
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Example01,l as Example02,u as Example03,d as __namedExportsOrder,s as default};