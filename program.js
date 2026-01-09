alert("Welcome to the CRUDLab System");
let flagMenu = false;

// const name = prompt("Enter your name", "Here goes your name");
// let age = Number(prompt("Enter your age", "Here goes your age"));
// const mail = prompt("Enter your e-mail", "Here goes your e-mail");
// let stat = false;
// showConsole();

function menu(){
    let option = Number(prompt(`Choose an option \n1. User Registration \n2. Show user info \n3. Simulation \n4. Exit`, "Type 1 / 2 / 3 / 4"));
    flag = intValidation(option);
    return flag
}

function intValidation(value){
    console.log(value);
    if (!(Number.isInteger(value)) || (value < 0 || value > 4) || (value == " ")) {
        console.log('Invalid Option');
        return false
    }
    else{
        return true
    }
}

function register() {
    const name = prompt("Enter your name", "Here goes your name");
    let age = Number(prompt("Enter your age", "Here goes your age"));
    const courses = Number(prompt("Subscribed coursers", "Here goes your age"));
}


// function ageValidation(value){
//     console.log(value);
//     if (!(Number.isInteger(value))) {
//         console.log('Number not valid');
//     }
//     else{
//         // if (value > 17) {
//         //     continue;
//         // } else {
//         //     continue;
//         // }
//     }
// }

// function showConsole(){
//     console.log(`Name: ${name}`, ' ', typeof(name), `\nAge: ${age}`, ' ', typeof(age),  `\nE-mail: ${mail}`, ' ', typeof(name));
// }


function main(value){
    switch (value) {
        case 1:
            
            break;

        case 2:
            
            break;

        case 3:
            
            break;
            
        case 4:
            
            break;
    
        default:
            break;
    }
}

// main();

while (!flagMenu) {
    flagMenu = menu();
}