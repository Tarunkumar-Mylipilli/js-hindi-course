// const coding = ["js", "py", "java", "cpp"]


// const values = coding.forEach( (item) => {
//     console.log(item)
// })



// const myNums = [1,2,3,4,5,6,7,8,9,10]


// // let newNums = myNums.filter( (num)=> num > 4 );
// // console.log(newNums);


// const newNums = []


// myNums.forEach( (num) => {
//     if (num>4){
//         newNums.push(num)
//     }
// })


// console.log(newNums)


const studentData = [
  { name: "Amit", class: "10th", age: 16 },
  { name: "Priya", class: "12th", age: 18 },
  { name: "Rahul", class: "9th", age: 15 },
  { name: "Sneha", class: "11th", age: 17 },
  { name: "Rajesh", class: "8th", age: 14 },
  { name: "Anjali", class: "10th", age: 16 },
  { name: "Vikram", class: "12th", age: 18 },
  { name: "Kavita", class: "9th", age: 15 },
  { name: "Suresh", class: "11th", age: 17 },
  { name: "Meena", class: "8th", age: 14 },
];



const userstudents = studentData.filter ( (data) => { 
    return data.age >= 12  && data.class === "8th"});

console.log(userstudents);