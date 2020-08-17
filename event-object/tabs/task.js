const tabs = document.querySelectorAll('.tabs');
for (let j = 0; j < tabs.length; j++) {
  const tabList = tabs[j].querySelectorAll('.tab');
  const contentList = tabs[j].querySelectorAll('.tab__content');

  let currentTab = 0;

  for (let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', () => {
    tabList[currentTab].classList.remove('tab_active');
    tabList[i].classList.add('tab_active');
    contentList[currentTab].classList.remove('tab__content_active');
    contentList[i].classList.add('tab__content_active');
    currentTab = i;
    })
  }
}
