// Activity 1: Array Creation and Access

// Task01;
let Task = [1, 2, 3, 4, 5];
console.log("Task01", Task);

// Task02;

console.log("Task02", Task[0]);
console.log("Task02", Task[Task.length - 1]);

// Activity 2: Array Methods (Basic)

// Task03;
Task.push(6, 7);
console.log("Task03", Task);

// Task04;

Task.pop();
console.log("Task04", Task);

// Task05;

let Task05 = [1, 2, 3, 4];
console.log("Task05.1", Task05);
let firstElement = Task05.shift();
console.log("Task05.2", firstElement);
console.log("Task05.3", Task05);

// Task06;

let Task06 = [1, 2, 3, 4];
console.log("Task06.1", Task06);
let firstElement01 = Task06.unshift(0);
console.log("Task06.2", firstElement01);
console.log("Task06.3", Task06);

// Activity 3: Array Methods (Intermediate)

// Task07;
// array.map(function(currentValue, index, arr), thisValue)

const Task07 = [100, 200, 300, 400, 500];

const result = Task07.map((number) => number * 2);
console.log("Task07", result);

// Task08;
// array.filter(function(currentValue, index, arr), thisValue)

const Task08 = [1, 2, 3, 4, 5, 6, 7];

const results = Task08.filter((num) => num % 2 === 0);
console.log("Task08", results);

// Task09;
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const Task09 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = Task09.reduce((prev, current) => {
  return prev + current;
}, 0);
console.log("Task09", res);

// Activity 4: Array Iteration
// array.forEach(function(currentValue, index, arr), thisValue)

// Task10;
const Task10 = ["mango", "apple", "papaya", "orange"];
for (let i = 0; i < Task10.length; i++) {
  console.log("Task10", Task10[i]);
}

// Task11;
Task10.forEach((Task10) => {
  console.log("Task11", Task10);
});

// Activity 5: Multi-dimensional Arrays

// Task12;
const Task12 = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
console.log("Task12", Task12);

// Task13;
console.log("Task13", Task12[1][1]);
