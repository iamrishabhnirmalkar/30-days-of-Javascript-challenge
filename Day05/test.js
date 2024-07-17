//======== Activity 01 {Function Declaration} =========

// Task 1: Write a function to check if a number is even or odd and log the result to the console.

function task01(num) {
  return num % 2 == 0 ? "Even number" : "Odd number";
}
console.log(task01(20));

// Task 2: Write a function to calculate the square of a number and return the result.

function task02(num) {
  return num * num;
}

console.log(task02(12));

//======== Activity 02 {Function Expression} =========

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function task03(num01, num02) {
  return num01 > num02 ? num01 : num02;
}
console.log(task03(20, 30));

// Task 4: Write a function expression to concatenate two strings and return the result.

function task04(str01, str02) {
  return str01 + str02;
}

console.log(task04("hello", "bro"));

//======== Activity 03 {Arrow Functions} =========

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const add = (num01, num02) => {
  return num01 + num02;
};
console.log(add(20, 25));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const task06 = (value, con) => {
  return value.includes(con);
};
console.log("Task06", task06("rishu", "o"));

// ======================================================================================
// This code self code which i check the string contain the spacial character or not
const string = (str01) => {
  const strrange = /[^a-zA-Z0-9]/;
  return strrange.test(str01);
};

console.log(string("hell@lop"));
// =========================================================================================

//======== Activity 04 { Function Parameters and Default Values} =========

// Task 7: Write a function that takes two parameters and returns their Product. Provide a default value for the second parameter.

const product = function (num01, num02 = 100) {
  return num01 * num02;
};
console.log(product(20));

// Task 8: Write a function that takes a person's name and age and retums a greeting message. Provide a default value for the age.

const greeting = function (name, age) {
  console.log(`Hello ${name} your age is ${age}`);
  return;
};

greeting("Rishu", 24);

//======== Activity 04 {Higher-Order Functions} =========

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

// Feature Request:

// 1. Even or 2. Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.

// Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result.

// 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result. 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.
