const user = {
    username: "nandani",
    price: 999,
    welcomeMessage: function(){
//console.log(`${this.username} , welcome to website`);

// console.log(this);
//     }

    


    // refer the current contetn
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

}

// console.log(this);

// function chai(){
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "nandani"

//     console.log(this.username)
// }



const chai = () =>{
    let username = "nandani"

    // console.log(this)
}


chai()

// () =>{}

    // const addTwo = (num1, num2) => {
    //     return num1 + num2
    // }

    // const addTwo = (num1, num2) => num1 + num2
        //  const addTwo = (num1, num2) => (num1 + num2) 
        // implicite return

       const addTwo = (num1, num2) => ({ username: "nandnai"})

    //    object return

    console.log(addTwo(3,4))

//    const myArray = [2,5,3,7,0] 
//    myArray.forEach()
