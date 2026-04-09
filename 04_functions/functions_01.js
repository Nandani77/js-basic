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
        console.log("please enter the a username");
        return
    }
    return `${username} just logged in`
}

// console.log(LoginUserMessage("real things"));
console.log(LoginUserMessage("nandani"));





