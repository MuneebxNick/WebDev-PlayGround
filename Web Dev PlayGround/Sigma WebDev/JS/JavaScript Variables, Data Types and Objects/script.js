console.log("JavaScript Variables, Data Types and Objects");

// Variables
var name = "John"; // String
let age = 30; // Number
const isMarried = false; // Boolean
var height; // Undefined
var weight = null; // Null
let bigNumber = 12345678901234567890n; // BigInt
let symbol = Symbol("id"); // Symbol
console.log(name, age, isMarried, height, weight, bigNumber, symbol);
console.log(typeof name, typeof age, typeof isMarried, typeof height, typeof weight, typeof bigNumber, typeof symbol);

// Reassigning variables
name = "Doe";
age = 31;
console.log(name, age);

// Data Types
let stringData = "Hello, World!";
let numberData = 42;
let booleanData = true;
let arrayData = [1, 2, 3, 4, 5];
let objectData = { firstName: "John", lastName: "Doe" };
let functionData = function () { return "Hello"; };
let nullData = null;
let undefinedData;
console.log(stringData, numberData, booleanData, arrayData, objectData, functionData(), nullData, undefinedData);
console.log(typeof stringData, typeof numberData, typeof booleanData, typeof arrayData, typeof objectData, typeof functionData, typeof nullData, typeof undefinedData);

// Objects
let person = {
    firstName: "Jane",
    "job title": "Software Engineer",
    lastName: "Doe",
    age: 25,
    isEmployed: true,
    hobbies: ["reading", "traveling", "swimming"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person);
console.log(person["job title"]); // Accessing property with space in the name
console.log(person.firstName, person.lastName, person.age, person.isEmployed);
console.log(person.hobbies);
console.log(person.address.street, person.address.city, person.address.country);
console.log(person.fullName());

// Modifying object properties
person.age = 26;
person.hobbies.push("coding");
console.log(person.age);
console.log(person.hobbies);
// Adding new properties
