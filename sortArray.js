let numbers = prompt("Enter numbers separated by commas:").split(",").map(Number);
let names = prompt("Enter names separated by commas:").split(",");

let mergedArray = numbers.concat(names);
console.log("Merged array:", mergedArray);

let sortedNumbers = numbers.slice().sort((a, b) => b - a);
console.log("Numbers sorted in reverse:", sortedNumbers);

let sortedNames = names.slice().sort();
console.log("Names sorted alphabetically:", sortedNames);
