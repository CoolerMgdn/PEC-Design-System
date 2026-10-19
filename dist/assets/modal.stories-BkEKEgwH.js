import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<!-- Open the dialog using native command and commandfor attributes -->
<button class="btn" command="show-modal" commandfor="actions-modal-01-my-modal-1">open modal</button>
<dialog id="actions-modal-01-my-modal-1" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
`})))()}var r;function i(){return(i=e((()=>{r=`<!-- Open the dialog using native command and commandfor attributes -->
<button class="btn" command="show-modal" commandfor="actions-modal-02-my-modal-2">open modal</button>
<dialog id="actions-modal-02-my-modal-2" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
`})))()}var a;function o(){return(o=e((()=>{a=`<!-- Open the dialog using native command and commandfor attributes -->
<button class="btn" command="show-modal" commandfor="actions-modal-03-my-modal-3">open modal</button>
<dialog id="actions-modal-03-my-modal-3" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
`})))()}var s;function c(){return(c=e((()=>{s=`<!-- Open the dialog using native command and commandfor attributes -->
<button class="btn" command="show-modal" commandfor="actions-modal-04-my-modal-4">open modal</button>
<dialog id="actions-modal-04-my-modal-4" class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
`})))()}var l;function u(){return(u=e((()=>{l=`<!-- Open the dialog using native command and commandfor attributes -->
<button class="btn" command="show-modal" commandfor="actions-modal-05-my-modal-5">open modal</button>
<dialog id="actions-modal-05-my-modal-5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
`})))()}var d;function f(){return(f=e((()=>{d=`<!-- The button's popovertarget attribute points to the modal's ID. ID must be unique for each modal -->
<button class="btn" popovertarget="actions-modal-06-my-modal-1">Open</button>

<div class="modal" id="actions-modal-06-my-modal-1" popover>
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <button popovertarget="actions-modal-06-my-modal-1" popovertargetaction="hide">close</button>
    </div>
  </div>
</div>
`})))()}var p;function m(){return(m=e((()=>{p=`<!-- The button's popovertarget attribute points to the modal's ID. ID must be unique for each modal -->
<button class="btn" popovertarget="actions-modal-07-my-modal-2">Open</button>

<div class="modal" id="actions-modal-07-my-modal-2" popover>
  <div class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
  </div>
  <div class="modal-backdrop">
    <button popovertarget="actions-modal-07-my-modal-2" popovertargetaction="hide">close</button>
  </div>
</div>
`})))()}var h;function g(){return(g=e((()=>{h=`<!-- The button to open modal -->
<label for="actions-modal-08-my-modal-6" class="btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="actions-modal-08-my-modal-6" class="modal-toggle" />
<div class="modal" role="dialog">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
    <div class="modal-action">
      <label for="actions-modal-08-my-modal-6" class="btn">Close!</label>
    </div>
  </div>
</div>
`})))()}var _;function v(){return(v=e((()=>{_=`<!-- The button to open modal -->
<label for="actions-modal-09-my-modal-7" class="btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="actions-modal-09-my-modal-7" class="modal-toggle" />
<div class="modal" role="dialog">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with a hidden checkbox!</p>
  </div>
  <label class="modal-backdrop" for="actions-modal-09-my-modal-7">Close</label>
</div>
`})))()}var y;function b(){return(b=e((()=>{y=`<!-- The button to open modal -->
<a href="#actions-modal-10-my-modal-8" class="btn">open modal</a>

<!-- Put this part before </body> tag -->
<div class="modal" role="dialog" id="actions-modal-10-my-modal-8">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">This modal works with anchor links</p>
    <div class="modal-action">
      <a href="#" class="btn">Yay!</a>
    </div>
  </div>
