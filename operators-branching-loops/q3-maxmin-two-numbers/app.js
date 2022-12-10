// Question: Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

// const firstNumber = document.querySelector("#number1");
// const secondNumber = document.querySelector("#number2");
// const checkButton = document.querySelector("#check-button");
// const outputBox = document.querySelector("#output-box");

const firstNumber = 129;
const secondNumber = 251;

function maxMinNumber(num1, num2){
   if(num1 > num2){
    console.log(num1 + " is greater than " + num2);
   }else{
    console.log(num2 + " is greater than " + num1);
   }
}

maxMinNumber(firstNumber, secondNumber);

// function showAnswer(){

// }

// checkButton.addEventListener("click", showAnswer);