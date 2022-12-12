function check() {
   
    var c=0;
    var q1 = document.exam.q1.value;
    var q2 = document.exam.q2.value;
    var q3 = document.exam.q3.value;
    var q4 = document.exam.q4.value;
    var q5 = document.exam.q5.value;
    var q6 = document.exam.q6.value;
    var q7 = document.exam.q7.value;
    var q8 = document.exam.q8.value;
    var q9 = document.exam.q9.value;
    var q10 = document.exam.q10.value;
    var result = document.getElementById("result");
    var exam = document.getElementById("exam");

    if(q1=="Object-Oriented"){c++}
   
    if(q2=="Both A and B"){c++}
   
    if(q3=="Both A and B"){c++}

    if(q4=="Ignores the statement"){c++}
   
    if(q5=="All of the above"){c++}
    
    if(q6=="const"){c++}
   
    if(q7=="in"){c++}
    
    if(q8=="The contents are displayed by non JS based browsers"){c++}
  
    if(q9=="Object"){c++}
    
    if(q10=="All of the above"){c++}
    
    exam.style.display = "none";
    result.textContent =`${c}`;

    if(c==0)
    result.textContent =`Your result is ${c}/10. TRY HARDER`;

    if(c>0&&c<5)
    result.textContent =`Your result is ${c}/10. SATISFACTORY`;

    if(c>=5&&c<9)
    result.textContent =`Your result is ${c}/10. GOOD`;

    if(c>=9)
    result.textContent =`Your result is ${c}/10. EXCELLENT`;


    
}