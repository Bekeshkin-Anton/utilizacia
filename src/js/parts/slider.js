export const slider = () => {
  /* Устанавливаем стартовый индекс слайда по умолчанию: */
  let slideIndex = 1;
  /* Вызываем функцию, которая реализована ниже: */
  showSlides(slideIndex);

  /* Увеличиваем индекс на 1 — показываем следующий слайд: */
  document.querySelector('.slider-nav-btn__right').onclick = () => {
    showSlides((slideIndex += 1));
  };

  /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
  document.querySelector('.slider-nav-btn__left').onclick = () => {
    showSlides((slideIndex -= 1));
  };

  /* Функция перелистывания: */
  function showSlides(n) {
    /* Обращаемся к элементам с названием класса "slider-item", то есть к картинкам: */
    let slides = document.getElementsByClassName('slider-item');
    let activeDot = document.getElementsByClassName('dots__elem');

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
      slide.style.display = 'none';
    }
    for (let dot of activeDot) {
      dot.classList.remove('active-dot');
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = 'block';
    activeDot[slideIndex - 1].classList.add('active-dot');
  }

  const sliderArea = document.getElementById('slider');
  const sliderBtnLeft = document.querySelector('.slider-nav-btn__left');
  const sliderBtnRight = document.querySelector('.slider-nav-btn__right');
  sliderArea.addEventListener('mouseenter', () => {
    sliderBtnLeft.setAttribute('style', `left: 4%`);
    sliderBtnRight.setAttribute('style', `right: 4%`);
  });
  sliderArea.addEventListener('mouseleave', () => {
    sliderBtnLeft.setAttribute('style', `left: -10%;`);
    sliderBtnRight.setAttribute('style', `right: -10%`);
  });
  // slider-nav-btn;
};
