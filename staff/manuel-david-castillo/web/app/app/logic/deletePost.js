function deletePost(postId) {
  const index = posts.findIndex((post) => postId === post.id);

  if (index === -1) {
    return false;
  } else {
    posts.splice(index, 1);

    return true;
  }
}
