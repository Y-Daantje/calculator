const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);//eval function is like a mini calculator value in it self whne you type something in the calculator is will put then together for you
  }
  catch (error) {
    display.value = "Error";
  }
}