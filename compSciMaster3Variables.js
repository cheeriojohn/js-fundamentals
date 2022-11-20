//Activity no.1

// let faveDrink = "nice cup of tea";
// let thisNumber = 1392809363417499506.898283666363636626636466565;
// let firstName = "Adam";

// console.log(faveDrink);
// console.log(thisNumber);
// console.log(firstName);

//Just going back through the earlier activities and...
let thisNumber = 1392809363417499506.898283666363636626636466565;
console.log(thisNumber);
let myResponse = "???????"
console.log(`thisNumber returns as ${thisNumber}, and I say "${myResponse}".\n`)
//so I looked at the following and behaviour is even more mysterious
thisNumber = 12345678901234560
console.log(`12345678901234560 comes out as ${thisNumber}\n`);
thisNumber = 12345678901234561
console.log(`12345678901234561 comes out as ${thisNumber}\n`);
thisNumber = 12345678901234562
console.log(`12345678901234562 comes out as ${thisNumber}\n`);
thisNumber = 12345678901234563
console.log(`12345678901234563 comes out as ${thisNumber}\n`);
thisNumber = 12345678901234564
console.log(`12345678901234564 comes out as ${thisNumber}\n`);
thisNumber = 12345678901234565
console.log(`12345678901234565 comes out as ${thisNumber}\n`);
thisNumber = 12345678901234566
console.log(`12345678901234566 comes out as ${thisNumber}\n`);
thisNumber = 12345678901234567
console.log(`12345678901234567 comes out as ${thisNumber}\n`);
thisNumber = 12345678901234568
console.log(`12345678901234568 comes out as ${thisNumber}\n`);
thisNumber = 12345678901234569
console.log(`12345678901234569 comes out as ${thisNumber}\n`);
thisNumber = 123456789012345699
console.log(`123456789012345699 comes out as ${thisNumber}\n`);

//Activity No.2

let myName1 = "Geronimo";
let myAge1 = 78;
let myFaveColor = "chestnut";
console.log(`My name is ${myName1}. I am ${myAge1} years old and you will often see me astride my ${myFaveColor} mare.\n`)

//Activity No.3

let breakfast = "porridge";
let lunch = "soup";
let supper = "stew";
console.log(`For breakfast I will be eating ${breakfast} and I'll be downing some ${lunch} at lunchtime and then finishing off in the evening with a big bowl of ${supper}\n`)
breakfast = "sausages"
lunch = "potatoes"
supper = "beans"
console.log(`For breakfast I will be eating ${breakfast} and I'll be downing some ${lunch} at lunchtime and then finishing off in the evening with a big bowl of ${supper}\n`)

//Activity No.4

let rightNow = new Date();
let backThen = new Date("10/25/1958");
console.log(`Date now is ${rightNow}.\n`);
console.log(`My DOB is ${backThen}.\n`);
console.log(rightNow.getTime())
console.log(backThen.getTime())
let totalTime = Math.floor((rightNow.getTime() - backThen.getTime())/(1000*60*60*24))
console.log(`I've been wandering around for ${totalTime} days now...and I still can't find what I'm looking for.\n`)

