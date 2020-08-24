const editor = document.getElementById('editor');
editor.value = localStorage.getItem('editor');
editor.addEventListener('input', () => {
  localStorage.setItem('editor', editor.value);
});
