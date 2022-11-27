let favehol = [
    "venice, italy",
    "bognor, england",
    'skeggy, england',
]
for (let i = 0; i < favehol.length; i++) {
    console.log(`${favehol[i]}\n`)
}
favehol.push("Bacton, Norfolk","Cromer, Norfolk")
for (let i = 0; i < favehol.length; i++) {
    console.log(`${favehol[i]}\n`)
}


let faveSongs = [
    "1- Waterloo Sunset",
    "2- Hush",
    "3- Grandmaster Flash",
];

for(let i = 0; i < faveSongs.length; i++) {
    console.log(faveSongs[i]);
};
console.log("\n******** LOOPS ACTIVITY 2 *********\n");
const backNos = []
for (let i = 0; i < 20; i++) {
    if(i %2 == 1) {
        backNos.push(i);
    }
}
console.log(`backNos = ${backNos.reverse()}.\n`)

console.log("\n******** LOOPS ACTIVITY 3a *********\n");
const oddNumbers = []
for (let i = 0; i < 30; i++ ) {
    if(i %2 ==1) {
        oddNumbers.push(i);
    }
}
console.log(`Odd numbers to 30 are ${oddNumbers}.\n`)


console.log("\n******** LOOPS ACTIVITY 3b *********\n");
let age = 0;
while (age < 18) {
    console.log(`You're only a child. You're ${age}!`)
    age++
}
console.log(`Finally you're an adult! Have a drink now that you're ${age}!`)

console.log("\n******** LOOPS ACTIVITY 4 *********\n");

let numbers = [];
let count = 0;
for (let i = 0; i < 6; i++) {
    numbers[i] = Math.floor(Math.random()*10);
    count++;
}
console.log(`Finished, mum! Here are your ${count} random numbers: ${numbers}.\n`);

console.log("\n******** LOOPS ACTIVITY 5 *********\n");

const someFilms = [
    "ET",
    "Help",
    "Ghostbusters",
    "The Shining"
]
console.log(`Here are some films: ${someFilms}.\n`)
if(someFilms[2] == "Ghostbusters") {
    console.log("Yay, Ghostbusters!\n")
} else (
    console.log("BooHoo!")
)

console.log("\n******** LOOPS ACTIVITY 6 *********\n");

 for (let i = 0; i < 30; i++) {
    let randNum = Math.floor(Math.random()*30);
    if (randNum %7 == 0) {
        console.log(`The ${i}th generated number, ${randNum} is divisible by 7`)
    }
 }

 console.log("\n******** LOOPS ACTIVITY 7 *********\n");

 const bobsFollowrs = [
    "Jen",
    "Mike",
    "Ali",
    "Amris",
 ]

 const hannahsFollowers = [
    "Amris",
    "Pete",
    "Sue",
    "Ali"
 ]

 const inCommon = []
for(let i = 0; i < bobsFollowrs.length; i++) {
    for(let j = 0; j < hannahsFollowers.length; j++) {
        if(bobsFollowrs[i] == hannahsFollowers[j]) {
           inCommon.push(bobsFollowrs[i])
        }
    }
}
console.log(`They have ${inCommon.join(' and ')} in common.\n`)

function addme(num1,num2) {
    return num1 + num2;
};
addme(5,2);
console.log("Addme comes to:",addme(5,2))