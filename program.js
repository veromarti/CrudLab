alert("Welcome to the CRUDLab System");
let flagMenu = false;
let user = "";
let age = 0;
let courses = 0;
const userInfo = {
    name: "",
    age: 0,
    courses: 0
};



// const name = prompt("Enter your name", "Here goes your name");
// let age = Number(prompt("Enter your age", "Here goes your age"));
// const mail = prompt("Enter your e-mail", "Here goes your e-mail");
// let stat = false;
// showConsole();

function menu(){
    const option = intValidation(`Choose an option \n1. User Registration \n2. Show user info \n3. Simulation \n4. Exit`,1,4);
    return option
}

function intValidation(message, min = null, max = null){
    let flag = false;
    while (!flag) {
        let value = prompt(message, "Type here");
        if (value === null) return null;

        value = value.trim();

        if (value === "") {
            alert("The field cannot be empty");
            continue;
        }

        if (!/^-?\d+$/.test(value)) {
            alert("Please enter numbers only.");
            continue;
        }

        value = Number(value);

        if (!Number.isInteger(value)) {
            alert("Wrong entry. Try again.");
            continue;
        }
        if ((min !== null && value < min) || (max !== null && value > max)) {
            alert("Value out of range. Try again.");
            continue;
        }
        return value;
    }
}

function strValidation(message){
    let flag = false;
    while (!flag) {
        let value = prompt(message, "Type here");
        if (value === null) return null;

        value = value.trim();

        if (value === "") {
            alert("The field cannot be empty");
            continue;
        }

        if (!/^[a-zA-Z]+$/.test(value)) {
            alert("The field must include only letters");
            continue;
        }

        return value.toLowerCase();
    }
}


function register() {
    let userName = strValidation("Enter your name");
    let userAge = intValidation("Enter your age", 5);
    let userCourses = intValidation("Subscribed courses", 0);
    return [userName,userAge,userCourses]
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

function showUser(user){
    console.log(`Name: ${user.name} \nAge: ${user.age} \nCourser: ${user.courses}`);
    let msg = 'You are older than 18';

    if (user.age < 19) {
        msg = 'You are under age';
    }

    alert(``"Welcome to the CRUDLab System");
}


function main(value){
    switch (value) {
        case 1:
            let userArray = register();
            userInfo.name = userArray[0];
            userInfo.age = userArray[1];
            userInfo.courses = userArray[2];
            break;

        case 2:
            showUser(userInfo);
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
    let option = menu();

    if (option === 4) {
        flagMenu = true;
        alert("Thanks for using the CRUDLab System");

    } else {
        flagMenu = false;
        main(option);
    }

    
    
}