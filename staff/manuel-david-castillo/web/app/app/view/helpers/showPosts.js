/* Lógica para lanzar los post  */
function showPosts() {
  const postsWorking = retrievePosts();

  const postsContainer = document.querySelector(".all-posts");
  postsContainer.innerHTML = "";

  for (let i = 0; i < postsWorking.length; i++) {
    const post = document.createElement("article");
    post.classList.add("post");

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("nameDiv");

    const name = document.createElement("p");
    name.classList.add("name-post");
    name.innerText = postsWorking[i].user.name;

    const image = document.createElement("img");
    image.classList.add("img-post");
    image.src = postsWorking[i].image;

    const text = document.createElement("p");
    text.classList.add("text-post");
    text.innerText = postsWorking[i].text;

    post.append(nameDiv, image, text);

    if (postsWorking[i].user.id === userId) {
      const editButton = document.createElement("button");
      editButton.classList.add("editButton");
      editButton.innerText = "Edit";

      const imageToEdit = formEditPost.querySelector("#url-image-edit-post");
      imageToEdit.value = postsWorking[i].image;

      const textToEdit = formEditPost.querySelector("#textarea-edit-post");
      textToEdit.value = postsWorking[i].text;

      /* Esto no funciona porque siempre coge el valor del último post del usuario */
      editButton.onclick = function () {
        containerEditPost.classList.remove("off");
        const inputEditPost = formEditPost.querySelector("#edit-post-id");
        inputEditPost.value = postsWorking[i].id;
      };

      post.append(editButton);
    }

    nameDiv.append(name);
    postsContainer.appendChild(post);
  }
}
