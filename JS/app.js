






//var questionTime= 10;
var currentQuestion=0;
TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
//verify right and wrong answer

function renderQuestion(){
  var question = questionsArray[currentQuestion];
  //rendered question from the question constructor


}

// questions is the array of questions


function checkAnswer(answer) {
  if (answer === questions[currentQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = 0;
  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    // need to clear the timer and put a score on nthe screen
  }
}


function answerIsCorrect(){
 //  create a sound 'u rock'
}

// answer is Wrong
function answerIsWrong(){
  // create sound 'u suck!'
}