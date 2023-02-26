import '../css/style.css';
import '../css/style.scss';

import { animate } from './parts/animate';
import { showPopup } from './parts/popup';
import { slider } from './parts/slider';
import { rewiewsSlider } from './parts/reviews-slider';
import { phoneInputsMask } from './parts/InputsMask';
import { leadForm, PopupForm } from './parts/forms';

document.addEventListener('DOMContentLoaded', () => {
  animate();
  phoneInputsMask();
  slider();
  rewiewsSlider();
  showPopup();
  new leadForm();
  new PopupForm();
});

document.querySelector('header').setAttribute('style', `border: 1px solid red;`);
