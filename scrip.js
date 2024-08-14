document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");

  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });

  const signUpButton = document.querySelector(".sign-up button");
  const signInButton = document.querySelector(".sign-in button");

  function redirectToHomePage() {
    window.location.href = "home.html"; // Change 'home.html' to the actual path of your main page
  }

  function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target.closest("form");
    const emailInput = form.querySelector('input[type="email"]').value;
    const passwordInput = form.querySelector('input[type="password"]').value;

    // Define valid credentials for demonstration
    const validEmail = "Adi@tama.com";
    const validPassword = "123";

    // Validate the email and password
    if (emailInput === validEmail && passwordInput === validPassword) {
      redirectToHomePage();
    } else {
      alert("Invalid email or password. Please try again.");
    }
  }

  if (signUpButton) {
    signUpButton.addEventListener("click", validateForm);
  }

  if (signInButton) {
    signInButton.addEventListener("click", validateForm);
  }
});
