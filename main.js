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

const moveTask = (e) => {
  const index = e.target.parentNode.dataset.key;
  const taskDoneTab = tasksList.splice(index, 1);
  const taskDone = taskDoneTab[0]
  tasksListDone.push(taskDone);
  tasksDoneNumber.textContent = `(${tasksListDone.length})`;
  tasksListDone.forEach((item, index) => {
    item.dataset.key = index;
    ulTasksDone.appendChild(item)
  })
  render()
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
form.addEventListener('submit', addTask)