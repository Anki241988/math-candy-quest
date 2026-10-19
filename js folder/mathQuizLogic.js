

function Mathquiz() {

const operatorArray=['+','*','-','/']



    let randomOperator = Math.floor(Math.random()*operatorArray.length);

let operator=operatorArray[randomOperator]
let num1= Math.floor(Math.random()*50)+1;
let num2=Math.floor(Math.random()*50)+1;

let correctAnswer =0;

if(num1<num2){

let bigger = num2
num2=num1;
num1=bigger;

}

switch (operator) {

  case "+":
  correctAnswer = num1+num2;
    break;

  case "-":
   correctAnswer =  num1-num2;
    break;

  case "*":
   correctAnswer = num1*num2;
    break;

  case "/":
correctAnswer = num1/num2;
    break;

  default:
    break;
}



return { Question:`${num1} ${operator} ${num2} =?`,
         Answer: `${correctAnswer} `};

}



console.log(Mathquiz())