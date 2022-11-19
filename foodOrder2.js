console.log("\nAPPROACH NO.2\n")

//put whatever you want into the myChoice array, ideally including a few things from the drinks and food arrays. The code will sort out what is what. It works but it isn't elegant. I am sure there are better ways of handling this. There is one part where it runs through a cycle carrying an undefined variable and that feels like a definite no-no. I couldn't really figure out the foodOrder(), drinkOrder() things. The food could be finessed to actually use the correct grammer, but you'd have to start paying me to do that.

let myChoice = ["tea", "wine", "scotch egg", "coffee", "sausage roll", "vodka", "danish pastry", "wookie snacks", "pork scratchings", "sandwich"]
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
            while (n < this.drinks.length + 2) {  //starts loop through drinks list the +2 is a bit arbotrary but it is so  it can run an off menu item
                if (n == this.drinks.length) {//checking whether item appears in drinks list, if it hasn't appeared by the time we have looped through then it is a not drink item and is pushed into the food order for further sorting. Ideally I would be checking against both food and drink at the same time.
                    this.theFoodOrder.push(this.customerOrder[m]);
                    m++;
                    n = 0;
                    break;
                } else if (this.customerOrder[m] !== this.drinks[n]) {///checking for matches in drinks list
                    n += 2; // goes up by two to accomodate the fact that every other item in the array is a number
                } else { // finding a match in the drinks list and putting it into the drinks order
                    this.theDrinksOrder.push(this.drinks[n]);
                    this.drinkCost = this.drinkCost + this.drinks[n + 1]; //the n+1 bit gets the price from the array. I imagine that there is a better solution using listed pairs but I don't know it.
                    m++;
                    n = 0;
                }
            }
        }
        let i = 0; //iterates through generated food order 'theFoodOrder
        let j = 0; // iterates through foods available 'food'
        while (i < this.theFoodOrder.length) { //starts loop through theFoodOrder order (generated in the previous loop)
            while (j < this.food.length + 2) {  //starts loop through food list
                if (j == this.food.length) {//checking whether item appears in food list
                    this.offMenu.push(this.theFoodOrder[i]); //copies item to the off menu list
                    this.theFoodOrder.splice(i, 1); // removes item from theFoodOrder
                    i = i // one item has been removed so the next item in the array will have the same index as the one just removed
                    j = 0;
                    break; // moves to next item in theFoodOrder

                } else if (this.theFoodOrder[i] !== this.food[j]) {///checking for matches in food list
                    j += 2; //move to next item on the food list (skipping the price)
                } else { // finding a match in the drinks list and putting it into the drinks order
                    this.foodCost = this.foodCost + this.food[j + 1];
                    i++; //moves to next item in food order
                    j = 0; // starts the search in the food list from scratch
                }
            }
        }
        let grandTotal = this.drinkCost + this.foodCost;
        return `\nYou ordered ${this.theDrinksOrder.join(", ")} and that came to a total of £${this.drinkCost.toFixed(2)} and to eat, you asked for ${this.theFoodOrder.join(", ")}, so food came to £${this.foodCost.toFixed(2)} giving a grand total of £${grandTotal.toFixed(2)} to pay.\n\nYou also ordered ${this.offMenu.join(", ")}but I'm afraid we don't sell those.\n`;
    }
}
console.log(coffeeShop.sortOrder());