// Arrays 


const myArr = [0,1,2,3,4,5,6,7,8,9]

const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array

console.log(myArr[0])


// Array methods

myArr.push(6)   // it adds the value
myArr.push(7)
console.log(myArr)
myArr.pop()     // it remove the last object

myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))


// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr)
// console.log(typeof(newArr))


// slice , splice 


console.log("A", myArr);

const myn1 = myArr.slice(1,3)  //

console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)  //adding of two elements in a array is clled splice
console.log("c", myArr);
console.log(myn2)