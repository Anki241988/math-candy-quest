const boyQuizImage = document.querySelector('#boyQuizImage')
const shopkeeperImage=document.querySelector('#shopkeeperImage')
const boyThinkingImage=document.querySelector('#boyThinkingImage')
const scoreboard=document.querySelector('#scoreboard')
const scoreElement=document.querySelector('#score')
const questionText=document.querySelector('#questionText')
const speechBubbleboyQuizImage=document.querySelector('#speechBubbleboyQuizImage')
const answerText=document.querySelector('#answerText')
const mathQuestions = document.querySelector('#mathQuestions')

const randomQuestions=Mathquiz()
questionText.textContent=randomQuestions.Question
answerText.textContent= randomQuestions.Answer;


//boy answer question


let score=0;
function collectPoints(){

score++
scoreElement.textContent=score;
if(score%5===0){
setTimeout(()=>{
 alert("🍭 Bonus! Giant candy floss!");
},500)

}
}


function nextQuestions(){

let randomQuestions=Mathquiz()
questionText.textContent=randomQuestions.Question
answerText.textContent= randomQuestions.Answer;

return randomQuestions;
}

