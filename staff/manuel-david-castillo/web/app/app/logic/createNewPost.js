const createNewPost = function (author, image, text) {
  if (!image) {
    return false;
  }
  if (!text) {
    return false;
  } else {
    posts.push(new Post(author, image, text));

    return true;
  }
};
