
let faveSongs = [
    "1- Waterloo Sunset",
    "2- Hush",
    "3- Grandmaster Flash",
];

for(let i = 0; i < faveSongs.length; i++) {
    console.log(faveSongs[i]);
};

console.log("\nLOOPS ACTIVITY 3\n");
let age = 0;
while (age < 18) {
    console.log(`You're only a child. You're ${age}!`)
    age++
}
console.log(`Finally you're an adult! Have a drink now that you're ${age}!`)

console.log("\nLOOPS ACTIVITY 4\n");

let numbers = 0;
let count = 0;
for (let i = 1; i <= 6; i++) {
    console.log(Math.floor(Math.random()*10));
    
    count++;
}
console.log(`finished, mum! There are your ${count} random numbers.\n`);

function addme(num1,num2) {
    return num1 + num2;
};
addme(5,2);
console.log("Addme comes to:",addme(5,2))