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
    ("Invalid choice, please try again!")
    exit(1)
};

if (foodItem === "1") {
  alert(`Good choice! one ${foodMenu[0]} is coming up`)
} else if (foodItem === "2") {
  alert(`Good choice, one ${foodMenu[1]} is coming up`)
} else if (foodItem === "3") {
  alert(`Good choice, one ${foodMenu[2]} is coming up`)
}

// Step 4 - Age
let userAge = prompt(`Is this food for a child or an adult? Type your age`)
if (userAge <= 12) {
  let approval = prompt(`
One child-sized ${foodMenu[foodItem - 1]} preparing that will be 5 euros. \nAre you sure you want to order this? \nEnter a number to confirm!
1 - Yes 
2 - No`);

  if (approval === "1") {
    alert("Your order is confirmed, thank you!")
  } else if (approval === "2") {
    alert("Your order is cancelled, welcome back another time")
  }
} else {
  prompt(`
  One regular-sized ${foodMenu[foodItem - 1]} preparing that will be 10 euros. Are you sure you want to order this? Enter a number to confirm!
  1 - Yes 
2 - No`
  )
}
// Step 5 - Order confirmation
// Your code goes here

