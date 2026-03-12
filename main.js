
// Answers 

  let answer = "paragraph";
let answer2 = "Paragraph";
let answer3 = "PARAGRAPH";
let answer4 = "paragraph ";
let answer5 = "Paragraph ";
let answer6 = "PARAGRAPH ";
let elements = "<p></p>";


//QUESTION1

function sub() {
  // q1 Submit button
  

  
  if ( text.value === answer || text.value === answer2 || text.value === answer3 || text.value === answer4 || text.value === answer5 || text.value === answer6) {
    
    win.innerText = `You Are Correct the answer is ${text.value}`;
    
    right.innerText = 'Correct';
    
    wrong.innerText = "";
    
      marks.innerText = "Marks:1";
      
      score.innerText = "Continue";
      
      ans.innerText = "";
      
        err.innerText= "";
      
      
      document.getElementById("continue").style.display = "block ";
      
      document.getElementById("example").style.display = "block";
      
    
    
  } else if (text.value === "") {
    win.innerText = `Enter your answer please`;
    
    wrong.innerText = 'You can do this, Enter Your Answer';
    
    right.innerText = "";
    
  
    
  
  }
  
  
  else {
    win.innerText = `Wrong, your answer is ${text.value}`;
    wrong.innerText = "Wrong, Try Again";
    right.innerText = "";
    score.innerText = "Try again!"
    
  }
  text.value = "";
  err.innerText = "";

}



function reveal() {
  // reveal button
  
  if (text.value === "") {
    err.innerText = "Enter your answer first and click reveal";
     win.innerText = `Enter your answer please`;
    
  } else if (text.value === answer || text.value === answer2 || text.value === answer3 || text.value === answer4 || text.value === answer5 || text.value === answer6) {
    
    err.innerText = 'Your answer was correct well done!';
    
    win.innerText = "Click submit to continue! believe in yourself,don't cheat";
    
  }
  
  
  else {
    err.innerText = `Your Answer Was ${text.value}`
    ans.innerText = "Paragraph";
    win.innerText = "";
    text.value = "";
    
  }
 wrong.innerText = "";
 right.innerText = "";
  
}



//QUESTION2

function sub2() {
 // q2 submit button
 
 if (text2.value === "<p></p>" || text2.value === "<p></p> ") {
  win2.innerText = "Correct";
  
  marks.innerText = "Marks:2";
  
  
    document.getElementById("step").style.display = "block";
  
   
 } else if (text2.value === "") {
  
  win2.innerText = "Enter your answer please"
}
 
 
 else {
   
  win2.innerText = "Try again!"
 }
  
 }


// QUESTION 3

// Answers 
let answer7 = "hyperlink";
let answer8 = "Hyperlink";
let answer9 = "hyperlink ";
let answer10 = "Hyperlink ";
let answer11 = "HYPERLINK";
let answer12 = "HYPERLINK ";


function sub3(){
  // q3 Submit button

  if (text3.value === answer7 || text3.value === answer8 || text3.value === answer9 || text3.value === answer10 || text3.value === answer11 || text3.value === answer12) {
    
        
    win3.innerText = `You Are Correct the answer is ${text3.value}`;
    
    right3.innerText = 'Correct';
    
    wrong3.innerText = "";
    
      marks3.innerText = "Marks:3";
      
      score3.innerText = "Continue";
      
      ans3.innerText = "";
      
        err3.innerText= "";
      
      
      document.getElementById("continue3").style.display = "block";
      
      document.getElementById("example").style.display = "block";
    
  } else if (text3.value === "") {
    win3.innerText = `Enter your answer please`;
    
    wrong3.innerText = 'You can do this, Enter Your Answer';
    
    right3.innerText = "";
    
    
  
  }
  
  
  else {
    win3.innerText = `Wrong, your answer is ${text3.value}`;
    wrong3.innerText = "Wrong, Try Again";
    right3.innerText = "";
    score3.innerText = "Try again!"
  }
  text3.value = "";
  err3.innerText = "";
  
}


