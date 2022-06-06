const input = document.querySelector("input");
const btn = document.querySelector("button");
const todolist = document.querySelector(".todo-list");
const clear = document.querySelector(".clear");

//ADD LIST ITEM
const addtask = () => {
  const newli = document.createElement("li");
  const deletebtn = document.createElement("button");
  deletebtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  if (input.value !== "") {
    newli.textContent = input.value;
    newli.appendChild(deletebtn);
    todolist.appendChild(newli);
    input.value = "";
  } else {
    alert("please enter a task");
  }

  //DELETE DUNCTION
  deletebtn.addEventListener("click", function () {
    const del = confirm("Are you sure want to delete the task");
    if (del == true) {
      const parent = this.parentNode;
      parent.remove();
    }
  });
};
btn.addEventListener("click", addtask);

//Clear all function
clear.addEventListener("click", () => {
  todolist.innerHTML = "";
});
