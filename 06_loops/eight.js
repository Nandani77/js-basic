const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc, currentval){
//     console.log(`acc: ${acc} and currentval: ${currentval}`);
//     return acc + currentval
// }, 10)

 const myTotal = myNums.reduce( (acc, currval) => acc + currval , 0)
console.log(myTotal)