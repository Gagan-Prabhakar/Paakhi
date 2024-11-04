const display = document.getElementById("display");

// Function to append values to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to evaluate the expression in the display
function calculate() {
    try {
        // Use eval to evaluate the mathematical expression in the display
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function backspace() {
    display.value = display.value.slice(0, -1);
}
