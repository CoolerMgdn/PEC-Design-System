import portraitOne from '../assets/avatars/portrait-01.webp';
import portraitTwo from '../assets/avatars/portrait-02.webp';
import portraitThree from '../assets/avatars/portrait-03.webp';
import portraitFour from '../assets/avatars/portrait-04.webp';
import mountains from '../assets/demo/landscape-mountains.webp';
import coast from '../assets/demo/landscape-coast.webp';
import city from '../assets/demo/landscape-city.webp';
import forest from '../assets/demo/landscape-forest.webp';
import capFront from '../assets/demo/cap-front.webp';
import capSide from '../assets/demo/cap-side.webp';
import capBack from '../assets/demo/cap-back.webp';
import capDetail from '../assets/demo/cap-detail.webp';
import shoe from '../assets/demo/product-shoe.webp';
import abstractCard from '../assets/demo/abstract-card.webp';

const assets = {
  portraitOne: { src: portraitOne, alt: 'Портрет вымышленного человека, вариант 1' },
  portraitTwo: { src: portraitTwo, alt: 'Портрет вымышленного человека, вариант 2' },
  portraitThree: { src: portraitThree, alt: 'Портрет вымышленного человека, вариант 3' },
  portraitFour: { src: portraitFour, alt: 'Портрет вымышленного человека, вариант 4' },
  mountains: { src: mountains, alt: 'Горный пейзаж' },
  coast: { src: coast, alt: 'Морское побережье' },
  city: { src: city, alt: 'Городская архитектура' },
  forest: { src: forest, alt: 'Лесной пейзаж' },
  blurredForest: { src: forest, alt: 'Лесной пейзаж с размытием', blur: true },
  capFront: { src: capFront, alt: 'Кепка, вид спереди' },
  capSide: { src: capSide, alt: 'Кепка, вид сбоку' },
  capBack: { src: capBack, alt: 'Кепка, вид сзади' },
  capDetail: { src: capDetail, alt: 'Кепка, детали ткани и швов' },
  shoe: { src: shoe, alt: 'Демонстрационный кроссовок' },
  abstractCard: { src: abstractCard, alt: 'Декоративная карточка с абстрактным рисунком' },
};

// One source always uses the same local image, across every story.
const aliases = {
  'profile/demo/1@94.webp': 'portraitOne',
  'profile/demo/2@94.webp': 'portraitTwo',
  'profile/demo/3@94.webp': 'portraitThree',
  'profile/demo/4@94.webp': 'portraitFour',
  'profile/demo/5@94.webp': 'portraitOne',
  'profile/demo/anakeen@192.webp': 'portraitOne',
  'profile/demo/averagebulk@192.webp': 'portraitTwo',
  'profile/demo/batperson@192.webp': 'portraitThree',
  'profile/demo/distracted1@192.webp': 'portraitOne',
  'profile/demo/distracted2@192.webp': 'portraitTwo',
  'profile/demo/distracted3@192.webp': 'portraitThree',
  'profile/demo/gordon@192.webp': 'portraitFour',
  'profile/demo/idiotsandwich@192.webp': 'portraitTwo',
  'profile/demo/kenobee@192.webp': 'portraitThree',
  'profile/demo/spiderperson@192.webp': 'portraitOne',
  'profile/demo/superperson@192.webp': 'portraitTwo',
  'profile/demo/wonderperson@192.webp': 'portraitFour',
  'profile/demo/yellingcat@192.webp': 'portraitThree',
  'profile/demo/yellingwoman@192.webp': 'portraitFour',
  'stock/card-1.webp': 'mountains',
  'stock/453966.webp': 'coast',
  'stock/card-2.webp': 'coast',
  'stock/card-3.webp': 'city',
  'stock/creditcard.webp': 'abstractCard',
  'stock/daisyui-hat-1.webp': 'capFront',
  'stock/daisyui-hat-2.webp': 'capSide',
  'stock/daisyui-hat-3.webp': 'capBack',
  'stock/daisyui-hat-4.webp': 'capDetail',
  'stock/photo-1414694762283-acccc27bca85.webp': 'city',
  'stock/photo-1494232410401-ad00d5433cfa.webp': 'coast',
  'stock/photo-1494253109108-2e30c049369b.webp': 'forest',
  'stock/photo-1507358522600-9f71e620c44e.webp': 'coast',
  'stock/photo-1534528741775-53994a69daeb.webp': 'portraitFour',
  'stock/photo-1550258987-190a2d41a8ba.webp': 'mountains',
  'stock/photo-1559181567-c3190ca9959b.webp': 'coast',
  'stock/photo-1559703248-dcaaec9fab78.webp': 'mountains',
  'stock/photo-1560717789-0ac7c58ac90a-blur.webp': 'blurredForest',
  'stock/photo-1560717789-0ac7c58ac90a.webp': 'forest',
  'stock/photo-1565098772267-60af42b81ef2.webp': 'coast',
  'stock/photo-1567653418876-5bb0e566e1c2.webp': 'forest',
  'stock/photo-1572635148818-ef6fd45eb394.webp': 'city',
  'stock/photo-1601004890684-d8cbf643f5f2.webp': 'city',
  'stock/photo-1606107557195-0e29a4b5b4aa.webp': 'shoe',
  'stock/photo-1609621838510-5ad474b7d25d.webp': 'coast',
  'stock/photo-1625726411847-8cbb60cc71e6.webp': 'mountains',
  'stock/photo-1635805737707-575885ab0820.webp': 'city',
  'stock/photo-1665553365602-b2fb8e5d1707.webp': 'forest',
};

export function resolveDemoImage(source) {
  let url;
  try {
    url = new URL(source);
  } catch {
    return null;
  }
  if (url.origin !== 'https://img.daisyui.com') return null;
  const alias = aliases[url.pathname.replace(/^\/images\//, '')];
  return assets[alias] ?? null;
}
