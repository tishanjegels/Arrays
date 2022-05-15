let database = ["Alton", "Eshmerel", "Chadwill", "Simone", "Skylar", "Alvercia", "Petrus", "Tishan" ];

let menu = prompt("===== Menu ===== \n What would you like to do? \n 1.Add three users \n 2. Remove user \n 3.Display users \n 4.Sort users ");

let choice;

switch(menu){

    case "Add three users":

    choice = prompt("type 3 users separated by a commas");
    database.push(choice);
    document.getElementById('array').innerHTML = database;

    break;

    case "Remove user":

    choice = prompt("What is the username?");
    let index = database.indexOf(choice);
    if(index >= 0){
        database.splice(index, 1)
    }    
    database.splice(choice);
    document.getElementById('array').innerHTML = database;

    break;

    case "Display users":

    database.join();
    document.getElementById('array').innerHTML = database;

    break;

    case "Sort users":

    database.sort();
    document.getElementById('array').innerHTML = database

    default:

    choice ="Sorry there is no match for your request"
}