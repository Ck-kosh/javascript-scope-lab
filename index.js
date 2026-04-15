// GLOBAL SCOPE VARIABLES

// burgers must ONLY have these two items
const burgers = ["Hamburger", "Cheeseburger"];

// featuredDrink must be let and a string
let featuredDrink = "Strawberry Milkshake";


// FUNCTION: addBurger
function addBurger() {
  // function-scoped variable using const
  const newBurger = "Flatburger";

  // add to burgers array
  burgers.push(newBurger);
}


// IF STATEMENT (must be exactly true)
if (true) {
  // block-scoped variable using const
  const anotherNewBurger = "Maple Bacon Burger";

  // add to burgers array
  burgers.push(anotherNewBurger);
}


// FUNCTION: changeFeaturedDrink
function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
}
// GLOBAL SCOPE VARIABLES
const burgers = ["Hamburger", "Cheeseburger"];

let featuredDrink = "Strawberry Milkshake";

function addBurger() {
  const newBurger = "Flatburger";
  burgers.push(newBurger);
}

if(true){
const anotherNewBurger = "Maple Bacon Burger";
burgers.push(anotherNewBurger);
}

function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
}