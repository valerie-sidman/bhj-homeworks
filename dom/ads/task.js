const rotators = document.querySelectorAll('.rotator');

for (let i = 0; i < rotators.length; i++) {
  const rotatorCases = rotators[i].querySelectorAll('.rotator__case');
  let currentBlock = 0;
  let switchBlocks = setInterval(() => {
    if (currentBlock == rotatorCases.length - 1) {
      rotatorCases[currentBlock].classList.remove('rotator__case_active');
      currentBlock = 0;
      rotatorCases[currentBlock].classList.add('rotator__case_active');
    } else {
      rotatorCases[currentBlock].classList.remove('rotator__case_active');
      rotatorCases[currentBlock + 1].classList.add('rotator__case_active');
      currentBlock = currentBlock + 1;
    }
  }, 1000);
}
