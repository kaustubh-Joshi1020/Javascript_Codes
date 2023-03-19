let a = fetch("https://api.oceandrivers.com/static/resources.json")
a.then((Response)=>{
    console.log(Response.json);
    console.log(Response.ok);
    console.log(Response.status);
    return Response.json();
})