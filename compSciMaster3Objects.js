console.log("*********************** OBJECTS ACTIVITY NO.1 - 4 *********************************\n")


let day = "Monday";
const pet = {
    species: "dinosaur",
    name: "Tiddles",
    petColour: "blue",
    faveActivity: "eating other animals",
    homeowner: false,
    petAge: 99,
    hobbies: [
        "exploring",
        "sleeping",
        'roaring',
        "scratching"],
    hunger: 5,

    petStatus(years) {
        console.log(`He is ${years}`)
        if (years <= 100) {
            console.log(`you know he is ${years}`)
            return `${this.name} is just a kid. He is only ${years} and that is very young for a ${this.species}.\n `
        } else {
            console.log(`Now he is ${years}`)
                `Too old`
        }
    },
    petHunger() {
        if (this.hunger >= 7) {
            return `${this.name} is a bit peckish so I' ll give him some food\n`
        } else {
            return `${this.name} isn't hungry right now\n`
        }
    },
    petThirst(heat, fluidLevel) {
        if (heat > 5 || fluidLevel < 5) {
            return `${this.name} really needs a drink right now.\n`
        } else {
            return 'He isn\'t thirsty. You can pour the rest of the water away\n'
        }
    }
}

console.log(pet.petStatus(33))
console.log(pet.petHunger(9))
console.log(pet.petThirst(3, 7))

console.log(`My pet is a large ${pet.species} called ${pet.name} and his favourite activity is ${pet.faveActivity}!\n`)

pet.homeowner = true
console.log(`If you ask whether my pet is a homeowner, the answer is ${pet.homeowner} and he is ${pet.petColour}!\n`)
pet.petColour = "red";
console.log(`If you ask whether my pet is a homeowner, the answer is ${pet.homeowner} and he is ${pet.petColour}!\n`)

if (day === "Saturday" || day === "Sunday") {
    console.log(` Wa-hey it's ${day}. Let's go ${pet.hobbies[0]}.\n`)
} else {
    console.log(`Oh bottoms! It's ${day} and I'm not allowed to do any ${pet.hobbies[2]}!\n`)
}


console.log("*********************** OBJECTS ACTIVITY NO.5 *********************************\n")

// const myFood = "salad";
// const myDrink = "tea";

const coffeeShop = {
    branch: "Soho",
    drink: ["tea", 1.9, "coffee", 3.2, "juice", 2.5],
    food: ["sandwich", 4.2, "salad", 6.75, "cake", 2, 25],
    myPrice: 0,
    foodOrdered(myFood) {
        for (let i = 0; i < this.food.length; i++) {
            if (myFood == this.food[i]) {
                this.myPrice = this.food[i + 1]
                return `${myFood} costs ${this.myPrice}`
            }
        }
    },
    drinkOrdered(myDrink) {
        // console.log(`Price is currently ${this.myPrice}`)
        for (let i = 0; i < this.drink.length; i++) {
            if (myDrink == this.drink[i]) {
                // console.log(`${myDrink} costs ${this.drink[i + 1]}`)
                this.myPrice = this.myPrice + this.drink[i + 1]
                // console.log(`Final price = ${this.myPrice}`)

            }

        }
    },
    myOrder(myFood, mydrink) {
        this.foodOrdered(myFood);
        this.drinkOrdered(mydrink);
        return `You ordered a ${myFood} and a ${mydrink} and the total comes to £ ${Math.floor(this.myPrice).toFixed(2)}.\n`
    }
}

console.log(coffeeShop.myOrder("salad", "tea"));



console.log("*********************** OBJECTS ACTIVITY NO.5a *********************************\n")

//put whatever you want into the myChoice array, ideally including a few things from the drinks and food arrays. The code will sort out what is what. It works but it isn't elegant. I am sure there are better ways of handling this. There is one part where it runs through a cycle carrying an undefined variable and that feels like a definite no-no. I couldn't really figure out the foodOrder(), drinkOrder() things. The food could be finessed to actually use the correct grammer, but you'd have to start paying me to do that.

let myChoice = ["tea", "wine", "scotch egg", "coffee", "sausage roll", "vodka", "danish pastry", "wookie snacks", "pork scratchings", "sandwich"]
const newCoffeeShop = {
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
console.log(newCoffeeShop.sortOrder());
