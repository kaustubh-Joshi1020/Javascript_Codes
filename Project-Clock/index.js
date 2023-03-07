let mydate;
let clock;

setInterval(() => {
  mydate = new Date();
  clock= mydate.getHours()+ ":" + mydate.getMinutes() + ":" + mydate.getSeconds();
  document.getElementById("time").innerHTML = clock;
}, 1000);