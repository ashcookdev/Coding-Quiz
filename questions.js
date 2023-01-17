 //when the start button is pressed we want the first question to appear
//we want the clock to start 
var incorrect = [];
var winArray2 =[];

function audioWrong() {
    var audioW = document.getElementById("wrong")
    audioW.play();
    
    }
    
    function audioRight() {
    var audioR = document.getElementById("acorrect")
    audioR.play();}
    
var startButton = document.querySelector("#start");
var result1 = document.querySelector("#result1");
var startscreen = document.querySelector("#start-screen")
var timer = document.querySelector("#time");
var gameOver = document.querySelector("#end-screen")
var timeTaken1 = document.querySelector("#timetaken1")

var question1 = document.querySelector("#question1, #button");
var question2 = document.querySelector("#question2,#button");
var question3 = document.querySelector("#question3,#button"); 
var question4 = document.querySelector("#question4, #button");
var question5 = document.querySelector("#question5,#button");
var question6 = document.querySelector("#question6,#button"); 
var question7 = document.querySelector("#question7, #button");
var question8 = document.querySelector("#question8,#button");
var question9 = document.querySelector("#question9,#button"); 
var question10 = document.querySelector("#question10,#button"); 
var endGame = document.querySelector("#final-score");

// timer variable







var timer1 = 90



startButton.addEventListener("click" ,function start(event) {
startscreen.setAttribute("class", "hide")

var interval = setInterval(function() {
    timer1 --
    timer.textContent= timer1;
    if (timer1 <= 0) {
        gameOver.setAttribute("class","show")
        clearInterval(interval)
    }
},1000)





const startQ = document.createElement("h4");
const title1 = document.createElement("h5");
const q1right = document.createElement("button")
const q1wrongb = document.createElement("button")
const q1wrongc = document.createElement("button")
const q1wrongd = document.createElement("button")
startQ.innerText = "Question 1";
title1.innerText = "Inside what HTML element do we put the javascript?";
q1right.innerText = "script"
q1wrongb.innerText = "link"
q1wrongc.innerText = "javascript"
q1wrongd.innerText = "scripting"
question1.appendChild (startQ);
question1.appendChild (title1);
question1.appendChild(q1right);
question1.appendChild(q1wrongb);
question1.appendChild(q1wrongc);
question1.appendChild(q1wrongd);

q1right.addEventListener("click", function right1A(event) {
    event.preventDefault();
     event.stopPropagation();
    result1.innerHTML = "Question 1 - Correct!";
   audioRight()
   quest2()
   winArray2.push(timer1);
   question1.setAttribute("class","hide")
})

   q1wrongb.addEventListener("click" , function wrong1b(event) {
    event.preventDefault();
    event.stopPropagation();
   result1.innerHTML = "Wrong";
   timer1 -= 10
incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1
    endGame.appendChild(timer1);
    audioWrong()
    clearInterval(interval)

    

   }
})



q1wrongc.addEventListener("click" , function wrong1c(event) {
    event.preventDefault();
    event.stopPropagation();
   result1.innerHTML = "Wrong";
   timer1 -= 10
   incorrect.push(timer1);
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    finalResult.push(timer1);
    endGame.innerHTML = timer1
    endGame.appendChild(timer1);
    audioWrong()
    clearInterval(interval)
   }})

q1wrongd.addEventListener("click" , function wrong1d(event) {
    event.preventDefault();
    event.stopPropagation();
   result1.innerHTML = "Wrong";
   timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    finalResult.push(timer1);
    audioWrong()
    endGame.innerHTML = timer1
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
   })


})



