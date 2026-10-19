import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t;function n(){return(n=e((()=>{t=`<input class="input validator" type="email" required placeholder="mail@site.com" />
`})))()}var r;function i(){return(i=e((()=>{r=`<input class="input validator" type="email" required placeholder="mail@site.com" />
<div class="validator-hint">Enter valid email address</div>
`})))()}var a;function o(){return(o=e((()=>{a=`<input type="password" class="input validator" required placeholder="Password" minlength="8"
  pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
<p class="validator-hint">
  Must be more than 8 characters, including
  <br/>At least one number
  <br/>At least one lowercase letter
  <br/>At least one uppercase letter
</p>
`})))()}var s;function c(){return(c=e((()=>{s=`<input type="text" class="input validator" required placeholder="Username"
  pattern="[A-Za-z][A-Za-z0-9\\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
<p class="validator-hint">
  Must be 3 to 30 characters
  <br/>containing only letters, numbers or dash
</p>
`})))()}var l;function u(){return(u=e((()=>{l=`<input type="tel" class="input validator tabular-nums" required placeholder="Phone"
  pattern="[0-9]*" minlength="10" maxlength="10" title="Must be 10 digits" />
<p class="validator-hint">Must be 10 digits</p>
`})))()}var d;function f(){return(f=e((()=>{d=`<input type="url" class="input validator" required placeholder="https://" value="https://"
  pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\\-].*[a-zA-Z0-9])?\\.)+[a-zA-Z].*$"
  title="Must be valid URL" />
<p class="validator-hint">Must be valid URL</p>
`})))()}var p;function m(){return(m=e((()=>{p=`<input type="date" class="input validator" required placeholder="Pick a date in 2025"
min="2025-01-01" max="2025-12-31"
  title="Must be a date in 2025" />
<p class="validator-hint">Must be 2025</p>
`})))()}var h;function g(){return(g=e((()=>{h=`<input type="number" class="input validator" required placeholder="Type a number between 1 to 10"
min="1" max="10"
  title="Must be between be 1 to 10" />
<p class="validator-hint">Must be between be 1 to 10</p>
`})))()}var _;function v(){return(v=e((()=>{_=`<input type="checkbox" class="checkbox validator" required title="Required" />
<p class="validator-hint">Required</p>
`})))()}var y;function b(){return(b=e((()=>{y=`<input type="checkbox" class="toggle validator" required title="Required" />
<p class="validator-hint">Required</p>
`})))()}var x;function S(){return(S=e((()=>{x=`<form>
  <select class="select validator" required>
    <option disabled selected value="">Choose:</option>
    <option>Tabs</option>
    <option>Spaces</option>
  </select>
  <p class="validator-hint">Required</p>
  <button class="btn" type="submit">Submit form</button>
</form>
`})))()}var C;function w(){return(w=e((()=>{C=`<form class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <fieldset class="fieldset">
    <label class="label" for="data-input-validator-12-field-1">Email</label>
    <input id="data-input-validator-12-field-1" type="email" class="input validator" placeholder="Email" required />
    <p class="validator-hint hidden">Required</p>
  </fieldset>

  <label class="fieldset">
    <span class="label">Password</span>
    <input type="password" class="input validator" placeholder="Password" required />
    <span class="validator-hint hidden">Required</span>
  </label>

  <button class="btn btn-neutral mt-4" type="submit">Login</button>
  <button class="btn btn-ghost mt-1" type="reset">Reset</button>
</form>
`})))()}var T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{n(),i(),o(),c(),u(),f(),m(),g(),v(),b(),S(),w(),T={title:`Справочник daisyUI/Data input/Validator`,tags:[`autodocs`],parameters:{catalog:{component:`validator`},docs:{description:{component:`HTML-примеров: 12. Источник: [Validator](https://daisyui.com/components/validator/) daisyUI 5.7.46. Исходный HTML хранится в core/components/data-input/validator.`}}}},E={name:`Validator`,render:()=>t,parameters:{docs:{source:{code:t}}}},D={name:`Validator and validator-hint`,render:()=>r,parameters:{docs:{source:{code:r}}}},O={name:`Password requirement validator`,render:()=>a,parameters:{docs:{source:{code:a}}}},k={name:`Username requirement validator`,render:()=>s,parameters:{docs:{source:{code:s}}}},A={name:`Phone Number requirement validator`,render:()=>l,parameters:{docs:{source:{code:l}}}},j={name:`URL input requirement validator`,render:()=>d,parameters:{docs:{source:{code:d}}}},M={name:`Date input requirement validator`,render:()=>p,parameters:{docs:{source:{code:p}}}},N={name:`Number input requirement validator`,render:()=>h,parameters:{docs:{source:{code:h}}}},P={name:`Checkbox requirement validator`,render:()=>_,parameters:{docs:{source:{code:_}}}},F={name:`Toggle requirement validator`,render:()=>y,parameters:{docs:{source:{code:y}}}},I={name:`Select requirement validator`,render:()=>x,parameters:{docs:{source:{code:x},description:{story:`Пример использует нативную HTML-валидацию формы. В Storybook успешная отправка формы отменяется, чтобы не перезагружать витрину. Обработку данных и отправку задаёт приложение.`}}}},L={name:`Form requirement validator`,render:()=>C,parameters:{docs:{source:{code:C},description:{story:`Пример использует нативную HTML-валидацию формы. В Storybook успешная отправка формы отменяется, чтобы не перезагружать витрину. Обработку данных и отправку задаёт приложение.`}}}},R=[`Example01`,`Example02`,`Example03`,`Example04`,`Example05`,`Example06`,`Example07`,`Example08`,`Example09`,`Example10`,`Example11`,`Example12`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Validator",
  render: () => example1,
  parameters: {
    docs: {
      source: {
        code: example1
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Validator and validator-hint",
  render: () => example2,
  parameters: {
    docs: {
      source: {
        code: example2
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Password requirement validator",
  render: () => example3,
  parameters: {
    docs: {
      source: {
        code: example3
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Username requirement validator",
  render: () => example4,
  parameters: {
    docs: {
      source: {
        code: example4
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Phone Number requirement validator",
  render: () => example5,
  parameters: {
    docs: {
      source: {
        code: example5
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "URL input requirement validator",
  render: () => example6,
  parameters: {
    docs: {
      source: {
        code: example6
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Date input requirement validator",
  render: () => example7,
  parameters: {
    docs: {
      source: {
        code: example7
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Number input requirement validator",
  render: () => example8,
  parameters: {
    docs: {
      source: {
        code: example8
      }
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Checkbox requirement validator",
  render: () => example9,
  parameters: {
    docs: {
      source: {
        code: example9
      }
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Toggle requirement validator",
  render: () => example10,
  parameters: {
    docs: {
      source: {
        code: example10
      }
    }
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Select requirement validator",
  render: () => example11,
  parameters: {
    docs: {
      source: {
        code: example11
      },
      description: {
        story: "Пример использует нативную HTML-валидацию формы. В Storybook успешная отправка формы отменяется, чтобы не перезагружать витрину. Обработку данных и отправку задаёт приложение."
      }
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Form requirement validator",
  render: () => example12,
  parameters: {
    docs: {
      source: {
        code: example12
      },
      description: {
        story: "Пример использует нативную HTML-валидацию формы. В Storybook успешная отправка формы отменяется, чтобы не перезагружать витрину. Обработку данных и отправку задаёт приложение."
      }
    }
  }
}`,...L.parameters?.docs?.source}}}})))()}z();export{E as Example01,D as Example02,O as Example03,k as Example04,A as Example05,j as Example06,M as Example07,N as Example08,P as Example09,F as Example10,I as Example11,L as Example12,R as __namedExportsOrder,T as default};