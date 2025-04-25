// In JavaScript, prompt() is a built-in function used to display a dialog box that prompts the user to input some text.

// It returns the text entered by the user or null if the user cancels the prompt.
let userName = prompt("Enter Your Name");
console.log("Hi", `${userName}!`);

// prompt() always returns a string, even if the user enters a number.
let number = prompt("Enter the Number"); // e.g., user inputs 4
console.log(number + 10);                // Outputs: 410

// To convert the input to a number, use Number() or parseInt()
let number1 = prompt("Enter the Number");
console.log(Number(number1) + 10); // Outputs: 14 (if user input is 4)

