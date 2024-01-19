function addTask() {
    var taskInput = document.getElementById("newTask");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Por favor, insira uma tarefa válida.");
        return;
    }

    var listItem = document.createElement("li");
    listItem.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remover</button>';
    taskList.appendChild(listItem);

    taskInput.value = "";
}

function removeTask(button) {
    var taskList = document.getElementById("taskList");
    var listItem = button.parentNode;
    taskList.removeChild(listItem);
}