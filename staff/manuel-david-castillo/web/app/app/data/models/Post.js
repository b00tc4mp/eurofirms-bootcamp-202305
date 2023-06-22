function Post(author, image, text) {
  const postsWorked = local.posts;

  const nextPostId =
    postsWorked.length !== 0 ? postsWorked[postsWorked.length - 1].id + 1 : 0;

  (this.id = nextPostId),
    (this.author = author),
    (this.image = image),
    (this.text = text);
}
