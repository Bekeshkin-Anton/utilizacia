export const changeElems = () => {
  let screenWidth = window.screen.availWidth;
  console.log('screenWidth: ', screenWidth);
  const width = 400;
  console.log('width: ', width);
  window.addEventListener('DOMContentLoaded', () => {
    conditionsForChange();
    window.addEventListener('resize', () => {
      screenWidth = window.screen.availWidth;
      conditionsForChange();
    });
  });
  function conditionsForChange() {
    if (screenWidth < width) {
      document
        .querySelector('.header-contats__elem')
        .querySelectorAll('a')[0]
        .querySelector('span').innerHTML = `<img src="./img/mail-filled.svg" alt=""></img>`;
      document
        .querySelector('.header-contats__elem')
        .querySelectorAll('a')[1]
        .querySelector('span').innerHTML = `<img src="./img/call.svg" alt="">`;
    } else {
      document.querySelector('.header-contats__elem').querySelectorAll('a')[0].querySelector('span').innerHTML = `utilizaciaspb@mail.ru`;
      document.querySelector('.header-contats__elem').querySelectorAll('a')[1].querySelector('span').innerHTML = `+7 (963) 342-41-22`;
    }
  }
};
