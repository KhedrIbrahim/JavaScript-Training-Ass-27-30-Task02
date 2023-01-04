let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("z")); // True
console.log(word.startsWith(word.substr(3, 1).toUpperCase())); // True
console.log(word.endsWith(word.substr(5,1).toLowerCase())); // True