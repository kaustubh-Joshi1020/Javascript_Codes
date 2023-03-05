// let global = "this is global variable";
// function print(){
//     let local = "this is local variable";
//     console.log(local);
// }
// print(); 
// // console.log(local);
// console.log(global);

// let name = "kj"
// function print(name){
//     // console.log(name);
//     document.write(name);
// }
// let name = "KJ";
// console.log("this is log file");


//----------this is DOM Manipulation.-------------//
// let element1 = document.getElementsByClassName('Class1'); // this is a DOM Manipulation
// console.log(element1);
// console.log(element1[0].innerHTML);
// element1[1].classList.add("created-class");
// element1[2].style.background = "yellow"

// let btns = document.getElementById('b1');
// console.log(btns);
// console.log(btn[0]);

// let tg = document.getElementsByTagName('p');
// console.log(tg);
// CreatedElement = document.createElement('p');
// CreatedElement.innerHTML = "this is created in JS file";
// tg[2].appendChild(CreatedElement);
// CreatedElement1 = document.createElement('b');
// CreatedElement1.innerHTML = "this is bold added in JS file";
// tg[2].replaceChild(CreatedElement1 , CreatedElement);
// tg[2].removeChild(CreatedElement1); ---> this will remove appended child.
// let aa = document.querySelector('p'); --> retuns first element of <P> tag.
// console.log(aa);


///----------------------EVENTS-----------------------------//
// function b1click(){
//     console.log("the b1 is clicked");
// }

// b2.addEventListener('click',function(){
//     console.log("the b2 is clicked");
// })
// b2.addEventListener('mouseover',function(){
//     let mouseover1 = document.getElementById('b2');
//     mouseover1.style.background = "yellow";
// })
// let originalHTML = document.querySelectorAll('.trials')[0].innerHTML;
// para1.addEventListener('mouseup',function(){
//     document.querySelectorAll('.trials')[0].innerHTML = originalHTML;
//     // document.querySelectorAll('.trials')[0].innerHTML = "<b> this is mouseup message</b>"
// })
// para1.addEventListener('mousedown',function(){
//         document.querySelectorAll('.trials')[0].innerHTML = "<b> this is mousedown message</b>"
// })


//--------------------arrow function, SetTimeout & SetInterval--------------------------//
// let print = ()=>{    //--------> this is a arrow function
//     console.log("this is pinting after a interval");
// }
// setTimeout(print,5000);
// let clr = setTimeout(print,5000);
// clearTimeout(clr); ----> this stops the occurance of setTimeout

// setInterval(print,5000)
// let clrr =setInterval(print,5000)
// clearInterval(clrr)

//-----------------------Localstorage----------------------------//
// localStorage.setItem("name","kaustubh");
// localStorage.getItem("name");
// localStorage.clear --> to clear storage.
