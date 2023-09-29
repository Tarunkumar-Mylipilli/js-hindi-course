const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc = ["superman ", "flash","batman"]

marvel_heroes.push(dc)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const allHeroes = marvel_heroes.concat(dc)
// console.log(marvel_heroes)

const all_new_heroes = [...marvel_heroes, ...dc]  //spread operator
// console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

console.log(Array.isArray("Tarunkumar"));
console.log(Array.from("Tarunkumar")); // it creates like array
console.log(Array.from({name: "tarun"})) //it doesnot create array because of key name and key value


let score1 = 200
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))