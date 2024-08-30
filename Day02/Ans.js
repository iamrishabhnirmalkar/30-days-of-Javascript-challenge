// Activity 1: Arithmetic Operations

// Task01;

let A = 10;
let B = 5;

result01 = A + B;
console.log("Task01", result01);

// Task02;

result02 = A - B;
console.log("Task02", result02);

// Task03;

result03 = A * B;
console.log("Task03", result03);

// Task04;

result04 = A / B;
console.log("Task04", result04);

// Task05;

result05 = A % B;
console.log("Task05", result05);

// Activity 2: Assignment Operators

// Task06;

A += 1;
console.log("Task06", A);

// Task07;

A -= 1;
console.log("Task06", A);

// Activity 3: Comparison Operators

// Task08;

const age = 21;
console.log(`Age is greater than 18?: ${age > 18}`);
console.log(`Age is less than 18?: ${age < 18}`);

// Task09;

console.log(`Age is greater than or equal 21?: ${age >= 21}`);
console.log(`Age is less than or equal 21?: ${age <= 21}`);

// Task10;
let realNum = 45;
let strNum = "45";

console.log("45=='45'", realNum == strNum);
console.log("45==='45'", realNum === strNum);

// Activity 4: Logical Operators

// Task11;

let X = 10;
let Y = 15;
let Z = 20;

console.log("X > Y && Y < Z", X > Y && Y < Z); // False && True = False

console.log("X < Y && Y > Z", X < Y && Y > Z); // True && False = False

console.log("X < Y && Y < Z", X < Y && Y < Z); // True && True = True

console.log("X > Y && Y > Z", X > Y && Y > Z); // False && False = False

// Task12;

console.log("X > Y || Y < Z", X > Y || Y < Z); // False || True = True

console.log("X < Y || Y > Z", X < Y || Y > Z); // True || False = True

console.log("X < Y || Y < Z", X < Y || Y < Z); // True || True = True

console.log("X > Y || Y > Z", X > Y || Y > Z); // False || False = False

// Task13;

console.log("!Z>X", !Z > X); // False
console.log("!Z<X", !Z < X); // True

// Activity 5: Ternary Operator

// Task14;

let num = -20;

num >= 0 ? console.log("Number is +ve") : console.log("Number is -ve");

// Feature Request:
