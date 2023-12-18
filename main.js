// to get the div that display your info of you calculator
const display = document.querySelector(".display");
// this function it the one reponsible for the printin to the display
function toDisplay(input) {
  // Check for multiple decimal points in the current value
  if (input === '.' && display.value.includes('.')) {
    return;
  }

  display.value += input;
}
//this function is responsible for when you press the C button it will clear the display
function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const result = new Function('return ' + display.value)();
    // Handle precision issues by rounding to a reasonable number of decimal places
    display.value = Math.round(result * 1e12) / 1e12;
  } catch (error) {
    //if an error occurs it will display error
    display.value = "Error";
  }
}
