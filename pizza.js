function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var deepDish = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])
var handTossed = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var veganPizza = pizzaOven("baked", "red", "vegan", "veggies");
var meatLovers = pizzaOven("deep dish", "marinara", "mozarella", ["bacon", "sausage", "chicken", "pepperoni"]);

var pizzas = [deepDish, handTossed, veganPizza, meatLovers];

function randomPizza() {
    var newPizza = {};
    newPizza.crustType = pizzas[Math.floor((Math.random() * 4))].crustType;
    newPizza.sauceType = pizzas[Math.floor((Math.random() * 4))].sauceType;
    newPizza.cheese = pizzas[Math.floor((Math.random() * 4))].cheese;
    newPizza.toppings = pizzas[Math.floor((Math.random() * 4))].toppings;
    return newPizza;
}

console.log(randomPizza());
