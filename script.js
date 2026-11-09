/* ══════════════════════════════════════
   ELEGANCIA FLORAL · script.js · v3
   Navegación SPA + Carrito + Favoritos
   Imágenes: Unsplash (alta resolución)
   ══════════════════════════════════════ */

// ── DATOS DE PRODUCTOS · Fotos Unsplash ──
const PRODUCTS = [
  {
    id: 1, name: "Ramo de Rosas Silvestres", category: "ramos",
    price: 2950,
    contains: ["12 rosas silvestres", "eucalipto", "gypsophila", "hojas de olivo"],
    img: "https://images.unsplash.com/photo-1523693916903-027d144a2b7d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1589458456444-f7158a7e8a4f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1523693916903-027d144a2b7d?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Un ramo romántico que combina rosas silvestres con follaje delicado y eucalipto fresco.",
    meaning: "Regalar rosas rojas simboliza amor profundo y pasión. Las rosas silvestres representan el amor que nace de forma natural y espontánea, ideal para declaraciones sinceras.",
    tag: "Top ventas", popular: true, featured: false
  },
  {
    id: 2, name: "Caja Romántica de Tulipanes", category: "cajas",
    price: 3950,
    contains: ["9 tulipanes holandeses", "musgo natural", "papel de seda lila"],
    img: "https://images.pexels.com/photos/30724309/pexels-photo-30724309.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1615669527168-8766827a7159?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1586968295564-92fd7572718b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518701005037-d53b1f67bb1c?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Elegante caja de regalo forrada en terciopelo lila con tulipanes holandeses frescos.",
    meaning: "Los tulipanes rojos declaran amor perfecto, mientras que los rosados expresan afecto y buenos deseos. Un regalo clásico que nunca pasa de moda.",
    tag: "Top ventas", popular: true, featured: true
  },
  {
    id: 3, name: "Serenidad de Eucalipto", category: "arreglos",
    price: 3600,
    contains: ["eucalipto fresco", "gypsophila", "7 rosas blancas", "jarrón de cerámica"],
    img: "https://images.pexels.com/photos/40214547/pexels-photo-40214547.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1494537449588-7f07cede2556?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542728928-ee495082a3c6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1602229262754-3a232d284c22?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Arreglo minimalista con eucalipto, gypsophila y rosas blancas en jarrón de cerámica.",
    meaning: "El eucalipto protege y purifica. Regalarlo simboliza deseo de bienestar y protección para la persona querida.",
    popular: true, featured: true
  },
  {
    id: 4, name: "Corona de Lirios Blancos", category: "especiales",
    price: 5100,
    contains: ["6 lirios blancos", "9 rosas criadas", "helecho", "lazo de raso"],
    img: "https://images.unsplash.com/photo-1647335763755-86c49887dbdf?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1776372447943-c348355bc7f7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1669240728303-305faaf6abf8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1674784708705-4667d407cc65?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Corona de homenaje con lirios blancos, rosas criadas y follaje verde intenso.",
    meaning: "Los lirios blancos representan pureza, paz del alma y renacimiento. Un homenaje lleno de respeto y serenidad.",
    popular: false, featured: true
  },
  {
    id: 5, name: "Ramo de Peonías Pastel", category: "ramos",
    price: 4450,
    contains: ["7 peonías pastel", "5 rosas crema", "eucalipto"],
    img: "https://images.unsplash.com/photo-1780498802979-3d75e2b87ff2?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1575178094668-132dc931ad35?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1560583035-6d14e41fac5f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1579664872746-55e2a805d705?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Lujoso ramo de peonías en tonos rosa pastel y crema, envuelto en papel de seda.",
    meaning: "La peonía simboliza prosperidad, romance y una vida feliz juntos. Es la flor del matrimonio y la buena fortuna.",
    tag: "Top ventas", popular: true, featured: false
  },
  {
    id: 6, name: "Caja de Orquídeas Premium", category: "cajas",
    price: 5750,
    contains: ["2 orquídeas Phalaenopsis", "musgo natural", "florero de cristal"],
    img: "https://images.pexels.com/photos/31870272/pexels-photo-31870272.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1583846712268-a77d97b7fd68?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1610397648930-477b8c7f0943?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542407242725-7d7f3d865665?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Caja de lujo con dos orquídeas Phalaenopsis en florero de cristal y lazo de terciopelo.",
    meaning: "La orquídea encarna lujo, belleza y fuerza interior. Regalar orquídeas expresa admiración profunda y respeto.",
    popular: false, featured: true
  },
  {
    id: 7, name: "Arreglo de Gerberas Alegres", category: "arreglos",
    price: 2450,
    contains: ["9 gerberas naranjas y amarillas", "gypsophila", "caja de madera"],
    img: "https://images.unsplash.com/photo-1720297809982-652d058b73c6?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1595886535782-0f757640a574?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1613800172017-6b2b3787fdb8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1569731030828-ba3bb70923ff?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Composición colorida de gerberas naranjas, amarillas y rosas en caja de madera rústica.",
    meaning: "Las gerberas transmiten alegría, inocencia y optimismo. Son perfectas para levantar el ánimo de alguien especial.",
    popular: true, featured: false
  },
  {
    id: 8, name: "Bouquet de Lavanda Francesa", category: "especiales",
    price: 2750,
    contains: ["manojo de lavanda de Provenza", "romero fresco", "cinta de lino"],
    img: "https://images.unsplash.com/photo-1559427422-79630466d443?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1559427422-79630466d443?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1634304387535-e9b7ed3180d4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1615852152758-7a2b2a16f9ac?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Bouquet aromático de lavanda de Provenza con cinta de lino natural.",
    meaning: "La lavanda representa devoción, serenidad y elegancia. Su aroma relajante transmite paz y cariño duradero.",
    popular: false, featured: false
  },
  {
    id: 9, name: "Ramo de Girasoles Radiantes", category: "ramos",
    price: 3150,
    contains: ["7 girasoles", "gypsophila", "eucalipto", "papel kraft"],
    img: "https://images.unsplash.com/photo-1629386255808-c3ceb405173c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1543409777-30250849aa3e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1775364856427-718acc9ace19?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Ramo luminoso de girasoles frescos envuelto en papel kraft natural con lazo de yute.",
    meaning: "El girasol simboliza adoración, lealtad y felicidad. Regalar girasoles es decir 'tu mundo es mi sol', un gesto cálido y luminoso.",
    tag: "Nuevo", popular: true, featured: false
  },
  {
    id: 10, name: "Caja de Hortensias Azules", category: "cajas",
    price: 4650,
    contains: ["5 hortensias azul cielo", "3 rosas lila", "follaje de salal"],
    img: "https://images.unsplash.com/photo-1775836771120-5d060fcb15ed?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1641366638032-557d4a999d80?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1711512209308-06179f150f3e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1626419972503-2029b6529ed4?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Caja de regalo con hortensias en tonos azul cielo y lila, tocadas con follaje verde.",
    meaning: "Las hortensias expresan gratitud, abundancia y sentimientos sinceros. Sus tonos pastel comunican delicadeza y entendimiento.",
    popular: false, featured: true
  },
  {
    id: 11, name: "Ramo de Novia en Rosas Blancas", category: "especiales",
    price: 6300,
    contains: ["12 rosas blancas", "gypsophila", "eucalipto", "lazo de raso"],
    img: "https://images.unsplash.com/photo-1763804384371-a82a4e6874a5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1575119437835-e574de972888?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1606246551522-61f9ed248bd7?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Elegante ramo nupcial con rosas blancas, gypsophila y hojas de eucalipto suave.",
    meaning: "Las rosas blancas encarnan pureza, inocencia y un amor eterno. Son la flor icónica de las novias y los votos más sinceros.",
    tag: "Nuevo", popular: false, featured: true
  },
  {
    id: 12, name: "Ramo de Dalias Pastel", category: "ramos",
    price: 3750,
    contains: ["6 dalias coral y durazno", "5 rosas pastel", "eucalipto"],
    img: "https://images.unsplash.com/photo-1579198314865-955573957799?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609531162568-8417bf956dca?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1617417715887-d51297ecdbca?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1579198314865-955573957799?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Ramo sofisticado de dalias en tonos coral, durazno y rosa envuelto en papel de seda.",
    meaning: "La dalia simboliza compromiso, dignidad y fuerza interior. Con sus pétalos perfectos, celebra el amor que perdura y crece.",
    tag: "Nuevo", popular: true, featured: false
  },
  {
    id: 13, name: "Ramo de Lirios Blancos y Eucalipto", category: "ramos",
    price: 2650,
    contains: ["lirios blancos perfumados", "eucalipto fresco"],
    img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494537449588-7f07cede2556?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1542728928-ee495082a3c6?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Lirios perfumados acompañados de follaje fresco de eucalipto.",
    meaning: "Los lirios blancos encarnan pureza, paz del alma y renacimiento; el eucalipto aporta frescura y protección, en un ramo sereno y elegante.",
    tag: "Nuevo", popular: true, featured: false
  },
  {
    id: 14, name: "Bouquet Real de Claveles Pastel", category: "ramos",
    price: 2200,
    contains: ["claveles en tono rosa y durazno"],
    img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1589458456444-f7158a7e8a4f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1523693916903-027d144a2b7d?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Delicado ramo de claveles en tonos rosa y durazno.",
    meaning: "El clavel es la reina de las flores y simboliza lealtad, pasión y amor eterno. En tonos rosa y durazno celebra un amor dulce e íntimo.",
    tag: "Nuevo", popular: false, featured: true
  },
  {
    id: 15, name: "Arreglo Silvestre de Tulipanes Holandeses", category: "especiales",
    price: 3500,
    contains: ["tulipanes de estación", "acabados en lila y crema"],
    img: "https://images.unsplash.com/photo-1589994160839-163cd867cfe8?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589994160839-163cd867cfe8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1676272769520-e0b5af99c509?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1676400614009-3b230ef8be6d?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Selección de tulipanes de estación con acabados en lila y crema.",
    meaning: "Los tulipanes holandeses son símbolo del amor perfecto y la admiración. Su selección silvestre con acabados lila y crema inspira ternura y elegancia.",
    tag: "Nuevo", popular: true, featured: false
  },
  {
    id: 16, name: "Arreglo Romántico de Rosas y Mini Lirios", category: "cajas",
    price: 4200,
    contains: ["rosas", "mini lirios", "lazo de terciopelo"],
    img: "https://images.unsplash.com/photo-1648754014988-30782224eac8?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1648754014988-30782224eac8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1563441386037-9001139f99a3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1694965856957-4da22d6a28a9?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Caja de lujo acolchada con rosas, lirios y lazo de terciopelo.",
    meaning: "Una caja de lujo que une rosas y mini lirios con el lazo de terciopelo, un regalo de delicadeza y calidez para ocasiones inolvidables.",
    tag: "Nuevo", popular: false, featured: true
  },
  {
    id: 17, name: "Centro Floral de Claveles y Lavanda", category: "arreglos",
    price: 2950,
    contains: ["claveles", "lavanda", "jarrón de cerámica pastel"],
    img: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1559427422-79630466d443?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494537449588-7f07cede2556?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Centro de mesa artesanal en jarrón de cerámica pastel.",
    meaning: "El clavel aporta elegancia floral y la lavanda, serenidad aromática; un centro de mesa artesanal que equilibra calidez y calma.",
    tag: "Nuevo", popular: false, featured: false
  },
  {
    id: 18, name: "Orquídeas Phalaenopsis en Cristal", category: "cajas",
    price: 5000,
    contains: ["orquídeas Phalaenopsis", "base de cristal"],
    img: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1744912684478-1e8a9a00ae25?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1744912684542-a9ac816f94a0?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Elegantes orquídeas blancas en base de cristal premium.",
    meaning: "La orquídea Phalaenopsis encarna lujo, belleza y fuerza interior; sobre una base de cristal premium se convierte en un altar de elegancia floral.",
    tag: "Nuevo", popular: false, featured: true
  },
  {
    id: 19, name: "Ramo de Rosas Rojas", category: "ramos",
    price: 2850,
    contains: ["9 rosas rojas", "eucalipto fresco"],
    img: "https://images.unsplash.com/photo-1523693916903-027d144a2b7d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523693916903-027d144a2b7d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1589458456444-f7158a7e8a4f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1602927846637-c3270a127413?auto=format&fit=crop&w=900&q=80"
    ],
    desc: "Ramo apasionado de rosas rojas con follaje verde y eucalipto fresco.",
    meaning: "Las rosas rojas simbolizan amor profundo, pasión y deseo eterno. Un ramo intenso para celebrar el amor más fuerte.",
    tag: "Nuevo", popular: true, featured: false
  }
];

