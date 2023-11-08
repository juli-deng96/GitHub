//this is my first project on github 

var count= 3;
var countelement =  document.querySelector("h1")

console.log(countelement);

function add1() {
    count++;
    countelement.innerText= count + " " + "like(s)";
    console.log(count);
}