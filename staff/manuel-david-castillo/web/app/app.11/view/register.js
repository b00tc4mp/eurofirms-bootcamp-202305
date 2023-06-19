/* REGISTER */
const registerContainer = document.querySelector(".register");
const registerForm = document.querySelector(".register-form");
const anchorLogin = document.querySelector(".link-login");

anchorLogin.onclick = function (event) {
  event.preventDefault();
  loginContainer.classList.remove("off");
  registerContainer.classList.add("off");
};

registerForm.onsubmit = function (event) {
  event.preventDefault();

  const name = registerForm.querySelector("#name").value;
  const email = registerForm.querySelector("#register-email").value;
  const password = registerForm.querySelector("#register-password").value;

  if (name === "") {
    alert("name empty");
    userExists = false;
  } else if (email === "") {
    alert("email empty");
    userExists = false;
  } else if (password === "") {
    alert("password empty");
    userExists = false;
  } else if (registerUser(name, email, password)) {
    registerContainer.classList.add("off");
    loginContainer.classList.remove("off");
    registerForm.reset();
  } else {
    alert("wrong credentials");
  }
};
