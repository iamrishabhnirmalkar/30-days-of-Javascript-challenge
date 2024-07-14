//======== Activity 01 {Variable Declaration} =========

// Task 01 Declare a variable using var, assign it a number, and log the value to the console.

var Task01 = 10;
console.log(Task01);

// Task 02 Declare a variable using let, assign it a string, and log the value to the console.

let Task02 = "Chai or code";
console.log(Task02);

//======== Activity 02 {Constant Decleration} =========

// Task 03 Declare a variable using const, assign it a boolean value, and log the value to the console.

const Task03 = true;
console.log(Task03);

//======== Activity 03 {Data Type} =========

// Task 04 Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

let numDT = 255;
let strDT = "Rishunir";
let bolDT = false;
let objDT = {
  name: "Rihsbah",
  age: 24,
  email: "iamrishabhnir77@gmail.com",
  isActive: true,
};
let arrDT = [1, 2, 3, 4, 5];

console.log(typeof numDT);
console.log(typeof strDT);
console.log(typeof bolDT);
console.log(typeof objDT);
console.log(typeof arrDT);

//======== Activity 04 {Reassigning Variables} =========

// Task 05 Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let Task05 = 12;
console.log("initial Value", Task05); //initial Value 12
Task05 = 20;
console.log("reassign value", Task05); //reassign value 20

//======== Activity 05 {Understanding const} =========

// Task 6: Try reassigning a variable declared with const and observe the error.

const Task06 = "hello";
console.log(Task06); // Hello
Task06 = "what";
console.log(Task06); //TypeError: Assignment to constant variable.
