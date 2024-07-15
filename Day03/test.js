//======== Activity 01 {If-Else Statements} =========

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let Activity01 = 1;
if (Activity01 == 0) {
  console.log("Number is zero");
} else if (Activity01 > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is Negative");
}

// Task 2: Write a program to check if a person is eligible to vote (age > 18) and log the result to the console.

let age = 20;
if (age >= 18) {
  console.log("Eligible for the Vote");
} else {
  console.log("Not Eligible for the Vote");
}

//======== Activity 02 {Nested If-Else Statements} =========

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let Anum = 30;
let Bnum = 235;
let Cnum = 20;

if (Anum > Bnum) {
  if (Anum > Cnum) {
    console.log("A num is largest", Anum);
  }
} else if (Bnum > Cnum) {
  console.log("B num is largest", Bnum);
} else {
  console.log("C num is largest", Cnum);
}

//======== Activity 03 {Switch Case} =========

// Task 4: Write a program that uses switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let Day = 8;
switch (true) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thusday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid");
    break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.

let score = 50;
switch (true) {
  case score >= 90:
    console.log("Grade is A");
    break;
  case score >= 80:
    console.log("Grade is B");
    break;
  case score >= 70:
    console.log("Grade is C");
    break;
  case score >= 60:
    console.log("Grade is D");
    break;
  default:
    console.log("Grade is F");
    break;
}

//======== Activity 04 {Conditional (Ternary) Operator} =========

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let Numb = 5;
console.log(Numb % 2 == 0 ? "even" : "odd");

//======== Activity 05 {Combining Conditions} =========

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("leap year");
} else {
  console.log("not leap year");
}

// Feature Request:

// 1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

// 2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.

//3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.

// 4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.

// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
