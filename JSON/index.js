// -------------------JSON-----------------------//
let store = {"name":"kaustubh", "age":"22"}
console.log(typeof store);
let a = JSON.stringify(store);
console.log(a);
console.log(typeof a);
let b = JSON.parse(a);
console.log(b);
console.log(typeof b);

let jso = { 
    "biodata":[
                 {"name":"kaustubh"},
                 { "age":"22"}
            ]
}
console.log(jso['biodata'][0]);

// ----------------------Backticks----------------------------//
let name = "kaustubh";
document.write("my name is " + name); //---> if we dont want to use + operator everytime we use backticks.
document.write(`my name is ${name}`);
console.log("string text line 1\n" + "string text line 2");
console.log(`string text line 1\nstring text line 2`); //---> this is use of backticks.
