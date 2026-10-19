import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{_ as t,a as n,c as r,d as i,f as a,g as o,h as s,i as c,l,m as u,n as d,o as f,p,r as m,s as h,t as g,u as _,v}from"./manifest-BGyccck-.js";import{n as y,t as b}from"./01-container-6WiUjJNR.js";var x;function S(){return(S=e((()=>{x=`<picture class="block">
  <source
    type="image/avif"
    srcset="{{IMAGE_AVIF_SRCSET}}"
    sizes="{{IMAGE_SIZES}}"
  >
  <img
    src="{{IMAGE_SRC}}"
    srcset="{{IMAGE_WEBP_SRCSET}}"
    sizes="{{IMAGE_SIZES}}"
    width="{{IMAGE_WIDTH}}"
    height="{{IMAGE_HEIGHT}}"
    alt="{{IMAGE_ALT}}"
    class="block w-full h-auto"
    loading="eager"
    decoding="async"
  >
</picture>
`})))()}function C(e){let t=T[w+e.file];if(!t)throw Error(`Missing image demo asset: ${e.file}`);return t}var w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{if(t(),s(),p(),i(),l(),h(),n(),m(),S(),y(),g(),w=`../../assets/demo/responsive-image/`,T=Object.assign({"../../assets/demo/responsive-image/logistics-terminal-1200.avif":v,"../../assets/demo/responsive-image/logistics-terminal-1200.webp":o,"../../assets/demo/responsive-image/logistics-terminal-1536.avif":u,"../../assets/demo/responsive-image/logistics-terminal-1536.webp":a,"../../assets/demo/responsive-image/logistics-terminal-480.avif":_,"../../assets/demo/responsive-image/logistics-terminal-480.webp":r,"../../assets/demo/responsive-image/logistics-terminal-768.avif":f,"../../assets/demo/responsive-image/logistics-terminal-768.webp":c}),E=e=>d.files.filter(t=>t.mimeType===e).sort((e,t)=>e.width-t.width),D=e=>e.map(e=>`${C(e)} ${e.width}w`).join(`, `),O=E(`image/webp`),k=O.at(-1),A={IMAGE_AVIF_SRCSET:D(E(`image/avif`)),IMAGE_WEBP_SRCSET:D(O),IMAGE_SRC:C(k),IMAGE_SIZES:`(min-width: 80rem) 78.5rem, (min-width: 64rem) 62.5rem, (min-width: 48rem) 46.5rem, calc(100vw - 1.5rem)`,IMAGE_WIDTH:k.width,IMAGE_HEIGHT:k.height,IMAGE_ALT:d.alt},j=e=>String(e).replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`),M=x.replace(/\{\{([A-Z_]+)\}\}/g,(e,t)=>{if(!Object.hasOwn(A,t))throw Error(`Unknown image template parameter: ${t}`);return j(A[t])}),N=`    Содержимое`,!`<section class="w-full my-5 md:my-8 lg:my-10">
  <div class="w-full mx-auto px-3 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
    Содержимое
  </div>
</section>
`.includes(N))throw Error(`Project container content marker not found`);P=b.replace(N,M.trim().split(/\r?\n/).map(e=>`    ${e}`).join(`
`)),F={title:`Наши компоненты/Image`,tags:[`autodocs`],parameters:{catalog:{component:`project-image`},docs:{description:{component:["Нативный `<picture>`: AVIF и резервный WebP, полная ширина родителя и исходные пропорции. JavaScript для работы изображения не нужен.","В Code показан HTML-шаблон из `core/project-components/image/01-image.html`. Перед вставкой на страницу заполните все `{{IMAGE_*}}` обычными значениями; обработчик шаблона на сайте не требуется.","`IMAGE_SRC` — постоянный путь к WebP. `IMAGE_AVIF_SRCSET` и `IMAGE_WEBP_SRCSET` — списки реальных файлов с их шириной (`480w` и т. п.). Все варианты должны сохранять один кадр и пропорции.","`IMAGE_SIZES` задаёт фактическую ширину места изображения и заполняется одинаково у source и img. Превью использует полный проектный контейнер с боковыми полями; для карточки или колонки значение нужно пересчитать.","`IMAGE_WIDTH` и `IMAGE_HEIGHT` — размеры резервного файла; `IMAGE_ALT` — описание по смыслу изображения, либо пустая строка для декоративного. Текст и значения атрибутов нужно HTML-экранировать.",'Пример виден на первом экране, поэтому использует `loading="eager"`. Для изображения ниже первого экрана замените его на `loading="lazy"`. При необходимости скругления добавьте существующий `rounded-sm` на img.',`Демонстрационные изображения находятся только в ui-kit. На странице используйте собственные ресурсы. Максимальный исходник — 1536 × 1024 px; он не обеспечивает полную детализацию DPR 2 при ширине 1256 CSS px.`].join(`

`)}}}},I={name:`Responsive image`,render:()=>P,parameters:{docs:{story:{iframeHeight:600},source:{code:x}}}},L=[`Basic`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Responsive image',
  render: () => wrappedPreview,
  parameters: {
    docs: {
      story: {
        iframeHeight: 600
      },
      source: {
        code: image
      }
    }
  }
}`,...I.parameters?.docs?.source}}}})))()}R();export{I as Basic,L as __namedExportsOrder,F as default};