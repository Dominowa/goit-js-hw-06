const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const loginData = {};
  formData.forEach((value, name) => {
    loginData[name] = value;
  });

  if (loginData.email.trim() === "" || loginData.password.trim() === "") {
    alert("Please fill in all fields.");
  } else {
    console.log("Login:", loginData.email);
    console.log("Password:", loginData.password);
    loginForm.reset();
  }
});
