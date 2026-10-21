const boyQuizImage = document.querySelector("#boyQuizImage");
const shopkeeperImage = document.querySelector("#shopkeeperImage");
const boyThinkingImage = document.querySelector("#boyThinkingImage");
const scoreboard = document.querySelector("#scoreboard");
const scoreElement = document.querySelector("#score");
const userScoreElement = document.querySelector("#userScore");
const questionText = document.querySelector("#questionText");
const speechBubbleboyQuizImage = document.querySelector( "#speechBubbleboyQuizImage");
const answerText = document.querySelector("#answerText");
const mathQuestions = document.querySelector("#mathQuestions");
const candyFlossImage = document.querySelector("#candyFlossImage");
const tryAgain = document.querySelector("#tryAgain");
const input = document.querySelector(".userInput input");
const summitButton = document.querySelector(".userInput button");
const randomQuestions = Mathquiz();
questionText.textContent = randomQuestions.Question;
answerText.textContent = randomQuestions.Answer;



//boy answer question

let score = 0;
let userScore=0;
let gameOver = false;
let timer;
function collectPoints() {
  score++;

  scoreElement.textContent = score;
userScoreElement.textContent = userScore;
  if (score % 5 === 0  ) {
    gameOver = true;

    victoryMusic.play();
    candyFlossImage.style.opacity = 1;
    speechBubbleboyQuizImage.style.opacity = 0;
    boyQuizImage.style.opacity = 0;
    shopkeeperImage.style.opacity = 0;
    mathQuestions.style.opacity = 0;
    input.style.opacity=0;
       summitButton.style.opacity=0;
        userScoreboard.style.opacity=0;
    setTimeout(() => {
      window.location.href = "./endGame.html";
    }, 6000);

    clearTimeout(timer);
  }
}

function nextQuestions() {
  let randomQuestions = Mathquiz();
  questionText.textContent = randomQuestions.Question;
  answerText.textContent = randomQuestions.Answer;

  return randomQuestions;
}

summitButton.addEventListener('click',()=>
{
  

if(Number(input.value)===Number(answerText.textContent)){
  userScore++;
  userScoreElement.textContent = userScore;



alert("Correct Answer");

}

else {

  alert("wrong  Answer");
}
})
