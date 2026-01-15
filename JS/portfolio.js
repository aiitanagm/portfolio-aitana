/* CONTACTO */
const contactBtn = document.getElementById("contactBtn");
if (contactBtn) {
  contactBtn.onclick = () => {
    alert(
      "CONTACTO\n\n" +
      "Email: aitanagggg28@gmail.com\n" +
      "Instagram: @ita.ffiles\n" +
      "Madrid"
    );
  };
}

/* PROYECTOS */
const projects = {
  cumming: [
    "CUMMING.png",
    "mock up.png",
    "mock up 2.png",
    "cond.png",
    "cond 1_.png"
  ],
  gnomo: [
    "gnomo1.JPG",
    "gnomo5.JPG",
    "gnomo10.JPG",
    "gnomo12.JPG"
  ],
  moxi: [
    "Recurso 20.png",
    "id (1).jpg",
    "moxie  (1) (1).png",
    "MOCK UP (1).png"
  ],
  musu: [
    "HERRAMIENTA CON ETIQUETA .15.jpg",
    "musu.jpg",
    "uso.png",
    "Recurso 6.png"
  ],
  paticleta: [
    "moto1.jpeg",
    "moto4.jpg",
    "moto11.jpg",
    "moto17.jpeg"
  ],
  trump: [
    "portada antiprojecto-Recuperado.png",
    "muñeco  color.67.png",
    "muñeco  color.70.png",
    "muñeco  color.71.png"
  ]
};

const basePath = "../img/";
let currentGallery = [];
let currentIndex = 0;

/* PORTADAS */
document.querySelectorAll(".project-card").forEach(card => {
  const key = card.dataset.project;
  const img = card.querySelector(".project-cover img");
  const imgs = projects[key];

  if (!img || !imgs) return;

  let i = Math.floor(Math.random() * imgs.length);

  const setImage = index => {
    img.src = encodeURI(basePath + key + "/" + imgs[index]);
  };

  setImage(i);

  setInterval(() => {
    i = (i + 1) % imgs.length;
    setImage(i);
  }, 2500);

  card.onclick = () => {
    currentGallery = imgs.map(img =>
      encodeURI(basePath + key + "/" + img)
    );
    currentIndex = i;
    openLightbox();
  };
});

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox() {
  lightbox.classList.remove("hidden");
  lightboxImg.src = currentGallery[currentIndex];
}

document.getElementById("next").onclick = e => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % currentGallery.length;
  lightboxImg.src = currentGallery[currentIndex];
};

document.getElementById("prev").onclick = e => {
  e.stopPropagation();
  currentIndex =
    (currentIndex - 1 + currentGallery.length) %
    currentGallery.length;
  lightboxImg.src = currentGallery[currentIndex];
};

lightbox.onclick = () => lightbox.classList.add("hidden");
lightboxImg.onclick = e => e.stopPropagation();

/* ===== INTRO SEQUENCE FINAL ===== */
window.addEventListener("load", () => {
  document.body.classList.add("intro");

  const name = document.getElementById("hero-name");
  if (name) {
    name.classList.add("animate");
  }

  // Duración total animación letras ≈ 1.25s + margen
  setTimeout(() => {
    document.body.classList.remove("intro");
    document.body.classList.add("show-content");
  }, 2600);
});

/* =========================
   CURSOR TRAIL CANVAS
========================= */
const canvas = document.getElementById("cursor-canvas");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let lastX = null;
let lastY = null;

/* Paleta sutil */
const colors = [
  "rgba(0,0,0,0.25)",
  "rgba(60,60,60,0.25)",
  "rgba(90,90,90,0.25)",
  "rgba(30,30,30,0.25)"
];

let currentColor = colors[Math.floor(Math.random() * colors.length)];

ctx.lineWidth = 2.5;        // 👈 más gruesa
ctx.lineCap = "round";
ctx.strokeStyle = currentColor;

document.addEventListener("mousemove", e => {
  if (lastX === null) {
    lastX = e.clientX;
    lastY = e.clientY;
    return;
  }

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();

  lastX = e.clientX;
  lastY = e.clientY;
});

/* RESET + CAMBIO DE COLOR CADA 90s */
setInterval(() => {
  ctx.clearRect(0, 0, w, h);
  currentColor = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = currentColor;
  lastX = null;
  lastY = null;
}, 90000);

