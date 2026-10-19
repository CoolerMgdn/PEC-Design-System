# UI-kit

Отдельный npm-проект на Storybook 10.6.0 с HTML-адаптером Vite и дополнением
Docs. Готовая светлая основа использует Tailwind CSS 4.3.3 и daisyUI 5.7.46
с темой `light`, 22 проектными цветовыми токенами, 3 токенами радиусов
и 3 токенами размеров и толщины рамки.

## Дизайн-система

Витрина организована как дизайн-система ПЭК:

| Раздел | Содержимое | Истории |
| --- | --- | --- |
| Дизайн-система | Введение: уровни, источники, правила | [`stories/intro.stories.js`](stories/intro.stories.js) |
| Основы | Цвета, типографика, сетка и отступы, скругления, тени, иконки | [`stories/foundations`](stories/foundations/) |
| Атомы | Button, Link, Chip, Badge, Checkbox, Radio, Toggle, Input, Select, Textarea, Range | [`stories/atoms`](stories/atoms/) |
| Молекулы | Breadcrumbs, Alert, Toast, Collapse, Tabs, Tooltip, Popover, Table, Radio Card, Download, Dropdown, Pagination, Join, File Input, Timeline, Progress, Carousel, Calendar (в работе) | [`stories/molecules`](stories/molecules/) |
| Организмы | Hero, Card, Features, Process, News, Text, Form, Calculator, Modal, Drawer, Loading (в работе) | [`stories/organisms`](stories/organisms/) |
| Примеры | В работе | — |
| Наши компоненты | Container, Image, Header, Footer, Page | [`stories/project`](stories/project/) |

Компоненты называются по daisyUI (Button, Input, Select и т.д.); для компонентов, которых в daisyUI нет,
используются общепринятые названия: Chip, Number Stepper, Header, Container, Image, Page.
| Справочник daisyUI | Исходный каталог daisyUI, описанный ниже | `stories/<категория>` |

Источники токенов: цветовые роли, радиусы компонентов daisyUI (ссылаются на шкалу Tailwind) и размеры полей —
[`core/tokens.min.css`](../core/tokens.min.css); шкала скруглений Tailwind `--radius-xs…4xl` — `core/theme.css`;
шрифт и тени (`shadow-card`, `shadow-soft`, `shadow-brand`, `shadow-dark`) —
[`core/theme.css`](../core/theme.css), который подключается рецептом сборки CSS. Фирменные `bg-brand-blue`,
`text-brand-blue` берут значение из `tokens.min.css`. Типографика — стандартная шкала Tailwind
(`text-xs`…`text-6xl`, `leading-*`, `font-*`), как на сайте ПЭК; сочетания для заголовков — `docs/fonts-template.md`.

В том же `core/theme.css` находится тема компонентов ПЭК поверх daisyUI: состояния полей (наведение, фокус
без кольца), отступ подсказки 4 px, ссылки без подчёркивания и чекбокс с красной галочкой без заливки.
Разметка компонентов остаётся штатной разметкой daisyUI. Плоский вид кнопок и полей задаёт `--depth: 0`
в `tokens.min.css`.

Иконки Vuesax Iconsax v1.0 (Linear и Bold) лежат в [`core/icons/iconsax`](../core/icons/iconsax/): по SVG 24×24
на иконку с `currentColor` и `manifest.json` с именами и категориями. Галерея «Основы/Иконки» ищет по имени
и копирует SVG по клику. Значения токенов на страницах «Основ» читаются из подключённого CSS скриптом
[`preview/foundations.js`](preview/foundations.js), поэтому витрина не расходится с источниками.

## Основа витрины

В preview CSS импортируется в порядке `core/fonts.min.css` → `core/ui.min.css`
→ `core/tokens.min.css`.
Первый файл подключает локальный Roboto из
`core/fonts/roboto/`. Шрифт поддерживает веса 100–900, кириллицу, латиницу
и символ `₽`; используется `font-display: swap`. Preload в Storybook нет.
В `core/fonts.min.css` также зарегистрирован локальный Oswald с весами 200–700 из
`core/fonts/oswald/`. Он доступен через `font-family: Oswald, sans-serif`; назначение элементам задаётся явно.

