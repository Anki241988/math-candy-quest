const boyQuizImage = document.querySelector('#boyQuizImage')
const shopkeeperImage=document.querySelector('#shopkeeperImage')
const boyThinkingImage=document.querySelector('#boyThinkingImage')
const questionText=document.querySelector('#questionText')
const speechBubbleboyQuizImage=document.querySelector('#speechBubbleboyQuizImage')
const answerText=document.querySelector('#answerText')
const mathQuestions = document.querySelector('#mathQuestions')
const randomQuestions=Mathquiz()
questionText.textContent=randomQuestions.Question



//boy answer question

answerText.textContent= randomQuestions.Answer;