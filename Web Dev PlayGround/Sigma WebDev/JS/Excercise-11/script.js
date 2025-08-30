// Excercise 11 Soltuion 
// Factorial of 6 Using Reduce and for loop Method 

// Reduced Method
let arr = [1, 2, 3, 4, 5, 6]

const val = (x, y) => {
    return x * y;
}

console.log("Using Reduce Function to Calculate Factorial");
console.log(arr.reduce(val));



// For Loop Method

let x = [1, 2, 3, 4, 5, 6]
let fact = 1;
for (let index = 0; index < x.length; index++) {
    const element = x[index];
    fact = fact * element;
}

console.log("Using For Loop to Calculate Factorial");
console.log(fact);


/// Harry`s Method

console.log("Using Harry's Method to Calculate Factorial by Reduced Function");
let a = 6;

function factorial(number) {
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1,).reduce((x, y) => {
        return x * y;
    })
    return c;
}

console.log(factorial(3));

console.log("Using Harry's Method to Calculate Factorial by For Loop");

function facfor(number) {
    let fact = 1;
    for (let index = 1; index <= number; index++) {
        fact = fact * index;
    }
    return fact;
}

console.log(facfor(5));
