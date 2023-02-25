export const animate = () => {
  const blockItem = document.querySelectorAll('.achievements');

  if (blockItem.length > 0) {
    window.addEventListener('scroll', animOnScroll);
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop };
  }
  function animOnScroll() {
    for (let i = 0; i < blockItem.length; i++) {
      const item = blockItem[i];
      const itemHeight = item.offsetHeight;
      const itemOffset = offset(item).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - itemHeight / animStart;

      if (itemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > itemOffset - animItemPoint && pageYOffset < itemOffset + itemHeight) {
        document.querySelector('.for-counter-1').classList.add('counter-1');
        document.querySelector('.for-counter-2').classList.add('counter-2');
        document.querySelector('.for-counter-3').classList.add('counter-3');
      }
    }
  }
  setTimeout(() => {
    animOnScroll();
  }, 3000);
};
function howWeWorkImgChange() {
  const wrap1 = document.querySelector('.how-we-work-img-wrap-1');
  const wrap2 = document.querySelector('.how-we-work-img-wrap-2');
  const wrap3 = document.querySelector('.how-we-work-img-wrap-3');

  wrap1.addEventListener('mouseenter', () => {
    document.querySelector('.img-gray-1').classList.add('hidden');
    document.querySelector('.img-blue-1').classList.remove('hidden');
  });
  wrap1.addEventListener('mouseleave', () => {
    document.querySelector('.img-gray-1').classList.remove('hidden');
    document.querySelector('.img-blue-1').classList.add('hidden');
  });
  wrap2.addEventListener('mouseenter', () => {
    document.querySelector('.img-gray-2').classList.add('hidden');
    document.querySelector('.img-blue-2').classList.remove('hidden');
  });
  wrap2.addEventListener('mouseleave', () => {
    document.querySelector('.img-gray-2').classList.remove('hidden');
    document.querySelector('.img-blue-2').classList.add('hidden');
  });
  wrap3.addEventListener('mouseenter', () => {
    document.querySelector('.img-gray-3').classList.add('hidden');
    document.querySelector('.img-blue-3').classList.remove('hidden');
  });
  wrap3.addEventListener('mouseleave', () => {
    document.querySelector('.img-gray-3').classList.remove('hidden');
    document.querySelector('.img-blue-3').classList.add('hidden');
  });
}
howWeWorkImgChange();
