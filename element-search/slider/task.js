const arrowNext = document.querySelector('.slider__arrow_next');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const sliderItemList = document.querySelectorAll('.slider__item');
const sliderDotList = document.querySelectorAll('.slider__dot');
const firstSliderItem = sliderItemList[0];
const lastSliderItem = sliderItemList[sliderItemList.length - 1];

let currentSlide = 0;


arrowNext.onclick = () => {
  sliderItemList[currentSlide].classList.remove('slider__item_active');
  sliderDotList[currentSlide].classList.remove('slider__dot_active');
  if (currentSlide == sliderItemList.length - 1) {
    firstSliderItem.classList.add('slider__item_active');
    sliderDotList[0].classList.add('slider__dot_active');
    currentSlide = 0;
  } else {
    sliderItemList[currentSlide + 1].classList.add('slider__item_active');
    sliderDotList[currentSlide + 1].classList.add('slider__dot_active');
    currentSlide = currentSlide + 1;
  }
}


arrowPrev.onclick = () => {
  sliderItemList[currentSlide].classList.remove('slider__item_active');
  sliderDotList[currentSlide].classList.remove('slider__dot_active');
  if (currentSlide == 0) {
    lastSliderItem.classList.add('slider__item_active');
    sliderDotList[sliderDotList.length - 1].classList.add('slider__dot_active');
    currentSlide = sliderDotList.length - 1;
  } else {
    sliderItemList[currentSlide - 1].classList.add('slider__item_active');
    sliderDotList[currentSlide - 1].classList.add('slider__dot_active');
    currentSlide = currentSlide - 1;
  }
}


for (let i = 0; i < sliderDotList.length; i++) {
  sliderDotList[i].onclick = () => {
    sliderDotList[currentSlide].classList.remove('slider__dot_active');
    sliderItemList[currentSlide].classList.remove('slider__item_active');
    sliderDotList[i].classList.add('slider__dot_active');
    sliderItemList[i].classList.add('slider__item_active');
    currentSlide = i;
  }
}
