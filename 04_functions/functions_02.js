
// c = 300

let a = 300

if(true){
let a = 10
const b = 20
//var c = 30

// console.log("INNER: ", a);
}

for(let i = 0; i<Array.length; i++){
    const element = Array[i];
}


//  console.log(a);
// console.log(b);
// console.log(c);


// nested score + closer

function one(){
    const username = "nandani"

    function two(){
        const website = "teckdude"
        console.log(username)
    }
            // console.log(website);
two()

}
// one()


if(true){
    const username = "nandu"

    if(username==="nandu"){
        const website = "  youtube"
        console.log(username + website);
    }

    // console.log(website)
}

// console.log(username);



// intrusting
console.log(addone(5));
function addone(num){
    return num+1
}
const addTwo = function(num){
    return num+2
}

console.log(addTwo(5))
