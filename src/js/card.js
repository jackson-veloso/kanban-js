function addCard(campoTask, title, description) {

    let box_card = document.getElementById(campoTask);

    let card = `
    <div class="card">
        <div class="card-content">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
        <div class="card-button">
            <button type="submit" class="button-card" id="card_button_editar"><img class="button-img" src="img/editar.png"
                alt="botão editar"></button>
            <button type="submit" class="button-card" id="card_button_excluir"><img class="button-img" src="img/excluir2.png"
                alt="botão excluir"></button>
        </div>
    </div> `;

    box_card.innerHTML = box_card.innerHTML + card;

}

function clearCards(campoTask) {
    let box_card = document.getElementById(campoTask);
    box_card.innerHTML = "";
}

function showCards() {

    let taskToDo = getTaskStorage("taskToDo");
    let taskDoing = getTaskStorage("taskDoing");
    let taskDone = getTaskStorage("taskDone");
    let task = "";

    let listTask = [taskToDo, taskDoing, taskDone];

    for (let i = 0; i < listTask.length; i++) {
        if (i == 0) {
            task = "taskToDo";
        } else if (i == 1) {
            task = "taskDoing";
        } else {
            task = "taskDone";
        }

        if (listTask[i].size > 0) {

            clearCards(task);

            let arr = Array.from(listTask[i]);

            for (let j = 0; j < arr.length; j++) {
                let title = arr[j][0];
                let description = arr[j][1];

                addCard(task,title,description);

            }

        }

    }

}