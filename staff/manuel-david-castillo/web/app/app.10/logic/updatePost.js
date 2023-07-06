function updatePost(postId, image, text) {
  for (let i = 0; i < posts.length; i++) {
    if (postId === posts[i].id) {
      posts[i].image = image;
      posts[i].text = text;

      return true;
    }
  }
  return false;
}
