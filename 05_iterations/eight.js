const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.reduce(function (acc, currentValue) {
    
//     console.log(`acc: ${acc}and curvl: ${currentValue};`);
//     return acc +currentValue;
// }, 0)


// console.log(newNums);

// simplification of reduce()  
// const newNums = myNums.reduce( (acc, curr) => acc + curr,0);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python",
        price    :  2999
    },
    {
        itemName : "java",
        price    : 2999
    }
]


const totalBill = shoppingCart.reduce( (acc, item) => acc + item.price, 0);


console.log(totalBill);