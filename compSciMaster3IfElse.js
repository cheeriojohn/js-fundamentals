//Activity No.1

let music = "classical";

if (music === "classical") {
    console.log("How relaxing!");
} else if (music === "disco") {
    console.log("Where are my dancing shoes!");
} else if (music === "dance") {
    console.log("Where's the party");
} else {
    console.log("Too loud, turn it down, willya!");
}

//Activity No.2 & 3

const myAge = 18;
const country = "UK"

if (myAge > 17 && country == "UK") {
    console.log("I can serve you.")
} else {
    console.log("You're too young")
}

//Activity No.4

const weekendAlarm = "Monday";

if (weekendAlarm == "Saturday" || weekendAlarm == "Sunday") {
    console.log("Yay! It's the weekend\n")
} else {
    console.log("Heigh-ho, off to work I go\n")
}

//Activity No.5

const topping = ["mushroom", "dog", "tomato", "egg", "pineapple"]

for (let i = 0; i < topping.length; i++) {

    switch (topping[i]) {
        case "mushrooms":
        case "onions":
        case "pepperoni":
        case "peppers":
        case "tomato":
            console.log(`I really like ${topping[i]} on my pizza.\n`)
            break;
        case "egg":
        case "chilli":
            console.log(`I'm ok with ${topping[i]} on my pizza.\n`)
            break;
        case "blue cheese":
        case "pineapple":
        case "mackerel":
            console.log(`No way am I going to let you ruin a perfectly good pizza with ${topping[i]}.\n`)
            break;
        default:
            console.log(`Ok, I'll try a little bit of ${topping[i]}.\n`)
    }
}

//Activity No.5

let myPassword = "adfsregdfad"

if (myPassword.length < 8) {
    console.log("POassword is too short\n")
} else {
    console.log("In you go, Boss\n")
}

//Activity No.6

let myStrangeNumber = 10001

if (myStrangeNumber == Array.from(myStrangeNumber.toString()).reverse().join().replaceAll(',', '')) {
    console.log(`${myStrangeNumber} is a palindrome.\n`)
} else {
    console.log(`${myStrangeNumber} is not a palindrome.\n`)
}


//Activiy No.7

let buzzFizzNum = 10;
let divThree = buzzFizzNum % 3;
let divFive = buzzFizzNum % 5;

console.log(divThree);
console.log(divFive);
if (divThree === 0 && divFive === 0) {
    console.log("Fizz Buzz\n");
} else if (divThree === 0) {
    console.log("Fizz\n");
} else if (divFive === 0) {
    console.log("Buzz\n");
} else {
    console.log("original number is", buzzFizzNum, ".\n");
}

//Activity No.9 Last Vowel

let myLongWord = [..."jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"];
const isLastVowel = (element) => element == "a" || element == "e" || element == "i" || element == "o" || element == "u";

console.log(myLongWord.findLastIndex(isLastVowel));
let lastVowel = myLongWord[myLongWord.findLastIndex(isLastVowel)];
console.log(`The last vowel is ${lastVowel}.\n`)

console.log("\nActivity No.10\n")

let word = "boob"
let firstLetter = word.charAt(0);
let lastLetter = word.charAt(word.length - 1);
if (lastLetter == firstLetter) {
    console.log(true)
} else {
    console.log(false)
}

console.log("\nActivity No.11\n")

let num1 = 10
let num2 = 8
let sumNum = num1 + num2
let productNum = num1 * num2;

if(sumNum %2 == 0) {
    console.log(`Product is ${sumNum}. It's even.\n`)
} else {
    console.log(`It isn't even and the product of the numbers is ${productNum}.\n `)
}