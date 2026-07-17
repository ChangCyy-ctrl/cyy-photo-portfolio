// 照片数据
const photos = [
  // 城市风光 - city
  { src: 'assets/photos/city/49D107F8-3735-489D-B34D-831362B32B5B.jpeg', category: 'city', title: '城市风光' },
  { src: 'assets/photos/city/646EFD2A-D3A4-4343-BBE6-8FA641237394.jpeg', category: 'city', title: '城市风光' },
  { src: 'assets/photos/city/77E7F3A3-16F7-4BCB-A7FB-F83F6894A51E.jpeg', category: 'city', title: '城市风光' },
  { src: 'assets/photos/city/795FB408-EC67-456F-B42D-FCFB39625C95.jpeg', category: 'city', title: '城市风光' },
  { src: 'assets/photos/city/96F1FAB5-9111-4C49-90C9-C1577A902FB3.jpeg', category: 'city', title: '城市风光' },
  { src: 'assets/photos/city/IMG_5751.jpeg', category: 'city', title: '城市风光' },
  { src: 'assets/photos/city/IMG_5753.jpeg', category: 'city', title: '城市风光' },
  { src: 'assets/photos/city/IMG_5754.jpeg', category: 'city', title: '城市风光' },
  { src: 'assets/photos/city/IMG_5755.jpeg', category: 'city', title: '城市风光' },
  { src: 'assets/photos/city/IMG_5756.jpeg', category: 'city', title: '城市风光' },
  { src: 'assets/photos/city/IMG_5977.jpeg', category: 'city', title: '城市风光' },
  { src: 'assets/photos/city/IMG_7193.jpeg', category: 'city', title: '城市风光' },
  { src: 'assets/photos/city/IMG_7194.jpeg', category: 'city', title: '城市风光' },

  // 人文 - renwen
  { src: 'assets/photos/renwen/IMG_6461.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/IMG_6797.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/IMG_6803.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/IMG_6805.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/IMG_6815.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/IMG_7088.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/IMG_7089.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1779630563482.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1779630577222.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1779630586586.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1779630598076.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1779630608597.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1779630626023.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1779630643993.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1779630654691.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1779630665891.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1779630698071.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1780747841858.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1780747842547.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1780747856152.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1780747856770.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1781099685152.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1781099685831.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1781099703036.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1781099703688.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1781099738535.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1781099739169.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1781099757815.png', category: 'people', title: '人文纪实' },
  { src: 'assets/photos/renwen/photoby_1781099758491.png', category: 'people', title: '人文纪实' },
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
