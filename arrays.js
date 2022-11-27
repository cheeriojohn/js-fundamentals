let faveHolidayDestinations = [
    "Bognor regis, England".toLocaleUpperCase(),
    "Skegness, England",
    "Southend-on-sea, England"
];
console.log(`${faveHolidayDestinations}\n`);

// ACTIVITY No1
let faveFilms = [
    "ET",
    "\n",
    "Independence Day",
    "Dunkirk"
];
console.log(faveFilms);
console.log(faveFilms[3]);
faveFilms.push("carry on doctor");
console.log(`${faveFilms}`);
faveFilms.shift();
console.log(faveFilms)
faveFilms.push("ET");
console.log(faveFilms)
faveFilms.unshift("The Jungle Book");
console.log(faveFilms)
console.log(faveFilms.at(-1));
console.log(faveFilms.pop());
console.log(faveFilms);
faveFilms[1] = "Far from teh Madding Crowd";
console.log(faveFilms);
console.log(faveFilms.length)
console.log(faveFilms.pop());
console.log(faveFilms)
console.log(faveFilms.toString().replace(/,/g, ''));


let faveSongs = [
    "Waterloo Sunset",
    "Hush",
    "Grandmaster Flash",
    "new song 1",
    "new song 2",
]
for (let i=0; i<faveSongs.length; i++) {
console.log(faveSongs[i]);
}
faveSongs.splice(3);
console.log(`${faveSongs}\n`);
faveSongs.push("Alfie");
console.log(`${faveSongs}\n`);
faveSongs.push("help","Shout")
console.log(`${faveSongs}\n`);
faveSongs.pop(5);
console.log(`${faveSongs}\n`);

// for (let i = 0; i <= 100; i++) {
//     console.log((i += 2) - 1);
// }

// let evenNumbers = [];

// for (let n = 0; n < 20; n++) {
//     if (n % 2 == 0) {
//         evenNumbers.push(n)
//     };
//   };
// console.log(evenNumbers)

// let lives = 3;

// while (lives > 0) {

// }


// let oddNumbers = [];

// for (let i = 0; i < 20; i++) {
//     if (i % 2 != 0) {

//        oddNumbers.push(i)
//     }
// }
// console.log(oddNumbers);
//console.log(i);  // THIS SAYS i IS NOT DEFINED