const button_todo = document.getElementById("button-todo");
const button_doing = document.getElementById("button-doing");
const button_done = document.getElementById("button-done");

const button_modal_cancel = document.getElementById("button-modal-cancel");
const button_modal_save = document.getElementById("button-modal-save");

let modal = document.getElementById("demo-modal");

let campoTask = "";

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

function addTask(campoTask) {
    let modal_title = document.getElementById("modal-title").value;
    let modal_description = document.getElementById("modal-description").value;

    addLocalStorage(campoTask,modal_title,modal_description);
    showCards();
    closeModal();
}

function saveTask() {
    
    let modal_title = document.getElementById("modal-title").value;

    if (modal_title === "") {
        modalRequiredBlock();
    } else {

        if (campoTask !== "") {
            switch (campoTask) {
                case "taskToDo":
                    addTask("taskToDo");
                    break;
                case "taskDoing":
                    addTask("taskDoing");
                    break;
                case "taskDone":
                    addTask("taskDone");
                    break;
                default:
                    closeModal();
                    break;
            }
        }
    }
}




// button_todo.addEventListener("click", openModal);
// button_doing.addEventListener("click", openModal);
// button_done.addEventListener("click", openModal);

button_modal_cancel.addEventListener("click", closeModal);
button_modal_save.addEventListener("click", saveTask);

window.addEventListener("load", function () {

    createStorageKeys();
    // this.setTimeout(clearLocalStorage,500)
    this.setTimeout(showCards,500);


});