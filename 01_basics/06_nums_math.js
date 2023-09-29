const  score = 400


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length)
// console.log(typeof(balance))
// console.log(balance.toFixed(1))


const otherNumber  = 123.8966

// console.log(otherNumber.toPrecision(4));


const hundreds  = 1000000

// console.log(hundreds.toLocaleString('en-IN'));


// MATHS//

// console.log(Math)
// console.log(Math.abs(-4));

                    // Math.abs("-1"); // 1
                    // Math.abs(-2); // 2
                    // Math.abs(null); // 0
                    // Math.abs(""); // 0
                    // Math.abs([]); // 0
                    // Math.abs([2]); // 2
                    // Math.abs([1, 2]); // NaN
                    // Math.abs({}); // NaN
                    // Math.abs("string"); // NaN
                    // Math.abs(); // NaN


// console.log(Math.round(4.6));

                // console.log(Math.round(0.9));
                // // Expected output: 1

                // console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
                // // Expected output: 6 6 5

                // console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
                // // Expected output: -5 -5 -6


// console.log(Math.ceil(4.6));

                // console.log(Math.ceil(0.95));
                // // Expected output: 1

                // console.log(Math.ceil(4));
                // // Expected output: 4

                // console.log(Math.ceil(7.004));
                // // Expected output: 8

                // console.log(Math.ceil(-7.004));
                // // Expected output: -7

// console.log(Math.ceil(4.2));
                    // // console.log(Math.floor(4.9));
                    // console.log(Math.floor(5.95));
                    // // Expected output: 5

                    // console.log(Math.floor(5.05));
                    // // Expected output: 5

                    // console.log(Math.floor(5));
                    // // Expected output: 5

                    // console.log(Math.floor(-5.00));
                    // // Expected output: -6

// console.log(Math.min(4,3,6,8));
            // console.log(Math.min(2, 3, 1));
        // // Expected output: 1

        // console.log(Math.min(-2, -3, -1));
        // // Expected output: -3

        // const array1 = [2, 3, 1];

        // console.log(Math.min(...array1));
        // // Expected output: 1
        // // console.log(Math.max(4,3,6,8))


console.log(Math.random());
// it gives the values between 0 and 1
// Math.floor gives the values  0
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()* 10 ) + 1);

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) );
console.log(Math.floor(Math.random() * (max - min + 1) + min));




