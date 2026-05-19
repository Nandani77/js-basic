const name = "nandani"
const count = 1;
// console.log(name + count + "value");
// console.log(`hallo mu name is ${name} and my count is ${count}`);
const gameName = new String('nandnait-cr-pt');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('n'));
// console.log(gameName.charAt(1));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newStringOne = "   Nandani   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nandani.com/nandani%20singh"
console.log(url.replace('%20', '-'))
console.log(url.includes('sunder'))
console.log(gameName.split('-'))