//Activity 1: For Loop
// ===================================
// for (initialization; condition; increment) {
//      Code to be executed in each iteration
// }
// ==================================
// Task01;

for (let index = 1; index <= 10; index++) {
  //   console.log("Task01", index);
}

// Task02;

for (let num = 1; num <= 10; num++) {
  //   console.log("Task02", num * 5);
}

// Activity 2: While Loop
// Task03;
let sum = 0;
let num = 1;

while (num <= 10) {
  sum += num;
  num++;
}

// console.log("Sum of number from 1 to 10: ", sum);

// Task04;

let Task04 = 10;
while (Task04 > 0) {
  //   console.log("Task04", Task04);
  Task04--;
}

// Activity 3: Do...While Loop
// Task05;
let Task05 = 1;
do {
  //   console.log("Task05", Task05);
  Task05++;
} while (Task05 <= 5);
// Task06;

// Activity 4: Nested Loops
// Task07;

for (let Task07 = 0; Task07 < 5; Task07++) {
  let Task070 = "";
  for (let j = 0; j <= Task07; j++) {
    Task070 += "* ";
  }
  console.log(Task070);
}

// Activity 5: Loop Control Statements
// Task08;

for (let Task08 = 1; Task08 <= 10; Task08++) {
  if (Task08 === 5) {
    continue;
  }
  //   console.log("Task08", Task08);
}

// Task09;
for (let Task09 = 1; Task09 <= 10; Task09++) {
  if (Task09 === 7) {
    break;
  }
  //   console.log("Task09", Task09);
}
