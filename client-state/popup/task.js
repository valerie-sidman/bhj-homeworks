const modal = document.querySelector('.modal');

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
}

if (!getCookie('isModalClose')) {
  modal.classList.add('modal_active');
}

modal.querySelector('.modal__close').onclick = () => {
  modal.classList.remove('modal_active');
  document.cookie = 'isModalClose=true';
}
