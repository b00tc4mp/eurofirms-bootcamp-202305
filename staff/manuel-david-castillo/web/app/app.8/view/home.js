/* HOME */
homeView = document.querySelector(".home-view");
const buttonLogout = document.querySelector(".button-logout");

buttonLogout.onclick = function () {
  loginContainer.classList.remove("off");
  homeView.classList.add("off");
  userId = null;
};

/* Editar el nombre  */
function changeNameUser(email) {
  _user = retrieveUser(email);
  const homeTitle = document.querySelector(".h2-home");
  homeTitle.textContent = "Hello,  " + _user.name + "!";
}

/* Lógica para crear un post */
const containerNewPost = document.querySelector(".container-new-post");
const buttonNewPost = document.querySelector(".button-new-post");
buttonNewPost.onclick = function () {
  containerNewPost.classList.remove("off");
};

const buttonCancelNewPost = document.querySelector(".button-cancel-new-post");
buttonCancelNewPost.onclick = function () {
  containerNewPost.classList.add("off");
  formNewPost.reset();
};

const formNewPost = document.querySelector(".form-new-post");

formNewPost.onsubmit = function (event) {
  event.preventDefault();

  const image = formNewPost.querySelector("#url-image-new-post").value;
  const text = formNewPost.querySelector("#textarea-new-post").value;

  const result = createNewPost(userId, image, text);

  if (!result) {
    alert("can not create post");
  } else {
    containerNewPost.classList.add("off");
    formNewPost.reset();

    showPosts();
  }
};

/* Lógica para editar un post */ /* No me funciona */
const containerEditPost = document.querySelector(".container-edit-post");

const buttonCancelEditPost = document.querySelector(".button-cancel-edit-post");
buttonCancelEditPost.onclick = function () {
  containerEditPost.classList.add("off");
  formEditPost.reset();
};

const formEditPost = document.querySelector(".form-edit-post");

formEditPost.onsubmit = function (event) {
  event.preventDefault();

  const image = formEditPost.querySelector("#url-image-edit-post").value;
  const text = formEditPost.querySelector("#textarea-edit-post").value;
  const postId = formEditPost.querySelector("#edit-post-id").value;

  const result = updatePost(postId, image, text);

  if (!result) {
    alert("can not edit post");
  } else {
    containerEditPost.classList.add("off");
    formEditPost.reset();

    showPosts();
  }
};
