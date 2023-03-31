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

function getTaskStorage(task) {
    let taskStorage = localStorage.getItem(task);
    let mapStorage = new Map(Object.entries(JSON.parse(taskStorage)));

    return mapStorage;
}

function addLocalStorage(task,title,description){

    let taskStorage = getTaskStorage(task);
    // let map = new Map();
    // map.set(title,description);
    taskStorage.set(title,description);

    let obj = Object.fromEntries(taskStorage);
    let json = JSON.stringify(obj);

    localStorage.setItem(task,json);
}



function clearLocalStorage() {
    localStorage.clear();
}



window.addEventListener("load", function () {

    createStorageKeys();
    this.setTimeout(showCards,1000);

    // this.setTimeout(clearLocalStorage,1000)

});

