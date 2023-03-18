// try {
//     let a = prompt("enter your age")
//     a = Number.parseInt(a);
//     if (a>100){
//         throw new ReferenceError("age ka koi nahi hai bhai")
//     }

// } catch (error) {
//     // console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     // console.log(error.stack);
    
// }
// finally{
//     console.log("this finally will run any how!")
// }


try {
    let a = 10;
     console.log(output);
    
    }
catch (error) {
    // console.log(error);
    console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
    
}
finally{
    setTimeout(() => {
        alert("this is finally")
    }, 5000);
    console.log("this finally will run any how!")
}