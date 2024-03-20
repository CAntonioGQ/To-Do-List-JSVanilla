const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Cargar datos del localStorage cuando la página se carga por primera vez
window.onload = function() {
    showTask();
};

function addTask() {
    if (inputBox.value === '') {
        alert("Debes escribir algo!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
        // Guardar los datos en localStorage después de agregar una tarea
        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        // Guardar los datos en localStorage después de marcar/desmarcar una tarea
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        // Guardar los datos en localStorage después de eliminar una tarea
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    if (localStorage.getItem("data")) {
        listContainer.innerHTML = localStorage.getItem("data");
    }
}
