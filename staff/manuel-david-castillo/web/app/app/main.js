/* Database */
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

/* Loógica del footer */
var buttonLogin = document.querySelector(".link-login");
var buttonRegister = document.querySelector(".link-register");
var registerContainer = document.querySelector(".register");
var loginContainer = document.querySelector(".login");

buttonLogin.onclick = function (event) {
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

/* Lógica de register */
var registerForm = document.querySelector(".register-form");

registerForm.onsubmit = function (event) {
  event.preventDefault();

  var name = registerForm.querySelector("#name").value;
  var email = registerForm.querySelector("#register-email").value;
  var password = registerForm.querySelector("#register-password").value;

  var userExists = true;

  if (name === "") {
    alert("name empty");
    userExists = false;
  } else if (email === "") {
    alert("email empty");
    userExists = false;
  } else if (password === "") {
    alert("password empty");
    userExists = false;
  }

  for (var i = 0; i < users.length; i++) {
    if (email === users[i].email) {
      alert("user already exists");
      userExists = false;
      break;
    }
  }

  if (userExists) {
    var user = {};

    user.name = name;
    user.email = email;
    user.password = password;

    users.push(user);

    registerContainer.classList.add("off");
    loginContainer.classList.remove("off");
    registerForm.reset();
  }
};

/* Lógica de login */
var loginForm = document.querySelector(".login-form");

loginForm.onsubmit = function (event) {
  event.preventDefault();

  var email = document.querySelector("#login-email").value;
  var password = document.querySelector("#login-password").value;
  var user;

  for (var i = 0; i < users.length; i++) {
    var _user = users[i];

    if (_user.email === email) {
      user = _user;

      break;
    }
  }

  if (email === "") {
    alert("email empty");
  } else if (user === undefined) {
    alert("user not found");
  } else if (password === "") {
    alert("password empty");
  } else if (user.password === password) {
    loginContainer.classList.add("off");
    homeView.classList.remove("off");

    loginForm.reset();
  } else {
    alert("wrong password");
  }
};

/* home */
homeView = document.querySelector(".home");
