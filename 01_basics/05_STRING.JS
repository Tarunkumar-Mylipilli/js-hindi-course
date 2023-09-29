const name = "tARUN-kumar"
const repoCount = 50
// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repoCoumt ${repoCount}`)

const gameName = new String('tarunkumar')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf('k'));

const newString  = gameName.substring(0,4)
console.log(newString);

const anotherString  =  gameName.slice(-10 ,2)
console.log(anotherString)


const newStringOne = "  krishna      ";
console.log(newStringOne);
console.log(newStringOne.trim())



const url  = "https://hitesh.com/TARUNKUMAR%20KUMAR"
console.log(url.replace('%20', '-'))


console.log(gameName.split('-'))