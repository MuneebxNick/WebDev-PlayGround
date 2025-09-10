console.log("Script loaded");

console.log("Hey I am nick");
console.log("Hey I am frosty");


// setTimeout(() => {
//     console.log("This is a message from the future"); // Async code
// }, 3000);

// setTimeout(() => {
//     console.log("This is Outside SetTimeout Function"); // Async code
// }, 0);

// console.log("End of script");


// What is a Callback Function?
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.


// Callback Function Example

function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye); // Passing sayGoodbye as a callback function


// Another Real Life Example
console.log("Another Real Life Example");

function getData(DataId, getNextData) {

    setTimeout(() => {
        console.log("Data", DataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000)
};

// CallBack Hell
getData(1, () => {
    getData(2, () => {
        getData(3);
    })
})

// What is a Callback Hell?
// Callback Hell refers to a situation where multiple nested callback functions are used, leading to code that is difficult to read and maintain. This often occurs in asynchronous programming when each operation depends on the result of the previous one.

// Callback Hell Example

// setTimeout(() => {
//     console.log("1st Message");
//     setTimeout(() => {
//         console.log("2nd Message");
//         setTimeout(() => {
//             console.log("3rd Message");
//             setTimeout(() => {
//                 console.log("4th Message");
//                 setTimeout(() => {
//                     console.log("5th Message");
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// This is called Callback Hell or Pyramid of Doom


// What Is Promisis?

