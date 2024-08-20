document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const minValueInput = document.getElementById('minValue');
    const maxValueInput = document.getElementById('maxValue');
    const resultDiv = document.getElementById('result');

    generateButton.addEventListener('click', () => {
        const minValue = parseInt(minValueInput.value, 10);
        const maxValue = parseInt(maxValueInput.value, 10);

        // Check if values are valid numbers and min is less than max
        if (isNaN(minValue) || isNaN(maxValue) || minValue >= maxValue) {
            resultDiv.textContent = 'Please enter valid minimum and maximum values, with min < max.';
            return;
        }

        // Generate random number
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

        // Display the result
        resultDiv.textContent = `Random Number: ${randomNumber}`;
    });
});