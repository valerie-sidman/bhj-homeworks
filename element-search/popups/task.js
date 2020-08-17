const modalMainList = document.querySelector('#modal_main');
modalMainList.classList.add('modal_active');

const modalSuccessList = document.querySelector('#modal_success');
modalMainList.querySelector('.show-success').onclick = () => {
  modalSuccessList.classList.add('modal_active');
  modalMainList.classList.remove('modal_active');
}

const modalList = document.querySelectorAll('.modal');
for (let i = 0; i < modalList.length; i++) {
  modalList[i].querySelector('.modal__close').onclick = () => {
    modalList[i].classList.remove('modal_active');
  }
}
