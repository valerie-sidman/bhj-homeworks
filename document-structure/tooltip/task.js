Array.from(document.querySelectorAll('.has-tooltip')).forEach(item => {
  item.addEventListener('click', (event) => {
    const tooltipActive = item.nextElementSibling;
    if (tooltipActive && tooltipActive.classList.contains('tooltip_active')) {
      tooltipActive.remove();
    } else {
      Array.from(document.querySelectorAll('.tooltip_active')).forEach((item) => {
        item.remove();
      });
      let coordinates = item.getBoundingClientRect();
      item.insertAdjacentHTML('afterEnd',
      `<div class="tooltip tooltip_active" style="left: ${coordinates.x}px">${item.title}</div>`)
    }
    event.preventDefault();
  })
})
