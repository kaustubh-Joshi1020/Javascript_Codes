// // this is a async harry function
// async function harry() {
//     let delhiWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     resolve("27 Deg")
//             }, 2000)
//     })

//     let bangaloreWeather = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                     resolve("21 Deg")
//             }, 5000)
//     })
//     console.log("Fetching Delhi Weather Please wait ...")
//     let delhiW = await delhiWeather
//     console.log("Fetched Delhi Weather: " + delhiW)
//     console.log("Fetching Bangalore Weather Please wait ...")
//     let bangaloreW = await bangaloreWeather
//     console.log("Fetched Bangalore Weather: " + bangaloreW)
//     return [delhiW, bangaloreW]
// }

// //this is async cherry function
// let cherry = async () => {
//     console.log("this function will run after harry finishes")
//     console.log("Hey I am cherry and I am waiting ")
// }

// const main1 = async () => {
//     console.log("Welcome to weather control room")
//     let a = await harry()
//     let b = await cherry()

// }
// main1()


// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('a Promise resolved')}, 4000); 
});
let b = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('b Promise resolved')}, 2000); 
});

// async function
async function asyncFunc() {
    console.log("hello")
    console.log("waiting for b promise to finish")
    let ans = await b;
    console.log(ans);
    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('this will be printed after promise is finished');
    
    
    // let ans1 = await promise; // in this the b promise will wait until a promise get finishes
    // let ans = await b;
    // console.log(ans1);
    // console.log(ans);
}
asyncFunc();



