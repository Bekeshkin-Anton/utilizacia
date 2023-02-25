export const showPopup = () => {
  const popupWrap = document.getElementById('popupWrap');
  const body = document.querySelector('body');
  const popupForm = document.querySelector('#popupForm');
  const closePopupBtn = document.querySelector('.close-popup-btn');
  const showPopupBtn = document.querySelector('.header-popup-btn');

  popupWrap.classList.remove('popup-visible');

  showPopupBtn.onclick = function () {
    if (!popupWrap.classList.contains('popup-visible')) {
      openPopup();
    } else {
      closePopup();
    }
  };

  function openPopup() {
    popupWrap.classList.add('popup-visible');
    body.setAttribute('style', `overflow: hidden;`);
    popupForm.setAttribute('style', `opacity: 100%;  transform: translateY(25%);`);
  }
  function closePopup() {
    popupWrap.classList.remove('popup-visible');
    body.setAttribute('style', `overflow: auto;`);
    popupForm.setAttribute('style', `opacity: 30%; top: 0; transform: translateY(0)`);
  }
  closePopupBtn.onclick = function () {
    closePopup();
  };

  popupWrap.addEventListener('click', (e) => {
    const click = e.composedPath().includes(popupForm);

    if (popupWrap.classList.contains('popup-visible')) {
      if (!click) {
        closePopup();
      }
    }
  });
};