function reveal3() {
  // reveal button
  
  if (text3.value === "") {
    
    err3.innerText = "Enter your answer first and click reveal";
     win3.innerText = `Enter your answer please`;
    
  } else if ( text3.value === answer7 || text3.value === answer8 || text3.value === answer9 || text3.value === answer10 || text3.value === answer11 || text3.value === answer12 ) {
    
    err3.innerText = 'Your answer was correct well done!';
    
    win3.innerText = "Click submit to continue! believe in yourself,don't cheat";
    
  }
  
  
  else {
    err3.innerText = `Your Answer Was ${text3.value}`
    ans3.innerText = "Hyperlink";
    win3.innerText = "";
    text3.value = "";
    
  }
 wrong3.innerText = "";
 right3.innerText = "";
  
}



//QUESTION4

function sub4() {
 // q4 submit button
 
 if (text4.value === "<a></a>" || text4.value === "<a></a> ") {
  win4.innerText = "Correct";
  
  marks4.innerText = "Marks:4";
  
  
    document.getElementById("step").style.display = "block";
  
   
} else if (text4.value === "") {
  
  win4.innerText = "Enter your answer please"
}

else {
   
  win4.innerText = "Try again!"
 }
  
 }
 
 


//Question 5

function sub5() {
  // q5 submit button
  
  if (options.value === "Hello world") {
    
    win5.innerText = "Correct";
    
    marks5.innerText = "Marks:5";
  
  
    document.getElementById("another").style.display = "block";
    
   
    
  }else {
    
    win5.innerText = "Try Again"
  }
  
  
}


// Question 5.2 another question

function sub52() {
   //q5.2 another submit button
   
   if (options2.value === "Button") {
     
     win52.innerText = "Correct";
     
     marks52.innerText = "Marks:6";
     marks5.innerText = "Marks:6";
     
     score5.innerText = "Continue";
     
     document.getElementById("continue5").style.display = "block";
     
      document.getElementById("example").style.display = "block";
     
   }else {
     win52.innerText = "Try again!";
   }
   
   
   
}


//QUESTION6

function sub6() {
 // q6 submit button
 
 if (text6.value === "<button></button>" || text6.value === "<button></button> " || text6.value === "<button> </button>" ||  text6.value === "<button> </button> " ||  text6.value === " <button> </button> ") {
  win6.innerText = "Correct";
  
  marks6.innerText = "Marks:7";
  
  
    document.getElementById("another2").style.display = "block";
  
   
 } else if (text6.value === "") {
  
  win6.innerText = "Enter your answer please"
}
 
 
 else {
   
  win6.innerText = "Try again!"
 }
  
 }
 
 
 
//QUESTION 6.2

// Answers

let answer15 = "<p>Hello friend!</p>";

let answer16 = "<p> Hello friend!</p>";
let answer17 = "<p> Hello friend! </p>";
let answer18 = "<p>HELLO FRIEND!</p>";
let answer19 = "<p> HELLO FRIEND!</p>";
let answer20 = "<p> HELLO FRIEND! </p>";

let answer21 = "<p>hello friend! </p> ";

let answer22 = "<p>Hello friend!</p> ";

let answer23 = "<p> Hello friend!</p> ";
let answer24 = "<p> Hello friend! </p> ";
let answer25 = "<p>HELLO FRIEND!</p> ";
let answer26 = "<p> HELLO FRIEND!</p> ";
let answer27 = "<p> HELLO FRIEND! </p> ";

let answer28 = " <p> Hello friend!</p>";

let answer29 = " <p> Hello friend!</p> ";

let answer30 = "<p> hello friend!</p>";

let answer31 = "<p>hello friend!</p>";

let answer32 = "<p>hello friend! </p>";

let answer33 = "<p>Hello Friend!</p>";

let answer34 = "<p>Hello Friend! </p>";

let answer35 = "<p>hello Friend! </p>";

let answer36 = "<p> hello friend! </p>";


