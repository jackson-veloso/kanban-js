function addCard(campoTask, id, title, description) {

    let box_card = document.getElementById(campoTask);

    let card = `
    <div class="card">
        <div class="card-content">
            <h2>${title}</h2>
            <p>${description}</p>
        </div>
        <div class="card-button">
            <button type="submit" class="button-card-editar" onclick="editarCard('${id}','${campoTask}')"><img class="button-img" src="img/editar.png"
                alt="botão editar"></button>
            <button type="submit" class="button-card-excluir" onclick="excluirCard('${id}','${campoTask}')"><img class="button-img" src="img/excluir2.png"
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

        clearCards(task);

        let arr = Array.from(listTask[i]);

        for (let j = 0; j < arr.length; j++) {

            let id = arr[j][0];
            let stringInterno = arr[j][1];

            let mapInterno = new Map(Object.entries(JSON.parse(stringInterno)));

            let title = mapInterno.get("title");
            let description = mapInterno.get("description");

            addCard(task, id, title, description);

        }
    }

}

function excluirCard(id, campoTask) {

    let taskStorage = getTaskStorage(campoTask);
    excluirStorageKey(campoTask);

    let newTaskStorage = deleteTask(id,taskStorage);
   
    createStorageKey(campoTask, newTaskStorage);

    showCards();
}

function editarCard(id, campoTask) {
    let taskStorage = getTaskStorage(campoTask);

    let stringInterno = taskStorage.get(id);

    let mapInterno = new Map(Object.entries(JSON.parse(stringInterno)));

    let title = mapInterno.get("title");
    let description = mapInterno.get("description");
    
    
    openModalEdit(campoTask,id,title,description);
}