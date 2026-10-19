import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
  <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
  <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
  <calendar-month></calendar-month>
</calendar-date>
`})))()}var r;function i(){return(i=e((()=>{r=`<button type="button" popovertarget="calendar-02-popover" class="input" id="calendar-02-trigger" style="anchor-name:--calendar-02-anchor">
  Pick a date
</button>
<div popover id="calendar-02-popover" class="dropdown bg-base-100 rounded-box shadow-lg" style="position-anchor:--calendar-02-anchor">
  <calendar-date class="cally">
    <svg aria-label="Previous" class="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
    <svg aria-label="Next" class="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
    <calendar-month></calendar-month>
  </calendar-date>
</div>
`})))()}var a;function o(){return(o=e((()=>{a=`<div id="calendar-03-vanilla" class="vc"></div>
`})))()}var s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o(),s={title:`Справочник daisyUI/Data input/Calendar`,tags:[`autodocs`],parameters:{catalog:{component:`calendar`},docs:{description:{component:`HTML-примеров: 3. Источник: [Calendar](https://daisyui.com/components/calendar/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/calendar. Для реальной страницы необходимо отдельно подключить JavaScript Cally или Vanilla Calendar Pro: daisyUI предоставляет только стили календарей. Инициализация, русский язык и обработчик выбора даты находятся только в ui-kit/preview/calendar.js. Стили библиотек дополнительно не подключаются. Вариант React исключён; npm и CDN для Vanilla Calendar Pro используют одну разметку.`}}}},c={name:`Cally calendar`,render:()=>t,parameters:{docs:{source:{code:t},description:{story:`Для регистрации элементов calendar-date и calendar-month подключите модуль Cally. В Storybook библиотека загружается локально и только при открытии Calendar.`}}}},l={name:`Cally date picker`,render:()=>r,parameters:{docs:{source:{code:r},description:{story:`Нужны JavaScript Cally и обработчик события change у calendar-date, который обновляет текст кнопки. Открытие и закрытие выполняет нативный Popover API; расположение задаёт CSS Anchor Positioning. При повторном использовании измените id, popovertarget и имя CSS-якоря согласованно.`}}}},u={name:`Vanilla Calendar Pro`,render:()=>a,parameters:{docs:{source:{code:a},description:{story:`Подключите Calendar из vanilla-calendar-pro, создайте экземпляр с DOM-элементом .vc и вызовите init(). При удалении календаря вызовите destroy(). В Storybook это выполняет отдельный helper; скопированный HTML сам по себе календарь не создаёт.`}}}},d=[`Example01`,`Example02`,`Example03`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Cally calendar',
  render: () => example1,
  parameters: {
    docs: {
      source: {
        code: example1
      },
      description: {
        story: 'Для регистрации элементов calendar-date и calendar-month подключите модуль Cally. В Storybook библиотека загружается локально и только при открытии Calendar.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Cally date picker',
  render: () => example2,
  parameters: {
    docs: {
      source: {
        code: example2
      },
      description: {
        story: 'Нужны JavaScript Cally и обработчик события change у calendar-date, который обновляет текст кнопки. Открытие и закрытие выполняет нативный Popover API; расположение задаёт CSS Anchor Positioning. При повторном использовании измените id, popovertarget и имя CSS-якоря согласованно.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Vanilla Calendar Pro',
  render: () => example3,
  parameters: {
    docs: {
      source: {
        code: example3
      },
      description: {
        story: 'Подключите Calendar из vanilla-calendar-pro, создайте экземпляр с DOM-элементом .vc и вызовите init(). При удалении календаря вызовите destroy(). В Storybook это выполняет отдельный helper; скопированный HTML сам по себе календарь не создаёт.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Example01,l as Example02,u as Example03,d as __namedExportsOrder,s as default};