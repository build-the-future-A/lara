const gray = document.querySelector(".gray");
const purple = document.querySelector(".purple");
const pink = document.querySelector(".pink");
const orange = document.querySelector(".orange");
const more1 = document.querySelector("#a");
const less1 = document.querySelector(".a");
const p5 = document.querySelector("#p5");
const p6 = document.querySelector("#p6");
const p7 = document.querySelector("#p7");
const p8 = document.querySelector("#p8");
const a1 = document.querySelector("#more22");
const a2 = document.querySelector("#less22");
function more(){
    gray.style.display = "inline";
    purple.style.display = "inline";
    pink.style.display = "inline";
    orange.style.display = "inline";
    more1.style.display = "none";
    less1.style.display = "inline";
}
function less(){
    gray.style.display = "none";
    purple.style.display = "none";
    pink.style.display = "none";
    orange.style.display = "none";
    more1.style.display = "inline";
    less1.style.display = "none";
}
function more2(){
    p5.style.display = "inline";
    p6.style.display = "inline";
    p7.style.display = "inline";
    p8.style.display = "inline";
    a1.style.display = "none";
    a2.style.display = "inline";
}
function less2(){
    p5.style.display = "none";
    p6.style.display = "none";
    p7.style.display = "none";
    p8.style.display = "none";
    a1.style.display = "inline";
    a2.style.display = "none";
}