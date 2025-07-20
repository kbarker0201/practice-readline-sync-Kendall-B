const readline = require('readline-sync');

let name = readline.question("What is your name? ");
console.log("Hello, " + name);

let firstResponse = readline.question("What is readline-sync? ");
console.log("Your response: " + firstResponse);
let secondResponse = readline.question("What function asks the question of the user? ");
console.log("Your response: " + secondResponse);
let thirdResponse = readline.question("What function asks the question of the user and converts it to an integer? ");
console.log("Your response: " + thirdResponse);
let fourthResponse = readline.question("What would be the output of a user input of 4 added to a user input of 5? ");
console.log("Your response: " + fourthResponse);
let fifthResponse = readline.question("What variable type is the user input stored as? ");
console.log("Your response: " + fifthResponse);