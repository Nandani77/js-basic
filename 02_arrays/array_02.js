const marvel_heros = ["thor", "Ironman", "Spiderman"];
// console.log(marvel_heros);

const dc_heros = ["superman", "flash", "batman" ]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros =  marvel_heros.concat(dc_heros);
// console.log(allHeros );


const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4,5,6], 7, 8, [6, 7, [4,5]]];

const real_new_array = another_array.flat(Infinity);
// console.log(real_new_array);

Array.isArray("Nandani");
// console.log(Array.isArray("Nandani")
// );

Array.isArray("Nandani");
// console.log(Array.from("Nandani")
// );

console.log(Array.from({name : "Nandani"})); // intrusting

let scror1 = 100;
let scror2 = 200;
let scror3 = 300;

console.log(Array.of(scror1, scror2, scror3));
