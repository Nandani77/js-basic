const userEmail = "user@gmail.com"
if(userEmail){
    console.log("got user email");
}else{
    console.log("dont have user email");
}

// falsy values
//  false, 0, -0, bigInt, "", null, undefine., NaN

// truthy values
// "0", false, " ", [], {}, functions(){}

// if(userEmail.length ===0){
//     console.log("Array is empty");
// }else{
//     console.log("not empty aaray");
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0) {
//     console.log("object is empty");
// }


// nullish coalescing operator (??)

let val1;
// val1 = 5??10;

// val1 = null ?? 10;
// val1 = undefined ?? 10;

val1 = null ?? 10 ?? 20;


console.log(val1);

// terbary operator

// condition ? true : false

const isTeaPrice = 100;
isTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80 ")

