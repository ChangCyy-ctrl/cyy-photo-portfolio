const photos = [
  { category: "renwen", name: "微信图片_20260228212632_167_277.jpg", label: "人文" },
  { category: "renwen", name: "微信图片_20260228212633_168_277.jpg", label: "人文" },
  { category: "renwen", name: "微信图片_20260228212634_169_277.jpg", label: "人文" },
  { category: "renwen", name: "微信图片_20260228213331_172_277.jpg", label: "人文" },
  { category: "renwen", name: "微信图片_20260228213332_173_277.jpg", label: "人文" },
  { category: "renwen", name: "微信图片_20260228213333_174_277.jpg", label: "人文" },
  { category: "renwen", name: "微信图片_20260228213334_175_277.jpg", label: "人文" },
  { category: "renwen", name: "微信图片_20260228213338_176_277.jpg", label: "人文" },
  { category: "renwen", name: "微信图片_20260228213344_177_277.jpg", label: "人文" },
  { category: "renwen", name: "微信图片_20260228213406_192_277.jpg", label: "人文" },
  { category: "renwen", name: "微信图片_20260228213407_194_277.jpg", label: "人文" },
  { category: "renwen", name: "微信图片_20260228213423_208_277.jpg", label: "人文" },
  { category: "city", name: "微信图片_20260228212614_147_277.png", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212615_148_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212616_149_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212617_150_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212618_151_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212619_152_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212620_153_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212621_154_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212622_155_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212623_156_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212623_157_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212624_158_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212625_159_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212626_160_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212627_161_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212628_162_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212628_163_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212629_164_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212630_165_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212631_166_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212634_170_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228212635_171_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213345_178_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213346_179_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213346_180_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213347_181_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213348_182_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213349_183_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213350_184_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213351_185_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213351_186_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213352_187_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213353_188_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213354_189_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213404_190_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213405_191_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213406_193_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213408_195_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213410_197_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213412_198_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213413_199_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213414_200_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213415_201_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213416_202_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213416_203_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213417_204_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213418_205_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213419_206_277.jpg", label: "城市风光" },
  { category: "city", name: "微信图片_20260228213421_207_277.jpg", label: "城市风光" },
  { category: "portrait", name: "微信图片_20251123141710_98_277.jpg", label: "人像" },
  { category: "portrait", name: "微信图片_20251123141713_99_277.jpg", label: "人像" },
  { category: "portrait", name: "微信图片_20251123141715_100_277.jpg", label: "人像" },
  { category: "portrait", name: "微信图片_20251123141718_101_277.jpg", label: "人像" },
  { category: "portrait", name: "微信图片_20260228213409_196_277.jpg", label: "人像" },
];

const galleryGrid = document.getElementById("gallery-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const yearEl = document.getElementById("year");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");
const hero = document.querySelector(".hero");
const fixedHeroCover = "assets/photos/city/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20260228212620_153_277.jpg";

let displayPhotos = [];

function buildPath(item) {
  return `assets/photos/${item.category}/${encodeURIComponent(item.name)}`;
}

function canLoadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

async function buildDisplayPhotos() {
  const checks = await Promise.all(
    photos.map(async (item) => {
      const src = buildPath(item);
      const ok = await canLoadImage(src);
      return ok ? item : null;
    })
  );

  const valid = checks.filter(Boolean);
  const counters = { renwen: 0, city: 0, portrait: 0 };
  displayPhotos = valid.map((item) => {
    counters[item.category] += 1;
    const number = String(counters[item.category]).padStart(2, "0");
    return {
      ...item,
      title: `${item.label}作品 ${number}`,
    };
  });
}

function setHeroCoverFromValid() {
  if (!hero || displayPhotos.length === 0) return;
  hero.style.backgroundImage = `url("${fixedHeroCover}")`;
}

function renderGallery(category) {
  const list =
    category === "all"
      ? displayPhotos
      : displayPhotos.filter((p) => p.category === category);
  galleryGrid.innerHTML = "";

  if (category === "all" && hero && !hero.style.backgroundImage && list.length > 0) {
    hero.style.backgroundImage = `url("${buildPath(list[0])}")`;
  }

  list.forEach((item) => {
    const card = document.createElement("article");
    card.className = "photo-card";
    card.innerHTML = `
      <img src="${buildPath(item)}" alt="${item.title}" loading="lazy" />
      <div class="photo-meta">${item.title}</div>
    `;
    card.addEventListener("click", () => {
      lightboxImg.src = buildPath(item);
      lightboxCaption.textContent = item.title;
      lightbox.classList.add("open");
    });
    galleryGrid.appendChild(card);
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderGallery(btn.dataset.category);
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("open");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("open");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("open");
  }
});

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

async function initGallery() {
  await buildDisplayPhotos();
  setHeroCoverFromValid();
  renderGallery("all");
}

initGallery();
