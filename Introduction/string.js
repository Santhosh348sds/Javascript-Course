// Strings are the sequesnce od characters.

// Example:
let str = "Hello World!"; // String with double quotes
let str2 = 'Hello World!'; // String with single quotes
let str3 = `Hello World!`; // String with backticks (template literals)
let str4 = new String("Hello World!"); // String object
let str5 = new String(123); // String object with number
console.log(str, str2, str3, str4, str5); // Output: Hello World! Hello World! Hello World! [String: 'Hello World!'] [String: '123']
console.log(typeof str, typeof str2, typeof str3, typeof str4, typeof str5); // Output: string string string object object

// String methods (Invoking a Method) and properties
console.log("str.concat('How are you?') is: ", str.concat(" How are you?")); // Output: Hello World! How are you? (concatenates the string with another string)
console.log("str.length is: ", str.length); // Output: 12 (length of the string)
/* 
Partition of string 
1. str.slice(start, end) - extracts a part of a string and returns it as a new string.
2. str.substring(start, end) - extracts characters from a string between two specified indices.
3. str.substr(start, length) - extracts a part of a string starting at a specified position and extending for a given number of characters.
*/
console.log("str.slice(0, 5) is: ", str.slice(0, 5)); // Output: Hello (slices the string from index 0 to 5)
console.log("str.slice(-5) is: ", str.slice(-5)); // Output: World! (slices the string from index -5 to the end)
console.log("str.substring(0, 5) is: ", str.substring(2, 5)); // Output: llo (similar to slice but does not accept negative indices)
console.log("str.substr(0, 5) is: ", str.substr(2, 5)); // Output: llo W(slices the string from index 0 to 5 but accepts negative indices)
// String replace method
console.log("str.replace('World', 'JavaScript') is: ", str.replace("World", "JavaScript")); // Output: Hello JavaScript! (replaces 'World' with 'JavaScript')
console.log("str.replaceAll('o', 'O') is: ", str.replaceAll("o", "O")); // Output: HellO WOrld! (replaces all occurrences of 'o' with 'O')
// Changing the case of the string
console.log("str.toUpperCase() is: ", str.toUpperCase()); // Output: HELLO WORLD! (converts the string to uppercase)
console.log("str.toLowerCase() is: ", str.toLowerCase()); // Output: hello world! (converts the string to lowercase)
// trim() method removes whitespace from both ends (front and back not a middle) of a string
console.log("str.trim() is: ", str.trim()); // Output: Hello World! (removes whitespace from both ends of the string)
console.log("str.trimStart() is: ", str.trimStart()); // Output: Hello World! (removes whitespace from the start of the string)
console.log("str.trimEnd() is: ", str.trimEnd()); // Output: Hello World! (removes whitespace from the end of the string)
// pad() add padding to the start or end of a string to reach a specified length.
console.log("str.padStart(20, '*') is: ", str.padStart(20, "*")); // Output: **********Hello World! (pads the string with '*' to a length of 20)
console.log("str.padEnd(20, '*') is: ", str.padEnd(20, "*")); // Output: Hello World!********** (pads the string with '*' to a length of 20)
// Retrieving characters from a string using the Index
console.log("str[0] is: ", str[0]); // Output: H (first character of the string)
console.log("str.charAt(0) is: ", str.charAt(0)); // Output: H (first character of the string)
console.log("str.charCodeAt(0) is: ", str.charCodeAt(0)); // Output: 72 (ASCII (Unicode) code of 'H')
console.log("str.charAt(str.length - 1) is: ", str.charAt(str.length - 1)); // Output: ! (last character of the string)
// Retrieving the index of a character in a string
console.log("str.indexOf('o') is: ", str.indexOf("o")); // Output: 4 (index of first occurrence of 'o')
console.log("str.lastIndexOf('o') is: ", str.lastIndexOf("o")); // Output: 7 (index of last occurrence of 'o')
console.log("str.search('o') is: ", str.search("o")); // Output: 4 (index of first occurrence of 'o')
console.log("str.includes('World') is: ", str.includes("World")); // Output: true (checks if 'World' is present in the string)
console.log("str.str.startsWith('Hello') is: ", str.startsWith("Hello")); // Output: true (checks if the string starts with 'Hello')
console.log("str.endsWith('!') is: ", str.endsWith("!")); // Output: true (checks if the string ends with '!')
// String split and join methods
console.log("str.split(' ') is: ", str.split(" ")); // Output: [ 'Hello', 'World!' ] (splits the string into an array of substrings)
console.log("str.split('o') is: ", str.split("o")); // Output: [ 'Hell', ' W', 'rld!' ] (splits the string into an array of substrings using 'o' as a separator)
console.log("str.split('o').join('O') is: ", str.split("o").join("O")); // Output: HellO WOrld! (splits the string into an array of substrings using 'o' as a separator and joins them with 'O')
console.log('str.split("o").map((s) => s.toUpperCase()).join("O") is: ', str.split("o").map((s) => s.toUpperCase()).join("O")); // Output: HellO WOrld! (splits the string into an array of substrings using 'o' as a separator, converts each substring to uppercase and joins them with 'O')
console.log("str.repeat(3) is: ", str.repeat(3)); // Output: Hello World!Hello World!Hello World! (repeats the string 3 times)

console.log("str.localeCompare('Hello') is: ", str.localeCompare("Hello")); // Output: 0 (compares the string with 'Hello' and returns 0 if they are equal, -1 if str < 'Hello', 1 if str > 'Hello')
console.log("str.str.valueOf() is: ", str.valueOf()); // Output: Hello World! (returns the primitive value of the string object)
console.log("str.toString() is: ", str.toString()); // Output: Hello World! (returns the string representation of the string object)

// Exercise -> Displaying the letters randomly from user Name
const emp = "Santhosh Kumar";
console.log("Displaying the letters randomly from user Name: ", userName.charAt(Math.random() * userName.length-1));