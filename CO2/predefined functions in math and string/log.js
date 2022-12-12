const number = document.getElementById("number");
const log = document.getElementById("log");
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    log.value = Math.log(number.value);
});