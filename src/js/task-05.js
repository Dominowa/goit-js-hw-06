const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
nameInput.addEventListener("input", () => {
  const currentInputValue = nameInput.value;
  if (currentInputValue.trim() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = currentInputValue;
  }
});