</div>
`})))()}var x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{n(),i(),o(),c(),u(),f(),m(),g(),v(),b(),x={title:`Справочник daisyUI/Actions/Modal`,tags:[`autodocs`],parameters:{catalog:{component:`modal`},docs:{description:{component:`HTML-примеров: 10. Источник: [Modal](https://daisyui.com/components/modal/) daisyUI 5.7.46. Исходный HTML хранится в core/components/actions/modal. Пять примеров dialog используют нативные Invoker Commands: command="show-modal" и commandfor вместо inline onclick. Нужна поддержка этих атрибутов браузером; в старых браузерах открывайте dialog через .showModal() в JavaScript своей страницы. Закрытие через form method="dialog" остаётся нативным. Также представлены Popover API и legacy-варианты checkbox и anchor link; последние не блокируют фокус снаружи и не закрываются клавишей Esc.`}}}},S={name:`Dialog modal`,render:()=>t,parameters:{docs:{source:{code:t},description:{story:`Открытие: нативные command="show-modal" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method="dialog" и Esc работает средствами dialog.`}}}},C={name:`Dialog modal, closes when clicked outside`,render:()=>r,parameters:{docs:{source:{code:r},description:{story:`Открытие: нативные command="show-modal" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method="dialog" и Esc работает средствами dialog.`}}}},w={name:`Dialog modal with a close button at corner`,render:()=>a,parameters:{docs:{source:{code:a},description:{story:`Открытие: нативные command="show-modal" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method="dialog" и Esc работает средствами dialog.`}}}},T={name:`Dialog modal with custom width`,render:()=>s,parameters:{docs:{source:{code:s},description:{story:`Открытие: нативные command="show-modal" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method="dialog" и Esc работает средствами dialog.`}}}},E={name:`Responsive`,render:()=>l,parameters:{docs:{source:{code:l},description:{story:`Открытие: нативные command="show-modal" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method="dialog" и Esc работает средствами dialog.`}}}},D={name:`Popover modal`,render:()=>d,parameters:{docs:{source:{code:d}}}},O={name:`Popover modal closes when clicked outside`,render:()=>p,parameters:{docs:{source:{code:p}}}},k={name:`Modal using checkbox`,render:()=>h,parameters:{docs:{source:{code:h}}}},A={name:`Modal that closes when clicked outside`,render:()=>_,parameters:{docs:{source:{code:_}}}},j={name:`Modal using anchor link`,render:()=>y,parameters:{docs:{source:{code:y},description:{story:`Legacy-вариант использует :target и меняет hash URL. Закрытие ссылкой href="#" может прокрутить страницу к началу; Esc и ограничение фокуса здесь не реализованы.`}}}},M=[`Example01`,`Example02`,`Example03`,`Example04`,`Example05`,`Example06`,`Example07`,`Example08`,`Example09`,`Example10`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Dialog modal",
  render: () => example1,
  parameters: {
    docs: {
      source: {
        code: example1
      },
      description: {
        story: "Открытие: нативные command=\\"show-modal\\" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method=\\"dialog\\" и Esc работает средствами dialog."
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Dialog modal, closes when clicked outside",
  render: () => example2,
  parameters: {
    docs: {
      source: {
        code: example2
      },
      description: {
        story: "Открытие: нативные command=\\"show-modal\\" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method=\\"dialog\\" и Esc работает средствами dialog."
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Dialog modal with a close button at corner",
  render: () => example3,
  parameters: {
    docs: {
      source: {
        code: example3
      },
      description: {
        story: "Открытие: нативные command=\\"show-modal\\" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method=\\"dialog\\" и Esc работает средствами dialog."
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Dialog modal with custom width",
  render: () => example4,
  parameters: {
    docs: {
      source: {
        code: example4
      },
      description: {
        story: "Открытие: нативные command=\\"show-modal\\" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method=\\"dialog\\" и Esc работает средствами dialog."
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Responsive",
  render: () => example5,
  parameters: {
    docs: {
      source: {
        code: example5
      },
      description: {
        story: "Открытие: нативные command=\\"show-modal\\" и commandfor. Если браузер не поддерживает Invoker Commands, подключите обработчик .showModal() в JavaScript страницы. Закрытие через form method=\\"dialog\\" и Esc работает средствами dialog."
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Popover modal",
  render: () => example6,
  parameters: {
    docs: {
      source: {
        code: example6
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Popover modal closes when clicked outside",
  render: () => example7,
  parameters: {
    docs: {
      source: {
        code: example7
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Modal using checkbox",
  render: () => example8,
  parameters: {
    docs: {
      source: {
        code: example8
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Modal that closes when clicked outside",
  render: () => example9,
  parameters: {
    docs: {
      source: {
        code: example9
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Modal using anchor link",
  render: () => example10,
  parameters: {
    docs: {
      source: {
        code: example10
      },
      description: {
        story: "Legacy-вариант использует :target и меняет hash URL. Закрытие ссылкой href=\\"#\\" может прокрутить страницу к началу; Esc и ограничение фокуса здесь не реализованы."
      }
    }
  }
}`,...j.parameters?.docs?.source}}}})))()}N();export{S as Example01,C as Example02,w as Example03,T as Example04,E as Example05,D as Example06,O as Example07,k as Example08,A as Example09,j as Example10,M as __namedExportsOrder,x as default};