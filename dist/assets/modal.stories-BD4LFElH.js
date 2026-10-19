import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<button class="btn btn-primary" type="button" commandfor="ds-modal-01" command="show-modal">Оставить заявку</button>
<dialog class="modal modal-bottom md:modal-middle" id="ds-modal-01" aria-labelledby="ds-modal-01-title">
  <div class="modal-box max-w-lg rounded-t-3xl md:rounded-2xl p-6 md:p-8 lg:max-w-2xl">
    <span class="mx-auto -mt-2 mb-4 block h-1 w-10 rounded-full bg-base-300 md:hidden" aria-hidden="true"></span>
    <button class="btn btn-ghost btn-sm btn-square absolute top-3 right-3" type="button" commandfor="ds-modal-01" command="close" aria-label="Закрыть"><svg class="size-6 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <h2 class="text-center text-xl leading-tight font-semibold md:text-2xl" id="ds-modal-01-title">Оставьте контактные данные</h2>
    <form class="mt-6" action="#" method="post">
      <div class="grid gap-3 lg:grid-cols-2">
        <label class="floating-label lg:col-span-2">
          <span>Ваше имя</span>
          <input class="input w-full" type="text" name="name" autocomplete="name" placeholder="Ваше имя" required>
        </label>
        <label class="floating-label">
          <span>Телефон</span>
          <input class="input w-full" type="tel" name="phone" inputmode="tel" autocomplete="tel" placeholder="Телефон" required>
        </label>
        <label class="floating-label">
          <span>Электронная почта</span>
          <input class="input w-full" type="email" name="email" autocomplete="email" placeholder="Электронная почта">
        </label>
        <label class="floating-label lg:col-span-2">
          <span>Комментарий</span>
          <textarea class="textarea h-24 w-full" name="message" placeholder="Комментарий"></textarea>
        </label>
      </div>
      <div class="mt-4 flex flex-col gap-3 text-xs leading-relaxed">
        <label class="flex items-start gap-3">
          <input class="checkbox checkbox-primary checkbox-sm mt-0.5" type="checkbox" name="consent" required>
          <span>Даю <a class="link link-secondary font-medium hover:text-primary" href="#">согласие</a> на обработку персональных данных, а также подтверждаю, что ознакомлен с <a class="link link-secondary font-medium hover:text-primary" href="#">Политикой обработки персональных данных</a></span>
        </label>
        <label class="flex items-start gap-3">
          <input class="checkbox checkbox-primary checkbox-sm mt-0.5" type="checkbox" name="marketing">
          <span>Даю <a class="link link-secondary font-medium hover:text-primary" href="#">согласие</a> на получение рекламных рассылок на указанный адрес электронной почты</span>
        </label>
      </div>
      <div class="mt-6 flex max-lg:justify-center">
        <button class="btn btn-primary max-sm:w-full" type="submit">Отправить заявку</button>
      </div>
    </form>
  </div>
  <form class="modal-backdrop" method="dialog"><button type="submit">Закрыть</button></form>
</dialog>
`})))()}var r;function i(){return(i=e((()=>{r=`<div class="flex flex-wrap gap-3">
  <button class="btn" type="button" commandfor="ds-modal-02-success" command="show-modal">Успех</button>
  <button class="btn" type="button" commandfor="ds-modal-02-error" command="show-modal">Ошибка</button>
</div>
<dialog class="modal modal-bottom md:modal-middle" id="ds-modal-02-success" aria-labelledby="ds-modal-02-success-title">
  <div class="modal-box flex max-w-md flex-col items-center rounded-t-3xl md:rounded-2xl px-6 py-10 text-center">
    <span class="mx-auto -mt-6 mb-6 block h-1 w-10 rounded-full bg-base-300 md:hidden" aria-hidden="true"></span>
    <button class="btn btn-ghost btn-sm btn-square absolute top-3 right-3" type="button" commandfor="ds-modal-02-success" command="close" aria-label="Закрыть"><svg class="size-6 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <svg class="size-12 text-success" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="currentColor"/></svg>
    <h2 class="mt-4 text-xl font-semibold" id="ds-modal-02-success-title">Заявка отправлена!</h2>
    <p class="mt-2 text-sm leading-relaxed">Менеджер скоро перезвонит вам для уточнения всех деталей по заявке.</p>
  </div>
  <form class="modal-backdrop" method="dialog"><button type="submit">Закрыть</button></form>
