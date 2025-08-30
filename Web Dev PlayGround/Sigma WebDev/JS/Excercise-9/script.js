let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let op = prompt("Enter operation (+, -, *, /):");
let rand = Math.random();

console.log(rand);


let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**"
}

if (rand > 0.1) {
    // Normal calculator 
    // we use eval here to evaluate the expression
    alert(`The Result is : ${eval(`${num1} ${op} ${num2}`)}`);

}
else {
    op = obg[op];
    // 10% chance: Wrong operation (fun bug)
    alert(`The Result is : ${eval(`${num1} ${op} ${num2}`)}`);
}






// Muneeb`s Logic

// if (rand < 0.1) {
//     // 10% chance: Wrong operation (fun bug)
//     if (op == "+") {
//         console.log(num1 - num2);
//     }
//     else if (op == "-") {
//         console.log(num1 / num2);
//     }
//     else if (op == "*") {
//         console.log(num1 + num2);
//     }
//     else if (op == "/") {
//         console.log(num1 ** num2);
//     }
//     else {
//         console.log("Invalid operation");
//     }
// } else {
//     // Normal calculator
//     if (op == "+") {
//         console.log(num1 + num2);
//     }
//     else if (op == "-") {
//         console.log(num1 - num2);
//     }
//     else if (op == "*") {
//         console.log(num1 * num2);
//     }
//     else if (op == "/") {
//         console.log(num1 / num2);
//     }
//     else {
//         console.log("Invalid operation");
//     }
// }
