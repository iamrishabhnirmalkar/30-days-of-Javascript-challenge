//===== Activity 1: Variable Declaration ======================

// Task01
var A = 12;
console.log("Task01", A);

// Task02;

let B = 20;
console.log("Task02", B);

// Activity 2: Constant Declaration

// Task03

const C = true;
console.log("Task03", C);

// Activity 3: Data Types

// Task04

const D = 121;
const E = "Hello";
const F = false;
const G = {
  key: "value",
  key2: "value02",
};
const H = [1, 2, 3, 4, 5, 6, 7];

console.log("Task04", typeof D);
console.log("Task04", typeof E);
console.log("Task04", typeof F);
console.log("Task04", typeof G);
console.log("Task04", typeof H);

// Array: typeof H will return "object". In JavaScript, arrays are also considered objects, so typeof returns "object" for arrays.

console.log("Task04", Array.isArray(H));

// Activity 4: Reassigning Variables

// Task05
let I = 111;
console.log("Initial Value", I);
// let I = 222; // cant assign the value
I = 444; // This value be assign
{
  let I = 333;
  console.log("Final Value in block", I);
}
console.log("Final Value", I);

// in let you cant assign value after the Initial assign but in var you can assign value after Initial assign simple replace let with var

// Activity 5: Understanding const

const J = 10000;
console.log("Task06", J);
// J = 2000;
console.log("Task06", J);
// TypeError: Assignment to constant variable.

// *****Feature Request:

const NumVar = 1212;
const StringVar = "hello man";
const BolVar = false;
const ObjVar = {
  key: "value",
  key2: "value02",
};
const arrVar = [1, 2, 3, 4, 5, 6];

console.log("value of NumVar", NumVar);
console.log("Type of NumVar", typeof NumVar);

console.log("value of StringVar", StringVar);
console.log("Type of StringVar", typeof StringVar);

console.log("value of BolVar", BolVar);
console.log("Type of BolVar", typeof BolVar);

console.log("value of ObjVar", ObjVar);
console.log("Type of ObjVar", typeof ObjVar);

console.log("value of arrVar", arrVar);
console.log("Type of arrVar", typeof arrVar);

let letVariable = 222;
console.log(" Initial Let Variable", letVariable);

letVariable = 999;
console.log("Reassigned Let Variable", letVariable);

const constVariable = 444;
console.log(" Initial const Variable", constVariable);

constVariable = 999;
console.log("Reassigned const Variable", constVariable);
