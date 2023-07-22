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
    console.log(loginData);
    loginForm.reset();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
