
const mySym = Symbol("key1")


const jsuser = {
    name : "Nandani",
    "full name": "Buddy Sweety",
   [ mySym]: "mykey",
    age: 24,
    location: 'jaipur',
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsuser.email)
// // console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(typeof jsuser.mySym)
// console.log( jsuser[mySym])


// jsuser.email = "nandani@byddy@gmail.com"
// console.log(jsuser.email)

// Object.freeze(jsuser)
// jsuser.email = "nandini@byddy@gmail.com"
// console.log(jsuser.email)

jsuser.greeting = function(){
    console.log("hii buddy")
}


jsuser.greetingTwo = function(){
    console.log(`hii buddy, ${this.name}`);
}
console.log(jsuser.greeting());

console.log(jsuser.greetingTwo());

