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
} else {
  alert("Invalid choice, please try again!")
  exit(1);
}
alert(`You selected ${selectedOrder}`)

// Step 3 - Subtype choice
// Your code goes here
let foodItem = "";
let foodMenu = [];

switch (selectedOrder) {

  case "Pizza":
    foodItem = prompt(`Choose your pizza
    1 - Margarita 
    2 - Vegeteriana
    3 - Funghi 
    Please enter the number of your choice`);
    foodMenu = ["Margarita", "Vegeteriana", "Funghi"]
    break;

  case "Pasta":
    foodItem = prompt(`Choose your pasta
    1 - Pasta Vegeteriana
    2 - Pasta w tomatosauce
    3 - Lasagna`)
    foodMenu = ["Pasta Vegeteriana", "Pasta w tomatosauce", "Lasagna"]
    break;

  case "Salad":
    foodItem = prompt(`Choose your salad
      1 - Tomatosalad
      2 - Qournsalad
      3 - Greeksalad
      `)
    foodMenu = ["Tomatosalad", "Qournsalad", "Greeksalad"]
    break;
  default:
    ("Invalid chice, please try again!")
    exit(1)
};

if (foodItem === 1) {
  alert(`Good choice! one ${foodMenu[0]} is coming up`)
} else if (foodItem === 2) {
  alert(`Good choice, one ${foodMenu[1]} is coming up`)
} else if (foodItem === 3) {
  alert(`Good choice, one ${foodMenu[2]} is coming up`)
}

// Step 4 - Age
let userAge = prompt(`Is this a kidsmeal or regular meal? Please enter your age below?`)
if (userAge <= 12) {
  prompt(`
One child-sized ${foodMenu[foodItem]} preparing that will be 50 kronas please`
  )
} else {
  prompt(`
  One regular-sized ${foodMenu[foodItem]} preparing that will be 100 kronas please`
  )
}
// Step 5 - Order confirmation
// Your code goes here
