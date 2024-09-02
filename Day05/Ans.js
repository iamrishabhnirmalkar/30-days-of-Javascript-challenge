// Activity 1: Function Declaration

// Task01;

function checkNum(num) {
  if (num % 2 == 0) {
    console.log("This Number is Even");
  } else {
    console.log("This is Odd Number");
  }
}
checkNum(3);

// Task02;

function calSqr(num) {
  square = num * num;
  console.log("square of the Number", square);
  return square;
}
calSqr(20);

//Activity 2: Function Expression

// Task03;

function findNum(a, b) {
  if (a > b) {
    console.log("A is Grater Number");
  } else {
    console.log("B is Greater Number");
  }
}

findNum(20, 5);

// Task04;

function strVal(str1, str2) {
  return str1.concat(str2);
}

console.log(strVal("hello", "Me"));

// Activity 3: Arrow Functions

// Task05;

const addtwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addtwo(20, 50));

// Task06;

const containsCharacter = (str, char) => str.includes(char);

console.log(containsCharacter("Hello", "o"));

// Activity 4: Function Parameters and Default Values

// Task07;
function Product(a, b = 5) {
  c = a * b;
  return c;
}
console.log(Product(20));

// Task08;

function Greeting(str1, age = 20) {
  return `Hello ${str1} How are your age is ${age}`;
}
console.log(Greeting("Rishu"));

// Activity 5: Higher-Order Functions

// Task09;

const successMessage = () => {
  console.log("Account created successfully");
};
const createAccount = (callbackFn, count) => {
  for (let i = 0; i < count; i++) {
    callbackFn();
  }
};
createAccount(successMessage, 3);

// Task10;
const complexCalculation = (c1, c2, num) => {
  const result = c1(num);
  const result2 = c2(result);
  console.log("Final result of complex calculation is:", result2);
};
function f1(num) {
  return num * 100;
}
function f2(num) {
  return num * 1000;
}

complexCalculation(f1, f2, 50);
