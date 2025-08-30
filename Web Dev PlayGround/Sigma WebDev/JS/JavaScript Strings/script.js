console.log("JavaScript Strings");
let str = "Hello, World!";
console.log(str.length); // Length of the string
console.log(str.toUpperCase()); // Convert to uppercase
console.log(str.toLowerCase()); // Convert to lowercase
console.log(str.indexOf("World")); // Find the index of a substring
console.log(str.slice(0, 5)); // Extract a substring
console.log(str.replace("World", "JavaScript")); // Replace a substring
console.log(str.split(", ")); // Split the string into an array
console.log(str.charAt(0)); // Get character at a specific index
console.log(str.includes("Hello")); // Check if substring exists
console.log(str.startsWith("Hello")); // Check if string starts with a substring
console.log(str.endsWith("!")); // Check if string ends with a substring
console.log(str.concat(" How are you?", "Nick Here!")); // Concatenate strings


let name = "Alice";
let f_name = "John";

console.log(`My name is ${name} and my Friend Name is ${f_name}.`);


let greeting = `Hello, ${name}! Welcome to JavaScript Strings.`;
console.log(greeting);

console.log("First Name: " + f_name + ", Last Name: " + name + ".");

console.log("First Name using template literals: " + `${f_name}` + ", Last Name using template literals: " + `${name}.`);


console.log(`The length of the greeting is: ${greeting.length}`);

console.log("String manipulation complete.");

