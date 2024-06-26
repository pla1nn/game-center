
const calculatorButtons = document.querySelectorAll(".calculator-button");
const calculatorOutput = document.querySelector(".calculator-output");
const checkButton = (buttons) =>
  [...buttons].map((btn) => {
    if (btn.classList.contains("active-calc-btn")) {
      return btn.classList[1];
    }
  });

calculatorButtons.forEach((button) => {
  // console.log(button.classList)
  button.addEventListener("click", () => {
    calculatorButtons.forEach((btn) => {
      btn.classList.remove("active-calc-btn");
    });
    button.classList.toggle("active-calc-btn");

    button.addEventListener('click', () => {
      button.classList.toggle("active-calc-btn");
    });
  });
});

const firstCalculatorInput = document.querySelector(".first-calculator-input");
const secondCalculatorInput = document.querySelector(
  ".second-calculator-input"
);
const calculateResult = () => {
  const firstInputValue = Number(firstCalculatorInput.value);
  const secondInputValue = Number(secondCalculatorInput.value);

  if (checkButton(calculatorButtons).includes("plus")) {
    calculatorOutput.textContent = firstInputValue + secondInputValue;
    if (isNaN(firstInputValue + secondInputValue)) {
      calculatorOutput.textContent = 'Помилка'
    }
  }
  else if (checkButton(calculatorButtons).includes("minus")) {
    calculatorOutput.textContent = firstInputValue - secondInputValue;
    if (isNaN(firstInputValue - secondInputValue)) {
      calculatorOutput.textContent = 'Помилка'
    }
  }

  else if (checkButton(calculatorButtons).includes("divide")) {
    calculatorOutput.textContent = (firstInputValue / secondInputValue).toFixed(1);
    if (isNaN(firstInputValue / secondInputValue)) {
      calculatorOutput.textContent = 'Помилка'
    }
  }

  else if (checkButton(calculatorButtons).includes("multiply")) {
    calculatorOutput.textContent = firstInputValue * secondInputValue;
    if (isNaN(firstInputValue * secondInputValue)) {
      calculatorOutput.textContent = 'Помилка'
    }
  }

};



firstCalculatorInput.addEventListener("input", calculateResult);
secondCalculatorInput.addEventListener("input", calculateResult);
