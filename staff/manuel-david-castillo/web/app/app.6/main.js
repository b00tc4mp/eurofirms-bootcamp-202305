/* Globals */
var userId = null;

/* REGISTER */
var registerContainer = document.querySelector(".register");
var registerForm = document.querySelector(".register-form");
var anchorLogin = document.querySelector(".link-login");

anchorLogin.onclick = function (event) {
  event.preventDefault();
  loginContainer.classList.remove("off");
  registerContainer.classList.add("off");
};

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

/* LOGIN */
var loginContainer = document.querySelector(".login");
var loginForm = document.querySelector(".login-form");
var anchorRegister = document.querySelector(".link-register");

anchorRegister.onclick = function (event) {
  event.preventDefault();
  loginContainer.classList.add("off");
  registerContainer.classList.remove("off");
};

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

    changeNameUser(email);
    userId = authenticateUser(email, password);

    showPost();
  } else {
    alert("wrong credentials");
  }
};

/* HOME */
homeView = document.querySelector(".home-view");
var buttonLogout = document.querySelector(".button-logout");

buttonLogout.onclick = function () {
  loginContainer.classList.remove("off");
  homeView.classList.add("off");
  userId = null;
};

/* Editar el nombre  */
var userEmail;
function changeNameUser(email) {
  _user = retrieveUser(email);
  var homeTitle = document.querySelector(".h2-home");
  homeTitle.textContent = "Hello,  " + _user.name + "!";
}

/* Lógica de new post */
var containerNewPost = document.querySelector(".container-new-post");
var buttonNewPost = document.querySelector(".button-new-post");
buttonNewPost.onclick = function () {
  containerNewPost.classList.remove("off");
};

var buttonCancelNewPost = document.querySelector(".button-cancel-new-post");
buttonCancelNewPost.onclick = function () {
  containerNewPost.classList.add("off");
  formNewPost.reset();
};

var formNewPost = document.querySelector(".form-new-post");

formNewPost.onsubmit = function (event) {
  event.preventDefault();

  var image = formNewPost.querySelector("#url-image-new-post").value;
  var text = formNewPost.querySelector("#textarea-new-post").value;

  var result = createNewPost(userId, image, text);

  if (!result) {
    alert("can not create post");
  } else {
    alert("new post create");
    containerNewPost.classList.add("off");
    formNewPost.reset();

    showPost();
  }
};

/* Lógica para lanzar los post  */
function showPost() {
  var posts = retrievePosts();

  var postsContainer = document.querySelector(".all-posts");
  postsContainer.innerHTML = "";

  for (var i = 0; i < posts.length; i++) {
    var post = document.createElement("article");
    post.classList.add("post");

    var name = document.createElement("p");
    name.classList.add("name-post");
    name.textContent = posts[i].user.name;

    var image = document.createElement("img");
    image.classList.add("img-post");
    image.src = posts[i].image;

    var text = document.createElement("p");
    text.classList.add("text-post");
    text.textContent = posts[i].text;

    post.append(name, image, text);
    postsContainer.appendChild(post);
  }
}
