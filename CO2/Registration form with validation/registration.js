const fname = document.getElementById("fname")
const dob = document.getElementById("dob")
const password = document.getElementById("password")
const form = document.getElementById('form')
const faname = document.getElementById("faname")
const focc = document.getElementById("focc")
const moname = document.getElementById("moname")
const mocc = document.getElementById("mocc")
const relegion = document.getElementById("relegion")
const caste = document.getElementById("caste")
const gender = document.getElementById("gender")
const phno = document.getElementById("phno")
const errorElement = document.getElementById('error')
form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    passErr.textContent = "";
    fnameErr.textContent = "";
    faname.textContent = "";
    moname.textContent = "";
    relegionErr.textContent = "";
    casteErr.textContent= "";
    genderErr.textContent="";
    phnoErr.textContent="";
    dobErr.textContent="";
    if(!relegion.value){
        relegionErr.textContent="Please enter relegion!";
    }
   
    if(!dob.value){
        dobErr.textContent="Please enter birth date!";
    }
    if(!phno.value){
        phnoErr.textContent="Enter mobile number!";
    }
    if(!caste.value){
        casteErr.textContent="Please enter caste!";
    }
    if(!gender.value){
        genderErr.textContent="Please enter gender!";
    }
    if(!faname.value){
        fanameErr.textContent="Please enter your father's name!";
    }
    if(faname.value.length>0&&faname.value.length<3){
        fanameErr.textContent="Father's name should be greater than 2 characters!";
    }
    if(!moname.value){
        monameErr.textContent="Please enter your mother's name!";
    }
    if(moname.value.length>0&&moname.value.length<3){
        monameErr.textContent="Mother's name should be greater than 2 characters!";
    }
    if(!fname.value){
        fnameErr.textContent="Please enter your first name";
    }
    if(fname.value.length>0&&fname.value.length<5){
        fnameErr.textContent="Full name should be more than 4 characters!";
    }
       if(!password.value){
        passErr.textContent = "Password is mandatory!";   
    }
    if(password.value.length>0&&password.value.length<5){
        passErr.textContent = "Password should be longer than 4 characters!";    
    }
    if(password.value.length>20){
        passErr.textContent = "Password should not exceed 20 characters!";    
    }
    if(password.value === 'password'){
        passErr.textContent = "Password cannot be password!";    
    }
    if(!address.value){
        addressErr.textContent = "please enter your address!";   
    }
})