var startBtn = document.getElementById("start")
var timerEl = document.getElementById("timer")
var A = document.getElementById("A")
var B = document.getElementById("B")
var C = document.getElementById("C")
var D = document.getElementById("D")

// array questions
//Array holding all the questions and answers bank
var quizQuestions = [{
    question: "Commonly used data types DO NOT include:",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "alerts",
    choiceD: "numbers",
    correctAnswer: "C"
},
{
    question: "The condition in an if / else statement is enclosed with ____________.",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parenthesis",
    choiceD: "square brackets",
    correctAnswer: "C"
},
{
    question: "String values must be enclosed within _______ when being assigned to variables",
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parenthesis",
    correctAnswer: "C"
},
{
    question: "Arrays in JavaScript can be used to store ___________.",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    correctAnswer: "D"
},
{
    question: "A very useful toll used during development and debugging for printing content to the debugger is:",
    choiceA: "JavaScript",
    choiceB: "terminal/bash",
    choiceC: "for loops",
    choiceD: "console.log",
    correctAnswer: "D"
},
]

var timeLeft = 75;
// start quiz
function startQuiz() {
    // timer
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = 'Time left:' + timeLeft;
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
    display(currentIndex);
}

var startPage = document.getElementById("startpage");
var displayQuiz = document.getElementById("quiz");
var question = document.getElementById("question");
var currentIndex = 0;


function display(index) {
    // get rid or replace startpage text with question array
    startPage.remove();
    // remove startbtn
    startBtn.remove();
    // unhide quiz 
    displayQuiz.classList.remove('hide');
    // add questions to quiz
    question.innerHTML = quizQuestions[index].question;
    // add answers
    A.innerHTML = quizQuestions[index].choiceA;
    B.innerHTML = quizQuestions[index].choiceB;
    C.innerHTML = quizQuestions[index].choiceC;
    D.innerHTML = quizQuestions[index].choiceD;
}
// track user input
A.addEventListener('click', answers);
B.addEventListener('click', answers);
C.addEventListener('click', answers);
D.addEventListener('click', answers);
var results = document.getElementById("results");

function answers(e) {
    // right or wrong
    var userInput = e.target.id;
    if (userInput === quizQuestions[currentIndex].correctAnswer) {
        results.innerHTML = 'correct';
    } else {
        results.innerHTML = 'wrong';
        // if wrong deduct 10 secs
        timeLeft -= 10;
    }
    console.log(currentIndex);
    // go to next question
    currentIndex++;
    if (timeLeft === 0 || currentIndex === quizQuestions.length) {
        gameOver();
    }
    else {
        display(currentIndex);
    }
}



startBtn.onclick = startQuiz;