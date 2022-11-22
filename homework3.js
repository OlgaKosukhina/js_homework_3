// Task 1

const getCubeNumber = number => (number ** 3);
console.log(getCubeNumber(2) + getCubeNumber(3));

// Task 2

function getNetSalary(input) {
    if (isNaN(input)) {
        alert('This is not a number. Please try again.');
    } else {
        console.log(`Net salary is ${input - (input * 0.13)}`);
    }
}

let userInput = Number(prompt('Please insert a number:'));
getNetSalary(userInput);

// Task 3

function getMaximumFromNumbers(firstNumber, secondNumber, thirdNumber) {
    if (secondNumber > firstNumber) {
        console.log(`Maximum number is ${secondNumber}`);
    } else if (thirdNumber > firstNumber) {
        console.log(`Maximum number is ${thirdNumber}`);
    } else {
        console.log(`Maximum number is ${firstNumber}`);
    }
}

let numberOne = Number(prompt('Please insert first number.'));
let numberTwo = Number(prompt('Please insert second number.'));
let numberThree = Number(prompt('Please insert third number.'));

getMaximumFromNumbers(numberOne, numberTwo, numberThree);

// Task 4

const getSum = (number1, number2) => console.log(number1 + number2);
const getDifference = (number1, number2) => console.log(number1 - number2);
const getMultiple = (number1, number2) => console.log(number1 * number2);
const getDivision = (number1, number2) => console.log(number1 / number2);

getSum(10, 2);
getDifference(10, 2);
getMultiple(4, 2);
getDivision(10, 5);