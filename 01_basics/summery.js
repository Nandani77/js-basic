// data types - primitive + non primitive 

// 1 primitive

// 7 types - call by value - string, num, boolean , null,undefined, symbol, bigInt

// refrence type / non-primitive - array , objects, functions


// const score = 100;
// const scoreValue = 100.3
// const isLoggedIn = false
// const outsideTemp = null

// let userEmail;
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 103495878903948893n


// non - primitive

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
const myFunction = function(){
    console.log("hii nanadnai");
}
// console.log(typeof bigNumber)
// console.log(typeof heros)
// console.log(typeof myFunction)



// stack ( primitive), heap (non primitive)

let myToutubeName = "codewithlugai"
let anothername = myToutubeName;
// console.log(anothername);
// console.log(myToutubeName);

let userOne = {
    email: 'email@gmail.com',
    upi: 'user@ybl'
}

console.log(userOne)
let userTwo = userOne
userTwo.email = 'nandnai@gmail.com'
console.log(userTwo)