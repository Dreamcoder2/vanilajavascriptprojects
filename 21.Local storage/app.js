window.onload = () => {
  displaytask();
};
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todolist = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

btn.addEventListener("click", addtask);
let tasks;

// GET TASKS FROM THE LOCAL STORAGE
function gettasks() {
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
}

function addtask() {
  if (input.value !== "") {
    addtaskls();
    todolist.innerHTML = "";
    displaytask();
  } else {
    alert("please enter a task");
  }
}

// SAVE TASK TO LOCAL STORAGE
function addtaskls() {
  tasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
}

//display the tasks
function displaytask() {
  gettasks();
  tasks.forEach((task, index) => {
    const newli = document.createElement("li");
    const deletebtn = document.createElement("button");
    deletebtn.innerHTML = `<i class="fas fa-trash-alt" id = "${index}" onclick = "deletetask(this.id)"></i> `;
    newli.appendChild(document.createTextNode(task));
    newli.appendChild(deletebtn);
    todolist.appendChild(newli);
  });
}

//delete tasks
function deletetask(index) {
  const del = confirm("Are you sure want to delete the task");
  if (del == true) {
    gettasks();
  }

  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  todolist.innerHTML = "";
  displaytask();
}

// CLEAR TASKS
clear.addEventListener("click", function () {
  localStorage.clear("tasks");
  todolist.innerHTML = "";
});