</dialog>
<dialog class="modal modal-bottom md:modal-middle" id="ds-modal-02-error" aria-labelledby="ds-modal-02-error-title">
  <div class="modal-box flex max-w-md flex-col items-center rounded-t-3xl md:rounded-2xl px-6 py-10 text-center">
    <span class="mx-auto -mt-6 mb-6 block h-1 w-10 rounded-full bg-base-300 md:hidden" aria-hidden="true"></span>
    <button class="btn btn-ghost btn-sm btn-square absolute top-3 right-3" type="button" commandfor="ds-modal-02-error" command="close" aria-label="Закрыть"><svg class="size-6 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <svg class="size-12 text-error" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z" fill="currentColor"/></svg>
    <h2 class="mt-4 text-xl font-semibold" id="ds-modal-02-error-title">Не удалось отправить заявку</h2>
    <p class="mt-2 text-sm leading-relaxed">Проверьте подключение к интернету и попробуйте ещё раз.</p>
    <button class="btn btn-outline btn-secondary mt-6 max-sm:w-full" type="button" commandfor="ds-modal-02-error" command="close">Попробовать снова</button>
  </div>
  <form class="modal-backdrop" method="dialog"><button type="submit">Закрыть</button></form>
</dialog>
`})))()}var a;function o(){return(o=e((()=>{a=`<button class="btn" type="button" commandfor="ds-modal-03" command="show-modal">Показать уведомление</button>
<dialog class="modal" id="ds-modal-03" closedby="none" aria-labelledby="ds-modal-03-title" aria-describedby="ds-modal-03-text">
  <div class="modal-box max-w-lg rounded-2xl p-6 md:p-8">
    <h2 class="text-lg font-semibold" id="ds-modal-03-title">Изменилась валюта расчёта</h2>
    <p class="mt-3 text-sm leading-relaxed" id="ds-modal-03-text">После смены филиала оплаты мы обновили валюту заявки. Стоимость услуг конвертирована по курсу в соответствии со страной филиала.</p>
    <p class="mt-3 flex items-center gap-2 text-sm"><s class="text-base-content/70">1 000 ₽</s> <svg class="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.43 5.93L20.5 12L14.43 18.07" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg> <strong>200 BYN</strong></p>
    <button class="btn btn-primary mt-6 max-sm:w-full" type="button" commandfor="ds-modal-03" command="close">Понятно</button>
  </div>
</dialog>
`})))()}var s;function c(){return(c=e((()=>{s=`<button class="btn" type="button" commandfor="ds-modal-04" command="show-modal">Дополнительные параметры</button>
<dialog class="modal modal-bottom md:modal-middle" id="ds-modal-04" aria-labelledby="ds-modal-04-title">
  <form class="modal-box max-w-lg rounded-t-3xl md:rounded-2xl p-6 md:p-8" method="dialog">
    <span class="mx-auto -mt-2 mb-4 block h-1 w-10 rounded-full bg-base-300 md:hidden" aria-hidden="true"></span>
    <h2 class="text-lg font-semibold" id="ds-modal-04-title">Дополнительные параметры</h2>
    <div class="mt-4 grid gap-3 sm:grid-cols-2">
      <label class="floating-label">
        <span>ID груза клиента</span>
        <input class="input w-full" type="text" name="client-id" placeholder="ID груза клиента">
      </label>
      <label class="floating-label">
        <span>Номер пломбы</span>
        <input class="input w-full" type="text" name="seal" placeholder="Номер пломбы">
      </label>
    </div>
    <div class="group mt-4">
      <label class="flex items-center gap-3 text-sm">
        <input class="checkbox checkbox-primary checkbox-sm" type="checkbox" name="return-docs">
        Установить возврат документов
      </label>
      <div class="mt-3 hidden flex-col gap-3 group-has-checked:flex">
        <label class="floating-label">
          <span>Возвращаемые документы по грузу</span>
          <input class="input w-full" type="text" name="docs" placeholder="Возвращаемые документы по грузу">
        </label>
        <label class="floating-label">
          <span>Примечание</span>
          <textarea class="textarea h-20 w-full" name="note" placeholder="Примечание"></textarea>
        </label>
      </div>
    </div>
    <div class="mt-6 flex flex-wrap gap-3">
      <button class="btn btn-primary max-sm:w-full" type="submit" value="accept">Принять</button>
      <button class="btn btn-outline btn-secondary max-sm:w-full" type="submit" value="cancel">Отменить</button>
    </div>
  </form>
  <form class="modal-backdrop" method="dialog"><button type="submit">Закрыть</button></form>
