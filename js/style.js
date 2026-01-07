
// ====================
// A. スクロールなし（フィット）
// ====================
const fitModal = document.getElementById('imageModalFit');
const fitModalImg = fitModal.querySelector('img');
const fitCloseBtn = fitModal.querySelector('.image-modal-fit__close');
const fitImages = document.querySelectorAll('.js-fit-modal-image');

// 開く
fitImages.forEach((img) => {
  img.addEventListener('click', () => {
    fitModalImg.src = img.src;
    fitModal.classList.add('is-open');
    fitModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-modal-open'); // ★ 背景固定
  });
});

// 閉じる処理
function closeFitModal() {
  fitModal.classList.remove('is-open');
  fitModal.setAttribute('aria-hidden', 'true');
  fitModalImg.src = '';
  document.body.classList.remove('is-modal-open'); // ★ 解除
}


// 閉じる（×）
fitCloseBtn.addEventListener('click', closeFitModal);

// 背景クリックで閉じる
fitModal.addEventListener('click', (e) => {
  if (e.target === fitModal) closeFitModal();
});


// Escキー
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && fitModal.classList.contains('is-open')) {
    closeFitModal();
  }
});


// ====================
// B. スクロールあり
// ====================
const scrollModal = document.getElementById('imageModalScroll');
const scrollModalImg = scrollModal.querySelector('img');
const scrollCloseBtn = scrollModal.querySelector('.image-modal-scroll__close');
const scrollTriggers = document.querySelectorAll('.js-scroll-modal-trigger');

// 開く
scrollTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const fullImage = trigger.dataset.full;
    if (!fullImage) return;

    scrollModalImg.src = fullImage;
    scrollModal.classList.add('is-open');
    scrollModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-modal-open'); // 必要ならスクロール禁止用
  });
});

// 閉じる（×）
scrollCloseBtn.addEventListener('click', closeScrollModal);

// 背景クリックで閉じる
scrollModal.addEventListener('click', (e) => {
  if (e.target === scrollModal) closeScrollModal();
});

// 閉じる処理
function closeScrollModal() {
  scrollModal.classList.remove('is-open');
  scrollModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-modal-open');
  scrollModalImg.src = '';
}

// Escキー
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && scrollModal.classList.contains('is-open')) {
    closeScrollModal();
  }
});


// 開く
fitImages.forEach((img) => {
  img.addEventListener('click', () => {
    fitModalImg.src = img.src;
    fitModal.classList.add('is-open');
    fitModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-modal-open'); // ★ 追加
  });
});

// 閉じる処理
function closeFitModal() {
  fitModal.classList.remove('is-open');
  fitModal.setAttribute('aria-hidden', 'true');
  fitModalImg.src = '';
  document.body.classList.remove('is-modal-open'); // ★ 追加
}
