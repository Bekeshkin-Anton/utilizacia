export const showBurgerMenu = () => {
  const burgerBtn = document.querySelector('.burger-btn');
  const burgerMenu = document.querySelector('.burger');

  burgerBtn.onclick = function () {
    burgerMenu.classList.toggle('show-burger-menu');
  };
};
