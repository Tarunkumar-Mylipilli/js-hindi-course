const myObject = {
    js : "javascript",
    ts : "typescript",
    py : "python",
    cpp: "c++"
}

// for in loop can be iteration for Object  

for (const key in myObject) {
   console.log(`${key} is the shortcut for ${myObject[key]}`)
}


const myArray = ["js", "ts", "py", "cpp"]

for (const key in myArray) {
    console.log(myArray[key])
}


// maps are not used for for of loop it does not give any error are result 