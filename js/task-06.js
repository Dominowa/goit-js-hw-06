const validationInput = document.getElementById("validation-input");
const requiredLength = parseInt(validationInput.dataset.length);
validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value;
  const inputLength = inputValue.length;
  if (inputLength === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
