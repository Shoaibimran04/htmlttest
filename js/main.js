console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/*
shoaib imran 
200528971
*/

// Step 2: Create a block scoped, immutable variable that stores an empty array
const array=[]

// Step 3: Add the 3 people's names to the array
array=["barry", "mary", "jack"]

// Step 4: Remove the second array item from the array
const a = array.shift();

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
const result = arr.map(function(element){
    return element.ToUpperCase();
});

// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
const h2 = document.querySelector("aside h2");
h2.addEventListener("click", function () {
    alert("Hello from Boo the World's Cutest Dog!");
});
