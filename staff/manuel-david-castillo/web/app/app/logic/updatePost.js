function updatePost(postId, image, text) {
  const postsWorked = local.posts;

  for (let i = 0; i < postsWorked.length; i++) {
    if (postId === postsWorked[i].id) {
      postsWorked[i].image = image;
      postsWorked[i].text = text;

      local.posts = postsWorked;
      return true;
    }
  }
  return false;
}
