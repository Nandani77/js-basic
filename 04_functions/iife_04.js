// Immediately Invoked Function Expressions (IIFE)
(function chahi(){
    console.log(`db connected`)
})();

( (name) =>{
    console.log(`db Connected ${name}`);
})('nandani');
