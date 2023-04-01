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