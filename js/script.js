let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (/[\d\+\-\*\/]/.test(key)) {
    appendToDisplay(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "c" || key === "C") {
    clearDisplay();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }

  if (["Backspace", "Enter"].includes(key)) {
    event.preventDefault();
  }
});
