const startQuiz = document.getElementById("startQuiz");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");

const score = document.getElementById("score");

const final = document.getElementById("final")

const saveUser = document.getElementById("saveUser")

const userInitials = document.getElementById("userInitials")



//QUESTIONS
var questionDB = [

    {

        question : "What does HTML stand for?",

        choiceA : "Correct",

        choiceB : "Wrong",

        choiceC : "Wrong",

        correct : "A"

    },{

        question : "What does CSS stand for?",

        choiceA : "Wrong",

        choiceB : "Correct",

        choiceC : "Wrong",

        correct : "B"

    },{

        question : "What does JS stand for?",

        choiceA : "Wrong",

        choiceB : "Wrong",

        choiceC : "Correct",

        correct : "C"

    }

];

let runningQuestion = 0;
let userScore = 0;

function renderQuestion(){

    let q = questionDB[runningQuestion];

    question.innerHTML = q.question;

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;

}

startQuiz.addEventListener("click",function(){
  startStop()
  quiz.style.display = "block";
renderQuestion()
});



quiz.style.display = "none";
final.style.display = "none";
function checkAnswer (option) {
  console.log(option)
  if (option === questionDB[runningQuestion].correct) {
    userScore++; // userScore = userScore+ 1;
  }else{
    console.log("Wrong")
  }
  if (runningQuestion < questionDB.length-1) {
    runningQuestion++
    renderQuestion()
  } else{
    console.log(userScore);
    quiz.style.display = "none";
    final.style.display = "block";
    score.textContent = userScore;
  } 
};

saveUser.addEventListener("click", function(){
  var user = userInitials.value
  var userInfo = JSON.parse(localStorage.getItem("codeUser"))  || []
  userInfo.push({
    user: user,
    score: userScore
  })
localStorage.setItem("codeUser", JSON.stringify(userInfo))
})

// 
//document.body.textContent = "Complete";
//var restartButton = document.createElement("input")
//restartButton.type="submit";
//restartButton.value="Again";
//document.body.appendChild(restartButton);
//i=0;
//startstop(i);
//restartButton.addEventListener("click", resetStart, true);
    //function resetStart() {
      //i=0;
      //startStop(0);
      //};


//STOPWATCH 
var x;
var startstop = 0;

function startStop() { /* Toggle StartStop */

  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    document.getElementById("start").innerHTML = "Stop";
  } else if (startstop === 2) {
    document.getElementById("start").innerHTML = "Start";
    startstop = 0;
    stop();
  }

}


function start() {
  x = setInterval(timer, 10);
} /* Start */

function stop() {
  clearInterval(x);
} /* Stop */


var sec = 0; /* holds incrementing value */
var min = 0;


/* Contains and outputs returned value of  function checkTime */


var secOut = 0;
var minOut = 0;


/* Output variable End */

/* Main Timer */
function timer() {
  
  secOut = checkTime(sec);
  minOut = checkTime(min);

  sec = ++sec;

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  if (min == 60) {
    min = 0;
    hour = ++hour;

  }

  document.getElementById("sec").innerHTML = secOut;
  document.getElementById("min").innerHTML = minOut;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
/*Reset*/
function reset() {
  sec = 0;
  min = 0
  
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
 

}
