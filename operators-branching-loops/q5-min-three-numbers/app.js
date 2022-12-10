// Question: Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

const firstNumber = 35;
const secondNumber = 29;
const thirdNumber = 46;

function maxNumber(num1, num2, num3){
    if((num1 <= num2) && (num1 <= num3)){
        console.log(num1 + " is minimum number");
    }else if((num2 <= num3) && (num2 <= num1)){
        console.log(num2 + " is minimum number");
    }else{
        console.log(num3 + " is minimum number");
    }
}

maxNumber(firstNumber, secondNumber, thirdNumber);