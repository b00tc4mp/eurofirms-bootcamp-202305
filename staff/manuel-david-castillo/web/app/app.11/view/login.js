/* LOGIN */
const loginContainer = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const anchorRegister = document.querySelector(".link-register");

anchorRegister.onclick = function (event) {
  event.preventDefault();
  loginContainer.classList.add("off");
  registerContainer.classList.remove("off");
};

loginForm.onsubmit = function (event) {
  event.preventDefault();

  const email = document.querySelector("#login-email").value;
  const password = document.querySelector("#login-password").value;

  if (email === "") {
    alert("email empty");
  } else if (password === "") {
    alert("password empty");
  } else if (authenticateUser(email, password)) {
    loginContainer.classList.add("off");
    homeView.classList.remove("off");

    loginForm.reset();

    changeNameUser(email);
    userId = authenticateUser(email, password);

    showPosts();
  } else {
    alert("wrong credentials");
  }
};
