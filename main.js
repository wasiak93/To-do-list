const inputAdd = document.querySelector('input.write');
const form = document.querySelector('form');
const inputWrite = document.querySelector('input.write');
const ulTasks = document.querySelector("ul.tasks");
const tasksList = [];
const taskNumber = document.querySelector('span.tasksNumber');

const tasksListDone = [];
const tasksDoneNumber = document.querySelector('span.tasksDoneNumber');
const ulTasksDone = document.querySelector("ul.tasksDone");


const removeTask = (e) => {
  const index = e.target.parentNode.dataset.key;
  tasksList.splice(index, 1);
  render()

}
const removeDone = (e) => {
  const index = e.target.parentNode.dataset.key;
  tasksListDone.splice(index, 1);
  ulTasksDone.textContent = "";
  render2()
}

const moveTask = (e) => {
  const index = e.target.parentNode.dataset.key;
  const taskDoneTab = tasksList.splice(index, 1);
  let taskDone = taskDoneTab[0];
  console.log(taskDone);
  taskDone.removeChild(taskDone.lastChild);
  tasksListDone.push(taskDone);
  render2()
  render()
  taskDone.querySelector('button.delete').addEventListener('click', removeDone)
}

const addTask = (e) => {
  e.preventDefault();
  const titleTask = inputWrite.value;
  if (titleTask === "") return;
  console.log(titleTask);
  const task = document.createElement("li");
  task.classList.add('task');
  task.innerHTML = titleTask + `<button class="delete">usuń</button>` + `<button class="done">zrobione</button>`;
  tasksList.push(task)
  inputWrite.value = "";
  render()
  task.querySelector('button.delete').addEventListener('click', removeTask);
  task.querySelector('button.done').addEventListener('click', moveTask)
}

const render = () => {
  taskNumber.textContent = `(${tasksList.length})`;
  ulTasks.textContent = "";
  tasksList.forEach((task, index) => {
    task.dataset.key = index;
    ulTasks.appendChild(task);
  })
}

const render2 = () => {
  tasksDoneNumber.textContent = `(${tasksListDone.length})`;
  tasksListDone.forEach((item, index) => {
    item.dataset.key = index;
    ulTasksDone.appendChild(item)
  })
}

form.addEventListener('submit', addTask)