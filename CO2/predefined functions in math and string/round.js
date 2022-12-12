const number = document.getElementById("number");
const round = document.getElementById("round");
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    round.value = Math.round(number.value);
});