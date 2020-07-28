const menuLinkList = document.querySelectorAll('.menu__link');
for (let i = 0; i < menuLinkList.length; i++) {
  menuLinkList[i].onclick = () => {
    const childMenu = menuLinkList[i].parentElement.querySelector('.menu');
    if (childMenu) {

      const menuMain = menuLinkList[i].closest('.menu_main');
      const menuList = menuMain.querySelectorAll('.menu');
      for (let i = 0; i < menuList.length; i++) {
        menuList[i].classList.remove('menu_active');
      }
      childMenu.classList.add('menu_active');
      return false;
    }
  }
}
