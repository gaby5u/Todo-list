let todoList = JSON.parse(localStorage.getItem("todoList")) || [
  {
    name: "make dinner",
    dueDate: "2023-12-22",
  },
  { name: "wash dishes", dueDate: "2023-06-22" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    let html = `
    <div>${name}</div>
    <div> ${dueDate} </div>
    <button onclick = "todoList.splice(${i}, 1); renderTodoList()" class="delete-todo-button" >Delete</button>`;
    // if (window.innerWidth <= 480) {
    //   html = `
    //   <div class="name-due-date">
    //   <div>${name}</div>
    //   <div> ${dueDate} </div>
    //   </div>
    // <button onclick = "todoList.splice(${i}, 1); renderTodoList()" class="delete-todo-button" >Delete</button>`;
    // }
    todoListHTML += html;
  }
  localStorage.setItem("todoList", JSON.stringify(todoList));

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  todoList.push({
    name,
    dueDate,
  });

  localStorage.setItem("todoList", JSON.stringify(todoList));

  dateInputElement.value = "";
  inputElement.value = "";

  renderTodoList();
}
