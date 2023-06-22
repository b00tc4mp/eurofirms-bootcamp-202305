const createNewPost = function (author, image, text) {
  const postsWorked = local.posts;

  if (!image) {
    return false;
  }
  if (!text) {
    return false;
  } else {
    posts.push(new Post(author, image, text));

    local.posts = postsWorked;

    return true;
  }
};
