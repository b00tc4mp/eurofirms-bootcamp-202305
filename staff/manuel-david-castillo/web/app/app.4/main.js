/* DATABASE */
var users = [];

users.push({
  name: "Mariano",
  email: "mariano@gmail.com",
  password: "123123123",
});
users.push({
  name: "Pedrito",
  email: "pedrito@gmail.com",
  password: "123123123",
});
users.push({ name: "Santi", email: "santi@gmail.com", password: "123123123" });
users.push({ name: "Paco", email: "paco@gmail.com", password: "123123123" });

/* LOGIC */
var registerUser = function (name, email, password) {
  var user;
  for (var i = 0; i < users.length; i++) {
    var _user = users[i];
    if (_user.email === email) {
      user = _user;
      break;
    }
  }

  if (user) {
    return false;
  } else {
    user = {
      name: name,
      email: email,
      password: password,
    };

    users.push(user);
    return true;
  }
};

var authenticateUser = function (email, password) {
  var user;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      user = users[i];
    }
  }

  if (user === undefined || user.password !== password) {
    return false;
  } else {
    return true;
  }
};

/* DOM */
/* Footer */
var anchorLogin = document.querySelector(".link-login");
var buttonRegister = document.querySelector(".link-register");
var registerContainer = document.querySelector(".register");
var loginContainer = document.querySelector(".login");

anchorLogin.onclick = function (event) {
  event.preventDefault();
  loginContainer.classList.remove("off");
  registerContainer.classList.add("off");
  homeView.classList.add("off");
};

buttonRegister.onclick = function (event) {
  event.preventDefault();
  loginContainer.classList.add("off");
  registerContainer.classList.remove("off");
  homeView.classList.add("off");
};

/* Register */
var registerForm = document.querySelector(".register-form");

registerForm.onsubmit = function (event) {
  event.preventDefault();

  var name = registerForm.querySelector("#name").value;
  var email = registerForm.querySelector("#register-email").value;
  var password = registerForm.querySelector("#register-password").value;

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

/* Login */
var loginForm = document.querySelector(".login-form");

loginForm.onsubmit = function (event) {
  event.preventDefault();

  var email = document.querySelector("#login-email").value;
  var password = document.querySelector("#login-password").value;

  if (email === "") {
    alert("email empty");
  } else if (password === "") {
    alert("password empty");
  } else if (authenticateUser(email, password)) {
    loginContainer.classList.add("off");
    homeView.classList.remove("off");
    loginForm.reset();
  } else {
    alert("wrong credentials");
  }
};

/* Home */
homeView = document.querySelector(".home");
