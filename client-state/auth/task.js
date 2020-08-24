const signin = document.querySelector('.signin');
const signinForm = signin.querySelector('#signin__form');
signin.classList.add('signin_active');

if (localStorage.userId) {
  signin.classList.remove('signin_active');
  welcome(localStorage.userId);
}

signinForm.addEventListener('submit', (e) => {
  const formData = new FormData(signinForm);
  const request = new XMLHttpRequest();
  request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  request.addEventListener('readystatechange', () => {
    if (request.readyState == request.DONE && request.status == 200) {
      const data = JSON.parse(request.responseText);
      const userId = data.user_id;
      signin.classList.remove('signin_active');
      if (data.success) {
        localStorage.userId = userId;
        welcome(userId);
      } else {
        alert('Неверный логин/пароль');
      }
    }
  });
  request.send(formData);
  e.preventDefault();
});

function welcome(id) {
  const welcome = document.querySelector('.welcome');
  welcome.classList.add('welcome_active');
  welcome.querySelector('#user_id').innerText = id;
}
