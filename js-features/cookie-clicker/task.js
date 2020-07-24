const cookiePic = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("click__speed");
let timer;

function changingValue() {
  clickerCounter.textContent = Number(clickerCounter.textContent) + 1;

  if (clickerCounter.textContent % 2 == 0) {
    cookiePic.width = 200;
  } else {
    cookiePic.width = 300;
  }

  if (timer) {
    clickSpeed.textContent = (1 / ((Date.now() - timer) / 1000)).toFixed(2);
  }

  timer = Date.now();
};

cookiePic.onclick = changingValue;
