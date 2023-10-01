// for of 

// ["","",""]
// [{}, {}, {}]

// const arr =[ "srikakulam", "vizag", "vizianagram" , "vijayawad", "kurnool", "amaravathi"]

// for (const value of arr) {
//     console.log(value)
// }

// const num  = [ 1, 2, 3, 4, 5]
// for (const iterator of num) {
//     console.log(iterator)
// }

// const arr =[ "srikakulam", "vizag", "vizianagram" , "vijayawad", "kurnool", "amaravathi"]

// for (const value of arr) {
//     console.log(`welcome to ${value}`)
// }

// Maps


const map = new Map();
map.set('AP' , "AndhraPradesh")
map.set('TS' , "Telangana")
map.set('UP' , "UttarPradesh")
map.set('TN' , "TamilNadu")
map.set('DLH' , "Delhi")
map.set('LDKH' , "Ladhakh")



// console.log(map)


                    // for (const key of map) {
                    //     console.log(key)
                    // }


                    // for (const [key , value] of map) {
                    //     console.log(key, ':-', value)
                    // }




const myObject = {
    name : 'Nireesha',
    name : 'Pravallika' ,
    name : 'Anusha'
}

for (const [key , value] of myObject) {   //   for of loop this type of objects are not use for ieration
    console.log(key, ':-', value)
    
}