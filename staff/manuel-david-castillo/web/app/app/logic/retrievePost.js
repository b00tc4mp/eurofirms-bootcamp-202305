function retrievePost(postId) {
  const postsWorked = local.posts;

  const result = postsWorked.find((element) => element.id === postId);

  if (!result) return false;

  return result;
}
