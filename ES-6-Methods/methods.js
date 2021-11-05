/*Using Arrow Functions*/
//1-Map method

const numbers = [2, 4, 6, 3, 7];
//Map -Create a new array by doing something with each item in an array.

//With General Function
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

//With Arrow Function
const mapNumbers = numbers.map((x) => x + 2);
console.log(mapNumbers); //[ 4, 6, 8, 5, 9 ]

//1-1-->Using forEach method--forEach doesn't retutn new array
const forEachNumbers = [];
numbers.forEach((num) => forEachNumbers.push(num + 2));
console.log(forEachNumbers); //[ 4, 6, 8, 5, 9 ]

//2--Filter Method-->Create a new array by keeping the items that return true.
const filterNumbers = numbers.filter((num) => num > 5);
console.log(filterNumbers); //[ 6, 7 ]

//2-1-->Using forEach--Wrong way
let forNumbers1 = []; //can't change variable value if we define with const keyword
forNumbers1 = numbers.forEach((num) => num > 5);
console.log(forNumbers1); //undefined

//2-2-->Wrong way
let forNumbers2 = [];
numbers.forEach((num) => forNumbers2.push(num > 5));
console.log(forNumbers2); //[ false, false, true, false, true ]

//2-2-->Correct way
let forNumbers3 = [];
numbers.forEach((num) => {
  if (num > 5) forNumbers3.push(num);
});
console.log(forNumbers3); //[ 6, 7 ]

//2-3-->Wrong way
let forNumbers4 = [];
forNumbers4 = numbers.forEach((num) => {
  if (num > 5) return num;
});
console.log(forNumbers4); //undefined

//3--Reduce method - Accumulate a value by doing something to each item in an array.
let reducer = numbers.reduce(function (accumulator, currentNumber) {
  console.log("Accumulator " + accumulator);
  console.log("CurrentNumber " + currentNumber);
  return accumulator + currentNumber;
});
console.log(numbers); //[ 2, 4, 6, 3, 7 ]
console.log(reducer);
/*
Accumulator 2
CurrentNumber 4
Accumulator 6
CurrentNumber 6
Accumulator 12
CurrentNumber 3
Accumulator 15
CurrentNumber 7
final value 22*/

//using Arrow function
const reducer1 = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(reducer1); //22

//3-1--> using forEach
let forReducer = 0;
numbers.forEach((num) => (forReducer += num));
console.log(forReducer); //22

//4--Find method - find the first item that matches from an array. after condition
const first = numbers.find((num) => {
  return num > 5;
});
console.log(first); //6

//5--FindIndex method - find the index of the first item that matches.
const firstIndexOfNumber = numbers.findIndex((num) => {
  return num > 5;
});
console.log(firstIndexOfNumber); //2
