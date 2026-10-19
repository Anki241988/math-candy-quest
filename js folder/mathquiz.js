
const shopkeeperImage=document.querySelector('#shopkeeperImage')
const questionText=document.querySelector('#questionText')
const mathQuestions = document.querySelector('#mathQuestions')
const randomQuestions=Mathquiz()
questionText.textContent=randomQuestions.Question
questionText.textContent=Mathquiz().Question;
/* mathQuestions.addEventListener('ended',()=>{
shopkeeperImage.style.opacity=1
mathQuestions.style.opacity=1
    Mathquiz()
}) */