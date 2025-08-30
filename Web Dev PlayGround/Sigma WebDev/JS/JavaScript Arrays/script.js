console.log("JavaScript Arrays");
let arr = [1, 2, 3, 4, 5];
arr[0] = "Muneeb";
arr[1] = "Ali";
arr[2] = "Ahmed";
arr[3] = "Alvi";
arr[4] = "Developer";
arr[5] = "Pakistan";
// arr[6] = "Hello"; // not recommended


console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]); // undefined



// Recommended way to add elements to an array
arr.push("Hello");
arr.push("World");
arr.push("!!!");
console.log(arr);
console.log(arr.length);

// Accessing the last element of an array
console.log(arr[arr.length - 1]);

// Accessing the second last element of an array
console.log(arr[arr.length - 2]);

// Accessing the third last element of an array
console.log(arr[arr.length - 3]);


// Arrays Functions
console.log("Array Functions");
let myArr = ["Muneeb", "Ali", "Ahmed", "Alvi", "Developer", "Pakistan"];
console.log(myArr);
console.log(myArr.length);
console.log(myArr.toString());
console.log(myArr.join(" - "));
console.log(myArr.pop(), "popped element");
console.log(myArr);
console.log(myArr.push("New Element"), "new length");
console.log(myArr);
console.log(myArr);
console.log(myArr.shift(), "shifted element");
console.log(myArr);
console.log(myArr);
console.log(myArr.unshift("New Element at Start"), "new length");
console.log(myArr);

let newArr = ["Item1", "Item2", "Item3"];
console.log(newArr);
let combinedArr = myArr.concat(newArr);
console.log(combinedArr);
console.log(combinedArr.sort());
console.log(combinedArr.reverse());
console.log(combinedArr.slice(1, 4));
console.log(combinedArr);
console.log(combinedArr.length);
combinedArr.splice(2, 3, "Spliced Item1", "Spliced Item2");
console.log(combinedArr);
console.log(combinedArr.length);
combinedArr.splice(2, 0, "Inserted Item1", "Inserted Item2");
console.log(combinedArr);
console.log(combinedArr.length);
let numbers = [5, 3, 8, 1, 2];
console.log(numbers);
numbers.sort();
console.log(numbers);
numbers.sort(function (a, b) { return a - b });
console.log(numbers);
numbers.sort(function (a, b) { return b - a });
console.log(numbers);
let emptyArr = new Array();
console.log(emptyArr);
let anotherEmptyArr = [];
console.log(anotherEmptyArr);
emptyArr.push(1);
emptyArr.push(2);
emptyArr.push(3);
console.log(emptyArr);
emptyArr.pop();
console.log(emptyArr);
emptyArr.shift();
console.log(emptyArr);
emptyArr.unshift(0);
console.log(emptyArr);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArr = [...arr1, ...arr2];
console.log(mergedArr);
let copyArr = [...mergedArr];
console.log(copyArr);
copyArr.push(7);
console.log(mergedArr);

// Arrays With Loops

console.log("Arrays With Loops");
let loopArr = ["Muneeb", "Alvi", "Ahmed", "Ali", "Developer", "Pakistan"];
console.log(loopArr);
console.log(loopArr.length);

for (let i = 0; i < loopArr.length; i++) {
    console.log(loopArr[i]);
}

loopArr.forEach((value, index, loopArr) => {
    console.log(value, index, loopArr)
});


let object = {
    name: "Muneeb",
    lastName: "Alvi",
    age: 22,
    profession: "Developer",
    country: "Pakistan"
};

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key, element);
    }
}

for (const iterator of loopArr) {
    console.log(iterator);
}

// Map , Filter , Reduce

console.log("Map , Filter , Reduce");
let mapArr = [1, 2, 3, 4, 5];
console.log(mapArr);

// map using for loop
let newarr = [];
for (let index = 0; index < mapArr.length; index++) {
    const element = mapArr[index];
    newarr.push(element * element);
}
console.log("Using For Loop to Map");
console.log(newarr);

// Map Using Map Function
let squaredArr = mapArr.map((value) => {
    return value * value;
});
console.log("Using Map Function to Map");
console.log(squaredArr);


// Filter Using For Loop
let filteredArr = [];
for (let index = 0; index < mapArr.length; index++) {
    const element = mapArr[index];
    if (element % 2 === 0) {
        filteredArr.push(element);
    }
}

console.log("Using For Loop to Filter");
console.log(filteredArr);
// Filter Using Filter Function

// const evenval = (value) => {
//     return value % 2 === 0;
// }

let evenArr = mapArr.filter((value) => {
    return value % 2 === 0;
});
console.log("Using Filter Function to Filter");
console.log(evenArr);

// Reduce Using For Loop
let sum = 0;
for (let index = 0; index < mapArr.length; index++) {
    const element = mapArr[index];
    sum += element;
}
console.log("Using For Loop to Reduce");
console.log(sum);

// Reduce Using Reduce Function
let reducedSum = mapArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("Using Reduce Function to Reduce");
console.log(reducedSum);

// Reduce Using Reduce Function
let x = [1, 2, 3, 4, 5, 6]

const red = (a, b) => {
    return a * b;
}

console.log(x.reduce(red));













































