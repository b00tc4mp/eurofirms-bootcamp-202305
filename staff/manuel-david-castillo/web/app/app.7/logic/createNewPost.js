var createNewPost = function (userId, image, text) {
  if (!image) {
    return false;
  }
  if (!text) {
    return false;
  } else {
    var post = {
      postId: ++posts.count,
      userId: userId,
      image: image,
      text: text,
    };

    posts.push(post);

    return true;
  }
};
