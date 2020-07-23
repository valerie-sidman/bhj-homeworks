// Таймер, отсчитывающий оставшееся время в секундах
const timerID = setInterval(() => {
  const timer = document.getElementById("timer");
  timer.textContent -= 1;
  if (timer.textContent == 0) {
    alert('Вы победили в первом конкурсе!');
    clearInterval(timerID);

// Загрузка произвольного файла
    const someFile = document.getElementById('link');
    someFile.href = 'icons.ai';
    someFile.click();
  }
}, 1000);

// Таймер, отсчитывающий оставшееся время в формате hh:mm:ss
function valueTransformation(value) {
  if (value > 0) {
    value -= 1;
  }

  if (value < 10) {
    return '0' + value;
  } else {
    return value;
  }
}

const secondsID = setInterval(() => {
  const seconds = document.getElementById("seconds");
  const minutes = document.getElementById("minutes");
  const hours = document.getElementById("hours");

  if (seconds.textContent == 0) {
    if (minutes.textContent == 0) {
      if (hours.textContent == 0) {
        alert('Вы победили во втором конкурсе!');
        clearInterval(secondsID);
      } else {
        seconds.textContent = 59;
        minutes.textContent = 59;
        hours.textContent = valueTransformation(hours.textContent);
      }
    } else {
      seconds.textContent = 59;
      minutes.textContent = valueTransformation(minutes.textContent);
    }
  } else {
    seconds.textContent = valueTransformation(seconds.textContent);
  }
}, 1000);
