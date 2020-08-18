const reveal = document.querySelectorAll('.reveal');
window.addEventListener('scroll', (event) => {
  for (let i = 0; i < reveal.length; i++) {
    if (reveal[i].getBoundingClientRect().top < window.innerHeight / 2) {
      reveal[i].classList.add('reveal_active');
    }
  }
})
