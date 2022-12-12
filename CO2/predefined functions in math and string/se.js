

const stringInpt = document.getElementById("string");
const para = document.getElementById("para");
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    if(stringInpt.value == ''){
        para.textContent = "string not inputed"
    }
    else {
        para.textContent = " string inputed"
    }
});

