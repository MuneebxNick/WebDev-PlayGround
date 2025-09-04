console.log("Script loaded");

// let boxes = document.querySelectorAll(".box");
// let boxes = document.getElementsByClassName("box");
// let boxes = document.getElementsByTagName("div");

// "Harray`s Method"

let boxes = document.querySelector(".container").children;

// console.log(boxes);

// function getRandomColor() {
//     let val1 = Math.floor(Math.random() * 256);  // floor will round of the value to the nearest lower integer
//     let val2 = Math.floor(Math.random() * 256);
//     let val3 = Math.floor(Math.random() * 256);
//     let color = `rgb(${val1}, ${val2}, ${val3})`;
//     return color;
// }

// Using Math Fucntion 
function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255); // ceil will round of the value to the nearest higher integer
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    let color = `rgb(${val1}, ${val2}, ${val3})`;
    return color;
}
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();

});


// document.querySelectorAll(".box").forEach(e => {
//     r = Math.floor(0 + Math.random() * 256);
//     g = Math.floor(0 + Math.random() * 256);
//     b = Math.floor(0 + Math.random() * 256);
//     e.style.backgroundColor = `rgb(${r},${g},${b})`;
//     e.style.color = `rgb(${255 - r},${255 - g},${255 - b})`;
// })