// function sayMyName(){
//     console.log("O");
//     console.log("j");
//     console.log("a");
//     console.log("x");

// }

//     sayMyName()

    // function addTwoNumbers(number1, number2){
    //     console.log(number1 + number2);
    // }
    // addTwoNumbers(6,"a")
    //   addTwoNumbers(6,null)





      function addTwoNumbers(number1, number2){
// let result = number1+number2
// return result;

return number1 + number2;



    }
const result = addTwoNumbers(3,8)
// console.log("Results: ", result);

function LoginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("please enter the a username");
    //     return
    // }  
    // both equivalent to each other 
       if(!username){
        //console.log("please enter the a username");
        return
    }
    return `${username} just logged in`
}

// console.log(LoginUserMessage("real things"));
// console.log(LoginUserMessage("nandani"));

function calculateCarPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCarPrice(200, 300, 400, 2000))
 const user ={
    username: "ouvvyb",
    prices: 199
 }

 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }

//  handleObject(user)
handleObject({
    username: "sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue([200, 400, 500, 1000]));
console.log(returnSecondValue(myNewArray));