function quest2(event) {
    var startQ2 = document.createElement("h4");
        var title2 = document.createElement("h5");
        var q2wrongb = document.createElement("button")
        var q2wrongc = document.createElement("button")
        var q2right = document.createElement("button")
        var q2right = document.createElement("button")
        var q2wrongd = document.createElement("button")
        startQ2.innerText = "Question 2";
        title2.innerText = "How is document type initialized in HTML5?";
        q2right.innerText = "<!DOCTYPE HTML>"
        q2wrongb.innerText = "</DOCTYPE HTML>"
        q2wrongc.innerText = "</DOCTYPE>"
        q2wrongd.innerText = "<DOCTYPE>"
        question2.appendChild (startQ2);
        question2.appendChild (title2);
        question2.appendChild(q2wrongb);
        question2.appendChild(q2wrongc);
        question2.appendChild(q2wrongd);
        question2.appendChild(q2right);

        q2right.addEventListener("click", function right1A(event) {
            event.preventDefault();
             event.stopPropagation();
            result2.innerHTML = "Question 2 - Correct!";
           audioRight()
           quest3()
           winArray2.push(timer1);
           question2.setAttribute("class","hide")
 })
        
           q2wrongb.addEventListener("click" , function wrong1b(event) {
            event.preventDefault();
            event.stopPropagation();
           result2.innerHTML = "Wrong";
           timer1 -= 10
           incorrect.push(timer1);

   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    finalResult.push(timer1);
    endGame.appendChild(timer1);
    clearInterval(interval)
   
   }
           audioWrong()})
        
           q2wrongc.addEventListener("click" , function wrong1c(event) {
            event.preventDefault();
            event.stopPropagation();
           result2.innerHTML = "Wrong";
           timer1 -= 10
           incorrect.push(timer1);
                      if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
  
   }
            audioWrong()})
        
        q2wrongd.addEventListener("click" , function wrong1d(event) {
            event.preventDefault();
            event.stopPropagation();
           result2.innerHTML = "Wrong";
           timer1 -= 10
           incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
    
   }
            audioWrong()})
        
        

}

