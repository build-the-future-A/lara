const span = document.querySelector(".more");
const a1 =   document.querySelector(".a1");
const a2 =   document.querySelector(".a2");
function more(){
    span.style.display = "inline";
    a1.style.display = "none";
    a2.style.display = "inline";
}
function less(){
    span.style.display = "none";
    a1.style.display = "inline";
    a2.style.display = "none";
}