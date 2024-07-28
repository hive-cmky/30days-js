const prompt = require("prompt-sync")();
// Tasks/Activities
// Activity 1: If-Else statements
// task 1: write a program to check if a number is positive, negative or zero and log the result to the console.
const a = 3;
if(a > 0){
    console.log("number is positive");
}else if( a === 0){
    console.log("number is zero");
}else{
    console.log("number is negative");
}
// task 2: write a program to check if a person is eligible to vote(age >= 18) and log the result to the console.
let age = 21;
if(age >= 18){
    console.log("person is eligible to vote.");
}
// Activity 2: Nested If-Else statements
// Task 3: write a program to find the largest of three numbers using nested if-else statements.
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;

if(num1 > num2 && num1 > num3){
    largest = num1;
}else if(num2 > num1 && num2 > num3){
    largest = num2;
}else{
    largest = num3;
}
console.log("The largest number is " + largest);
// Activity 3: switch case
// Task 4: write a program that uses a switch case to determine
// the day of the week based on a number (1-7) and log the day name to the console.
// Task 5: write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F')based on a score and log the grade to the console.

// Activity 4: conditional (Ternary) operator
// Task 6: write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

// Activity 5: Combining conditions
// Task 7: write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

// Feature Request:
// 1. Number Check Script: write a script that checks if a number is positive, negative or zero using if-else statements and logs the result.
// 2. voting eligibility scirpt: create a script to check if a person is eligible to vote based on their age and log the result.
// 3. Day of the Week script: write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
// 4. Grade Assignment script:create a script that uses a switch case to assign a grade based on a score and logs the grade.
// 5. Leap Year check script: write a script that checks if a year is a leap year using multiple conditions and logs the result.

// Achievement:
// By the end of these activities, students will:
// * Implement and understand basic if-else control flow.
// * Use nested if-else statements to handle multiple conditions.
// *utilize switch cases for control flow based on specific values.
// *Apply the ternary operator for concise condition checking.
// *Combine multiple conditions to solve more complex problems.



// 8



























