const inputAdd = document.querySelector('input.write');
const form = document.querySelector('form');
const inputWrite = document.querySelector('input.write');
const ulTasks = document.querySelector("ul.tasks");
const tasksList = []
const taskNumber = document.querySelector('span');


const removeTask = (e) => {
  const index = e.target.parentNode.dataset.key;
  tasksList.splice(index, 1);
  taskNumber.textContent = `(${tasksList.length})`;
  ulTasks.textContent = "";
  tasksList.forEach((task, index) => {
    task.dataset.key = index
    ulTasks.appendChild(task);
  })

}

const addTask = (e) => {
  e.preventDefault();
  const titleTask = inputWrite.value;
  if (titleTask === "") return;
  console.log(titleTask);
  const task = document.createElement("li");
  task.classList.add('task');
  task.innerHTML = titleTask + `<button class="delete">usuń</button>` + `<button class="done">zrobione</button>`;
  tasksList.push(task);
  taskNumber.textContent = `(${tasksList.length})`;
  inputWrite.value = "";
  ulTasks.textContent = "";
  tasksList.forEach((task, index) => {
    task.dataset.key = index
    ulTasks.appendChild(task);
  })



  task.querySelector('button.delete').addEventListener('click', removeTask)
}
form.addEventListener('submit', addTask)