const button_todo = document.getElementById("button-todo");
const button_doing = document.getElementById("button-doing");
const button_done = document.getElementById("button-done");

const button_modal_cancel = document.getElementById("button-modal-cancel");
const button_modal_save = document.getElementById("button-modal-save");

const modal = document.getElementById("demo-modal");

let campoTask = "";

let button_card_excluir = document.getElementById("card_button_excluir");

function openModal(event) {
    campoTask = event.srcElement.id;
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
}

function closeModal() {
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
    resetForm();
    modalRequiredNone();
    
}

window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}


function saveTask() {
    
    let modal_title = document.getElementById("modal-title").value;

    if (modal_title === "") {
        modalRequiredBlock();
    } else {

        if (campoTask !== "") {
            switch (campoTask) {
                case "button-todo":
                    addTask("taskToDo");
                    break;
                case "button-doing":
                    addTask("taskDoing");
                    break;
                case "button-done":
                    addTask("taskDone");
                    break;
                default:
                    closeModal();
                    break;
            }
        }
    }
}

function modalRequiredBlock() {
    let modal_required = document.getElementById("modal-required");
    modal_required.style.display = "block";
}

function modalRequiredNone() {
    let modal_required = document.getElementById("modal-required");
    modal_required.style.display = "none";
}

function resetForm() {
    let modal_title = document.getElementById("modal-title");
    let modal_description = document.getElementById("modal-description");

    modal_title.value = "";
    modal_description.value = "";
    campoTask = "";
}

function addTask(campoTask) {
    let modal_title = document.getElementById("modal-title").value;
    let modal_description = document.getElementById("modal-description").value;

    addLocalStorage(campoTask,modal_title,modal_description);
    showCards();
    closeModal();
}


button_todo.addEventListener("click", openModal);
button_doing.addEventListener("click", openModal);
button_done.addEventListener("click", openModal);

button_modal_cancel.addEventListener("click", closeModal);
button_modal_save.addEventListener("click", saveTask);

button_card_excluir.addEventListener("click", excluirCard);