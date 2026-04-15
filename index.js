// Write your solution in this file!
// 🌍 GLOBAL SCOPE VARIABLES
const restaurantName = "Flatburger";

const burgers = ["Classic Burger", "Cheese Burger", "Veggie Burger"];
const milkshakes = ["Vanilla Shake", "Chocolate Shake", "Strawberry Shake"];

// 🍔 FUNCTION: Display Burger Menu (Function Scope)
function showBurgerMenu() {
  let menu = `${restaurantName} Burger Menu:\n`; // function-scoped variable

  for (let i = 0; i < burgers.length; i++) {
    menu += `${i + 1}. ${burgers[i]}\n`;
  }

  console.log(menu);
}

// 🥤 FUNCTION: Display Milkshake Menu (Function Scope)
function showMilkshakeMenu() {
  let menu = `${restaurantName} Milkshake Menu:\n`;

  for (let i = 0; i < milkshakes.length; i++) {
    menu += `${i + 1}. ${milkshakes[i]}\n`;
  }

  console.log(menu);
}

// ⭐ FUNCTION: Feature a Burger (Block Scope)
function featureBurger(index) {
  if (index >= 0 && index < burgers.length) {
    let selectedBurger = burgers[index]; // block-scoped
    console.log(`🔥 Featured Burger: ${selectedBurger}`);
  } else {
    console.log("Invalid burger selection");
  }
}

// ⭐ FUNCTION: Feature a Milkshake (Block Scope)
function featureMilkshake(index) {
  if (index >= 0 && index < milkshakes.length) {
    let selectedShake = milkshakes[index]; // block-scoped
    console.log(`🥤 Featured Milkshake: ${selectedShake}`);
  } else {
    console.log("Invalid milkshake selection");
  }
}

// 🚀 RUN THE PROGRAM
showBurgerMenu();
showMilkshakeMenu();

featureBurger(1);     // Cheese Burger
featureMilkshake(2);  // Strawberry Shake