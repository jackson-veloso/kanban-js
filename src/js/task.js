class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

function deleteTask(id, taskStorage) {

    let temp = new Map();

    for(let i = 0; i < taskStorage.size;i++){
        
        if(i < id) {
            temp.set(i+"",taskStorage.get(i+""));
        } else if(i > id){
            temp.set((i-1+""),taskStorage.get(i+""));
        }
            
    }

    let obj = Object.fromEntries(temp);
    let json = JSON.stringify(obj);

    return json;
}

// map = { id : { 
//                 title: valor,
//                 description: valor 
//             }
//         }



// let externo = new Map();
// let interno = new Map();

// interno.set("interno","valorinterno");




// let obj1 = Object.fromEntries(interno);
// let json1 = JSON.stringify(obj1);

// externo.set("titulo",json1);

// let obj = Object.fromEntries(externo);
// let json = JSON.stringify(obj);

// let mapExterno = new Map(Object.entries(JSON.parse(json)));

// let string1 = mapExterno.get("titulo");
// let mapInterno = new Map(Object.entries(JSON.parse(string1)));



// console.log(mapInterno);
// console.log(mapInterno.get("interno"));