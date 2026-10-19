import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a;function o(){return(o=e((()=>{t=`<div class="flex w-full flex-col gap-10">
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">Шкала Tailwind</h2>
      <p class="text-sm text-neutral-500">Стандартная шкала скруглений Tailwind — та же, что на сайте ПЭК. Для собственной разметки выбирайте класс шкалы; произвольные значения в квадратных скобках не используются.</p>
    </div>
    <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">${[[`rounded-xs`,`--radius-xs`,`Мелкие детали: индикаторы, метки на графиках`],[`rounded-sm`,`--radius-sm`,`Карточки, блоки, таблицы, модальные окна`],[`rounded-md`,`--radius-md`,`Вложенные элементы внутри карточек`],[`rounded-lg`,`--radius-lg`,`Кнопки, поля, чипсы, бейджи`],[`rounded-xl`,`--radius-xl`,`Крупные промо-блоки, баннеры`],[`rounded-2xl`,`--radius-2xl`,`Крупные изображения, обложки`],[`rounded-3xl`,`--radius-3xl`,`Декоративные формы`],[`rounded-4xl`,`--radius-4xl`,`Декоративные формы`],[`rounded-full`,null,`Круглые кнопки-иконки, аватары, radio, чипсы-«пилюли»`]].map(([e,t,n])=>`
      <div class="flex flex-col gap-3">
        <div class="flex h-24 items-center justify-center border-2 border-secondary bg-base-200 ${e}">
          <code class="text-xs">${e}</code>
        </div>
        <div class="flex flex-col gap-1 text-xs">
          ${t?`<span><code>${t}</code> = <span data-token="${t}"></span></span>`:`<span>50%</span>`}
          <span class="text-neutral-500">${n}</span>
        </div>
      </div>`).join(``)}
    </div>
  </section>
  <section class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">Радиусы компонентов daisyUI</h2>
      <p class="text-sm text-neutral-500">Компоненты daisyUI читают три своих переменные. В <code>core/tokens.min.css</code> они ссылаются на шкалу Tailwind, поэтому отдельных значений у них нет. Не добавляйте готовым компонентам классы <code>rounded-*</code> только ради повторения радиуса.</p>
    </div>
    <div class="overflow-x-auto rounded-sm border border-base-300">
      <table class="table">
        <thead><tr><th>Переменная daisyUI</th><th>Ссылается на</th><th>Компоненты</th></tr></thead>
        <tbody>${[[`--radius-field`,`--radius-lg`,`Button, Input, Select, Textarea, Chip`],[`--radius-box`,`--radius-sm`,`Card, Modal, Alert, Dropdown, Table`],[`--radius-selector`,`--radius-lg`,`Badge, Checkbox, Toggle`]].map(([e,t,n])=>`<tr><td><code>${e}</code></td><td><code>${t}</code> (<span data-token="${t}"></span>)</td><td>${n}</td></tr>`).join(``)}</tbody>
      </table>
    </div>
  </section>
</div>`,n=`<article class="rounded-sm bg-base-200 p-6">Карточка</article>
<span class="rounded-lg bg-base-300 px-3 py-1">Метка</span>
<img class="rounded-2xl" src="…" alt="…">`,r={title:`Основы/Скругления`,tags:[`autodocs`],parameters:{catalog:{component:`foundation-radius`},docs:{description:{component:"Шкала скруглений Tailwind — `core/theme.css` (`--radius-*`). Радиусы компонентов daisyUI ссылаются на неё в `core/tokens.min.css`. Правила — `docs/rules-template.md#скругления`."}}}},i={name:`Скругления`,render:()=>t,parameters:{docs:{source:{code:n}}}},a=[`Radius`],i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Скругления',
  render: () => page,
  parameters: {
    docs: {
      source: {
        code: usage
      }
    }
  }
}`,...i.parameters?.docs?.source}}}})))()}o();export{i as Radius,a as __namedExportsOrder,r as default};