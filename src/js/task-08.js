const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const { email, password } = new FormData(event.target);

  if (email.trim() === "" || password.trim() === "") {
    alert("Please fill in all fields.");
  } else {
    console.log("Login:", email);
    console.log("Password:", password);
    loginForm.reset();
  }
});