</dialog>
`})))()}var l;function u(){return(u=e((()=>{l=`<div class="max-w-md text-xs leading-relaxed">
  <label class="flex items-start gap-3">
    <input class="checkbox checkbox-primary checkbox-sm mt-0.5" type="checkbox" name="consent" required>
    <span>Даю <button class="link link-secondary inline text-left font-medium hover:text-primary" type="button" commandfor="ds-modal-05" command="show-modal">согласие</button> на обработку персональных данных, а также подтверждаю, что ознакомлен с <button class="link link-secondary inline text-left font-medium hover:text-primary" type="button" commandfor="ds-modal-05" command="show-modal">Положением об обработке и защите персональных данных</button></span>
  </label>
</div>
<dialog class="modal modal-bottom md:modal-middle" id="ds-modal-05" aria-labelledby="ds-modal-05-title">
  <div class="modal-box flex max-w-2xl flex-col overflow-hidden rounded-t-3xl md:rounded-2xl p-0">
    <div class="relative shrink-0 px-6 pt-4 md:pt-6 pb-4 md:px-8">
      <span class="mx-auto mb-4 block h-1 w-10 rounded-full bg-base-300 md:hidden" aria-hidden="true"></span>
      <h2 class="pr-10 text-lg font-medium" id="ds-modal-05-title">Согласие на обработку персональных данных</h2>
      <button class="btn btn-ghost btn-sm btn-square absolute top-7 right-4 md:top-5 md:right-6" type="button" commandfor="ds-modal-05" command="close" aria-label="Закрыть"><svg class="size-6 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    </div>
    <div class="min-h-0 grow overflow-y-auto px-6 text-sm leading-relaxed md:px-8" tabindex="0" aria-label="Текст документа">
      <p class="text-center text-lg font-semibold uppercase">Положение</p>
      <p class="mt-1 text-center font-semibold">об обработке и защите персональных данных</p>
      <h3 class="mt-6 font-semibold">1. Общие положения</h3>
      <p class="mt-2">Текст документа предоставляет юридическая служба. Компонент показывает только оформление: заголовки разделов, абзацы и списки внутри прокручиваемой области.</p>
      <h3 class="mt-6 font-semibold">2. Обработка персональных данных</h3>
      <p class="mt-2">Абзацы документа — обычный текст, подразделы — заголовки, перечисления — нумерованные или маркированные списки.</p>
      <ol class="mt-2 list-decimal space-y-1 pl-5">
        <li>Первый пункт раздела.</li>
        <li>Второй пункт раздела.</li>
      </ol>
      <h3 class="mt-6 font-semibold">3. Передача персональных данных</h3>
      <p class="mt-2">Длинный документ прокручивается внутри окна, заголовок окна и кнопка «Принять» остаются на месте.</p>
      <ul class="mt-2 space-y-1 pl-5 list-disc">
        <li>Маркированный пункт раздела.</li>
        <li>Ещё один маркированный пункт.</li>
      </ul>
      <h3 class="mt-6 font-semibold">4. Хранение персональных данных</h3>
      <p class="mt-2">Раздел документа. Здесь размещается текст, предоставленный юридической службой.</p>
      <h3 class="mt-6 font-semibold">5. Права субъекта персональных данных</h3>
      <p class="mt-2">Раздел документа. Здесь размещается текст, предоставленный юридической службой.</p>
      <h3 class="mt-6 font-semibold">6. Заключительные положения</h3>
      <p class="mt-2 pb-6">Раздел документа. Здесь размещается текст, предоставленный юридической службой.</p>
    </div>
    <div class="shrink-0 border-t border-base-300 px-6 py-4 md:px-8">
      <button class="btn btn-primary max-sm:w-full" type="button" commandfor="ds-modal-05" command="close">Принять</button>
    </div>
  </div>
  <form class="modal-backdrop" method="dialog"><button type="submit">Закрыть</button></form>
