// Activity 1: Variable Declaration
// 	*Task 1: Declare a variable using var, assign it a number, and log the value to the console.
// 	*Task 2: Declare a variable using let, assign it a string, and log the value to the console.

var number = 5;
console.log(number);
console.log(typeof number);
// number = 6; reassignment demo
// console.log(number);

let string = "Hello World";
console.log(string);
console.log(typeof string);
// string = "Hello Abhijit"; reassignment demo
// console.log(string);


// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const boolean = false;
console.log(boolean);
console.log(typeof boolean);
// boolean = true; ( TypeError: Assignment to constant variable. ) reassignment demo
console.log(boolean);

// Activity 3: Data Types
// Task 4: Create variables of different data types(number, string, boolean, object, array) 
//         and log each variable's type using the typeof operator.

const person = {
    firstName: "abhijit",
    lastName: "maharik",
    city: "bhubaneswar",
    age: "40"
};
console.log(person);
console.log(typeof person);

const fruits = ["apple", "custard apple", "jamun", "jackfruit"];
console.log(fruits);
console.log(typeof fruits);

