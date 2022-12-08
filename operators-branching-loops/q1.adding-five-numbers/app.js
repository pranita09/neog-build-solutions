// Question: Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const num1 = 5;
const num2 = 13;
const num3 = 7;
const num4 = 21; 
const num5 = 48;

function addNumbers(a, b, c, d, e){
    const sum = a + b + c + d + e;
    console.log(sum);
}

addNumbers(num1, num2, num3, num4, num5);

// alternate solution using array

const numbers = [5, 13, 7, 21, 48];

function sumNumbers(arrayOfNumbers){
    let sum = 0;
    for(let i=0;i<arrayOfNumbers.length;i++){
        sum = sum + arrayOfNumbers[i];
    }
    console.log(sum);
}

sumNumbers(numbers);