</dialog>
`})))()}var d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),o(),c(),u(),d={title:`Организмы/Modal`,tags:[`autodocs`],parameters:{catalog:{component:`organism-modal`},docs:{description:{component:["Модальные окна на нативном `dialog` с классами `modal` и `modal-box` daisyUI. Источник — `core/project-components/modal`. Откройте окно кнопкой в примере.",'Открытие и закрытие без JavaScript: у кнопки `commandfor="<id окна>"` и `command="show-modal"` / `command="close"` (Invoker Commands; для старых браузеров страница может добавить вызов `showModal()`). Закрытие кликом по фону — `form.modal-backdrop` с `method="dialog"`, клавишей Escape — штатно. Окно получает `aria-labelledby` с id заголовка. Затенение — `neutral` 70% (тема ПЭК).',"На мобильных окна открываются шторкой снизу, как Drawer: `dialog.modal.modal-bottom md:modal-middle`, у окна `rounded-t-3xl md:rounded-2xl` и ручка `span.h-1.w-10.rounded-full.bg-base-300.md:hidden` (`aria-hidden`). Исключение — Important: важное предупреждение всегда по центру.",'Окно — `modal-box rounded-2xl p-6 md:p-8`, крестик — `btn btn-ghost btn-sm btn-square absolute top-3 right-3` с иконкой `add rotate-45` и `aria-label="Закрыть"`. Form — ФОС в окне; Result — успех (`tick-circle text-success`) или ошибка (`close-circle text-error`) по центру.','Important — важное уведомление, закрывается только кнопкой: без крестика и фона-закрывашки, у `dialog` атрибут `closedby="none"` (Escape и клик вне окна не закрывают). Conditional — поля появляются при отметке чекбокса без скрипта: обёртка `group`, блок `hidden group-has-checked:flex`; кнопки «Принять» (`btn-primary`) и «Отменить» (`btn-outline btn-secondary`).','Document — текст документа (политика обработки персональных данных) по ссылке у чекбокса согласия: `modal-box flex max-w-2xl flex-col overflow-hidden p-0`; шапка и низ закреплены (`shrink-0`), прокручивается только тело `min-h-0 grow overflow-y-auto` (`tabindex="0"` и `aria-label` — для прокрутки с клавиатуры); кнопка «Принять» закрывает окно.'].join(`

`)}}}},f={name:`Form`,render:()=>t,parameters:{docs:{source:{code:t}}}},p={name:`Result`,render:()=>r,parameters:{docs:{source:{code:r}}}},m={name:`Important`,render:()=>a,parameters:{docs:{source:{code:a}}}},h={name:`Conditional`,render:()=>s,parameters:{docs:{source:{code:s}}}},g={name:`Document`,render:()=>l,parameters:{docs:{source:{code:l}}}},_=[`Form`,`Result`,`Important`,`Conditional`,`Document`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Form',
  render: () => form,
  parameters: {
    docs: {
      source: {
        code: form
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Result',
  render: () => result,
  parameters: {
    docs: {
      source: {
        code: result
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Important',
  render: () => important,
  parameters: {
    docs: {
      source: {
        code: important
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Conditional',
  render: () => conditional,
  parameters: {
    docs: {
      source: {
        code: conditional
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Document',
  render: () => documentHtml,
  parameters: {
    docs: {
      source: {
        code: documentHtml
      }
    }
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{h as Conditional,g as Document,f as Form,m as Important,p as Result,_ as __namedExportsOrder,d as default};