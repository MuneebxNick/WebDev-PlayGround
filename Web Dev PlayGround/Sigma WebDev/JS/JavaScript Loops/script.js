console.log("JavaScript Loops");
// Loops are used to repeat a block of code multiple times
// There are different types of loops in JavaScript
// 1. For Loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}
// 2. While Loop
let j = 0;
while (j < 5) {
    console.log("While Loop iteration: " + j);
    j++;
}
// 3. Do...While Loop
let k = 0;
do {
    console.log("Do...While Loop iteration: " + k);
    k++;
}
while (k < 5);
// 4. For...In Loop (used for objects)
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// 5. For...Of Loop (used for iterable objects like arrays)
const colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log("Color: " + color);
}
// 6. Break and Continue
for (let m = 0; m < 10; m++) {
    if (m === 5) {
        console.log("Breaking the loop at iteration: " + m);
        break; // Exit the loop when m is 5
    }
    if (m % 2 === 0) {
        console.log("Skipping even number: " + m);
        continue; // Skip even numbers
    }
    console.log("Current number: " + m);
}
// Nested Loops
for (let x = 1; x <= 3; x++) {
    for (let y = 1; y <= 3; y++) {
        console.log("Nested Loop - x: " + x + ", y: " + y);
    }
}
// Looping through an array using forEach method
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function (fruit, index) {
    console.log("Fruit " + index + ": " + fruit);
});
// Using map method to create a new array
const upperFruits = fruits.map(function (fruit) {
    return fruit.toUpperCase();
});
console.log("Uppercase Fruits: ", upperFruits);
// Using filter method to create a new array with fruits that contain the letter 'a'
const aFruits = fruits.filter(function (fruit) {
    return fruit.toLowerCase().includes('a');
});
console.log("Fruits containing 'a': ", aFruits);
// Using reduce method to sum up numbers in an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (total, num) {
    return total + num;
}, 0);
console.log("Sum of numbers: ", sum);
// End of JavaScript Loops
console.log("End of JavaScript Loops");