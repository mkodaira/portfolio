// modal.js

const modal = document.getElementById('imageModal');
const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.image-modal__close');
const modalImages = document.querySelectorAll('.js-modal-image');

// 開く
modalImages.forEach((img) => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.classList.add('is-open');
    document.body.classList.add('is-modal-open');
  });
});

// 閉じる（❌ボタン）
closeBtn.addEventListener('click', () => {
  closeModal();
});

// 閉じる（背景クリック）
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// 共通の閉じる処理
function closeModal() {
  modal.classList.remove('is-open');
  document.body.classList.remove('is-modal-open');
  modalImg.src = '';
}

// Escキーで閉じる
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }
});
