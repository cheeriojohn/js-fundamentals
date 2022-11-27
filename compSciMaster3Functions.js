// const holidayDestination = () => {
//     console.log("Yay, I'm going in holiday!");
// }

// holidayDestination();

// let sayHello = (friend, drink) => {
//     console.log(`Hi there ${friend}, do you fancy a ${drink}`)
// }

// sayHello("Henry", "coffee");

// const multiply = (num1, num2) => {
//     return num1 * num2
// }

// console.log(multiply(5, 2));

// const replenishStock = (productCode) => {
//     console.log(`order product number ${productCode} stock is low!`)
// }

// const checkStock = (productCode, quantity, originalPrice) => {
//     if (quantity <= 10) {
//         replenishStock(productCode)
//     } else if (quantity > 100) {
//         reducePrice(productCode, originalPrice)
//     } else {
//         console.log("Don't order stock");
//     }
// }

// const reducePrice = (productCode, originalPrice) => {
//     let salePrice = originalPrice /= 2
//     console.log(`Product number ${productCode} is now £${salePrice}`);
// }

// checkStock(23456, 5, 100);

// console.log("\nLOOPS ACTIVITY 3\n");

// const person = {
//     firstName: "Jamie",
//     lastName: "Lightsabre",
//     ageInYears: 345,
//     faveFilm: "Star Wars",
//     occupation: "Space traveller",
//     married: false,
//     homeOwner: false,
// }


// console.log(person.homeOwner + '\n')

// console.log(`My last name is ${person.lastName}\n`);
// console.log(`I am ${person["ageInYears"]} old\n`)

// console.log("\nFUNCTIONS no.1\n");

// let day = "Monday";
// const pet = {
//     species: "dinosaur",
//     name: "Tiddles",
//     petColour: "blue",
//     faveActivity: "eating other animals",
//     homeowner: false,
//     petAge: 567
//     hobbies: [
//         "exploring",
//         "sleeping",
//         'roaring',
//         "scratching"],
// marketingOp() {
//     if() {this.petAge <= 100}
// }
// }

// // console.log(`My pet is a large ${pet.species} called ${pet.name} and his favourite activity is ${pet.faveActivity}!\n`)

// pet.homeowner = true
// console.log(`If you ask whether my pet is a homeowner, the answer is ${pet.homeowner} and he is ${pet.petColour}!\n`)
// pet.petColour = "red";
// console.log(`If you ask whether my pet is a homeowner, the answer is ${pet.homeowner} and he is ${pet.petColour}!\n`)

// if (day === "Saturday" || day === "Sunday") {
//     console.log(` Wa-hey it's ${day}. Let's go ${pet.hobbies[0]}.\n`)
// } else {
//     console.log(`Oh bottoms! It's ${day} and I'm not allowed to do any ${pet.hobbies[2]}!\n`)
// }

// let order = ["tea","sandwich"]
// const coffeeShop = {
//     branch: "Soho",
//     drink: ["tea", "coffee", "juice"],
//     food: ["sandwich", "salad", "cake"],
//     price: [1, 1.5, 2, 2.5, 3],
//     foodOrdered: [],
//     foodOrdered() {
//         if(order[1] == "tea"){
//             return price = 2;
//         } else {
//             console.log("not tea");
//         }
//     }
// }

// let drink = "tea";
// let newCost = 0;
// if (drink = "tea") {
//     price = 1;
//     newCost = newCost + price;
//     console.log(newCost);
// } else {
//     console.log(newCost);
// }


// }
// console.log(drinks.length);
// for (let i = 0; i < drinks.length; i++) {
//     console.log(drinks[i]);





// const coffeeShop = {
//     branch: "Chester",
//     drinks: ["Tea", "Coffee"],
//     price: ["£1.50", "£2"],
//     drinksOrdered (i) {
//         console.log (`Your order is ${coffeeShop.drinks[i]}.  This will cost ${coffeeShop.price[i]}.`)
//     }}

let myOrder = ["wine", "toast","juice"];
let drinks = ["tea", "coffee", "juice", "beer", "wine"];
let m = 0;
let n = 0;
let drinkOrder = [];
let foodOrder = [];
while (m < myOrder.length) {
    while (n < drinks.length+1) {
        if (n == drinks.length) {
            foodOrder.push(myOrder[m])
            m++;
            n = 0;
            break;
        }

        else if (drinks[n] !== myOrder[m]) {
            console.log(`It isn't ${drinks[n]}`)
            n++
        } else {
            console.log(`My drink is ${drinks[n]}!`)
            drinkOrder.push(drinks[n]);
            m++;
            n = 0
            break;
        }
    }
}

console.log(drinkOrder);
console.log(foodOrder);

console.log("*********************** ACTIVITY NO.1 *********************************\n")

const sayHello = (friend, drink) => {
    console.log(`Well, hello there ${friend}, let me get you a ${drink}!\n`)
}
sayHello("Prince Charles","pint of heavy")


console.log("*********************** ACTIVITY NO.2a *********************************\n")

const multiply = (num1, num2) => {
    return num1 * num2;
}
console.log(`${multiply(2,5)}\n`);