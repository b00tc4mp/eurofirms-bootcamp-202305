function deletePost(postId) {
  const postsWorked = local.posts;

  let _post;
  for (let i = 0; i < postsWorked.length; i++) {
    if (postId === postsWorked[i].id) {
      _post = postsWorked[i];

      break;
    }
  }

  if (_post === undefined) {
    return false;
  }

  const index = postsWorked.findIndex((post) => postId === post.id);

  postsWorked.splice(index, 1);

  local.posts = postsWorked;
  return true;
}
