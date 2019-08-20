// Function Declaration
// Hoisted
// function sayHi() {
//   return console.log("hi");
// }

// Function Expression
// Anon, not named
// Not hoisting
// Passed around or used
// const sayHi = function() {
//   return console.log("hi");
// };

// const sayHi = function sayHi() {
//   return console.log("hi");
// };

// const sayHi = ()=> {
//   return console.log("hi");
// };

// const sayHi = () => (console.log("hi"));
const sayHi = () => console.log('hi');

sayHi();
