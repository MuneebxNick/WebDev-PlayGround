console.log("JavaScript DOM - Children, Parent & Sibling Nodes");
// Select the element with class 'child-two'
const childTwo = document.querySelector('.child-two');
console.log(childTwo);
// Log the parent node of 'child-two'
console.log(childTwo.parentNode);
// Log the parent element of 'child-two'
console.log(childTwo.parentElement);
// Change the background color of the parent element
childTwo.parentElement.style.backgroundColor = 'lightblue';
// Log the child nodes of the parent element
console.log(childTwo.parentElement.childNodes);
// Log the children of the parent element
console.log(childTwo.parentElement.children);
// Change the background color of the first child
childTwo.parentElement.children[0].style.backgroundColor = 'yellow';
// Change the background color of the last child
childTwo.parentElement.children[2].style.backgroundColor = 'orange';
// Log the first child of the parent element
console.log(childTwo.parentElement.firstElementChild);
// Change the background color of the first child
childTwo.parentElement.firstElementChild.style.backgroundColor = 'red';
// Log the last child of the parent element
console.log(childTwo.parentElement.lastElementChild);
// Change the background color of the last child
childTwo.parentElement.lastElementChild.style.backgroundColor = 'green';
// Log the next sibling of 'child-two'
console.log(childTwo.nextElementSibling);
// Change the background color of the next sibling
childTwo.nextElementSibling.style.backgroundColor = 'purple';
// Log the previous sibling of 'child-two'
console.log(childTwo.previousElementSibling);
// Change the background color of the previous sibling
childTwo.previousElementSibling.style.backgroundColor = 'pink';
// Log the next sibling of the next sibling
console.log(childTwo.nextElementSibling.nextElementSibling);
// Change the background color of the next sibling of the next sibling
childTwo.nextElementSibling.nextElementSibling.style.backgroundColor = 'cyan';
// Log the previous sibling of the previous sibling
console.log(childTwo.previousElementSibling.previousElementSibling);
// Change the background color of the previous sibling of the previous sibling
childTwo.previousElementSibling.previousElementSibling.style.backgroundColor = 'magenta';
// Log the parent of the parent element
console.log(childTwo.parentElement.parentElement);
// Change the background color of the parent of the parent element
childTwo.parentElement.parentElement.style.backgroundColor = 'lightgrey';