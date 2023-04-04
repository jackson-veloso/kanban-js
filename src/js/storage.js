let campoID = null;

function setID(id){
    campoID = id;
}

function createStorageKeys() {
    if (localStorage.getItem("taskToDo") === null) {
        localStorage.setItem("taskToDo", "{}");
    }

    if (localStorage.getItem("taskDoing") === null) {
        localStorage.setItem("taskDoing", "{}");
    }
    if (localStorage.getItem("taskDone") === null) {
        localStorage.setItem("taskDone", "{}");
    }
}

function excluirStorageKey(campoTask){
    localStorage.removeItem(campoTask);
}

function createStorageKey(campoTask,value) {
    localStorage.setItem(campoTask,value);
}

function getTaskStorage(task) {
    let taskStorage = localStorage.getItem(task);
    let mapStorage = new Map(Object.entries(JSON.parse(taskStorage)));

    return mapStorage;
}

function addLocalStorage(task,title,description){

    let taskStorage = getTaskStorage(task);

    let mapInterno = new Map();
    mapInterno.set("title",title);
    mapInterno.set("description",description);

    let objInterno = Object.fromEntries(mapInterno);
    let stringInterno = JSON.stringify(objInterno);

    let id = null;

    if(campoID === null) {
        id = getNewID(taskStorage);
    } else {
        id = campoID;
    }

    
    taskStorage.set(id,stringInterno);

    let obj = Object.fromEntries(taskStorage);
    let json = JSON.stringify(obj);

    localStorage.setItem(task,json);
    setID(null);
}



function clearLocalStorage() {
    localStorage.clear();
}

function getNewID(taskStorage){
    return taskStorage.size;
}