function sub62() {
 // q6.2 submit button
 
 if(   text62.value === answer15 || text62.value === answer16 || text62.value === answer17 || text62.value === answer18 || text62.value === answer19 || text62.value === answer20 || text62.value === answer21 || text62.value === answer22 || text62.value === answer23  || text62.value === answer24 || text62.value === answer25 || text62. alue === answer26 ||text62.value === answer27||text62.value === answer28|| text62.value === answer29 || text62.value === answer30 || text62.value === answer31 ||   text62.value === answer32 || text62.value === answer33 || text62.value === answer35 || text62.value === answer36){
   
  win62.innerText = "Correct";
  marks62.innerText = "Marks:8";
  marks6.innerText = "Marks:8";
  
   document.getElementById("another3").style.display = "block";
   
   
 } else if (text62.value === "") {
    
    win62.innerText = "Enter your answer please!";
    
 }
 
 
 
 else {
   
   win62.innerText = "Try again";
   
 }
   
 

  
 }
 
 
 
 // Question 6.2
 
 
 function show6() {
   // q6.2 reveal button
   
   if (text62.value === "") {
      
    winner.innerText ="Enter Your answer first and click reveal";
     
   }
   
   else if (text62.value === "<p>Hello friend!</p>" || text62.value === "<p>hello friend!</p> " || text62.value === "<p>Hello Friend!</p>" || text62.value === "<p>HELLO FRIEND!</p>" || text62.value === "<p> hello friend! </p>" || text62.value === "<p> Hello friend! </p>" || text62.value === "<p> Hello Friend! </p>" || text62.value === "<p> HELLO FRIEND! </p>" || text62.value === "<p> hello friend! </p> " || text62.valuf === "<p>hello friend! </p> " ) {
     
     winner.innerText = `Your Answer ${text62.value} was correct, click submit to continue`;
   }
   
   
   
   
   else {
      winner.innerText = "Answer is: <p>Hello friend!</p>";
     
   }
   
 }



// Question 6.3 another question

function sub63() {
   //q6.3 another submit button
   
   if (options6.value === "Youtube page") {
     
     win63.innerText = "Correct";
     
     marks63.innerText = "Marks:9";
     marks6.innerText = "Marks:9";
     marks62.innerText = "Marks:9";
     
     score6.innerText = "Continue";
     
     document.getElementById("step6").style.display = "block";
     
   }else {
     win63.innerText = "Try again!";
   }
   
}



// Question 7 another question

function sub7() {
   //q7 another submit button
   
   if (options7.value === "input fields") {
     
     win7.innerText = "Correct";
     
     marks7.innerText = "Marks:10";
     
     score7.innerText = "Continue";
     
     document.getElementById("another4").style.display = "block";
     
     document.getElementById("inputexample2").style.display = "block";
     
   }else {
     win7.innerText = "Try again!";
   }
   
   
   
}


// Question 7.2 another question

function sub72() {
   // q.2 another submit button
   
   if (options72.value === "div") {
     
     win72.innerText = "Correct";
     
     marks72.innerText = "Marks:11";
     
     marks7.innerText = "Marks:11";
     
     score72.innerText = "Continue";
     
     document.getElementById("continue7").style.display = "block";
     
   }else {
     win72.innerText = "Try again!";
   }
   }



//QUESTION8


function sub8() {
 // q8 submit button
 
 if (text8.value === "<input></input>" || text8.value === "<input></input> " || text8.value === "<input/>" || text8.value === "<input/> "|| text8.value === "<input />" || text8.value === "<input /> ") {
  win8.innerText = "Correct";
  
  marks8.innerText = "Marks:12";
  
  
    document.getElementById("question82").style.display = "block";
  
   
 } else if (text8.value === "") {
  
  win8.innerText = "Enter your answer please"

   
 } 


 else {
   
  win8.innerText = "Try again!"
 }
  
 }




//QUESTION8.2


function sub82() {
 // q8.2 submit button
 
 if (text82.value === "<div></div>" || text82.value === "<div></div> ") {
  win82.innerText = "Correct";
  
  marks8.innerText = "Marks:13";
  marks82.innerText = "Marks:13"
  
  
    document.getElementById("another83").style.display = "block";
  
   
 } else if (text82.value === "") {
  
  win82.innerText = "Enter your answer please"

   
 } 


 else {
   
  win82.innerText = "Try again!"
 }
  
 }
 
 

// Question 8.3 another question

function sub83() {
   // q8.3 another submit button
   
   if (options83.value === "header") {
     
     win83.innerText = "Correct";
     
     marks82.innerText = "Marks:14";
     
     marks8.innerText = "Marks:14";
     
     marks83.innerText = "Marks:14";
    
     
     document.getElementById("step").style.display = "block";
     
   }else {
     win83.innerText = "Try again!";
   }
   }
   
   
   
   //QUESTION9

