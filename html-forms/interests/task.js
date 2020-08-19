const interest = document.querySelectorAll('.interest');

for (let i = 0; i < interest.length; i++) {
  const interestCheck = interest[i].querySelector('.interest__check');
  interestCheck.addEventListener('change', () => {
    const interests = interest[i].querySelector('.interests');
    const interestChildren = interests.querySelectorAll('.interest__check');
    if (interestCheck.checked) {
      for (let j = 0; j < interestChildren.length; j++) {
        interestChildren[j].checked = true;
      }
    } else {
      for (let j = 0; j < interestChildren.length; j++) {
        interestChildren[j].checked = false;
      }
    }
  })
}
