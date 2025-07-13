const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-action");

    if (value === "clear") {
      currentInput = "";
      display.textContent = "0";
    } else if (value === "delete") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if ("0123456789+-*/.".includes(e.key)) {
    currentInput += e.key;
    display.textContent = currentInput;
  } else if (e.key === "Enter") {
    try {
      currentInput = eval(currentInput).toString();
      display.textContent = currentInput;
    } catch {
      display.textContent = "Error";
      currentInput = "";
    }
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput || "0";
  } else if (e.key.toLowerCase() === "c") {
    currentInput = "";
    display.textContent = "0";
  }
});
