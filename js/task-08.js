const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = loginForm.elements;
  let allFieldsFilled = true;
  for (let i = 0; i < formElements.length; i++) {
    if (
      formElements[i].type === "text" ||
      formElements[i].type === "password"
    ) {
      if (formElements[i].value.trim() === "") {
        allFieldsFilled = false;
        break;
      }
    }
  }
  if (!allFieldsFilled) {
    alert("All fields must be filled");
    return;
  }
  const formData = {};
  for (let i = 0; i < formElements.length; i++) {
    if (
      formElements[i].type === "text" ||
      formElements[i].type === "password"
    ) {
      formData[formElements[i].name] = formElements[i].value;
    }
  }
  console.log(formData);
  loginForm.reset();
});
