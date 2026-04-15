const myNumers = [1,2,3,45,6,7,8,9,10]
// const newNums = myNumers.map((num) => {
//    return num+10;
// })

const newNums = myNumers
      .map( (num) => num * 19)
       .map( (num)=> num + 1)
       .filter( (num) => num>=40)
console.log(newNums);