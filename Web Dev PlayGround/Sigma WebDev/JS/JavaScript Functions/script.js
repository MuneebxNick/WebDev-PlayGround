console.log("JavaScript Functions");

// Function Declaration

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Function Expression

const add = function (a, b) {
    return a + b;
}
console.log(add(5, 3));

// Arrow Function

const multiply = (a, b) => a * b;
console.log(multiply(4, 6));

// Immediately Invoked Function Expression (IIFE)

(function () {
    console.log("This is an IIFE!");
})();

// Function with Default Parameters

function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log(power(3)); // 3^2
console.log(power(2, 3)); // 2^3

// Function with Rest Parameters

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// Function with Callback

function fetchData(callback) {
    setTimeout(() => {
        const data = "Sample Data";
        callback(data);
    }, 1000);
}
fetchData((data) => {
    console.log("Fetched Data:", data);
}
);

// Recursive Function

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 5! = 120
// Function with Closure
function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// Function with Method
const person = {
    name: "Bob",
    greet() {
        return `Hi, I'm ${this.name}`;
    }
};
console.log(person.greet());
// Async Function
async function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Charlie", age: 30 });
        }, 1000);
    });
}
fetchUser().then(user => console.log("User:", user));
// Function with Spread Operator
function max(...args) {
    return Math.max(...args);
}
console.log(max(1, 5, 3, 9, 2)); // 9
// Function with Destructured Parameters
function display({ name, age }) {
    return `Name: ${name}, Age: ${age}`;
}
console.log(display({ name: "Diana", age: 25 }));
// Generator Function
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// Function with Try-Catch
function safeDivide(a, b) {
    try {
        if (b === 0) throw new Error("Division by zero");
        return a / b;
    } catch (error) {
        return error.message;
    }
}
console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(10, 0)); // Division by zero
// Function with Template Literals
function createMessage(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
}
console.log(createMessage("Eve", 28));
// Function with Array Methods
function doubleValues(arr) {
    return arr.map(x => x * 2);
}
console.log(doubleValues([1, 2, 3, 4])); // [2, 4, 6, 8]
// Function with Object Methods
function getKeys(obj) {
    return Object.keys(obj);
}
console.log(getKeys({ a: 1, b: 2, c: 3 })); // ['a', 'b', 'c']
// Function with Date Object
function formatDate(date) {
    return date.toDateString();
}
console.log(formatDate(new Date())); // Current date
// Function with Math Object
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(1, 10)); // Random int between 1 and 10
// Function with String Methods
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize("hello")); // Hello
// Function with Number Methods
function toFixed(num, digits) {
    return num.toFixed(digits);
}
console.log(toFixed(3.14159, 2)); // 3.14
// Function with Boolean Logic
function isAdult(age) {
    return age >= 18;
}
console.log(isAdult(20)); // true
console.log(isAdult(16)); // false
// Function with Type Checking
function isString(value) {
    return typeof value === 'string';
}
console.log(isString("test")); // true
console.log(isString(123)); // false
// Function with Error Handling
function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        return null;
    }
}
console.log(parseJSON('{"key": "value"}')); // { key: 'value' }
console.log(parseJSON('invalid json')); // null
// Function with Module Pattern
const CounterModule = (function () {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        }
    };
})();
console.log(CounterModule.increment()); // 1
console.log(CounterModule.increment()); // 2
console.log(CounterModule.decrement()); // 1
console.log(CounterModule.getCount()); // 1
// Function with Currying
function curryAdd(a) {
    return function (b) {
        return a + b;
    }
}
const addFive = curryAdd(5);
console.log(addFive(3)); // 8
console.log(addFive(10)); // 15
// Function with Memoization
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}
const fib = memoize(function (n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
});
console.log(fib(10)); // 55