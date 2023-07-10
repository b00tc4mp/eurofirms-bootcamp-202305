const createNewPost = function (author, image, text) {
  const postsWorked = local.posts;

  if (!image) {
    return false;
  }
  if (!text) {
    return false;
  } else {
    postsWorked.push(new Post(++local.postsIdCount, author, image, text));

    local.posts = postsWorked;

    return true;
  }
};
