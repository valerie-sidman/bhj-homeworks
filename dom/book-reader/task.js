const book = document.querySelector('.book');
const fontSizeList = document.querySelectorAll('.font-size');
const colorsFontList = document.querySelectorAll('.book__control_color > .color');
const colorsBackgroundList = document.querySelectorAll('.book__control_background > .color');
let currentSize = 1;
let currentTextColor = 0;
let currentBackgroundColor = 2;

for (let i = 0; i < fontSizeList.length; i++) {
  fontSizeList[i].addEventListener('click', (event) => {
    fontSizeList[currentSize].classList.remove('font-size_active');
    fontSizeList[i].classList.add('font-size_active');
    currentSize = i;
    book.classList.remove('book_fs-small');
    book.classList.remove('book_fs-big');
    if (fontSizeList[i].classList.contains('font-size_small')) {
      book.classList.add('book_fs-small');
    } else if (fontSizeList[i].classList.contains('font-size_big')) {
      book.classList.add('book_fs-big');
    }
    event.preventDefault();
  })
}

for (let i = 0; i < colorsFontList.length; i++) {
  colorsFontList[i].addEventListener('click', (event) => {
    colorsFontList[currentTextColor].classList.remove('color_active');
    colorsFontList[i].classList.add('color_active');
    currentTextColor = i;
    book.classList.remove('book_color-gray');
    book.classList.remove('book_color-whitesmoke');
    if (colorsFontList[i].classList.contains('color_gray')) {
      book.classList.add('book_color-gray');
    } else if (colorsFontList[i].classList.contains('color_whitesmoke')) {
      book.classList.add('book_color-whitesmoke');
    }
    event.preventDefault();
  })
}

for (let i = 0; i < colorsBackgroundList.length; i++) {
  colorsBackgroundList[i].addEventListener('click', (event) => {
    colorsBackgroundList[currentBackgroundColor].classList.remove('color_active');
    colorsBackgroundList[i].classList.add('color_active');
    currentBackgroundColor = i;
    book.classList.remove('book_bg-black');
    book.classList.remove('book_bg-gray');
    if (colorsBackgroundList[i].classList.contains('color_black')) {
      book.classList.add('book_bg-black');
    } else if (colorsBackgroundList[i].classList.contains('color_gray')) {
      book.classList.add('book_bg-gray');
    }
    event.preventDefault();
  })
}