// ── ESTADO ──
let state = {
  cart: [],
  favorites: [],
  currentProduct: 1,
  promoApplied: false
};

const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const fmt = n => 'RD$' + Math.round(n).toLocaleString('es-DO');
const productById = id => PRODUCTS.find(p => p.id === id);

const CAT_LABELS = { ramos: 'Ramos', cajas: 'Cajas', arreglos: 'Arreglos', especiales: 'Especiales' };
const catLabel = c => CAT_LABELS[c] || c;

function tagHTML(tag) {
  if (!tag) return '';
  const cls = tag === 'Nuevo' ? 'tag-new' : 'tag-top';
  return `<span class="tag-badge ${cls}">${tag}</span>`;
}

const TAG_SVG = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><circle cx="7" cy="7" r="1.2"/></svg>';

// Etiqueta de composición: qué lleva el ramo
function containsHTML(p) {
  return `<div class="p-contains">${TAG_SVG}<span><strong>Lo lleva:</strong> ${p.contains.join(' · ')}</span></div>`;
}

// Rating editorial derivado del id (4.5 – 4.9 ★)
function ratingOf(p) {
  return { stars: 4.5 + ((p.id * 7) % 5) * 0.1, reviews: 24 + ((p.id * 37) % 118) };
}
function ratingHTML(p) {
  const r = ratingOf(p);
  return `<div class="p-rating">
    <span class="pr-stars">★★★★★</span>
    <strong>${r.stars.toFixed(1)}</strong>
    <span class="pr-count">(${r.reviews} reseñas)</span>
  </div>`;
}

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2600);
}

