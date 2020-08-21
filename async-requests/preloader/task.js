const newRequest = new XMLHttpRequest();
const loader = document.querySelector('.loader');
newRequest.open('GET', 'https://netology-slow-rest.herokuapp.com');
newRequest.addEventListener('readystatechange', (e) => {
  if (newRequest.readyState == newRequest.DONE && newRequest.status == 200) {
    loader.classList.remove('loader_active');
    const data = JSON.parse(newRequest.responseText);
    const valute = data.response.Valute;
    for (let key in valute) {
      const itemCode = valute[key].CharCode;
      const itemValue = valute[key].Value;
      document.querySelector('#items').insertAdjacentHTML('beforeEnd',
      `
      <div class="item">
      <div class="item__code">${itemCode}</div>
      <div class="item__value">${itemValue}</div>
      <div class="item__currency">руб.</div>
      </div>`
    )
    }
  }
  e.preventDefault();
});
newRequest.send();
