// 1
console.log("I'm printing to console!")

// 2
let name = prompt('What is your name? ');
document.querySelector("#target").innerHTML = "Hello, " + name + "!";

//3
const number1 = parseInt(prompt("Enter the first integer: "));
const number2 = parseInt(prompt("Enter the second integer: "));
const number3 = parseInt(prompt("Enter the third integer: "));

const sum = number1 + number2 + number3;
const product = number1 + number2 + number3;
const average = sum/3;

document.querySelector("#target").innerHTML = "Sum: " + sum + "<br>" + "Product: " + product +  "</br>" + "Average: " + average;

// 4
const name = prompt("What is your name? ");
const number = Math.floor(Math.random() * 4) + 1;

let house;

if(number === 1) {
    house = "Gryffindor";
} else if (number === 2) {
    house = "Slytherin";
} else if (number === 3) {
    house = "Hufflepuff";
} else {
    house = "Ravenclaw";
}

document.querySelector("#target").innerHTML = name + ", you are " + house + "."

// 5
const year = parseInt(prompt("Enter the year: "));

if (year % 400 === 0) {
    document.querySelector("#target").innerHTML = year + "is a leap year.";
} else if (year % 100 === 0) {
    document.querySelector("#target").innerHTML = year + "is not a leap year.";
} else if (year % 4 === 0) {
    document.querySelector("#target").innerHTML = year + "is a leap year.";
} else {
    document.querySelector("#target").innerHTML = year + "is not a leap year";
}

// 6
const answer = confirm("Should I calculate the square root?");

if (answer === true) {
    const number = parseFloat(prompt("Enter a number:"));

    if (number < 0) {
        document.querySelector("#target").innerHTML = "The square root of a negative number is not defined.";
    } else {
        const result = Math.sqrt(number);
        document.querySelector("#target").innerHTML = "The square root is " + result;
    }
} else {
    document.querySelector("#target").innerHTML = "The square root is not calculated.";
}


// 7
const numberOfRolls = parseInt(prompt("How many times do you want to roll the dice?"));

let sum = 0;

for (let i = 0; i < numberOfRolls; i++) {
    const result = Math.floor(Math.random() * 6) + 1;
    sum = sum + result;
}

document.querySelector("#target").innerHTML = "The sum of the dice rolls is " + sum;

// 8
const startYear = parseInt(prompt("Enter the start year:"));
const endYear = parseInt(prompt("Enter the end year:"));

let result = "<ul>";

for (let year = startYear; year <= endYear; year++) {
    if (year % 400 === 0) {
        result += "<li>" + year + "</li>";
    } else if (year % 100 === 0) {
        continue;
    } else if (year % 4 === 0) {
        result += "<li>" + year + "</li>";
    }
}

result += "</ul>";

document.querySelector("#target").innerHTML = result;

// 9
const number = parseInt(prompt("Enter an integer:"));

let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime === true) {
    document.querySelector("#target").innerHTML = number + " is a prime number.";
} else {
    document.querySelector("#target").innerHTML = number + " is not a prime number.";
}

