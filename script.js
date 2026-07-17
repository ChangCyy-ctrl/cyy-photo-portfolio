// 照片数据
const photos = [
  // 城市风光 - city
  { src: 'photos/city/微信图片_20260228212615_148_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212616_149_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212617_150_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212618_151_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212619_152_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212620_153_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212621_154_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212622_155_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212623_156_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212623_157_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212624_158_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212625_159_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212626_160_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212627_161_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212628_162_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212628_163_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212629_164_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212630_165_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212631_166_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212634_170_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228212635_171_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213345_178_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213346_179_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213346_180_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213347_181_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213348_182_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213349_183_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213350_184_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213351_185_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213351_186_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213352_187_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213353_188_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213354_189_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213404_190_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213405_191_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213406_193_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213408_195_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213410_197_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213412_198_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213413_199_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213414_200_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213415_201_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213416_202_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213416_203_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213417_204_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213418_205_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213419_206_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260228213421_207_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260717160804_391_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260717160806_392_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260717160807_393_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260717160807_394_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260717160808_395_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260717160809_396_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260717161056_398_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260717161057_399_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260717161058_400_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260717161058_401_277.jpg', category: 'city', title: '城市风光' },
  { src: 'photos/city/微信图片_20260717161059_402_277.jpg', category: 'city', title: '城市风光' },

  // 人文 - renwen
  { src: 'photos/renwen/IMG_6419.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6420.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6421.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6422.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6423.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6425.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6426.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6428.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6429.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6430.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6433.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6434.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6435.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6436.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6438.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6439.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6440.PNG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6444.JPG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_644444.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6445.JPG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/IMG_6446.JPG', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260228212632_167_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260228212633_168_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260228212634_169_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260228213331_172_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260228213332_173_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260228213333_174_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260228213334_175_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260228213338_176_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260228213344_177_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260228213406_192_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260228213407_194_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260228213423_208_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717152534_378_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717152535_379_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717152536_380_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717152537_381_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717152541_382_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717153120_384_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717153120_385_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717153121_386_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717153122_387_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717153123_388_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717153123_389_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717153124_390_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161224_403_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161225_404_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161227_405_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161234_406_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161236_407_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161238_408_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161239_409_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161246_410_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161248_411_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161250_412_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161251_413_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161253_414_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161254_415_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161255_416_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161256_417_277.jpg', category: 'people', title: '人文纪实' },
  { src: 'photos/renwen/微信图片_20260717161256_418_277.jpg', category: 'people', title: '人文纪实' },

  // 人像 - portrait
  { src: 'photos/portrait/人像1.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像2.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像3.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像4.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像5.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像6.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像7.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像8.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像9.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像10.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像11.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像12.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像13.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像14.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像15.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像16.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像17.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像18.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像19.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像20.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/人像21.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/微信图片_20251123141710_98_277.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/微信图片_20251123141713_99_277.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/微信图片_20251123141715_100_277.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/微信图片_20251123141718_101_277.jpg', category: 'portrait', title: '人像摄影' },
  { src: 'photos/portrait/微信图片_20260228213409_196_277.jpg', category: 'portrait', title: '人像摄影' },
];

// 渲染画廊
function renderGallery(filter = 'all') {
  const gallery = document.querySelector('.gallery-grid');
  if (!gallery) return;

  const filtered = filter === 'all' 
    ? photos 
    : photos.filter(p => p.category === filter);

  gallery.innerHTML = filtered.map(photo => `
    <div class="photo-card" data-src="${photo.src}" data-title="${photo.title}">
      <img src="${photo.src}" alt="${photo.title}" loading="lazy">
      <div class="photo-meta">${photo.title}</div>
    </div>
  `).join('');

  // 绑定点击事件
  document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', () => {
      openLightbox(card.dataset.src, card.dataset.title);
    });
  });
}

// 筛选按钮
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      renderGallery(filter);
    });
  });
}

// 灯箱功能
function openLightbox(src, title) {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    if (lightboxCaption) lightboxCaption.textContent = title;
    lightbox.classList.add('open');
  }
}

function closeLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    lightbox.classList.remove('open');
  }
}

// 复制微信号
function initCopyWechat() {
  const wechatEl = document.getElementById('wechat-num');
  const copyTip = document.querySelector('.copy-tip');
  if (!wechatEl) return;

  wechatEl.style.cursor = 'pointer';
  wechatEl.addEventListener('click', () => {
    const num = wechatEl.textContent.trim();
    navigator.clipboard.writeText(num).then(() => {
      if (copyTip) {
        copyTip.textContent = '微信号已复制，可直接粘贴添加';
        setTimeout(() => {
          copyTip.textContent = '';
        }, 2000);
      }
    }).catch(() => {
      if (copyTip) {
        copyTip.textContent = '请手动复制微信号';
      }
    });
  });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  renderGallery('all');
  initFilters();
  initCopyWechat();

  // 灯箱关闭
  const lightbox = document.querySelector('.lightbox');
  const closeBtn = document.querySelector('.lightbox-close');
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  // ESC 关闭灯箱
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