function quest3(event) {
    var startQ3 = document.createElement("h4");
        var title3 = document.createElement("h5");
        var q3wrongb = document.createElement("button")
        var q3wrongc = document.createElement("button")
        var q3right = document.createElement("button")
        var q3right = document.createElement("button")
        var q3wrongd = document.createElement("button")
        startQ3.innerText = "Question 3";
        title3.innerText = " Which of the following property changes the color of top border?"
 q3right.innerText = "border-top-color"
        q3wrongb.innerText = "border-left-color"
        q3wrongc.innerText = "border-right-color"
        q3wrongd.innerText = "border-bottom-color"
        question3.appendChild (startQ3);
        question3.appendChild (title3);
        question3.appendChild(q3wrongb);
        question3.appendChild(q3wrongd);
        question3.appendChild(q3right);
        question3.appendChild(q3wrongc);

        q3right.addEventListener("click", function right1A(event) {
            event.preventDefault();
             event.stopPropagation();
            result3.innerHTML = "Question 3 - Correct!";
           audioRight()
           quest4()
           winArray2.push(timer1);
           question3.setAttribute("class","hide")
 })
        
           q3wrongb.addEventListener("click" , function wrong1b(event) {
            event.preventDefault();
            event.stopPropagation();
           result3.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
    
   }
           audioWrong()})
        
           q3wrongc.addEventListener("click" , function wrong1c(event) {
            event.preventDefault();
            event.stopPropagation();
           result3.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        q3wrongd.addEventListener("click" , function wrong1d(event) {
            event.preventDefault();
            event.stopPropagation();
           result3.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        

}   


function quest4(event) {
    var startQ4 = document.createElement("h4");
        var title4 = document.createElement("h5");
        var q4wrongb = document.createElement("button")
        var q4wrongc = document.createElement("button")
        var q4right = document.createElement("button")
        var q4right = document.createElement("button")
        var q4wrongd = document.createElement("button")
        startQ4.innerText = "Question 4";
        title4.innerText = " Which built-in method returns the index within the calling String object of the first occurrence of the specified value?"
 q4right.innerText = "getIndex()"
        q4wrongb.innerText = "location()"
        q4wrongc.innerText = "indexOf()"
        q4wrongd.innerText = "None of the options"
        question4.appendChild (startQ4);
        question4.appendChild (title4);
        question4.appendChild(q4wrongb);
        question4.appendChild(q4right);
        question4.appendChild(q4wrongd);
        question4.appendChild(q4wrongc);

        q4right.addEventListener("click", function right1A(event) {
            event.preventDefault();
             event.stopPropagation();
            result4.innerHTML = "Question 4 - Correct!";
           audioRight()
           quest5()
           winArray2.push(timer1);
           question4.setAttribute("class","hide")
 })
        
           q4wrongb.addEventListener("click" , function wrong1b(event) {
            event.preventDefault();
            event.stopPropagation();
           result4.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
           audioWrong()})
        
           q4wrongc.addEventListener("click" , function wrong1c(event) {
            event.preventDefault();
            event.stopPropagation();
           result4.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        q4wrongd.addEventListener("click" , function wrong1d(event) {
            event.preventDefault();
            event.stopPropagation();
           result4.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        

}   

function quest5(event) {
    var startQ5 = document.createElement("h4");
        var title5 = document.createElement("h5");
        var q5wrongb = document.createElement("button")
        var q5wrongc = document.createElement("button")
        var q5right = document.createElement("button")
        var q5right = document.createElement("button")
        var q5wrongd = document.createElement("button")
        startQ5.innerText = "Question 5";
        title5.innerText = " Which of the following function of Array object creates a new array with all of the elements of this array for which the provided filtering function returns true?"
 q5right.innerText = "filter()"
        q5wrongb.innerText = "concat()"
        q5wrongc.innerText = "every()"
        q5wrongd.innerText = "some()"
        question5.appendChild (startQ5);
        question5.appendChild (title5);
        question5.appendChild(q5wrongb);
        question5.appendChild(q5wrongd);
        question5.appendChild(q5wrongc);
        question5.appendChild(q5right);


        q5right.addEventListener("click", function right1A(event) {
            event.preventDefault();
             event.stopPropagation();
            result5.innerHTML = "Question 5 - Correct!";
           audioRight()
           quest6()
           winArray2.push(timer1);
           question5.setAttribute("class","hide")
 })
        
           q5wrongb.addEventListener("click" , function wrong1b(event) {
            event.preventDefault();
            event.stopPropagation();
           result5.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
           audioWrong()})
        
           q5wrongc.addEventListener("click" , function wrong1c(event) {
            event.preventDefault();
            event.stopPropagation();
           result5.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        q5wrongd.addEventListener("click" , function wrong1d(event) {
            event.preventDefault();
            event.stopPropagation();
           result5.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        

}

function quest6(event) {
    var startQ6 = document.createElement("h4");
        var title6 = document.createElement("h5");
        var q6wrongb = document.createElement("button")
        var q6wrongc = document.createElement("button")
        var q6right = document.createElement("button")
        var q6right = document.createElement("button")
        var q6wrongd = document.createElement("button")
        startQ6.innerText = "Question 6";
        title6.innerText = " Which of the following property of a table element allows browsers to speed up layout of a table by using the first width properties it comes across for the rest of a column rather than having to load the whole table before rendering it?"
 q6right.innerText = "table-layout"
        q6wrongb.innerText = "border-spacing"
        q6wrongc.innerText = "caption-side"
        q6wrongd.innerText = "empty-cells"
        question6.appendChild (startQ6);
        question6.appendChild (title6);
        question6.appendChild(q6right);
        question6.appendChild(q6wrongb);
        question6.appendChild(q6wrongd);
        question6.appendChild(q6wrongc);

        q6right.addEventListener("click", function right1A(event) {
            event.preventDefault();
             event.stopPropagation();
            result6.innerHTML = "Question 6 - Correct!";
           audioRight()
           quest7()
           winArray2.push(timer1);
           question6.setAttribute("class","hide")
 })
        
           q6wrongb.addEventListener("click" , function wrong1b(event) {
            event.preventDefault();
            event.stopPropagation();
           result6.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
           audioWrong()})
        
           q6wrongc.addEventListener("click" , function wrong1c(event) {
            event.preventDefault();
            event.stopPropagation();
           result6.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        q6wrongd.addEventListener("click" , function wrong1d(event) {
            event.preventDefault();
            event.stopPropagation();
           result6.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        

}   

function quest7(event) {
    var startQ7 = document.createElement("h4");
        var title7 = document.createElement("h5");
        var q7wrongb = document.createElement("button")
        var q7wrongc = document.createElement("button")
        var q7right = document.createElement("button")
        var q7right = document.createElement("button")
        var q7wrongd = document.createElement("button")
        startQ7.innerText = "Question 7";
        title7.innerText = "Which tag is used to create a hyperlink?"
 q7right.innerText = "<a>"
        q7wrongb.innerText = "<img>"
        q7wrongc.innerText = "<dl>"
        q7wrongd.innerText = "<link>"
        question7.appendChild (startQ7);
        question7.appendChild (title7);
        question7.appendChild(q7wrongb);
        question7.appendChild(q7right);
        question7.appendChild(q7wrongd);
        question7.appendChild(q7wrongc);

        q7right.addEventListener("click", function right1A(event) {
            event.preventDefault();
             event.stopPropagation();
            result7.innerHTML = "Question 7 - Correct!";
           audioRight()
           quest8()
           winArray2.push(timer1);
           question7.setAttribute("class","hide")
 })
        
           q7wrongb.addEventListener("click" , function wrong1b(event) {
            event.preventDefault();
            event.stopPropagation();
           result7.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
           audioWrong()})
        
           q7wrongc.addEventListener("click" , function wrong1c(event) {
            event.preventDefault();
            event.stopPropagation();
           result7.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        q7wrongd.addEventListener("click" , function wrong1d(event) {
            event.preventDefault();
            event.stopPropagation();
           result7.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        

}   

function quest8(event) {
    var startQ8 = document.createElement("h4");
        var title8 = document.createElement("h5");
        var q8wrongb = document.createElement("button")
        var q8wrongc = document.createElement("button")
        var q8right = document.createElement("button")
        var q8right = document.createElement("button")
        var q8wrongd = document.createElement("button")
        startQ8.innerText = "Question 8";
        title8.innerText = "Which of the following is correct about RGB Values format of CSS colors?"
 q8right.innerText = "All of the Options"
        q8wrongb.innerText = "his property takes three values, one each for red, green, and blue."
        q8wrongc.innerText = "This color value is specified using the rgb( ) property."
        q8wrongd.innerText = "The value can be an integer between 0 and 255 or a percentage."
        question8.appendChild (startQ8);
        question8.appendChild (title8);
        question8.appendChild(q8right);
        question8.appendChild(q8wrongb);
        question8.appendChild(q8wrongd);
        question8.appendChild(q8wrongc);

        q8right.addEventListener("click", function right1A(event) {
            event.preventDefault();
             event.stopPropagation();
            result8.innerHTML = "Question 8 - Correct!";
           audioRight()
           quest9()
           winArray2.push(timer1);
           question8.setAttribute("class","hide")
 })
        
           q8wrongb.addEventListener("click" , function wrong1b(event) {
            event.preventDefault();
            event.stopPropagation();
           result8.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
           audioWrong()})
        
           q8wrongc.addEventListener("click" , function wrong1c(event) {
            event.preventDefault();
            event.stopPropagation();
           result8.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        q8wrongd.addEventListener("click" , function wrong1d(event) {
            event.preventDefault();
            event.stopPropagation();
           result8.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        

}   

function quest9(event) {
    var startQ9 = document.createElement("h4");
        var title9 = document.createElement("h5");
        var q9wrongb = document.createElement("button")
        var q9wrongc = document.createElement("button")
        var q9right = document.createElement("button")
        var q9right = document.createElement("button")
        var q9wrongd = document.createElement("button")
        startQ9.innerText = "Question 9";
        title9.innerText = " Which of the following function of String object causes a string to be displayed in the specified color as if it were in a <font color='color'> tag?"
 q9right.innerText = "fontcolor()"
        q9wrongb.innerText = "blink()"
        q9wrongc.innerText = "fixed()"
        q9wrongd.innerText = "bold()"
        question9.appendChild (startQ9);
        question9.appendChild (title9);
        question9.appendChild(q9wrongb);
        question9.appendChild(q9wrongd);
        question9.appendChild(q9right);
        question9.appendChild(q9wrongc);

        q9right.addEventListener("click", function right1A(event) {
            event.preventDefault();
             event.stopPropagation();
            result9.innerHTML = "Question 9 - Correct!";
           audioRight()
           quest10()
           winArray2.push(timer1);
           question9.setAttribute("class","hide")
 })
        
           q9wrongb.addEventListener("click" , function wrong1b(event) {
            event.preventDefault();
            event.stopPropagation();
           result9.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
           audioWrong()})
        
           q9wrongc.addEventListener("click" , function wrong1c(event) {
            event.preventDefault();
            event.stopPropagation();
           result9.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        q9wrongd.addEventListener("click" , function wrong1d(event) {
            event.preventDefault();
            event.stopPropagation();
           result9.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        

}   

function quest10(event) {
    var startQ10 = document.createElement("h4");
        var title10 = document.createElement("h5");
        var q10wrongb = document.createElement("button")
        var q10wrongc = document.createElement("button")
        var q10right = document.createElement("button")
        var q10right = document.createElement("button")
        var q10wrongd = document.createElement("button")
        startQ10.innerText = "Question 10";
        title10.innerText = " Which of the following property is used to add or subtract space between the words of a sentence?"
 q10right.innerText = "text-indent"
        q10wrongb.innerText = " text-align"
        q10wrongc.innerText = " text-decoration"
        q10wrongd.innerText = "text-transform"
        question10.appendChild (startQ10);
        question10.appendChild (title10);
        question10.appendChild(q10wrongb);
        question10.appendChild(q10wrongd);
        question10.appendChild(q10right);
        question10.appendChild(q10wrongc);

        q10right.addEventListener("click", function right1A(event) {
            event.preventDefault();
             event.stopPropagation();
            result10.innerHTML = "Question 10 - Correct!";
           audioRight()
           winArray2.push(timer1);
           question10.setAttribute("class","hide")
          gameOver.setAttribute("class","show")
           endGame.innerHTML = timer1;
           endGame.appendChild(timer1);
clearInterval(interval)
 })
        
           q10wrongb.addEventListener("click" , function wrong1b(event) {
            event.preventDefault();
            event.stopPropagation();
           result10.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
           audioWrong()})
        
           q10wrongc.addEventListener("click" , function wrong1c(event) {
            event.preventDefault();
            event.stopPropagation();
           result10.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
    endGame.appendChild(timer1);
    clearInterval(interval)
   }
            audioWrong()})
        
        q10wrongd.addEventListener("click" , function wrong1d(event) {
            event.preventDefault();
            event.stopPropagation();
           result10.innerHTML = "Wrong";
           timer1 -= 10
   incorrect.push(timer1);
   if (timer1 <= 10) {
    gameOver.setAttribute("class","show")
    endGame.innerHTML = timer1;
finalResult.push(timer1);
    endGame.appendChild(timer1);
    audioWrong()
    clearInterval(interval)
   }
            })
        
        

}   

// var questionWrong = document.querySelector("#incorrect")
// questionWrong.innerHTML = incorrect;
// questionWrong.appendChild(incorrect);
var finalResult = [];

console.log(finalResult);
console.log(winArray2);
console.log(incorrect);


var results = document.querySelector("#results");

    results.addEventListener("click" ,function(event) {
        event.preventDefault();
     event.stopPropagation();
        console.log(incorrect.length);
var incorrectA = document.createElement("h4")
incorrectA.innerHTML= "Incorrect Attempts:" + " " + incorrect.length;
results.appendChild(incorrectA);
})


var nameInput= document.querySelector("#initials");
var SubmitButton = document.querySelector("#submit");
;


SubmitButton.addEventListener("click", function(event) {
        event.preventDefault()
        event.stopPropagation();
    

            var newUser = nameInput.value.trim();
            console.log(newUser);
            
            var highScore = document.getElementById('final-score').innerHTML;
            console.log(highScore);
            incorrect = incorrect.length
            console.log(incorrect);
            


localStorage.setItem("newUser",JSON.stringify(newUser));
localStorage.setItem("score",JSON.stringify(highScore));
localStorage.setItem("incorrect",JSON.stringify(incorrect));

    })


console.log(userData_);