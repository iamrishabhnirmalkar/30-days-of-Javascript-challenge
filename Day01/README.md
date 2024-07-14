Que01:
Difference Between array and objects?

Ans01:

Array:
An array is an ordered list of values, where each value is identified by an index. Arrays are ordered collections accessed by indices, ideal for lists of items.

Syntax:
let fruits = ["apple", "banana", "cherry"];

Use Case:
Arrays are typically used when you need an ordered collection of items and you want to access elements by their position.

Accessing Elements:
`let firstFruit = fruits[0];`

Methods:
Arrays come with a variety of built-in methods like `push()`, `pop()`, `shift()`, `unshift()`, `map()`, `filter()`, and `reduce()`

Object:
An object is an unordered collection of key-value pairs, Objects are unordered collections accessed by keys, ideal for representing entities with properties.

Syntax:
let person = {
name: "Rishabh",
age: 24,
occupation: "web developer"
};

Use Case:
Objects are typically used when you need a collection of related data, and you want to access elements by their keys.

Accessing Elements:
`let personName = person.name;`

Methods:
Objects do not have the same methods as arrays but can use methods from Object like Object.keys(), Object.values(), and Object.entries().

Que:

Can i assign arry in objects or can i assign object in arry so what the diffrent between both of them?

Ans:

Objects:

let person = {
name: "John",
age: 30,
hobbies: ["reading", "traveling", "coding"]
};

console.log(person.hobbies[1]);

Array:

let people = [
{ name: "John", age: 30 },
{ name: "Jane", age: 25 },
{ name: "Jim", age: 35 }
];

console.log(people[1].name); // Output: "Jane"
