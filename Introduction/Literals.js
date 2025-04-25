// Javascript Literals is a ECMAScript (Introduced in 2015) ES6, and it has a set of rules for writing code.

let firstName = "John"; 
let lastName = "Doe"; 
let city = "New York"; 
console.log(firstName + " " + lastName + " lives in " + city); // Output: John Doe lives in New York

// Template literals (backticks) allow for multi-line strings and string interpolation
console.log(`Hello, my name is ${firstName} ${lastName} and I live in ${city}.`); // Output: Hello, my name is John Doe and I live in New York

// ❌ Error when using single or double quotes for multi-line strings
// let msg = 'Happy
// Birthday!';

// ✅ Backticks allow for multi-line strings
let msg = `Happy 
Birthday!`;
console.log(msg); // Output: Happy Birthday! (multi-line string using template literals)

// ❌ Error when using single or double quotes for string interpolation
// let msg2 = 'cat's name is toto';
// let msg2 = "cat's name is "toto""; 

// ✅ Backticks allow for string interpolation
let msg2 = `cat's name is "toto"`;

// Exercise -> Use variables itemCount and total to print the Numbers.
let itemCount = 5;
let total = 95;
console.log(`You have ${itemCount} items in your cart. 
Your total is $${total}.`); 
// Output: You have 5 items in your cart. 
//         Your total is $95.


