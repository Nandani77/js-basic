for(let a =0; a<=10;a++){

    const element = a;
    if (element == 5){
      //console.log("5 is best number");
    }
  //console.log(element);
}

for(let a =0; a<=10;a++){
// console.log (`Outer loop value: ${a}` );
for (let j = 0; j<= 10; j++ ){
// console.log(`Inner loop value &{j} and  Inner loop ${a}`);

// console.log(a + '*' + j + ' = ' + a*j );
}

}


let myArray = ['flash', 'batman', 'superman']

// console.log(myArray.length);
for( let i=0; i<myArray.length; i++){
  const j = myArray[i];
  // console.log(j);
}

// BREAK AND CONTINUE


for( let i=1; i<=20; i++){
  if(i==5){
    console.log(`Detected 5`);
    continue;
  }


  console.log(i);
}
