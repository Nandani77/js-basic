// for of

const arr = [1,2,3,4,5,6,76];

for (const num of arr) {
    // console.log(num);
}

const greetings = "hii nandani";

for (const greets of greetings) {
    // console.log(`each char is ${greets}`)
}

//maps


const map = new Map()
map.set('IN', "India")
map.set('FR', "france")



console.log(map);

for (const [key, value] of map) {
    // console.log(key);
    // destructure array
    //  console.log(key, ':-', value);
    
}

const myobj = {
    'game1' : 'NFS',
    'game2' : 'gb'
}

// for (const [key, value] of myobj) {
//     console.log(key, ':-', value);
// }