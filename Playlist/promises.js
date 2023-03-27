//     let a = new Promise(function(resolve,reject){
//     let num = 1;
//     if(num == 1){
//        resolve("promise resolve ho gaya hai");
//     }
//     else{
//        reject("promise reject ho gaya hai")
//     }
// })
// console.log(a);
    // let num = 1;
    // if(num == 1){
    //    fun1("promise resolve ho gaya hai");
    // }
    // else{
    //    fun2("promise reject ho gaya hai")
    // } 

//     let p1 = new Promise(function(resolve,reject){
//         setInterval(() => {
//             console.log("this is first promise")
//         }, 1000);
//     })
   
//    let p2 = new Promise(function(resolve,reject){
//         setInterval(() => {
//             console.log("this is second promise")
//         }, 2000);
//     })
   
//     let p3 = new Promise(function(resolve,reject){
//     setInterval(() => {
//             console.log("this is third promise")
//         }, 3000);
//     })
   
//    let p4 = new Promise(function(resolve,reject){
//         setInterval(() => {
//             console.log("this is forth promise")
//         }, 4000);
//     })

// let a = () =>{
//     prompt("enter a number")
// }
// let p1 = new Promise(function(a,reject){      
//     if (a<=10){
//                 alert("promise worked")
//             }
//         })
// console.log(p1)}

let p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("promise is resolved");
        resolve(true);
    },2000)
})

let p2 = new Promise(function(resolve,reject){
    setTimeout(() => {
        // console.log("error hai bhai");
        reject(new Error("reject ka error bhai"))
    }, 2000);
})

p1.then(()=>{
    console.log("this is .then() statement run after p1 complete.");
})

p2.catch((Error)=>{
    console.log("the error is catched in p2")
})