function updateBadges() {
  $('#cart-count').textContent = state.cart.reduce((s,i) => s + i.qty, 0);
  $('#fav-count').textContent  = state.favorites.length;
}

// ═══════════ NAVEGACIÓN ═══════════
function showView(viewId) {
  $$('.view').forEach(v => v.classList.remove('active'));
  const target = $('#view-' + viewId);
  if (target) target.classList.add('active');

  $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === viewId));
  closeMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (viewId === 'favorites') renderFavorites();
  if (viewId === 'cart')      renderCart();

  requestAnimationFrame(observeReveals);
}

// ═══════════ MENÚ HAMBURGUESA ═══════════
const burger = $('#nav-burger');
const navLinks = $('.nav-links');
const BURGER_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>';
const CLOSE_SVG  = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12"/><path d="M18 6L6 18"/></svg>';

function closeMenu() {
  if (!burger) return;
  burger.classList.remove('is-open');
  navLinks.classList.remove('is-open');
  burger.innerHTML = BURGER_SVG;
  burger.setAttribute('aria-expanded', 'false');
}
if (burger) {
  burger.addEventListener('click', () => {
    const open = !navLinks.classList.contains('is-open');
    burger.classList.toggle('is-open', open);
    navLinks.classList.toggle('is-open', open);
    burger.innerHTML = open ? CLOSE_SVG : BURGER_SVG;
    burger.setAttribute('aria-expanded', String(open));
  });
}

