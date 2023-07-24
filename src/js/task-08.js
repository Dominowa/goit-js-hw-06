const formRef = document.querySelector(".login-form");

const formSubmitHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const emailValue = formData.get("email");
  const passwordValue = formData.get("password");

  if (emailValue.trim() === "" || passwordValue.trim() === "") {
    alert("All the fields should be completed ;-)");
    return;
  }

  console.log("Login:", emailValue);
  console.log("Password:", passwordValue);

  formRef.reset();
};

formRef.addEventListener("submit", formSubmitHandler);
