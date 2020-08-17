
const dropdownValueList = document.querySelectorAll('.dropdown__value');

for (let i = 0; i < dropdownValueList.length; i++) {
  dropdownValueList[i].onclick = () => {
    const dropdownList = dropdownValueList[i].closest('.dropdown').querySelector('.dropdown__list');
    const itemsList = dropdownList.querySelectorAll('.dropdown__item');
    dropdownList.classList.add('dropdown__list_active');
    for (let j = 0; j < itemsList.length; j++) {
      itemsList[j].addEventListener('click', (event) => {
        dropdownList.classList.remove('dropdown__list_active');
        dropdownValueList[i].textContent = itemsList[j].textContent;
        event.preventDefault();
      })
    }
  }
}
