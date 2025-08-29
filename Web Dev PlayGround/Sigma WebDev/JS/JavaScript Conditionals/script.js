console.log("Operators & JavaScript Conditionals");
// Operators
let a = 10;
let b = 5;
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus
console.log("a ** b =", a ** b); // Exponentiation
console.log("a++ =", a++); // Increment
console.log("++a =", ++a); // Pre-increment
console.log("a-- =", a--); // Decrement
console.log("--a =", --a); // Pre-decrement
console.log("a == b =", a == b); // Equality
console.log("a != b =", a != b); // Inequality
console.log("a === b =", a === b); // Strict Equality
console.log("a !== b =", a !== b); // Strict Inequality
console.log("a > b =", a > b); // Greater than
console.log("a < b =", a < b); // Less than
console.log("a >= b =", a >= b); // Greater than or equal to
console.log("a <= b =", a <= b); // Less than or equal to
console.log("a && b =", a && b); // Logical AND
console.log("a || b =", a || b); // Logical OR
console.log("!a =", !a); // Logical NOT
console.log("a & b =", a & b); // Bitwise AND
console.log("a | b =", a | b); // Bitwise OR
console.log("a ^ b =", a ^ b); // Bitwise XOR
console.log("~a =", ~a); // Bitwise NOT
console.log("a << 1 =", a << 1); // Left shift
console.log("a >> 1 =", a >> 1); // Right shift
console.log("a >>> 1 =", a >>> 1); // Unsigned right shift
console.log("a += b =", a += b); // Addition assignment
console.log("a -= b =", a -= b); // Subtraction assignment
console.log("a *= b =", a *= b); // Multiplication assignment
console.log("a /= b =", a /= b); // Division assignment
console.log("a %= b =", a %= b); // Modulus assignment
console.log("a **= b =", a **= b); // Exponentiation assignment
console.log("a &= b =", a &= b); // Bitwise AND assignment
console.log("a |= b =", a |= b); // Bitwise OR assignment
console.log("a ^= b =", a ^= b); // Bitwise XOR assignment
console.log("a <<= 1 =", a <<= 1); // Left shift assignment
console.log("a >>= 1 =", a >>= 1); // Right shift assignment
console.log("a >>>= 1 =", a >>>= 1); // Unsigned right shift assignment
console.log("typeof a =", typeof a); // Typeof operator
console.log("typeof b =", typeof b); // Typeof operator
console.log("a instanceof Number =", a instanceof Number); // Instanceof operator
console.log("b instanceof Number =", b instanceof Number); // Instanceof operator

// JavaScript Conditionals
let age = 20;
if (age < 18) {
    console.log("You are a minor.");
}
else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Wednesday":
        console.log("Midweek day.");
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    default:
        console.log("It's just another day.");
}
let canVote = (age >= 18) ? "You can vote." : "You cannot vote.";
console.log(canVote);
let score = 85;
let grade = (score >= 90) ? "A" :
    (score >= 80) ? "B" :
        (score >= 70) ? "C" :
            (score >= 60) ? "D" : "F";
console.log("Your grade is:", grade);
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Your discount is:", discount * 100 + "%");
let num = 5;
let parity = (num % 2 === 0) ? "even" : "odd";
console.log("The number is", parity);
let temperature = 30;
let weather = (temperature > 25) ? "It's hot outside." : "It's cold outside.";
console.log(weather);
let time = 14;
let greeting = (time < 12) ? "Good morning!" :
    (time < 18) ? "Good afternoon!" : "Good evening!";
console.log(greeting);

