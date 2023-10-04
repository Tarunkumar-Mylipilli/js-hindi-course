const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.getElementById('message');

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please enter valid height and weight.';
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        // Show the results
        results.innerHTML = `<span>Your BMI is ${BMI}</span>`;

        if (BMI < 18.6) {
            message.innerHTML = 'You are underweight';
        } else if (BMI < 24.9) {
            message.innerHTML = 'You are in the normal range';
        } else {
            message.innerHTML = 'You are overweight';
        }
    }
});
