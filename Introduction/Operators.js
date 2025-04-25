/*
Operators
---------

Arithmetic Operators:  +  -  *  **  /  %  ++  --
Assignment Operators: =  +=  -=  *=  /=  %=  **=
Comparison Operators: ==  ===  !=  !==  >  <  >=  <=  ?:
Logical Operators: && || !
Bitwise Operators: &  |  ~  ^  <<  >> >>>

*/

// Arithmetic Operators (+, -, *, /, %, **, ++, --)
let a = 10;
let b = 5;
console.log("Arithmetic Operators (+, -, *, /, %, **, ++, --) ", a, b); 
console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5    
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0
console.log("Exponentiation:", a ** b); // 100000
console.log("Pre Increment:", ++a); // 11 (pre-increment)
console.log("Pre Decrement:", --b); // 4 (pre-decrement)
console.log("Post Increment:", a++); // 11 (post-increment)
console.log("Post Decrement:", b--); // 4 (post-decrement)
console.log("Final values of Arithmetic Operator variables");
console.log("Final value of a:", a); // 12 (after post-increment)
console.log("Final value of b:", b); // 3 (after post-decrement)

// Assignment Operators (=, +=, -=, *=, /=, %=, **=)
let x = 10;
let y = 5;
console.log("Assignment Operators (=, +=, -=, *=, /=, %=, **=) ", x, y);
console.log("x after +=:", x += y); // 15
console.log("x after -=", x -= y); // 10
console.log("x after *=", x *= y); // 50
console.log("x after /=", x /= y); // 10
console.log("x after %=", x %= y); // 0
console.log("x after **=", x **= y); // 0 (0 raised to any power is 0)
console.log("Final values of Assignment Operator variables");
console.log("Final value of x:", x); // 0 (after all operations)

// Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
let num1 = 10;
let num2 = "10";
console.log("Comparison Operators (==, ===, !=, !==, >, <, >=, <=) ", num1, num2);
console.log("Equality (==):", num1 == num2); // true (loose equality)
console.log("Strict Equality (===):", num1 === num2); // false (strict equality)
console.log("Inequality (!=):", num1 != num2); // false (loose inequality)
console.log("Strict Inequality (!==):", num1 !== num2); // true (strict inequality)
console.log("Greater than (>):", num1 > num2); // false
console.log("Less than (<):", num1 < num2); // false
console.log("Greater than or equal to (>=):", num1 >= num2); // true
console.log("Less than or equal to (<=):", num1 <= num2); // true
console.log("Final values of Comparison Operators", num1, num2); // 10 "10" (no change in original values)

// Logical Operators (&&, ||, !)
let condition1 = true;
let condition2 = false;
console.log("Logical Operators (&&, ||, !) ", condition1, condition2);
console.log("Logical AND (&&):", condition1 && condition2); // false (both conditions must be true)
console.log("Logical OR (||):", condition1 || condition2); // true (at least one condition must be true)
console.log("Logical NOT (!):", !condition1); // false (negates the condition)
console.log("Final values of Logical Operators", condition1, condition2); // true false (no change in original values)


// Bitwise Operators (&, |, ^, ~, <<, >>)
let bit1 = 5; // 0101 in binary
let bit2 = 3; // 0011 in binary
console.log("Bitwise Operators (&, |, ^, ~, <<, >>) ", bit1, bit2);
console.log("Bitwise AND (&):", bit1 & bit2); // 1 (0001 in binary)
console.log("Bitwise OR (|):", bit1 | bit2); // 7 (0111 in binary)
console.log("Bitwise XOR (^):", bit1 ^ bit2); // 6 (0110 in binary)
console.log("Bitwise NOT (~):", ~bit1); // -6 (inverts all bits)
console.log("Left Shift (<<):", bit1 << 1); // 10 (1010 in binary)
console.log("Right Shift (>>):", bit1 >> 1); // 2 (0010 in binary)
console.log("Final values of Bitwise Operators", bit1, bit2); // 5 3 (no change in original values)
