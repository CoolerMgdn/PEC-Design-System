import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t=(e,t,n,r)=>`
    <div class="overflow-hidden rounded-sm border border-base-300">
      <div class="flex h-20 items-end p-3 ${e} ${t}">
        <span class="text-sm font-medium">${r}</span>
      </div>
      <div class="flex flex-col gap-1 bg-base-100 p-3 text-xs">
        <code class="font-medium">${e}</code>
        <span class="text-neutral-500" data-token="${n}"></span>
      </div>
    </div>`,n=(e,t,n)=>`
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">${e}</h2>
      <p class="text-sm text-neutral-500">${t}</p>
    </div>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">${n.join(``)}
    </div>
  </section>`,r=[[`bg-primary`,`text-primary-content`,`--color-primary`,`primary`],[`bg-secondary`,`text-secondary-content`,`--color-secondary`,`secondary`],[`bg-accent`,`text-accent-content`,`--color-accent`,`accent`],[`bg-neutral`,`text-neutral-content`,`--color-neutral`,`neutral`]],i=[[`bg-success`,`text-success-content`,`--color-success`,`success`],[`bg-warning`,`text-warning-content`,`--color-warning`,`warning`],[`bg-error`,`text-error-content`,`--color-error`,`error`],[`bg-info`,`text-info-content`,`--color-info`,`info`]],a=[[`bg-base-100`,`text-base-content`,`--color-base-100`,`base-100`],[`bg-base-200`,`text-base-content`,`--color-base-200`,`base-200`],[`bg-base-300`,`text-base-content`,`--color-base-300`,`base-300`],[`bg-base-content`,`text-base-100`,`--color-base-content`,`base-content`]],o=[[`bg-brand-blue`,`text-white`,`--color-brand-blue`,`brand-blue`],[`bg-primary`,`text-primary-content`,`--color-primary`,`red (primary)`]],s=`
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">Вспомогательные серые</h2>
      <p class="text-sm text-neutral-500">Цвета-помощники из Figma не вводятся отдельными токенами: используйте поверхность base-* или стандартную палитру Tailwind.</p>
    </div>
    <div class="overflow-x-auto rounded-sm border border-base-300">
      <table class="table">
        <thead><tr><th>Figma</th><th>Класс</th><th>Образец</th></tr></thead>
        <tbody>${[[`#FAFAFA`,`bg-neutral-50`],[`#F5F5F5 / #F6F6F6`,`bg-base-200`],[`#E4E6E7`,`bg-base-300`],[`#DBDBDB`,`bg-neutral-300`],[`#AAAAAA`,`bg-neutral-400`],[`#757575`,`bg-neutral-500`],[`#2B2B2B`,`bg-base-content`],[`#FFF6D2`,`bg-yellow-50`]].map(([e,t])=>`
          <tr><td>${e}</td><td><code>${t}</code></td><td><span class="block h-6 w-16 rounded-lg border border-base-300 ${t}"></span></td></tr>`).join(``)}
        </tbody>
      </table>
    </div>
  </section>`,c=`<div class="flex w-full flex-col gap-10">
  ${n(`Смысловые роли`,`Фон всегда используется в паре со своим цветом содержимого: bg-primary + text-primary-content.`,r.map(e=>t(...e)))}
  ${n(`Состояния`,`Сообщения об успехе, предупреждении, ошибке и информации.`,i.map(e=>t(...e)))}
  ${n(`Поверхности`,`Фон страницы и UI-компонентов; основной текст — text-base-content.`,a.map(e=>t(...e)))}
  ${n(`Фирменные цвета`,`Сигнальный синий и карминово-красный (роль primary). Титан из брендбука в интерфейсах не используется. Для фонов секций действуют правила backgrounds брендбука.`,o.map(e=>t(...e)))}
  ${s}
</div>`,l=`<!-- Цветная поверхность: фон + парный цвет содержимого -->
<div class="bg-secondary text-secondary-content rounded-sm p-6">…</div>

<!-- Базовая поверхность -->
<div class="bg-base-200 text-base-content rounded-sm p-6">…</div>

<!-- Фирменный синий -->
<section class="bg-brand-blue text-white">…</section>`,u={title:`Основы/Цвета`,tags:[`autodocs`],parameters:{catalog:{component:`foundation-colors`},docs:{description:{component:"Источник значений — `core/tokens.min.css` (значения ниже читаются из него в момент показа). Используйте классы ролей, а не HEX. Правила применения — `docs/rules-template.md#цвета-и-состояния`."}}}},d={name:`Цвета`,render:()=>c,parameters:{docs:{source:{code:l}}}},f=[`Palette`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Цвета',
  render: () => page,
  parameters: {
    docs: {
      source: {
        code: usage
      }
    }
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as Palette,f as __namedExportsOrder,u as default};