function sub9() {
 // q9 submit button
 
 if (text9.value === "<h1></h1>" || text9.value === "<h1></h1> ") {
  win9.innerText = "Correct";
  
  marks9.innerText = "Marks:15";
  
  
    document.getElementById("another92").style.display = "block";
  
   
 } else if (text9.value === "") {
  
  win9.innerText = "Enter your answer please"
}
 
 
 else {
   
  win9.innerText = "Try again!"
 }
  
 }


  
// Question 9.2 another question

function sub92() {
   // q9.2 another submit button
   
   if (options92.value === "line breaks") {
     
     win92.innerText = "Correct";
     
     marks92.innerText = "Marks:16";
     
     marks9.innerText = "Marks:16";
     
     score92.innerText = "Continue";
    
     
     document.getElementById("continue9").style.display = "block";
     
   }else {
     win92.innerText = "Try again!";
   }
   }
    



//QUESTION10

function sub10() {
 // q10 submit button
 
 if (text10.value === "<br>" || text10.value === "<br> " || text10.value === "<br/>" || text10.value === "<br />" || text10.value === "<br /> ") {
   
  win10.innerText = "Correct";
  
  marks10.innerText = "Marks:17";
  
  
    document.getElementById("another102").style.display = "block";
  
   
 } else if (text10.value === "") {
  
  win10.innerText = "Enter your answer please"
}
 
 
 else {
   
  win10.innerText = "Try again!"
 }
  
 }




// Question 10.2 another question

function sub102() {
   // q10.2 another submit button
   
   if (option102.value === "separation") {
     
     win102.innerText = "Correct";
     
     marks102.innerText = "Marks:18";
     
     marks10.innerText = "Marks:18";
     
     score102.innerText = "Continue";
    
     
     document.getElementById("step").style.display = "block";
     
   }else {
     win102.innerText = "Try again!";
   }
   }
    

//QUESTION11

function sub11() {
 // q11 submit button
 
 if (text11.value === "<span></span>" || text11.value === "<span></span> " || text11.value === "<span> </span>" ) {
   
  win11.innerText = "Correct";
  
  marks11.innerText = "Marks:19";
  
  
    document.getElementById("another112").style.display = "block";
  
   
 } else if (text11.value === "") {
  
  win11.innerText = "Enter your answer please"
}
 
 
 else {
   
  win11.innerText = "Try again!"
 }
  
 }




// Question 11.2 another question

function sub112() {
   // q11.2 another submit button
   
   if (option112.value === "emphasizes") {
     
     win112.innerText = "Correct";
     
     marks11.innerText = "Marks:20";
     
     marks112.innerText = "Marks:20";
     
     score112.innerText = "Continue";
    
     
     document.getElementById("another113").style.display = "block";
     
   }else {
     win112.innerText = "Try again!";
   }
   }
    

// Question 11.3 another question

function sub113() {
   // q11.3 another submit button
   
   if (option113.value === "bold") {
     
     win113.innerText = "Correct";
     
     marks11.innerText = "Marks:21";
     
     marks112.innerText = "Marks:21";
     marks113.innerText = "Marks:21"
     
     score113.innerText = "Continue";
    
     
     document.getElementById("continue11").style.display = "block";
     
   }else {
     win113.innerText = "Try again!";
   }
   }
    


//QUESTION12

function sub12() {
 // q11 submit button
 
 if (text12.value === "<em></em>" || text12.value === "<em></em> " || text12.value === "<em> </em>" ) {
   
  win12.innerText = "Correct";
  
  marks12.innerText = "Marks:22";
  
  
    document.getElementById("another122").style.display = "block";
  
   
 } else if (text12.value === "") {
  
  win12.innerText = "Enter your answer please"
}
 
 
 else {
   
  win12.innerText = "Try again!"
 }
  
 }




// Question 12.2 another question

function sub122() {
   // q12.2 another submit button
   
   if (option122.value === "html form") {
     
     win122.innerText = "Correct";
     
     marks12.innerText = "Marks:23";
     
     marks122.innerText = "Marks:23";
     
     score122.innerText = "Continue";
    
     
     document.getElementById("another123").style.display = "block";
     
   }else {
     win122.innerText = "Try again!";
   }
   }
    



// Question 12.3 another question

function sub123() {
   //q12.3 another submit button
   
   if (option123.value === "tables") {
     
     win123.innerText = "Correct";
     
     marks123.innerText = "Marks:24";
        marks12.innerText = "Marks:24";
     marks122.innerText = "Marks:24";
     
     score123.innerText = "Continue";
    
     
     document.getElementById("another124").style.display = "block";
     
   }else {
     win123.innerText = "Try again!";
   }
   }