// ═══════════ REVEAL · IntersectionObserver ═══════════
let revealObserver = null;
function observeReveals() {
  if (!('IntersectionObserver' in window)) {
    $$('.reveal').forEach(el => el.classList.add('is-visible'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          revealObserver.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  }
  $$('.reveal:not(.is-visible)').forEach(el => revealObserver.observe(el));
}

document.addEventListener('click', e => {
  const el = e.target.closest('[data-view]');
  if (el) showView(el.dataset.view);
});

// Buscador del header
$('#nav-search').addEventListener('click', () => {
  showView('catalog');
  setTimeout(() => $('#search-input').focus(), 350);
});

// ═══════════ TARJETAS · Imágenes reales ═══════════
function cardHTML(p) {
  const isFav = state.favorites.includes(p.id);
  return `
    <div class="product-card">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${tagHTML(p.tag)}
        <span class="price-badge">${fmt(p.price)}</span>
        <button class="fav-toggle ${isFav?'is-fav':''}" data-fav="${p.id}" title="Favorito" aria-label="Guardar en favoritos">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav?'currentColor':'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="product-body">
        <span class="p-cat">${catLabel(p.category)}</span>
        <h3>${p.name}</h3>
        ${ratingHTML(p)}
        <p class="p-desc">${p.desc}</p>
        ${containsHTML(p)}
        <div class="card-actions">
          <button class="btn btn-ghost" data-detail="${p.id}">Ver Detalle</button>
          <button class="btn btn-primary" data-quick-cart="${p.id}">＋ Carrito</button>
        </div>
      </div>
    </div>`;
}

function renderGrid(containerId, list) {
  $(containerId).innerHTML = list.map(cardHTML).join('');
}

// ═══════════ HOME ═══════════
function renderHome() {
  renderGrid('#popular-grid', PRODUCTS.filter(p => p.popular));
  renderGrid('#featured-grid', PRODUCTS.filter(p => p.featured));
}

$$('.cat-card').forEach(card => {
  card.addEventListener('click', () => {
    showView('catalog');
    const radio = document.querySelector(`input[name="cat"][value="${card.dataset.cat}"]`);
    if (radio) { radio.checked = true; applyFilters(); }
  });
});

// ═══════════ CATÁLOGO ═══════════
function applyFilters() {
  const q     = $('#search-input').value.toLowerCase().trim();
  const cat   = document.querySelector('input[name="cat"]:checked').value;
  const maxP  = +$('#price-range').value;
  $('#price-label').textContent = 'RD$' + maxP.toLocaleString('es-DO');

  const list = PRODUCTS.filter(p => {
    const matchQ     = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.contains.join(' ').toLowerCase().includes(q);
    const matchCat   = !cat || p.category === cat;
    const matchPrice = p.price <= maxP;
    return matchQ && matchCat && matchPrice;
  });

  renderGrid('#catalog-grid', list);
  $('#result-count').textContent = `${list.length} producto${list.length!==1?'s':''}`;
  $('#catalog-empty').style.display = list.length ? 'none' : 'block';
}

$('#search-input').addEventListener('input', applyFilters);
$('#price-range').addEventListener('input', applyFilters);
$$('input[name="cat"]').forEach(r => r.addEventListener('change', applyFilters));
$('#clear-filters').addEventListener('click', () => {
  $('#search-input').value = '';
  document.querySelector('input[name="cat"][value=""]').checked = true;
  $('#price-range').value = 7000;
  applyFilters();
});

// ═══════════ DETALLE ═══════════
function openDetail(id) {
  state.currentProduct = id;
  const p = productById(id);
  if (!p) return;

  $('#detail-cat').textContent     = catLabel(p.category);
  $('#detail-name').textContent    = p.name;
  $('#detail-price').textContent   = fmt(p.price);
  $('#detail-desc').textContent    = p.desc;
  $('#detail-meaning').textContent = p.meaning;
  $('#detail-contains').innerHTML  = p.contains.map(c => `<span class="contains-chip">${TAG_SVG}${c}</span>`).join('');

  const r = ratingOf(p);
  $('#detail-rating').innerHTML = `★★★★★ <span>${r.stars.toFixed(1)} · ${r.reviews} reseñas</span>`;

  $('#gallery-main').innerHTML = `<img src="${p.gallery[0]}" alt="${p.name}">`;
  $('#gallery-thumbs').innerHTML = p.gallery.map((src, i) =>
    `<div class="thumb ${i===0?'active':''}" data-src="${src}"><img src="${src}" alt="Vista ${i+1} de ${p.name}"></div>`
  ).join('');

  resetPills('size-options'); resetPills('note-options'); resetPills('pack-options');
  updateDetailTotal();
  showView('detail');
}

function resetPills(groupId) {
  $$('#' + groupId + ' .pill').forEach((p,i) => p.classList.toggle('active', i===0));
}
function getExtra(groupId) {
  const active = $('#' + groupId + ' .pill.active');
  return active ? +active.dataset.extra : 0;
}
function updateDetailTotal() {
  const p = productById(state.currentProduct);
  if (!p) return;
  const total = p.price + getExtra('size-options') + getExtra('note-options') + getExtra('pack-options');
  $('#detail-total-price').textContent = fmt(total);
}

['size-options','note-options','pack-options'].forEach(gid => {
  $('#' + gid).addEventListener('click', e => {
    const pill = e.target.closest('.pill');
    if (!pill) return;
    $$('#' + gid + ' .pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    updateDetailTotal();
  });
});

$('#gallery-thumbs').addEventListener('click', e => {
  const t = e.target.closest('.thumb');
  if (!t) return;
  $$('#gallery-thumbs .thumb').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  $('#gallery-main').innerHTML = `<img src="${t.dataset.src}" alt="Vista ampliada">`;
});

$('#detail-add-cart').addEventListener('click', () => {
  const p = productById(state.currentProduct);
  addToCart(
    p.id,
    $('#size-options .pill.active').textContent,
    $('#note-options .pill.active').textContent,
    $('#pack-options .pill.active').textContent
  );
});

$('#detail-add-fav').addEventListener('click', () => toggleFav(state.currentProduct));

// ═══════════ FAVORITOS ═══════════
function toggleFav(id) {
  const idx = state.favorites.indexOf(id);
  if (idx >= 0) {
    state.favorites.splice(idx, 1);
    toast('Eliminado de favoritos');
  } else {
    state.favorites.push(id);
    toast('Guardado en favoritos ♥');
  }
  updateBadges();
  renderHome();
  applyFilters();
  if ($('#view-favorites').classList.contains('active')) renderFavorites();
}

function renderFavorites() {
  const list = PRODUCTS.filter(p => state.favorites.includes(p.id));
  if (!list.length) {
    $('#favorites-grid').style.display = 'none';
    $('#favorites-empty').style.display = 'block';
    return;
  }
  $('#favorites-grid').style.display = 'grid';
  $('#favorites-empty').style.display = 'none';

  $('#favorites-grid').innerHTML = list.map(p => `
    <div class="product-card">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${tagHTML(p.tag)}
        <span class="price-badge">${fmt(p.price)}</span>
        <button class="fav-toggle is-fav" data-fav="${p.id}" aria-label="Quitar de favoritos">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="product-body">
        <span class="p-cat">${catLabel(p.category)}</span>
        <h3>${p.name}</h3>
        ${ratingHTML(p)}
        <p class="p-desc">${p.desc}</p>
        ${containsHTML(p)}
        <div class="card-actions">
          <button class="btn btn-primary" data-quick-cart="${p.id}">Mover al Carrito</button>
          <button class="btn btn-ghost" data-fav="${p.id}">Eliminar</button>
        </div>
      </div>
    </div>`).join('');
}

// ═══════════ CARRITO ═══════════
function addToCart(productId, size = 'Chico', note = 'Sin nota', pack = 'Papel kraft') {
  const existing = state.cart.find(i =>
    i.productId === productId && i.size === size && i.note === note && i.pack === pack
  );
  if (existing) existing.qty++;
  else state.cart.push({ productId, size, note, pack, qty: 1 });
  updateBadges();
  toast('Añadido al carrito 🛒');
}

function cartItemExtra(item) {
  let extra = 0;
  if (item.size.includes('Mediano'))   extra += 600;
  if (item.size.includes('Grande'))    extra += 1200;
  if (item.note.includes('Vainilla'))  extra += 250;
  if (item.note.includes('Eucalipto')) extra += 300;
  if (item.pack.includes('regalo'))    extra += 350;
  if (item.pack.includes('premium'))   extra += 750;
  return extra;
}

function renderCart() {
  const container = $('#cart-items');
  const emptyEl   = $('#cart-empty');
  const sumCard   = $('#summary-card');

  if (!state.cart.length) {
    container.innerHTML = `<div class="cart-row cart-head"><span>Producto</span><span>Personalización</span><span>Cantidad</span><span>Subtotal</span><span></span></div>`;
    emptyEl.style.display = 'block';
    sumCard.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  sumCard.style.display = 'block';

  let rows = `<div class="cart-row cart-head"><span>Producto</span><span>Personalización</span><span>Cantidad</span><span>Subtotal</span><span></span></div>`;

  state.cart.forEach((item, idx) => {
    const p    = productById(item.productId);
    const unit = p.price + cartItemExtra(item);
    const sub  = unit * item.qty;

    rows += `
      <div class="cart-row">
        <div class="cart-item-info">
          <div class="cart-thumb"><img src="${p.img}" alt="${p.name}"></div>
          <div>
            <div class="cart-item-name">${p.name}</div>
            <div class="cart-item-cat">${catLabel(p.category)} · ${fmt(unit)} c/u</div>
          </div>
        </div>
        <div class="cart-custom">${item.size}<br>${item.note}<br>${item.pack}</div>
        <div class="qty-control">
          <button data-qty="-1" data-idx="${idx}" aria-label="Reducir cantidad">−</button>
          <span>${item.qty}</span>
          <button data-qty="1" data-idx="${idx}" aria-label="Aumentar cantidad">＋</button>
        </div>
        <div class="cart-subtotal">${fmt(sub)}</div>
        <button class="cart-remove" data-remove="${idx}" title="Eliminar" aria-label="Eliminar producto">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
        </button>
      </div>`;
  });

  container.innerHTML = rows;
  updateCartSummary();
}

function updateCartSummary() {
  const subtotal = state.cart.reduce((sum, item) => {
    const p = productById(item.productId);
    return sum + (p.price + cartItemExtra(item)) * item.qty;
  }, 0);

  const discount      = state.promoApplied ? subtotal * 0.10 : 0;
  const afterDiscount = subtotal - discount;
  const shipping      = subtotal >= 3000 ? 0 : 450;
  const tax           = afterDiscount * 0.18;
  const total         = afterDiscount + shipping + tax;

  $('#sum-subtotal').textContent = fmt(subtotal);
  $('#sum-shipping').textContent = shipping === 0 ? 'Gratis' : fmt(shipping);
  $('#sum-tax').textContent      = fmt(tax);
  $('#sum-total').textContent    = fmt(total);
}

$('#cart-items').addEventListener('click', e => {
  const qtyBtn = e.target.closest('[data-qty]');
  if (qtyBtn) {
    const idx   = +qtyBtn.dataset.idx;
    const delta = +qtyBtn.dataset.qty;
    state.cart[idx].qty += delta;
    if (state.cart[idx].qty < 1) state.cart.splice(idx, 1);
    updateBadges();
    renderCart();
    return;
  }
  const rmBtn = e.target.closest('[data-remove]');
  if (rmBtn) {
    state.cart.splice(+rmBtn.dataset.remove, 1);
    updateBadges();
    renderCart();
    toast('Producto eliminado del carrito');
  }
});

$('#promo-btn').addEventListener('click', () => {
  const code = $('#promo-input').value.trim().toUpperCase();
  if (code === 'FLOR10') {
    state.promoApplied = true;
    toast('Cupón FLOR10 aplicado: −10%');
    updateCartSummary();
  } else {
    toast('Cupón inválido. Prueba con FLOR10');
  }
});

$('#checkout-btn').addEventListener('click', () => {
  if (!state.cart.length) return;
  toast('¡Gracias por tu compra! Pedido confirmado.');
  state.cart = [];
  state.promoApplied = false;
  updateBadges();
  setTimeout(() => showView('home'), 2200);
});

// ═══════════ DELEGACIÓN GLOBAL ═══════════
document.addEventListener('click', e => {
  const detBtn = e.target.closest('[data-detail]');
  if (detBtn) { openDetail(+detBtn.dataset.detail); return; }

  const qcBtn = e.target.closest('[data-quick-cart]');
  if (qcBtn) {
    const p = productById(+qcBtn.dataset.quickCart);
    addToCart(p.id);
    const fi = state.favorites.indexOf(p.id);
    if (fi >= 0 && qcBtn.textContent.includes('Mover')) {
      state.favorites.splice(fi, 1);
      updateBadges();
      renderFavorites();
      renderHome();
      applyFilters();
    }
    return;
  }

  const favBtn = e.target.closest('[data-fav]');
  if (favBtn) toggleFav(+favBtn.dataset.fav);
});

// ═══════════ AUTENTICACIÓN ═══════════
$$('.auth-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    $$('.auth-tab').forEach(t => t.classList.remove('active'));
    $$('.auth-form').forEach(f => f.classList.remove('active'));
    tab.classList.add('active');
    $('#form-' + tab.dataset.tab).classList.add('active');
  });
});

$('#form-login').addEventListener('submit', e => {
  e.preventDefault();
  $('#msg-login').textContent = 'Bienvenida de nuevo. Redirigiendo…';
  setTimeout(() => showView('home'), 1600);
});
$('#form-register').addEventListener('submit', e => {
  e.preventDefault();
  $('#msg-register').textContent = 'Cuenta creada con éxito. ¡Bienvenida!';
  setTimeout(() => showView('home'), 1600);
});
$('#form-recover').addEventListener('submit', e => {
  e.preventDefault();
  $('#msg-recover').textContent = 'Enlace enviado. Revisa tu correo.';
});

// ═══════════ NEWSLETTER ═══════════
$('#newsletter-form').addEventListener('submit', e => {
  e.preventDefault();
  const email = $('#newsletter-email').value.trim();
  $('#newsletter-email').value = '';
  toast('¡Gracias por suscribirte! Revisa tu correo para confirmar.');
});

// ═══════════ INICIALIZACIÓN ═══════════
renderHome();
applyFilters();
updateBadges();
observeReveals();
