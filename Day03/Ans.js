// Activity 1: If-Else Statements

// Task01;

let A = 20;
if (A > 0) {
  console.log("Task01 This is Positive", A);
} else if (A < 0) {
  console.log("Task01 This is Negative", A);
} else {
  console.log("Task01 This is Zero", A);
}

// Task02;

let Age = 18;
if (Age >= 18) {
  console.log("This Person are able to Vote");
} else {
  console.log("This Person are Not able to Vote");
}

// Activity 2: Nested If-Else Statements

// Task03;

let X = 60;
let Y = 30;
let Z = 100;

if (X > Y) {
  if (X > Z) {
    console.log("X is largest Number", X);
  } else {
    console.log("Z is largest Number", Z);
  }
} else if (Y > Z) {
  console.log("Y is largest Number", Y);
} else {
  console.log("Z is largest Number", Z);
}

// Activity 3: Switch Case

// Task04;

const Day = 20;
switch (Day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Input");
}
// Task05;
const score = 80;
switch (
  true // This is something cool suff, You can even put true inside switch and it will evaluate like if else statements!
) {
  case score < 100 && score >= 90:
    console.log("Your Grade is: A");
    break;
  case score < 90 && score >= 70:
    console.log("Your Grade is: B");
    break;
  case score < 70 && score >= 50:
    console.log("Your Grade is: C");
    break;
  case score < 50 && score >= 30:
    console.log("Your Grade is: D");
    break;
  case score < 30 && score >= 0:
    console.log("Your Grade is: F");
    break;
  default:
    console.log("Invalid Input");
}

// Activity 4: Conditional (Ternary) Operator

// Task06;

let Numb = 3;
Numb % 2 === 0 ? console.log("Number is even") : console.log("Number is odd");

// Activity 5: Combining Conditions

// Task07;
const Year = 2023;
if (Year % 4 === 0 && !(Year % 100 === 0)) {
  console.log("Year is Leap Year");
} else if (Year % 100 === 0 && Year % 400 === 0) {
  console.log("Year is Leap Year");
} else {
  console.log("Year is Not a Leap Year");
}