//QUESTION12.4

function sub124() {
 // q12.4 submit button
 
 if (text124.value === "<strong></strong>" || text124.value === "<strong></strong> " || text124.value === "<strong> </strong>" ) {
   
  win124.innerText = "Correct";
  
  marks12.innerText = "Marks:25";
  marks122.innerText= "Marks:25";
  marks123.innerText= "Marks:25";
  marks124.innerText= "Marks:25";
  
  
    document.getElementById("step").style.display = "block";
  
   
 } else if (text124.value === "") {
  
  win124.innerText = "Enter your answer please"
}
 
 
 else {
   
  win124.innerText = "Try again!"
 }
  
 }




//QUESTION13

function sub13() {
 // q13 submit button
 
 if (text13.value === "<form></form>" || text13.value === "<form></form> " || text13.value === "<form> </form>" ) {
   
  win13.innerText = "Correct";
  
  marks13.innerText = "Marks:26";
  
  
    document.getElementById("another132").style.display = "block";
  
   
 } else if (text13.value === "") {
  
  win13.innerText = "Enter your answer please"
}
 
 
 else {
   
  win13.innerText = "Try again!"
 }
  
 }




//QUESTION13.2

function sub132() {
 // q13.2 submit button
 
 if (text132.value === "<table></table>" || text132.value === "<table></table> " || text132.value === "<table> </table>" ) {
   
  win132.innerText = "Correct";
  
  marks13.innerText = "Marks:27";
  marks132.innerText = "Marks:27";
  
    document.getElementById("another133").style.display = "block";
  
   
 } else if (text132.value === "") {
  
  win132.innerText = "Enter your answer please"
}
 
 
 else {
   
  win132.innerText = "Try again!"
 }
  
 }
 
 
 
 
 // Question 13.3 another question

function sub133() {
   // q13.3 another submit button
   
   if (options133.value === "list items") {
     
     win133.innerText = "Correct";
     
     marks133.innerText = "Marks:28";
     
     marks13.innerText = "Marks:28";
     marks132.innerText = "Marks:28";
     score133.innerText = "Continue";
    
     
     document.getElementById("another134").style.display = "block";
     
   }else {
     win133.innerText = "Try again!";
   }
   }
    


 
 // Question 13.4 another question

function sub134() {
   // q13.4 another submit button
   
   if (options134.value === "ordered lists") {
     
     win134.innerText = "Correct";
     
     marks134.innerText = "Marks:29";
     
     marks133.innerText = "Marks:29";
     
     marks132.innerText = "Marks:29";
      
     marks13.innerText = "Marks:29";
     
     score134.innerText = "Continue";
    
     
     document.getElementById("continue134").style.display = "block";
     
   }else {
     win134.innerText = "Try again!";
   }
   }
    




//QUESTION14

function sub14() {
 // q14 submit button
 
 if (text14.value === "<li></li>" || text14.value === "<li></li> " || text14.value === "<li> </li>" ) {
   
  win14.innerText = "Correct";
  
  marks14.innerText = "Marks:30";
  
  
    document.getElementById("another142").style.display = "block";
  
   
 } else if (text14.value === "") {
  
  win14.innerText = "Enter your answer please";
}
 
 
 else {
   
  win14.innerText = "Try again!";
 }
  
 }
 
 
 

 
 
 //QUESTION14.2

function sub142() {
 // q14.2 submit button
 
 if (text142.value === "<ol></ol>" || text142.value === "<ol></ol> "|| text142.value === "<ol> </ol>" ) {
   
  win142.innerText = "Correct";
  
  marks14.innerText = "Marks:31";
  marks142.innerText = "Marks:31";
  
    document.getElementById("another143").style.display = "block";
  
   
 } else if (text142.value === "") {
  
  win142.innerText = "Enter your answer please"
}
 
 
 else {
   
  win142.innerText = "Try again!"
 }
  
 }
 
 
 
 
  
 // Question 14.3 another question

function sub143() {
   // q14.3 another submit button
   
   if (options143.value === "unordered lists") {
     
     win143.innerText = "Correct";
     
     marks14.innerText = "Marks:32";
     
     marks143.innerText = "Marks:32";
     
     marks142.innerText = "Marks:32";
      
     
     
     score143.innerText = "Continue";
    
     
     document.getElementById("another144").style.display = "block";
     
   }else {
     win143.innerText = "Try again!";
   }
   }
    
    
    
    

  // Question 14.4 another question

