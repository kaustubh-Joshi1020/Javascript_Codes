display1();
display("KJ");
console.log(a);    //this is not able to do in javascript. 
console.log(b);       //this will print undefined,  this will get hoisted but value initialization will not take place.
function display1() {
    console.log("this is display function")
}
function display(name) {
    console.log(name)
}
let a = 5;
var b = 5;
