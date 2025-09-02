console.log("JavaScript - Selecting by Ids, Classes, and More");
// Selecting by ID
const header = document.getElementById("header");
console.log(header);
header.style.color = "blue";
header.style.backgroundColor = "lightgray";
header.style.padding = "10px";
header.style.textAlign = "center";
header.style.borderRadius = "5px";
header.style.fontFamily = "Arial, sans-serif";
header.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
header.style.marginBottom = "20px";
header.style.fontSize = "24px";
header.style.fontWeight = "bold";
header.style.textTransform = "uppercase";
header.style.letterSpacing = "2px";
header.style.cursor = "pointer";
header.addEventListener("click", () => {
    alert("Header clicked!");
});
header.addEventListener("mouseover", () => {
    header.style.backgroundColor = "darkgray";
});
header.addEventListener("mouseout", () => {
    header.style.backgroundColor = "lightgray";
});
header.title = "This is the header section";
header.tabIndex = 0;


// Selecting by Class Name
const items = document.getElementsByClassName("item");
console.log(items);
for (let i = 0; i < items.length; i++) {
    items[i].style.border = "1px solid #ccc";
    items[i].style.padding = "10px";
    items[i].style.marginBottom = "10px";
    items[i].style.borderRadius = "5px";
    items[i].style.fontFamily = "Arial, sans-serif";
    items[i].style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    items[i].style.backgroundColor = "#f9f9f9";
    items[i].style.transition = "background-color 0.3s ease";
    items[i].addEventListener("mouseover", () => {
        items[i].style.backgroundColor = "#e0e0e0";
    });
    items[i].addEventListener("mouseout", () => {
        items[i].style.backgroundColor = "#f9f9f9";
    });
    items[i].title = `This is item ${i + 1}`;
    items[i].tabIndex = 0;
}

// Selecting by Tag Name
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.fontFamily = "Georgia, serif";
    paragraphs[i].style.lineHeight = "1.6";
    paragraphs[i].style.marginBottom = "15px";
    paragraphs[i].style.color = "#333";
    paragraphs[i].style.fontSize = "16px";
    paragraphs[i].style.transition = "color 0.3s ease";
    paragraphs[i].addEventListener("mouseover", () => {
        paragraphs[i].style.color = "#555";
    });
    paragraphs[i].addEventListener("mouseout", () => {
        paragraphs[i].style.color = "#333";
    });
    paragraphs[i].title = `This is paragraph ${i + 1}`;
    paragraphs[i].tabIndex = 0;
}

// Selecting by Query Selector
const specialItem = document.querySelector(".item.special");
console.log(specialItem);
specialItem.style.backgroundColor = "#ffeb3b";
specialItem.style.fontWeight = "bold";
specialItem.style.border = "2px solid #fbc02d";
specialItem.style.padding = "15px";
specialItem.style.marginBottom = "10px";
specialItem.style.borderRadius = "5px";
specialItem.style.fontFamily = "Arial, sans-serif";
specialItem.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
specialItem.style.transition = "background-color 0.3s ease";
specialItem.addEventListener("mouseover", () => {
    specialItem.style.backgroundColor = "#fdd835";
});
specialItem.addEventListener("mouseout", () => {
    specialItem.style.backgroundColor = "#ffeb3b";
});
specialItem.title = "This is the special item";
specialItem.tabIndex = 0;
specialItem.addEventListener("click", () => {
    alert("Special item clicked!");
});
// Selecting by Query Selector All
const allItems = document.querySelectorAll(".item");
console.log(allItems);
allItems.forEach((item, index) => {
    item.style.fontFamily = "Arial, sans-serif";
    item.style.padding = "10px";
    item.style.marginBottom = "10px";
    item.style.borderRadius = "5px";
    item.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    item.style.backgroundColor = "#f1f1f1";
    item.style.transition = "background-color 0.3s ease";
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#e0e0e0";
    });
    item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "#f1f1f1";
    });
    item.title = `This is item ${index + 1}`;
    item.tabIndex = 0;
});


// Adding a new item to demonstrate dynamic selection
const newItem = document.createElement("div");
newItem.className = "item";
newItem.textContent = "Dynamically Added Item";
document.body.appendChild(newItem);
newItem.style.fontFamily = "Arial, sans-serif";
newItem.style.padding = "10px";
newItem.style.marginBottom = "10px";
newItem.style.borderRadius = "5px";
newItem.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
newItem.style.backgroundColor = "#f1f1f1";
newItem.style.transition = "background-color 0.3s ease";
newItem.addEventListener("mouseover", () => {
    newItem.style.backgroundColor = "#e0e0e0";
});
newItem.addEventListener("mouseout", () => {
    newItem.style.backgroundColor = "#f1f1f1";
});
newItem.title = "This is a dynamically added item";
newItem.tabIndex = 0;
console.log("Dynamically added item:", newItem);
// Note: The dynamically added item will not be styled by the previous querySelectorAll loop
// because it was added after the selection. To style it, we manually applied styles above.
// To include it in the selection, we would need to re-run the querySelectorAll and apply styles again.
const updatedAllItems = document.querySelectorAll(".item");
console.log("Updated all items including dynamically added one:", updatedAllItems);
updatedAllItems.forEach((item, index) => {
    item.style.fontFamily = "Arial, sans-serif";
    item.style.padding = "10px";
    item.style.marginBottom = "10px";
    item.style.borderRadius = "5px";
    item.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    item.style.backgroundColor = "#f1f1f1";
    item.style.transition = "background-color 0.3s ease";
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#e0e0e0";
    });
    item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "#f1f1f1";
    });
    item.title = `This is item ${index + 1}`;
    item.tabIndex = 0;
});
console.log("JavaScript - Selecting by Ids, Classes, and More - End");
// End of script.js