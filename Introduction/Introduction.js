 // Variable Initialization
 let amount = 0; // Declaring the variable as let only in future the value is change then provide let.
 // assignment (Updating the variable value as 1000)
 amount = 1000;
 console.log("Your bill amount is Rs.", amount);

 // const variable - It is used to declare a constant variable whose value cannot be changed.
 const pi = 3.14;
 console.log("Value of pi is", pi);

 // Difference Between var and let ........
 // Example 1 -> Block Scope (instead of Function Scope)
 // if (true) {
 //     var a = 10;
 //     let b = 20;
 // }
 // console.log(a); // ✅ 10
 // console.log(b); // ❌ ReferenceError: b is not defined

 // Example 2 -> No Hoisting Confusion
 // console.log(x); // ✅ undefined (var is hoisted)
 // var x = 5;

 // console.log(y); // ❌ ReferenceError
 // let y = 10;

 // Example 3 -> No Redeclaration in the Same Scope
 // var a = 1;
 // var a = 2; // ✅ allowed

// let b = 1;
// let b = 2; // ❌ SyntaxError: Identifier 'b' has already been declared
