// console.log("APPROACH NO.1\n")
// let myOrder = ["wine", "toast", "juice"]; //customer order
// let drinks = ["tea", "coffee", "juice", "beer", "wine"]; //ist of drinks available
// let m = 0; //iterates through customer order
// let n = 0; // iterates through drinks available
// let drinkOrder = []; //declares variable array for drinks ordered by customer
// let foodOrder = []; // declares variable array for food ordered by customer
// while (m < myOrder.length) { //starts loop working through customer order
//     while (n <= drinks.length) { //starts loop working through drinks available (it has to go to length + 1 to check whether the item isn't in the drinks array)
//         if (n == drinks.length) { //if item doesn't appear in te drinks array it is pushed into the customer's food order
//             foodOrder.push(myOrder[m])
//             m++;
//             n = 0;
//             break; //exits the n loop and moves on to next m loop
//         }
//         else if (drinks[n] !== myOrder[m]) {// checks customer order item against individual items in drinks array, if it isn't found it increments n and moves on to the next item in drinks array
//             console.log(`It isn't ${drinks[n]}`)
//             n++
//         } else { //matches itm from customer order with item in drinks array and pushes it to customer drink order
//             console.log(`My drink is ${drinks[n]}!`)
//             drinkOrder.push(drinks[n]);
//             m++;
//             n = 0
//             break; //exits the n loop and moves on to next m loop
//         }
//     }
// }

// console.log(drinkOrder);
// console.log(foodOrder);


console.log("\nAPPROACH NO.2\n")

let myChoice = ["tea", "wine", "scotch egg", "coffee", "sausage roll", "beer", "danish pastry", "pork scratchings", "sandwich"]
const coffeeShop = {
    branch: "Soho",
    customerOrder: myChoice,
    drinks: ["tea", 1.5, "coffee", 2.8, "wine", 5, "juice", 2.2, "beer", 3.5],
    food: ["sandwich", 4.9, "croissant", 2.8, "danish pastry", 3.2, "sausage roll", 2.3],
    theDrinksOrder: [],
    theFoodOrder: [],
    offMenu: [],
    drinkCost: 0,
    foodCost: 0,
    sortOrder() {
        let m = 0; //iterates through customer order
        let n = 0; // iterates through drinks available
        while (m < this.customerOrder.length) { //starts loop through customer order
            while (n < this.drinks.length + 3) {  //starts loop through drinks list
                if (n == this.drinks.length) {//checking whether item appears in drinks list
                    console.log(`At the end of n we are looking at ${this.customerOrder[m]}`); //this.foodOrder.push(myChoice[m]);//places item in foodOrder if non-drink
                    this.theFoodOrder.push(this.customerOrder[m]);
                    m++;
                    n = 0;
                    break;
                } else if (this.customerOrder[m] !== this.drinks[n]) {///checking for matches in drinks list
                    console.log(`Searching for item no.${m}, - it isn't ${this.drinks[n]}`)
                    n += 2;
                } else { // finding a match in the drinks list and putting it into the drinks order
                    console.log(`Item no.${m} is ${this.drinks[n]}\n`);
                    this.theDrinksOrder.push(this.drinks[n]);
                    this.drinkCost = this.drinkCost + this.drinks[n + 1];
                    m++;
                    n = 0;
                }
            }
        }


        let i = 0; //iterates through generated food order 'theFoodOrder
        let j = 0; // iterates through foods available 'food'
        while (i < this.theFoodOrder.length) { //starts loop through theFoodOrder order (generated in the previous loop)

            console.log(`length of food order is ${this.theFoodOrder.length}`);
            console.log(`i = ${i} and ${this.theFoodOrder[i]}\n`);

            while (j < this.food.length + 2) {  //starts loop through food list
                if (j == this.food.length) {//checking whether item appears in food list
                    console.log(`\nij IF statement i=${i}, j=${j}\n`)
                    this.offMenu.push(this.theFoodOrder[i]); //copies item to the off menu list
                    this.theFoodOrder.splice(i, 1); // removes item from theFoodOrder
                    console.log(`At the end of j we are looking at ${this.theFoodOrder[i]} and offmenu = ${this.offMenu}.`); //
                    i // one item has been removed so the next item in the array will have the same index as the one just removed
                    j = 0;
                    break; // moves to next item in theFoodOrder

                } else if (this.theFoodOrder[i] !== this.food[j]) {///checking for matches in food list
                    console.log(`\nij ELSE IF statement i=${i}, j=${j}\n`)
                    console.log(`FOOD: Searching for item no.${i}, ${this.theFoodOrder[i]} - it isn't ${this.food[j]}`)
                    j += 2; //move to next item on the food list (skipping the price)
                }

                else { // finding a match in the drinks list and putting it into the drinks order
                    console.log(`\nij ELSE statement i=${i}, j=${j}\n`)
                    console.log(`Item no.${i} is ${this.food[j]}\n`);
                    console.log(`we had spent £${this.foodCost} but now we have just spent an extra £${this.food[j + 1]}`);
                    this.foodCost = this.foodCost + this.food[j + 1];
                    console.log(`${this.food[j]} costs ${this.foodCost}`);
                    i++; //moves to next item in food order
                    j = 0; // starts the search in the food list from scratch
                }
            }

        } console.log(`"Finished Now!" and the drink cost £${this.drinkCost.toFixed(2)}`)
        let grandTotal = this.drinkCost + this.foodCost;
        return `You ordered ${this.theDrinksOrder.join(", ")} and that came to a total of £${this.drinkCost.toFixed(2)} and, to eat, you asked for ${this.theFoodOrder.join(", ")}, so food came to £${this.foodCost.toFixed(2)}, so that's a total of £${grandTotal.toFixed(2)} to pay. And then you also ordered ${this.offMenu.join(", ")} but I'm afraid we don't sell those.`;


    }
}
console.log(coffeeShop.sortOrder());