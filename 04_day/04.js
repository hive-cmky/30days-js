// TASKS/ACTIVITIES:
// Activity 1: For Loop
// Task 1: Write a program to print numbers from 1 to 10 using for Loop

for (let i = 0; i <= 10; i++){
    console.log(i);
}

// Task 2: Write a program to print multiplication table of 5 using a for loop
for (let i = 1; i <= 10; i++){
    console.log( 5 * i);
}

// Activity 2: While loop
// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a While loop
let i = 1, sum = 0;
while( i < 10){
    sum += i;
    i++;
}
console.log(sum);

// Task 4: Write a program to print numbers from 10 to 1 using while loop
let numbers = 10;
while(numbers > 0){
    console.log(numbers);
    numbers--;
}

// Activity 3: Do...While loop
// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop
let counter = 1;
do {
    console.log(counter)
    counter++;
}while(counter <= 5)

// Task 6: Write a program to calculate the factorial of a number using a do...while loop
let factorial = 1;
let fact =1;
do {
    factorial *= fact;
    fact++;
}while(fact >= 5);

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loop

// Activity 5: Loop Control Statements
// Task 8: write a program to print the numbers from 1 to 10, but skip the number 5 using the continue statement.
// Task 9: write a program to print the numbers from 1 to 10, but stop the loop when number is 7 using break statement.
