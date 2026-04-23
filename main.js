


// Copy code block function 1
function copy() {
  // Tab to edit
  const code = document.getElementById("code")
  
  const copied =  code.innerText
  
  navigator.clipboard.writeText(copied)
  
  
}

// Copy code block function 2
function copy2() {
  // Tab to edit
  const code2 = document.getElementById("code2")
  
  const copied =  code2.value
  
  navigator.clipboard.writeText(copied)
  
  
}



// HTML CODE EDITOR EDIT CODE 

function showcodetext() {
  // Tab to edit
  let editortext = document.getElementById("editortext").value;
  
  document.getElementById("showcode").srcdoc = editortext;

  
}


// Copy code block function 3
function copy3() {
  // Tab to edit
  const code3 = document.getElementById("code3")
  
  const copied =  code3.innerText
  
  navigator.clipboard.writeText(copied)
  
  
}


// Copy code block function 3
function copy4() {
  // Tab to edit
  const code4 = document.getElementById("code4")
  
  const copied =  code4.innerText
  
  navigator.clipboard.writeText(copied)
  
  
}


// Copy code block function 3
function copy5() {
  // Tab to edit
  const examplecopy = document.getElementById("examplecopy")
  
  const copied =  examplecopy.innerText
  
  navigator.clipboard.writeText(copied)
  
  
}


// Copy code block function 6
function copy6() {
  // Tab to edit
  const examplecopy6 = document.getElementById("examplecopy6")
  
  const copied =  examplecopy6.innerText
  
  navigator.clipboard.writeText(copied)
  
  
}



// Copy code block function 6
function copy7() {
  // Tab to edit
  const code7 = document.getElementById("code7")
  
  const copied =  code7.innerText
  
  navigator.clipboard.writeText(copied)
  
  
}


//HTML Quick quiz wrong and correct 

function correct() {
  // Tab to edit
  document.getElementById("answer").style.color = "limegreen";
  
  document.getElementById("green").style.background = "limegreen";
  
 answer.innerHTML = "correct";
  
}

function wrong() {
  // Tab to edit
  document.getElementById("answer").style.color = "red";
  
  document.getElementById("red").style.background = "red";
  
 answer.innerHTML = "incorrect";
  
}

function wrong2() {
  // Tab to edit
  document.getElementById("answer").style.color = "red";
  
  document.getElementById("red2").style.background = "red";
  
 answer.innerHTML = "incorrect";
  
}

function wrong3() {
  // Tab to edit
  document.getElementById("answer").style.color = "red";
  
  document.getElementById("red3").style.background = "red";
  
 answer.innerHTML = "incorrect";
  
}


// CONTACT US FUNCTION REMOVE MESSAGE

function submitform() {
  // Tab to edit
  
let none1 =  document.getElementById("none1");
let none2 =  document.getElementById("none2");
let none3 =  document.getElementById("none3");
let fillup1 =  document.getElementById("fillup1");
let fillup2 =  document.getElementById("fillup2");
let fillup3 =  document.getElementById("fillup3");

if (none1.value === "") {
   
   fillup1.innerText = "Please enter your name";
   
   document.getElementById("none1").style.border = "2px solid red";
    document.getElementById("fillup1").style.color = "red";
}


if (none2.value === "") {
   
   fillup2.innerText = "Please enter your email";
   
   document.getElementById("none2").style.border = "2px solid red";
    document.getElementById("fillup2").style.color = "red";
}

if (none3.value === "") {
   
   fillup3.innerText = "Please enter your message";
   
   document.getElementById("none3").style.border = "2px solid red";
    document.getElementById("fillup3").style.color = "red";
}

  
  fillup1.value = "";
  fillup2.value = "";
  fillup3.value = "";
  
}












