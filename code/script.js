// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const guestName = prompt(`What is your name?`);
alert(`Hello ${guestName} and welcome!`)


// Step 2 - Food choice
const foodOrder = prompt(
  `What would you like to eat today?
1 - Pizza
2 - Pasta
3 - Salad
Please enter the number of your choice
`
)
let selectedOrder = "";
if (foodOrder === "1") {
  selectedOrder = "Pizza"
} else if (foodOrder === "2") {
  selectedOrder = "Pasta"
} else if (foodOrder === "3") {
  selectedOrder = "Salad"
}
alert(`Good choice, one ${selectedOrder}`)


// Step 3 - Subtype choice
// Your code goes here


// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
