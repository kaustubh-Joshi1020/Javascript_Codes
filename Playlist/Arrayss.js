
let stuff = ["kaustubh", 22 , false ,null,"ending element"]
//Default for looop
//  for(i=0;i<stuff.length;i++){
//    console.log(stuff[i]); 
// }

// normal for each loop 
// stuff.forEach(i =>{
//     console.log(i);
// });

// for of loop
// for (let elements of stuff) {
//     console.log(elements);
// }

//for each loop
// stuff.forEach( (value, index, array) => {
//     console.log(value , "\t"+index , array);
// });

//MAP function will create new array which for each dosn't.
// stuff.map((value , index, array) =>{
//    console.log(value , index , array);
// })

//FILTER function will give a arrays elements within specified condition / creates new array
let num = [1,2,3,4,5,6,7,8,9];


// let fun = num.filter( (value) => {
//     return value>4;
// })
// console.log(fun);
// console.log(typeof fun);


// let a = num.filter(greater);
// function greater(num){
//     return num>50;
// }
// console.log(a);

//REDUCE Function in JavaScript
// function reducer(h1 , h2){
//     return h1 + h2;
// }
// let aa = num.reduce(reducer);
// console.log(aa);

let aa = num.reduce( (h1,h2,h3) =>{
    return h1+h2+h3;
} )
console.log(aa)

