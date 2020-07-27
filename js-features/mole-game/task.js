let hitCounter = document.getElementById(`dead`);
let wastedCounter = document.getElementById(`lost`);

let getHole = index => document.getElementById(`hole${index}`);
for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = () => {
    if (getHole(i).classList.contains('hole_has-mole')) {
      hitCounter.textContent = Number(hitCounter.textContent) + 1;
    } else {
      wastedCounter.textContent = Number(wastedCounter.textContent) + 1;
    }

    if (hitCounter.textContent == 10) {
      alert('Поздравляю, жестокий убийца, ты победил! =(');
      hitCounter.textContent = 0;
      wastedCounter.textContent = 0;
    } else if (wastedCounter.textContent == 5) {
      alert('Ты проиграл, но спас кротов! =)');
      hitCounter.textContent = 0;
      wastedCounter.textContent = 0;
    }
  }
}