function sub144() {
   // q14.4 another submit button
   
   if (options144.value === "table data") {
     
     win144.innerText = "Correct";
     
     marks14.innerText = "Marks:33";
     
     marks143.innerText = "Marks:33";
     
     marks142.innerText = "Marks:33";
     
     marks144.innerText = "Marks:33" 
     
     
     score144.innerText = "Continue";
    
     
     document.getElementById("step14").style.display = "block";
     
   }else {
     win144.innerText = "Try again!";
   }
   }



 
 
 //QUESTION15

function sub15() {
 // q15 submit button
 
 if(text15.value ==="<ul></ul>" || text15.value === "<ul></ul> " || text15.value === "<ul> </ul>" ) {
   
  win15.innerText = "Correct";
  
  marks15.innerText = "Marks:34";
  
  
    document.getElementById("another152").style.display = "block";
  
   
 } else if (text15.value === "") {
  
  win15.innerText = "Enter your answer please";
}
 
 
 else {
   
  win15.innerText = "Try again!";
 }
  
 }
 
 



//QUESTION152

function sub152() {
 // q152 submit button
 
 if (text152.value === "<td></td>" ||text152.value === "<td></td> " ||text152.value === "<td> </td>" ) {
   
  win152.innerText = "Correct";
  
  marks15.innerText = "Marks:35";
  
  marks152.innerText = "Marks:35";
  
  score152.innerText = "continue";
  
    document.getElementById("another153").style.display = "block";
  
   
 } else if (text152.value === "") {
  
  win152.innerText = "Enter your answer please";
}
 
 
 else {
   
  win152.innerText = "Try again!";
 }
  
 }
 
 
 
 
 
 
 
  // Question 15.3 another question

function sub153() {
   // q15.3 another submit button
   
   if (options153.value === "image") {
     
     win153.innerText = "Correct";
     
     marks15.innerText = "Marks:36";
     
     marks153.innerText = "Marks:36";
     
     marks152.innerText = "Marks:36";
      
     
     
     score153.innerText = "Continue";
    
     
     document.getElementById("another154").style.display = "block";
     
   }else {
     win153.innerText = "Try again!";
   }
   }
    
    
  
    // Question 15.4 another question

function sub154() {
   // q15.4 another submit button
   
   if (options154.value === "scripts") {
     
     win154.innerText = "Correct";
     
     marks15.innerText = "Marks:37";
     
     marks153.innerText = "Marks:37";
     
     marks152.innerText = "Marks:37";
     
     marks154.innerText = "Marks:37"; 
     
     
     score154.innerText = "Continue";
    
     
     document.getElementById("continue154").style.display = "block";
     
   }else {
     win154.innerText = "Try again!";
   }
   }

  


 
 
 
 
 
 

// Question 16 button option

function rightt() {
  
  // q16 option right button 
win16.innerText = "correct";

score16.innerText = "continue";

 document.getElementById("win16").style.color = "limegreen";
  
 document.getElementById("right").style.border = "2px solid lime";  
  document.getElementById("right").style.borderBottom = "8px solid lime";  
  
  marks16.innerText = "Marks:38";
  
  document.getElementById("another162").style.display = "block";
  
}


function wrongg() {
  
  // q16 option wrong button 
  
  win16.innerText ="incorrect";
  
  
  
 document.getElementById("win16").style.color = "red";

 document.getElementById("wrong").style.border = "2px solid red";  
  document.getElementById("wrong").style.borderBottom = "8px solid red"; 
  
  score16.innerText = "Try again!"
  
}
 
 
 function wrong2() {
  
  // q16 option wrong button 
  
  win16.innerText ="incorrect";
  
  
  
 document.getElementById("win16").style.color = "red";

 document.getElementById("wrong2").style.border = "2px solid red";  
  document.getElementById("wrong2").style.borderBottom = "8px solid red";
  
  score16.innerText = "Try again!"
  
}
 
 
 function wrong3() {
  
  // q16 option wrong button 
  
  win16.innerText ="incorrect";

  
  
 document.getElementById("win16").style.color = "red";

 document.getElementById("wrong3").style.border = "2px solid red";  
  document.getElementById("wrong3").style.borderBottom = "8px solid red";  
  
  score16.innerText = "Try again!";
} 

