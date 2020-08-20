const taskInput = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
taskInput.addEventListener('keydown', (event) => {
  if (event.keyCode == 13) {
    if (taskInput.value != '') {
      tasksList.insertAdjacentHTML('beforeEnd',
      `<div class="task">
        <div class="task__title">
          ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`);
      const currentTask = tasksList.lastChild;
      currentTask.querySelector('.task__remove').addEventListener('click', () => {
        currentTask.remove();
      });
      taskInput.value = '';
    }
    event.preventDefault();
  }
})
