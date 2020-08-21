const taskInput = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const tasksAddBtn = document.querySelector('.tasks__add');
function addTask() {
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
}

tasksAddBtn.addEventListener('click', (e) => {
  addTask();
  e.preventDefault();
})
taskInput.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    addTask();
    e.preventDefault();
  }
})
