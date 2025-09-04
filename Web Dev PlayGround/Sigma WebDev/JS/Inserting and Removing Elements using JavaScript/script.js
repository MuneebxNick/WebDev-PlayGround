console.log("Inserting and Removing Elements using JavaScript");

// Inserting Elements
let parentElement = document.getElementById("parent");
let newElement = document.createElement("div");
newElement.innerText = "I am a new element!";
parentElement.appendChild(newElement);
console.log("New element added:", newElement);


// Removing Elements
let elementToRemove = document.getElementById("child");
parentElement.removeChild(elementToRemove);
console.log("Element removed:", elementToRemove);
// Alternatively, you can use elementToRemove.remove();
// elementToRemove.remove();
// console.log("Element removed:", elementToRemove);
// Note: The above line is commented out to avoid double removal in case both methods are used.
// The remove() method is a more modern approach and directly removes the element from the DOM.
// Note: The above line is commented out to avoid double removal in case both methods are used.
// The remove() method is a more modern approach and directly removes the element from the DOM.
// elementToRemove.remove();
// console.log("Element removed:", elementToRemove);
// Note: The above line is commented out to avoid double removal in case both methods are used.