// code ends here for q16





//QUESTION162

function sub162() {
 // q162 submit button
 
 if (text162.value === "<img/>" ||text162.value === "<img /> " ||text162.value === "<img />"
   ||text162.value === "<img />"
   ||text162.value === "<img/> "
 ) {
   
  win162.innerText = "Correct";
  
  marks16.innerText = "Marks:39";
  
  marks162.innerText = "Marks:39";
  
  score162.innerText = "continue";
  
    document.getElementById("another163").style.display = "block";
  
   
 } else if (text162.value === "") {
  
  win162.innerText = "Enter your answer please";
}
 
 
 else {
   
  win162.innerText = "Try again!";
 }
  
 }
 
 
 


//QUESTION163

function sub163() {
 // q163 submit button
 
 if (text163.value === "<script></script>" 
   ||text163.value === "<script></script> " 
   ||text163.value === "<script> </script>" ) {
   
  win163.innerText = "Correct";
  
  marks163.innerText = "Marks:40";
  
  marks162.innerText = "Marks:40";
  
  marks16.innerText = "Marks:40";
  
  score163.innerText = "continue";
  
    document.getElementById("another164").style.display = "block";
  
   
 } else if (text163.value === "") {
  
  win163.innerText = "Enter your answer please";
}
 
 
 else {
   
  win163.innerText = "Try again!";
 }
  
 }
 
 
 
 
     // Question 16.4 another question

function sub164() {
   // q16.4 another submit button
   
   if (options164.value === "links") {
     
     win164.innerText = "Correct";
     
     marks16.innerText = "Marks:41";
     
     marks163.innerText = "Marks:41";
     
     marks162.innerText = "Marks:41";
     
     marks164.innerText = "Marks:41"; 
     
     
     score164.innerText = "Continue";
    
     
     document.getElementById("step16").style.display = "block";
     
   }else {
     win164.innerText = "Try again!";
   }
   }

  



 
     // Question 17 another question

function sub17() {
   // q17 another submit button
   
   if (options17.value === "styles"){
     
     win17.innerText = "Correct";
     
     marks17.innerText = "Marks:42";
     
     
     score17.innerText = "Continue";
    
     
     document.getElementById("another172").style.display = "block";
     
   }else {
     win17.innerText = "Try again!";
   }
   }

  
  
  

 //QUESTION172

function sub172() {
 // q172 submit button
 
 if (text172.value === "<tr></tr>" ||text172.value === "<tr></tr> " ||text172.value === "<tr> </tr>"
   ||text172.value === "<tr> </tr> "
 ) {
   
  win172.innerText = "Correct";
  
  marks17.innerText = "Marks:43";
  
  marks172.innerText = "Marks:43";
  
  score172.innerText = "continue";
  
    document.getElementById("another173").style.display = "block";
  
   
 } else if (text172.value === "") {
  
  win172.innerText = "Enter your answer please";
}
 
 
 else {
   
  win172.innerText = "Try again!";
 }
  
 }
 

 

//QUESTION173

function sub173() {
 // q173 submit button
 
 if (text173.value === "<link/>" ||text173.value === "<link/> " ||text173.value === "<link />"
   ||text173.value === "<link />"
   ||text173.value === "<link/> "
 ) {
   
  win173.innerText = "Correct";
  
  marks17.innerText = "Marks:44";
  
  marks172.innerText = "Marks:44";
  
  marks173.innerText = "Marks:44";
  
  score173.innerText = "continue";
  
    document.getElementById("another174").style.display = "block";
  
   
 } else if (text173.value === "") {
  
  win173.innerText = "Enter your answer please";
}
 
 
 else {
   
  win173.innerText = "Try again!";
 }
  
 }
 
 
 
      // Question 17.4 another question

function sub174() {
   // q17.4 another submit button
   
   if (options174.value === "audios"){
     
     win174.innerText = "Correct";
     
     marks17.innerText = "Marks:45";
     
     marks172.innerText = "Marks:45"; 
     
     marks173.innerText = "Marks:45";
     
     marks174.innerText = "Marks:45";
     
     score174.innerText = "Continue";
    
     
     document.getElementById("continue174").style.display = "block";
     
   }else {
     win174.innerText = "Try again!";
   }
   }


 
 
 
 
