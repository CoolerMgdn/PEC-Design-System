import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./01-container-6WiUjJNR.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{t(),r=e=>`<div class="flex flex-col">\n${e.map(e=>e.trim().split(/\r?\n/).map(e=>`  ${e}`).join(`
`)).join(`

`)}\n</div>`,i=r([n]),a=r([n,n]),o={title:`Наши компоненты/Container`,tags:[`autodocs`],parameters:{catalog:{component:`project-container`}}},s={name:`Default`,render:()=>i,parameters:{docs:{source:{code:i}}}},c={name:`Two adjacent sections`,render:()=>a,parameters:{docs:{source:{code:a}}}},l=[`Basic`,`TwoSections`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => basic,
  parameters: {
    docs: {
      source: {
        code: basic
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Two adjacent sections',
  render: () => twoSections,
  parameters: {
    docs: {
      source: {
        code: twoSections
      }
    }
  }
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as Basic,c as TwoSections,l as __namedExportsOrder,o as default};