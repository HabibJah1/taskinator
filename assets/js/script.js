var tasksToDoEl = document.querySelector("#tasks-to-do");
var formEl = document.querySelector("#task-form");

var createTaskHandler = function (event) {
  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
// Create list items
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
// Create div to hold task info and add to list items
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
// Add HTML content to div
  taskInfoEl.innerHTML ="<h3 class='task-name'>" + taskNameInput +"</h3><span class='task-type'>" +taskTypeInput +"</span>";
  listItemEl.appendChild(taskInfoEl);
// Add entire list item  to list
  tasksToDoEl.appendChild(listItemEl);
  console.dir(listItemEl)
};

formEl.addEventListener("submit", createTaskHandler);
