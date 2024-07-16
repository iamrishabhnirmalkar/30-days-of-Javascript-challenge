//======== Activity 02 {For Loop} =========

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

tooknum = 10;
for (num = 1; num <= tooknum; num++) {
  console.log(num);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

tooknum02 = 5;
for (num = 1; num <= 10; num++) {
  console.log("Multiplay 5 :", num * tooknum02);
}

//======== Activity 02 {While Loop} =========

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("SUM OF NUMBER  ", sum);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let num04 = 10;
while (num04 >= 1) {
  console.log(num04);
  num04--;
}

//======== Activity 03 {Do... While Loop} =========

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

let task05 = 1;
do {
  console.log("do while loop", task05);
  task05++;
} while (task05 <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let task06 = 5;
let factorial = 1;
do {
  factorial *= task06;
  task06--;
} while (task06 >= 1);

console.log("factorial num", factorial);

//======== Activity 04 {Nested Loops} =========

// Task 7: Write a program to print a pattern using nested for loops:

let task07 = 5;
for (let i = 0; i < task07; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}

//======== Activity 04 {Loop Control Statements} =========

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  console.log("task08", i);
}
// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for (let i = 1; i <= 10; i++) {
  if (i == 7) break;
  console.log("task09", i);
}

// Feature Request:

// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a white loop.

// 2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.

// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.

// 4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.

// 5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.

// Achievement:

// By the end of these activities, students will:

// Understand and use for loops to iterate over a sequence of numbers.

// Utilize while loops for iteration based on a condition.

// Apply do...while loops to ensure the loop body is executed at least once.

// Implement nested loops to solve more complex problems.

// Use loop control statements (break and continue) to control the flow of loops.
