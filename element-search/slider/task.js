const arrowNext = document.querySelector('.slider__arrow_next');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const sliderItemList = document.querySelectorAll('.slider__item');
const sliderDotList = document.querySelectorAll('.slider__dot');


let currentSlide = 0;


arrowNext.onclick = () => {
  if (currentSlide == sliderItemList.length - 1) {
    setActiveImage(0);
  } else {
    setActiveImage(currentSlide + 1);
  }
}


arrowPrev.onclick = () => {
  if (currentSlide == 0) {
    setActiveImage(sliderItemList.length - 1);
  } else {
    setActiveImage(currentSlide - 1);
  }
}


for (let i = 0; i < sliderDotList.length; i++) {
  sliderDotList[i].onclick = () => {
    setActiveImage(i);
  }
}


const setActiveImage = (index) => {
  sliderItemList[currentSlide].classList.remove('slider__item_active');
  sliderDotList[currentSlide].classList.remove('slider__dot_active');
  sliderItemList[index].classList.add('slider__item_active');
  sliderDotList[index].classList.add('slider__dot_active');
  currentSlide = index;
}
