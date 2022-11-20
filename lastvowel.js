

let myLongWord = [..."jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"];
const isLastVowel = (element) => element == "a" || element == "e" || element == "i" || element == "o" || element == "u";

console.log(myLongWord.findLastIndex(isLastVowel));
let lastVowel = myLongWord[myLongWord.findLastIndex(isLastVowel)];
console.log(`The last vowel is ${lastVowel}`)
