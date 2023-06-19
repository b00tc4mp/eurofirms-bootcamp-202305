/* HOME */
homeView = document.querySelector(".home-view");
const buttonLogout = document.querySelector(".button-logout");

const body = document.body;

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
  body.classList.add("hidden");
};

const buttonCancelNewPost = document.querySelector(".button-cancel-new-post");
buttonCancelNewPost.onclick = function () {
  containerNewPost.classList.add("off");
  body.classList.remove("hidden");

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
    body.classList.remove("hidden");

    formNewPost.reset();

    showPosts();
  }
};

/* Lógica para editar un post */
const containerEditPost = document.querySelector(".container-edit-post");
const formEditPost = document.querySelector(".form-edit-post");

const buttonCancelEditPost = document.querySelector(".button-cancel-edit-post");
buttonCancelEditPost.onclick = function () {
  containerEditPost.classList.add("off");
  body.classList.remove("hidden");
};

formEditPost.onsubmit = function (event) {
  event.preventDefault();

  const image = formEditPost.querySelector("#url-image-edit-post").value;
  const text = formEditPost.querySelector("#textarea-edit-post").value;
  const postId = parseInt(formEditPost.querySelector("#edit-post-id").value);

  const result = updatePost(postId, image, text);

  if (!result) {
    alert("can not edit post");
  } else {
    containerEditPost.classList.add("off");
    body.classList.remove("hidden");

    showPosts();
  }
};

/* Lógica pata borrar un post */
const containerDeletePost = document.querySelector(".container-delete-post");
const formDeletePost = document.querySelector(".form-delete-post");

const buttonCancelDeletePost = document.querySelector(
  ".button-cancel-delete-post"
);
buttonCancelDeletePost.onclick = function () {
  containerDeletePost.classList.add("off");
  body.classList.remove("hidden");
};

formDeletePost.onsubmit = function (event) {
  event.preventDefault();

  const postId = parseInt(
    formDeletePost.querySelector("#delete-post-id").value
  );

  const result = deletePost(postId);

  if (!result) {
    alert("can not delete post");
  } else {
    containerDeletePost.classList.add("off");
    body.classList.remove("hidden");

    showPosts();
  }
};
