const boyQuizImage = document.querySelector('#boyQuizImage')
const shopkeeperImage=document.querySelector('#shopkeeperImage')
const boyThinkingImage=document.querySelector('#boyThinkingImage')
const scoreboard=document.querySelector('#scoreboard')
const score=document.querySelector('#score')
const questionText=document.querySelector('#questionText')
const speechBubbleboyQuizImage=document.querySelector('#speechBubbleboyQuizImage')
const answerText=document.querySelector('#answerText')
const mathQuestions = document.querySelector('#mathQuestions')

const randomQuestions=Mathquiz()
questionText.textContent=randomQuestions.Question
answerText.textContent= randomQuestions.Answer;


//boy answer question



function collectPoints(){
let score=0;
score++
document.querySelector('#score').textContent=score;
if(score%5===0){

  console.log("🍭 Bonus! Giant candy floss!");
}

}
console.log(score)


function nextQuestions(){

let randomQuestions=Mathquiz()
questionText.textContent=randomQuestions.Question
answerText.textContent= randomQuestions.Answer;

return randomQuestions;
}

