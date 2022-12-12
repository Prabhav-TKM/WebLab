const number = document.getElementById("number");
const sqroot = document.getElementById("sqroot");
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    sqroot.value = Math.sqrt(number.value);
});