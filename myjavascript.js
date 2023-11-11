// JavaScript for Calculator

// Function to clear the calculator input
function OnClickClear() {
    document.getElementById('output').value = '';
}

// Function to handle number buttons
function OnClickNumber(number) {
    document.getElementById('output').value += number;
}

// Function to handle operator buttons
function OnClickOperator(operator) {
    document.getElementById('output').value += operator;
}

// Function to calculate the result
function OnclickCalculate() {
    try {
        var input = document.getElementById('output').value;

        // Check for division by zero
        if (input.includes('/0')) {
            throw new Error('Division by zero is not allowed');
        }

        var result = eval(input);

        // Display the result in the output field
        document.getElementById('output').value = result;
    } catch (error) {
        // Display the error message for 2 seconds
        document.getElementById('output').value = 'Error: ' + error.message;
        setTimeout(function () {
            OnClickClear();
        }, 2000);
    }
}
