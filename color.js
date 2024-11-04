// Select the sliders
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

// Function to update background color based on slider values
function updateBackgroundColor() {
    // Get the RGB values from the sliders
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;
    
    // Set the background color
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Add event listeners to the sliders
redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);

// Initialize the background color
updateBackgroundColor();
