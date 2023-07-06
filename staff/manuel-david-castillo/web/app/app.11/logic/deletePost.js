function deletePost(postId) {
  let _post;
  for (let i = 0; i < posts.length; i++) {
    if (postId === posts[i].id) {
      _post = posts[i];

      break;
    }
  }

  if (_post === undefined) {
    return false;
  }

  const index = posts.findIndex((post) => postId === post.id);

  posts.splice(index, 1);

  return true;
}
