const prompt = require("prompt-sync")({ sigint: true });// mandetory to use prompt in vs code
let num = Math.floor(Math.random()*100);
let newnum = parseInt(prompt("enter a number to guess: "));

do{
    if(newnum<num){
       newnum = prompt("the number is greater: ")
    }
    else if(newnum>num){
       newnum = prompt("the number is smaller: ")
    }
}while(newnum!=num)
alert("you gussed correct number")
// console.log(`the number was: ${num}`);