// Question 18 button option

function rightt18() {
  
  // q18 option right button 
win18.innerText = "correct";

score18.innerText = "continue";

 document.getElementById("win18").style.color = "limegreen";
  
 document.getElementById("right18").style.border = "2px solid lime"; 
 
  document.getElementById("right18").style.borderBottom = "8px solid lime";  
  
  marks18.innerText = "Marks:46";
  
  document.getElementById("another182").style.display = "block";
  
}


function wrongg18() {
  
  // q18 option wrong button 
  
  win18.innerText ="incorrect";
  
  
  
 document.getElementById("win18").style.color = "red";

 document.getElementById("wrong18").style.border = "2px solid red";  
  document.getElementById("wrong18").style.borderBottom = "8px solid red"; 
  
  score18.innerText = "Try again!"
  
}
 
 
 function wrong182() {
  
  // q18 option wrong button 
  
  win18.innerText ="incorrect";
  
  
  
 document.getElementById("win18").style.color = "red";

 document.getElementById("wrong182").style.border = "2px solid red";  
  document.getElementById("wrong182").style.borderBottom = "8px solid red";
  
  score18.innerText = "Try again!"
  
}
 
 
 function wrong183() {
  
  // q18 option wrong button 
  
  win18.innerText ="incorrect";

  
  
 document.getElementById("win18").style.color = "red";

 document.getElementById("wrong183").style.border = "2px solid red";  
  document.getElementById("wrong183").style.borderBottom = "8px solid red";  
  
 score18.innerText = "Try again!";
} 

// code ends here for q18

 
  
 
 
 
  //QUESTION182

function sub182() {
 // q182 submit button
 
 if (text182.value === "<style></style>"||
     text182.value === "<style></style> "||
     text182.value === "<style> </style>"||
     text182.value === "<style> </style> "
 ) {
   
  win182.innerText = "Correct";
  
  marks18.innerText = "Marks:47";
  
  marks182.innerText = "Marks:47";
  
  score182.innerText = "continue";
  
    document.getElementById("another183").style.display = "block";
  
   
 } else if (text182.value === "") {
  
  win182.innerText = "Enter your answer please";
}
 
 
 else {
   
  win182.innerText = "Try again!";
 }
  
 }
 

 
 
 
   //QUESTION183

function sub183() {
//q183 submit button
 
 if (text183.value === "<audio></audio>"||
     text183.value === "<audio></audio> "||
     text183.value === "<audio> </audio>"||
     text183.value === "<audio> </audio> "
 ) {
   
  win183.innerText = "Correct";
  
  marks18.innerText = "Marks:48";
  
  marks182.innerText = "Marks:48";
  
  score183.innerText = "continue";
  
  marks183.innerText = "Marks:48";
  
    document.getElementById("another184").style.display = "block";
  
   
 } else if (text183.value === "") {
  
  win183.innerText = "Enter your answer please";
}
 
 
 else {
   
  win183.innerText = "Try again!";
 }
  
 }
 





 
      // Question 18.4 another question

function sub184() {
   // q18.4 another submit button
   
   if (options184.value === "selections"){
     
     win184.innerText = "Correct";
     
     marks18.innerText = "Marks:49";
     
     marks182.innerText = "Marks:49"; 
     
     marks183.innerText = "Marks:49";
     
     marks184.innerText = "Marks:49";
     
     score184.innerText = "Continue";
    
     
     document.getElementById("another185").style.display = "block";
     
   }else {
     win184.innerText = "Try again!";
   }
   }






 
      // Question 18.5 another question

function sub185() {
   // q18.5 another submit button
   
   if (options185.value === "options"){
     
     win185.innerText = "Correct";
     
     marks18.innerText = "Marks:50";
     
     marks182.innerText = "Marks:50"; 
     
     marks183.innerText = "Marks:50";
     
     marks184.innerText = "Marks:50";
    
     marks185.innerText = "Marks:50";
    
     
     score185.innerText = "Continue";
    
     
     document.getElementById("step18").style.display = "block";
     
   }else {
     win185.innerText = "Try again!";
   }
   }









 //The guide code

function warning() {
  // Tab to edit
  
  document.getElementById("warning").style.display = "block";
}



function hidewar() {
  // Tab to edit
  
  document.getElementById("warning").style.display = "none";
}










