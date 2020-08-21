const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const request = new XMLHttpRequest();
  request.open('POST','https://netology-slow-rest.herokuapp.com/upload.php');
  request.upload.onprogress = (event) => {
    document.getElementById('progress').value = event.loaded / event.total;
  }
  request.send(formData);
})
