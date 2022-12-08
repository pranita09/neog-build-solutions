// Question: Write a program to take a number input from user and determine whether the number is odd or even.

const inputNumber = document.querySelector("#num");
const checkButton = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

function evenOddNumber(num){
    let number = num.value;
    if(number % 2 === 0){
        // console.log(number + " is Even Number.");
        outputBox.innerText = number + " is even number";
    }else{
        // console.log(number + " is Odd Number.");
        outputBox.innerText = number + " is odd number";
    }
}

checkButton.addEventListener("click", evenOddNumber(inputNumber));