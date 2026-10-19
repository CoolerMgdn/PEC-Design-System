import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o;function s(){return(s=e((()=>{t=`Съешь ещё этих мягких французских булок, да выпей же чаю`,n=`<div class="flex w-full flex-col gap-12">
  <section class="flex flex-col gap-2">
    <h2 class="text-xl font-semibold">Шрифт</h2>
    <p class="text-base leading-relaxed">Roboto — единственный шрифт интерфейса, включая заголовки. Назначен по умолчанию, класс семейства не нужен. Oswald из брендбука используется только в печатных материалах.</p>
  </section>
  ${`
  <section class="flex flex-col gap-6">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">Шкала текста Tailwind</h2>
      <p class="text-sm text-neutral-500">Стандартная шкала Tailwind — та же, что на сайте ПЭК. Межстрочный интервал меняют классы <code>leading-tight</code> (1,25), <code>leading-normal</code> (1,5), <code>leading-relaxed</code> (1,625).</p>
    </div>
    <div class="flex flex-col divide-y divide-base-300">${[[`text-6xl`,`60 / 60`,`Крупные цифры и акценты`],[`text-5xl`,`48 / 48`,`H1 первого экрана (с leading-tight — 48 / 60)`],[`text-4xl`,`36 / 40`,`H1 страницы, H2 секции лендинга (с leading-tight — 36 / 45)`],[`text-3xl`,`30 / 36`,`Мобильный H1 первого экрана`],[`text-2xl`,`24 / 32`,`H2 интерфейса, мобильный H1`],[`text-xl`,`20 / 28`,`H3, мобильный H2`],[`text-lg`,`18 / 28`,`H4, H5`],[`text-base`,`16 / 24`,`Основной текст (с leading-relaxed — 16 / 26), H6`],[`text-sm`,`14 / 20`,`Текст на мобильных, поля, таблицы (с leading-relaxed — 14 / 22,75)`],[`text-xs`,`12 / 16`,`Вспомогательный текст, сноски, подписи`]].map(([e,n,r])=>`
      <div class="grid gap-2 py-5 lg:grid-cols-4 lg:gap-8">
        <div class="flex flex-col gap-1 text-xs">
          <code class="font-medium">${e}</code>
          <span class="text-neutral-500">${n} px · ${r}</span>
        </div>
        <p class="${e} lg:col-span-3">${t}</p>
      </div>`).join(``)}
    </div>
  </section>`}
  ${`
  <section class="flex flex-col gap-4">
    <h2 class="text-xl font-semibold">Толщина</h2>
    <div class="flex flex-col gap-3">${[[`font-normal`,`400`,`Основной текст, H5`],[`font-medium`,`500`,`H3, H4, H6, подписи блоков`],[`font-semibold`,`600`,`H1, H2, кнопки`],[`font-bold`,`700`,`Акценты в тексте`]].map(([e,n,r])=>`
      <div class="grid gap-2 lg:grid-cols-4 lg:gap-8">
        <div class="flex flex-col gap-1 text-xs"><code class="font-medium">${e}</code><span class="text-neutral-500">${n} · ${r}</span></div>
        <p class="text-lg ${e} lg:col-span-3">${t}</p>
      </div>`).join(``)}
    </div>
  </section>`}
  ${`
  <section class="flex flex-col gap-6">
    <div class="flex flex-col gap-1">
      <h2 class="text-xl font-semibold">Заголовки и текст</h2>
      <p class="text-sm text-neutral-500">Мобильный размер → md (768 px) → lg (1024 px). Меняйте ширину Canvas, чтобы увидеть адаптивность.</p>
    </div>
    <div class="flex flex-col gap-6">${[[`h1`,`H1 первого экрана`,`text-3xl leading-tight font-semibold md:text-4xl lg:text-5xl`],[`h1`,`H1 страницы`,`text-2xl leading-tight font-semibold md:text-4xl`],[`h2`,`H2 секции`,`text-xl leading-tight font-semibold md:text-2xl lg:text-4xl`],[`h3`,`H3`,`text-lg font-medium md:text-xl`],[`h4`,`H4`,`text-base font-medium md:text-lg`],[`h5`,`H5`,`text-sm md:text-lg`],[`h6`,`H6`,`text-xs font-medium md:text-base`],[`p`,`Абзац`,`text-sm leading-relaxed md:text-base`],[`p`,`Сноска`,`text-xs text-neutral-500`]].map(([e,n,r])=>`
      <div class="flex flex-col gap-2">
        <code class="text-xs text-neutral-500">&lt;${e}&gt; ${n}: ${r}</code>
        <div class="${r}">${t}</div>
      </div>`).join(``)}
    </div>
  </section>`}
  
  <section class="flex flex-col gap-6">
    <h2 class="text-xl font-semibold">Списки</h2>
    <ul class="flex flex-col gap-3 text-sm leading-relaxed md:text-base">
      <li class="flex gap-3"><span class="text-neutral-400" aria-hidden="true">—</span><span>если груз адресован лично вам — предъявить оригинал документа, удостоверяющего вашу личность;</span></li>
      <li class="flex gap-3"><span class="text-neutral-400" aria-hidden="true">—</span><span>если груз получает представитель — предъявить оригинал доверенности.</span></li>
    </ul>
    <ul class="flex list-disc flex-col gap-2 pl-5 text-sm marker:text-primary">
      <li>копия, заверенная подписью руководителя и печатью юридического лица;</li>
      <li>нотариально заверенная копия.</li>
    </ul>
  </section>
</div>`,r=`<h1 class="text-3xl leading-tight font-semibold md:text-4xl lg:text-5xl">Грузоперевозки по России</h1>
<h2 class="text-xl leading-tight font-semibold md:text-2xl lg:text-4xl">Как оформить заказ</h2>
<h3 class="text-lg font-medium md:text-xl">Сдайте груз</h3>
<p class="text-sm leading-relaxed md:text-base">Компания «ПЭК» несёт полную ответственность за сохранность груза.</p>
<p class="text-xs text-neutral-500">* Сноска</p>`,i={title:`Основы/Типографика`,tags:[`autodocs`],parameters:{catalog:{component:`foundation-typography`},docs:{description:{component:"Стандартная шкала Tailwind (`text-xs`…`text-6xl`, `leading-*`, `font-*`), как на сайте ПЭК. Правила применения — `docs/fonts-template.md`. Произвольные размеры в квадратных скобках не используются."}}}},a={name:`Типографика`,render:()=>n,parameters:{docs:{source:{code:r}}}},o=[`Typography`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Типографика',
  render: () => page,
  parameters: {
    docs: {
      source: {
        code: usage
      }
    }
  }
}`,...a.parameters?.docs?.source}}}})))()}s();export{a as Typography,o as __namedExportsOrder,i as default};