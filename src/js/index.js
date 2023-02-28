import '../css/style.css';
import '../css/style.scss';

import { animate } from './parts/animate';
import { showPopup } from './parts/popup';
import { slider } from './parts/slider';
import { rewiewsSlider } from './parts/reviews-slider';
import { phoneInputsMask } from './parts/InputsMask';
import { leadForm, PopupForm } from './parts/forms';
import { showBurgerMenu } from './parts/burger';
import { changeElems } from './parts/adaptive';

document.addEventListener('DOMContentLoaded', () => {
  animate();
  phoneInputsMask();
  slider();
  rewiewsSlider();
  showPopup();
  new leadForm();
  new PopupForm();
  showBurgerMenu();
  changeElems();
});
