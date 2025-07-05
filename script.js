function addTask() {
    var taskInput = document.getElementById("newTask");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Por favor, insira uma tarefa válida.");
        return;
    }

    var listItem = document.createElement("li");

    listItem.classList.add("list-item");

    listItem.innerHTML = `
  <span>${taskInput.value}</span>
  <button onclick="removeTask(this)" class="btn-remove">
    <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="Remover" class="btn-icon">
  </button>
`;
    taskList.appendChild(listItem);

    taskInput.value = "";
}

function removeTask(button) {
    var taskList = document.getElementById("taskList");
    var listItem = button.parentNode;
    taskList.removeChild(listItem);
}