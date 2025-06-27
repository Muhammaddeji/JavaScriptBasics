
// Code for setting Alarm and what time i should wake
// Monday - 7am
// Tues - Thursday 4am
// Friday - 9am
// Sat - Sun 8am

let day = "Monday"

// we are not using if else statement, rather we are using a special character " Switch"

switch(day){
    case 'Monday':
        console.log("7am");
        break;
    case 'Tuesday' :
        console.log("4am");
    case 'Wednesday':
        console.log("4am");
    case 'Thursday':
        console.log("4am");
    case 'Friday':
        console.log("9am");
    case 'Saturday':
        console.log("8am");
    case 'Sunday':
        console.log("8am");
}