[Официальный каталог daisyUI](https://daisyui.com/components/) разделён на семь
категорий: Actions, Data display, Navigation, Feedback, Data input, Layout
и Mockup. В разделе «Справочник daisyUI» представлены все семь категорий: **68 компонентов и
589 HTML-примеров**. Theme Controller пока показывает только состояние
переключателей: дополнительные темы не подключены, оформление остаётся светлым.

### Actions — 6 компонентов, 79 примеров

| Компонент | HTML-примеров |
| --- | ---: |
| [Button](https://daisyui.com/components/button/) | 18 |
| [Dropdown](https://daisyui.com/components/dropdown/) | 24 |
| [FAB / Speed Dial](https://daisyui.com/components/fab/) | 11 |
| [Modal](https://daisyui.com/components/modal/) | 10 |
| [Swap](https://daisyui.com/components/swap/) | 6 |
| [Theme Controller](https://daisyui.com/components/theme-controller/) | 10 |
| **Всего** | **79** |

### Data display — 19 компонентов, 145 примеров

| Компонент | HTML-примеров |
| --- | ---: |
| [Accordion](https://daisyui.com/components/accordion/) | 5 |
| [Avatar](https://daisyui.com/components/avatar/) | 9 |
| [Aura](https://daisyui.com/components/aura/) | 13 |
| [Badge](https://daisyui.com/components/badge/) | 12 |
| [Card](https://daisyui.com/components/card/) | 16 |
| [Carousel](https://daisyui.com/components/carousel/) | 9 |
| [Chat bubble](https://daisyui.com/components/chat/) | 5 |
| [Collapse](https://daisyui.com/components/collapse/) | 12 |
| [Countdown](https://daisyui.com/components/countdown/) | 7 |
| [Diff](https://daisyui.com/components/diff/) | 2 |
| [Hover 3D card](https://daisyui.com/components/hover-3d/) | 3 |
| [Hover Gallery](https://daisyui.com/components/hover-gallery/) | 2 |
| [Kbd](https://daisyui.com/components/kbd/) | 7 |
| [List](https://daisyui.com/components/list/) | 3 |
| [Stat](https://daisyui.com/components/stat/) | 7 |
| [Status](https://daisyui.com/components/status/) | 5 |
| [Table](https://daisyui.com/components/table/) | 9 |
| [Text Rotate](https://daisyui.com/components/text-rotate/) | 5 |
| [Timeline](https://daisyui.com/components/timeline/) | 14 |
| **Всего** | **145** |

### Navigation — 9 компонентов, 85 примеров

| Компонент | HTML-примеров |
| --- | ---: |
| [Breadcrumbs](https://daisyui.com/components/breadcrumbs/) | 3 |
| [Dock](https://daisyui.com/components/dock/) | 7 |
| [Link](https://daisyui.com/components/link/) | 10 |
| [Megamenu](https://daisyui.com/components/megamenu/) | 6 |
| [Menu](https://daisyui.com/components/menu/) | 23 |
| [Navbar](https://daisyui.com/components/navbar/) | 10 |
| [Pagination](https://daisyui.com/components/pagination/) | 6 |
| [Steps](https://daisyui.com/components/steps/) | 7 |
| [Tabs](https://daisyui.com/components/tab/) | 13 |
| **Всего** | **85** |

### Feedback — 7 компонентов, 62 примера

| Компонент | HTML-примеров |
| --- | ---: |
| [Alert](https://daisyui.com/components/alert/) | 10 |
| [Loading](https://daisyui.com/components/loading/) | 7 |
| [Progress](https://daisyui.com/components/progress/) | 10 |
| [Radial progress](https://daisyui.com/components/radial-progress/) | 5 |
| [Skeleton](https://daisyui.com/components/skeleton/) | 4 |
| [Toast](https://daisyui.com/components/toast/) | 10 |
| [Tooltip](https://daisyui.com/components/tooltip/) | 16 |
| **Всего** | **62** |

### Data input — 15 компонентов, 131 пример

| Компонент | HTML-примеров |
| --- | ---: |
| [Calendar](https://daisyui.com/components/calendar/) | 3 |
| [Checkbox](https://daisyui.com/components/checkbox/) | 7 |
| [Fieldset](https://daisyui.com/components/fieldset/) | 5 |
| [File Input](https://daisyui.com/components/file-input/) | 6 |
| [Filter](https://daisyui.com/components/filter/) | 3 |
| [Label](https://daisyui.com/components/label/) | 7 |
| [Radio](https://daisyui.com/components/radio/) | 12 |
| [Range](https://daisyui.com/components/range/) | 13 |
| [Rating](https://daisyui.com/components/rating/) | 8 |
| [Select](https://daisyui.com/components/select/) | 15 |
| [Input](https://daisyui.com/components/input/) | 20 |
| [Textarea](https://daisyui.com/components/textarea/) | 6 |
| [Toggle](https://daisyui.com/components/toggle/) | 8 |
| [Validator](https://daisyui.com/components/validator/) | 12 |
| [OTP](https://daisyui.com/components/otp/) | 6 |
| **Всего** | **131** |

### Layout — 8 компонентов, 75 примеров

| Компонент | HTML-примеров |
| --- | ---: |
| [Divider](https://daisyui.com/components/divider/) | 7 |
| [Drawer](https://daisyui.com/components/drawer/) | 5 |
| [Footer](https://daisyui.com/components/footer/) | 11 |
| [Hero](https://daisyui.com/components/hero/) | 5 |
| [Indicator](https://daisyui.com/components/indicator/) | 19 |
| [Join](https://daisyui.com/components/join/) | 6 |
| [Mask](https://daisyui.com/components/mask/) | 14 |
| [Stack](https://daisyui.com/components/stack/) | 8 |
| **Всего** | **75** |

### Mockup — 4 компонента, 12 примеров

| Компонент | HTML-примеров |
| --- | ---: |
| [Browser](https://daisyui.com/components/mockup-browser/) | 2 |
| [Code](https://daisyui.com/components/mockup-code/) | 6 |
| [Phone](https://daisyui.com/components/mockup-phone/) | 2 |
| [Window](https://daisyui.com/components/mockup-window/) | 2 |
| **Всего** | **12** |

Исходные HTML-варианты расположены в
[`core/components/actions/<slug>`](../core/components/actions/),
[`core/components/data-display/<slug>`](../core/components/data-display/),
[`core/components/navigation/<slug>`](../core/components/navigation/),
[`core/components/feedback/<slug>`](../core/components/feedback/),
[`core/components/data-input/<slug>`](../core/components/data-input/),
[`core/components/layout/<slug>`](../core/components/layout/)
и [`core/components/mockup/<slug>`](../core/components/mockup/),
истории — в [`stories/actions`](stories/actions/),
[`stories/data-display`](stories/data-display/),
[`stories/navigation`](stories/navigation/),
[`stories/feedback`](stories/feedback/),
[`stories/data-input`](stories/data-input/),
[`stories/layout`](stories/layout/)
и [`stories/mockup`](stories/mockup/). Каждая история
импортирует соответствующий HTML из `core`; отдельной копии исходников в
витрине нет. Примеры взяты из HTML-блоков официальной документации
daisyUI 5.7.46; идентификаторы, связанные атрибуты и имена radio-групп имеют
уникальные префиксы примеров. Необходимые адаптации исходного HTML описаны ниже.

В каждой истории доступны превью и исходный HTML для копирования. В Docs
превью открываются в отдельных iframe: фиксированные элементы и группы
radio/details одного примера не влияют на соседние. Для проверки адаптивности
меняйте ширину Canvas. Карусели используют прокрутку и ссылки на слайды;
автоматического перелистывания в исходных примерах нет.

Витрина использует готовый `core/ui.min.css`: в сборку daisyUI включены Actions,
Data display, Navigation, Feedback, Data input, Layout, Mockup, зависимости
их примеров и базовые правила библиотеки. Для Actions нужны `button`, `dropdown`,
`fab`, `modal` и `swap`; четыре рамки Mockup включает общий модуль `mockup`.
Дополнительные темы не включены. Для Navigation
также нужны Dropdown, Input, Indicator и Tooltip; Pagination использует Button
и Join. Утилиты и цветовые классы
компонентов, которых нет в этом файле, требуют пересборки общего CSS отдельно
от Storybook во временном окружении в `tmp`: наличие токена не создаёт классы.
После переноса минифицированного результата временное окружение удаляется.
Постоянного npm-проекта сборки стилей нет; проверенный рецепт и очистка временного окружения описаны
в [инструкции пересборки CSS](../docs/css-build.md).
Изменение только значений проектных токенов в `core/tokens.min.css` пересборки CSS не требует.

В [`assets/demo`](assets/demo) находятся собственные демонстрационные
изображения: четыре пейзажа, четыре ракурса кепки, кроссовок и абстрактная
карточка. В [`assets/avatars`](assets/avatars) — четыре портрета вымышленных
людей. Витрина загружает оптимизированные WebP локально; запросов к CDN
`img.daisyui.com` для изображений превью нет. Изображения и код их подстановки
находятся только в `ui-kit` и не входят в `core`.

При сборке Vite встраивает маленькие изображения в JavaScript как data URI;
остальные сохраняются отдельными WebP и запрашиваются при отображении превью.
Поэтому часть изображений загружается вместе с кодом витрины, даже если пример
с ними ещё не открыт.

[`preview/demo-images.js`](preview/demo-images.js) явно сопоставляет 47
исходных ссылок локальным ассетам. Одной исходной ссылке всегда соответствует
одно и то же изображение. HTML сначала разбирается в неактивном `template`,
а после замены `img.src` и фоновых изображений `style.backgroundImage`
вставляется в превью. Это также покрывает фон Hero, изображения Mask
и обои Phone: `stock/453966.webp` заменяются собственным пейзажем побережья.
Новый адрес CDN без сопоставления
вызывает ошибку витрины, чтобы случайно не вернуть внешнюю загрузку. В Diff
обе стороны используют один локальный пейзаж; вторая размывается только
в превью. Подписи `alt` также заменяются только для демонстрации.

Исходный HTML и панель Code сохраняют оригинальные ссылки `img.daisyui.com`.
При переносе примера на страницу замените их своими изображениями; локальные
демонстрационные файлы Storybook автоматически в страницу не переносятся.

Countdown содержит исходные значения. Только в Storybook вспомогательный
скрипт запускает демонстрационный отсчёт и обновляет `--value`, текст и
`aria-label`. В реальной странице для работающего таймера нужен её собственный
JavaScript. Accordion, Collapse, Carousel, Diff, Hover 3D и Hover Gallery
используют штатное поведение HTML/CSS; для них отдельная JS-библиотека не нужна.

Megamenu использует нативный Popover API и CSS anchor positioning. Radio-вкладки
и radio-пагинация переключаются нативно; Menu и Navbar с `details` или checkbox
раскрываются без JavaScript. Обычные ссылки-вкладки, кнопочная пагинация, Dock
и активные пункты меню показывают готовые состояния: маршрутизация и смена
активного пункта относятся к логике страницы, где они будут использованы.

Исключение в витрине — Menu «Collapsible submenu that works with class names»:
[`preview/navigation.js`](preview/navigation.js) переключает классы подменю
мышью и клавиатурой, синхронизирует `aria-expanded` и удаляет обработчики при
смене истории. Этот скрипт и добавленные ARIA-атрибуты не входят в исходный HTML
или `core`; для такого варианта на обычной странице нужен её собственный JS.

Dock остаётся фиксированным внизу своего iframe. В viewport существующего
Storybook preview добавлен `viewport-fit=cover`, чтобы CSS Dock учитывал safe area
на iOS. Для страницы с Dock этот параметр следует добавить в её viewport meta.

Feedback не требует отдельного JavaScript: Loading и Skeleton анимируются CSS,
Progress использует нативный элемент `<progress>`, Radial progress — CSS-переменную
`--value`, а Tooltip появляется при наведении и клавиатурном фокусе. В Tooltip
превью предусмотрены отступы, чтобы подсказки помещались в iframe.
Штатные CSS-анимации учитывают системную настройку уменьшения движения
(`prefers-reduced-motion`).
Toast сохраняет штатное фиксированное положение внутри своего iframe.
Изменение процента загрузки, показ и удаление уведомлений, а также действия
кнопок Alert относятся к логике страницы. В этих примерах обработчики и таймеры
для них не добавлены; отдельного JS Feedback в витрине или `core` нет.

Data input использует нативные HTML-поля: ввод, выбор, Rating, Filter и OTP работают
без отдельной JS-библиотеки. Validator оформляет штатную браузерную валидацию;
обработку данных и серверную проверку реализует страница. File Input только
выбирает файл и сам по себе ничего не загружает на сервер. Образцы без подписи
нужно дополнить связанным `label` или `aria-label` при использовании на странице.

В примерах Input и Validator исправлено двойное экранирование `pattern` из Markdown:
атрибут HTML содержит один обратный слеш, чтобы проверка пароля, имени и URL
действительно работала. В Radio/Sizes группы разделены по размерам, чтобы каждый
образец сохранял своё начальное выбранное состояние. Существующие отдельные
подписи в Fieldset и форме Validator связаны с полями через `for` и `id`.

[`preview/data-input.js`](preview/data-input.js) задаёт DOM-свойство
`indeterminate` только для соответствующих примеров Checkbox и Toggle.
HTML-атрибута для этого состояния нет; при переносе нужна такая же инициализация
в JavaScript страницы. Код helper не попадает в `core` или Code.

[`preview/catalog.js`](preview/catalog.js) отменяет отправку демонстрационных
форм, включая Footer, сохраняя нативную валидацию и Reset. Исключение — формы
с `method="dialog"`: они нативно закрывают диалог без отправки данных.
Учитывается и `formmethod` на нажатой кнопке. Обработчики удаляются при смене
истории. Этот код действует только в витрине; обработку данных формы на обычной
странице нужно реализовать отдельно.

**Calendar требует JavaScript библиотеки.** В каталоге есть Cally, Cally date picker
и Vanilla Calendar Pro. React-вариант исключён; CDN и npm для Vanilla используют
один HTML, поэтому отдельного дубликата нет. daisyUI задаёт стили календарей,
но не регистрирует Web Components и не создаёт экземпляр Vanilla Calendar.
При копировании HTML на страницу отдельно подключите соответствующую библиотеку;
для Cally date picker также нужен обработчик `change`, обновляющий кнопку.

В Storybook Cally 0.9.2 и Vanilla Calendar Pro 3.4.0 установлены локально в `ui-kit`
и загружаются динамически при открытии календаря. Их собственные CSS не подключаются.
[`preview/calendar.js`](preview/calendar.js) задаёт русский язык и светлую тему,
связывает выбранную дату с кнопкой, удаляет обработчики и уничтожает экземпляр
Vanilla при смене примера. В `core` нет JS этих библиотек или кода инициализации.
Date picker использует нативный Popover API и CSS Anchor Positioning.

Layout не требует отдельной JS-библиотеки. Drawer открывается нативным checkbox
через связанные `label`; `lg:drawer-open` оставляет sidebar видимым на больших
экранах, а `is-drawer-open` и `is-drawer-close` оформляют состояния иконного
варианта. Панель, overlay и блокировка прокрутки остаются внутри iframe;
положение Drawer не переопределяется витриной. Это checkbox-панель без
автоматического закрытия по Escape и удержания фокуса, как у модального диалога.

Hero сохраняет исходный `min-h-screen`, поэтому занимает не меньше высоты
iframe. В двух Hero с изображением добавлен `w-full` вместе с `max-w-sm`,
чтобы картинка сжималась на узком экране без горизонтального переполнения.
В Footer шаблонное выражение года заменено статическим `2026`:
исходники остаются обычным HTML без выполнения JavaScript. Join группирует
элементы, а выбор radio внутри него использует нативное поведение браузера.
Кнопки и ссылки Layout показывают оформление; их прикладные действия
реализует страница, где используется пример.

Actions не добавляет JS-библиотек. Button показывает варианты оформления,
включая disabled, loading и фирменные цвета. В SVG MetaMask внутренние правила
`<style>` заменены атрибутами SVG, чтобы классы иконки не влияли на другие элементы.
Dropdown использует `details`, фокус, наведение или нативный Popover API;
для позиционирования popover используется CSS anchor positioning.
FAB остаётся фиксированным внутри iframe и раскрывается средствами HTML/CSS.
Назначение его кнопок, маршрутизацию и действия Button/Dropdown реализует страница.
Swap с checkbox переключается нативно; вариант `swap-active` показывает
заранее выбранное состояние и сам по нажатию не переключает этот класс.

Theme Controller представлен десятью HTML-примерами: toggle, checkbox, swap,
варианты с подписями, иконками и собственными цветами, radio, radio-кнопки
и dropdown. По текущему решению переключение темы не подключено: input меняет
только своё состояние, а оформление остаётся `light` с проектными токенами.
Значения `synthwave`, `retro`, `cyberpunk`, `valentine`, `aqua` и `default`
сохранены из документации; соответствующие дополнительные палитры в CSS
отсутствуют. Нового JavaScript и сохранения выбора нет. Для рабочего переключения
потребуется отдельно подключить выбранные темы и согласовать их с проектными
токенами и фиксированным `data-theme="light"` оболочки витрины.

Пять примеров Modal с `<dialog>` открываются через нативные
`command="show-modal"` и `commandfor` вместо исходного inline `onclick`.
Эти [Invoker Commands](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement/command)
доступны в современных браузерах (Baseline с декабря 2025 года).
Для старых браузеров нужен обработчик `.showModal()` в JavaScript страницы;
в `core` его нет. Закрытие через `form method="dialog"` и Escape остаётся нативным.
Ещё два примера используют Popover API, два — checkbox и один — anchor link.
Варианты checkbox и anchor не удерживают фокус внутри окна и не закрываются
по Escape; anchor меняет hash URL, а закрывающая ссылка `href="#"` может
прокрутить страницу к началу.

Mockup — декоративные рамки браузера, терминала, телефона и окна. Они не
запускают браузер, не выполняют показанный код и не требуют JavaScript.
В Code длинная строка прокручивается внутри рамки. Для Phone высота iframe
в Docs увеличена до 940 px; локальные обои заменяются только в превью.
Новых npm-зависимостей для Actions и Mockup нет.

В Docs глобально включена панель **Code** для исходного HTML с подсветкой
и копированием. При добавлении истории её HTML следует передавать в
`render` и `parameters.docs.source.code`, без служебной обёртки витрины,
подменённых изображений и демонстрационного таймера.

Зависимости, настройки, вспомогательные скрипты и результаты сборки витрины
находятся в `ui-kit`. Витрина использует `core` только для чтения. React в
зависимостях Docs относится к интерфейсу Storybook; формат компонентов — обычный
HTML. JavaScript витрины остаётся только в `ui-kit`; `core` содержит HTML, готовый
CSS и шрифты. Требования отдельных примеров к JS перечислены выше и в их Docs.

## Проектные токены

[`core/tokens.min.css`](../core/tokens.min.css) — проектный источник значений
22 цветовых переменных (все роли daisyUI, включая `base-*`, `neutral` и `info`, а также
`brand-blue` и `muted-blue`), 3 переменных радиусов `--radius-field`, `--radius-box`
и `--radius-selector`, а также `--size-field`, `--size-selector` и `--border`.
Значения соответствуют теме действующего сайта ПЭК.

`secondary` и `--color-muted-blue` имеют одно значение `#48538B`; `--color-brand-blue` — фирменный сигнальный синий.

Фирменные цвета и назначения типографики связаны с токенами в
[Брендбуке 2](../core/brandbook2/design-system.json); этот JSON сам по себе не применяет стили к компонентам.

Единые правила применения цветов описаны в разделе
[«Цвета и состояния»](../docs/rules-template.md#цвета-и-состояния).

Роли радиусов и правила применения описаны в разделе
[«Скругления»](../docs/rules-template.md#скругления).

## Окружение и команды

Нужны Node.js 22.12 или новее и npm 10 или новее.
Storybook, HTML/Vite и Docs зафиксированы на версии 10.6.0, Vite — на 8.3.1,
Cally — на 0.9.2, Vanilla Calendar Pro — на 3.4.0.
Прямые версии указаны в `package.json`, полное дерево — в `package-lock.json`.

Выполнять из папки `ui-kit`:

```sh
npm ci
npm run storybook
npm run build-storybook
npm run check:core
```

Служебные команды дизайн-системы (подробно — [`docs/design-system.md`](../docs/design-system.md#работа-с-дизайн-системой)):

| Команда | Что делает |
| --- | --- |
| `npm run css:build -- <id>` | Собирает кандидат `core/ui.min.css` по [рецепту](../docs/css-build.md) в `tmp/css-build-<id>` и печатает AST-сравнение |
| `npm run css:apply -- <id>` | Заменяет `core/ui.min.css` проверенным кандидатом (с контролем SHA-256) и удаляет временную папку |
| `npm run css:clean -- <id>` | Удаляет временную папку без замены |
| `npm run core:baseline -- <пути>` | Точечно обновляет `core-baseline.json` для указанных путей внутри `core` |

Сборщик иконок Iconsax — `scripts/iconsax/build-iconsax.mjs`, описание — [`core/icons/iconsax/README.md`](../core/icons/iconsax/README.md).

Сервер разработки использует `127.0.0.1:6006`; результат сборки — `ui-kit/dist`.
Launcher отключает телеметрию до загрузки Storybook; проверка новых версий
при запуске отключена. Служебные настройки Storybook и кеш компиляции Node.js
сохраняются в `ui-kit/.cache`.

## Контроль исходников

`core-baseline.json` содержит список файлов `core` и их контрольные SHA-256.
`npm run check:core` проверяет добавление, удаление и изменение файлов,
ничего не записывая и не обновляя снимок. После согласованных изменений
в `core` снимок нужно обновить и сохранить в Git вместе с конфигурацией
и lock-файлом.

`node_modules`, локальный npm-кеш, кеши сборщиков, логи и результаты сборки
исключены из Git корневым [`.gitignore`](../.gitignore), общим для всего проекта.
