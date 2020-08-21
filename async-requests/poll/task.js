const newRequest = new XMLHttpRequest();
newRequest.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
newRequest.addEventListener('readystatechange', (e) => {
  if (newRequest.readyState == newRequest.DONE && newRequest.status == 200) {
    const surveyData = JSON.parse(newRequest.responseText);
    const data = surveyData.data;
    const title = surveyData.data.title;
    const answersArr = surveyData.data.answers;
    document.querySelector('#poll__title').innerText = title;
    for (let i = 0; i < answersArr.length; i++) {
      document.querySelector('#poll__answers').insertAdjacentHTML('beforeEnd',
      `<button class="poll__answer">${answersArr[i]}</button>`);
    }
    const answer = document.querySelectorAll('.poll__answer');
    for (let i = 0; i < answer.length; i++ ) {
      answer[i].addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      })
    }
  }
  e.preventDefault();
});
newRequest.send();
