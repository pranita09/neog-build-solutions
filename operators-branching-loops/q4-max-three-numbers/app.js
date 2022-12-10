// Question: Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const firstNumber = 8;
const secondNumber = 23;
const thirdNumber = 17;

function maxNumber(num1, num2, num3){
    if((num1 >= num2) && (num1 >= num3)){
        console.log(num1 + " is maximum number");
    }else if((num2 >= num3) && (num2 >= num1)){
        console.log(num2 + " is maximum number");
    }else{
        console.log(num3 + " is maximum number");
    }
}

maxNumber(firstNumber, secondNumber, thirdNumber);