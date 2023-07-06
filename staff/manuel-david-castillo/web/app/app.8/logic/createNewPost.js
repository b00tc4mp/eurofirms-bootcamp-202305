const createNewPost = function (userId, image, text) {
  if (!image) {
    return false;
  }
  if (!text) {
    return false;
  } else {
    const post = {
      id: ++posts.count,
      userId: userId,
      image: image,
      text: text,
    };

    posts.push(post);

    return true;
  }
};
