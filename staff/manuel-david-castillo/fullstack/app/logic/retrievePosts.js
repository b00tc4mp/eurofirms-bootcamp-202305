const retrievePosts = function () {
  const postsWorked = local.posts;

  const posts2 = postsWorked.map((post) => {
    const post2 = {};

    post2.id = post.id;
    post2.img = post.image;
    post2.text = post.text;
    post2.author = {};

    const usersWorked = local.users;
    const user = usersWorked.find((user) => user.id === post.author);

    post2.author.id = user.id;
    post2.author.name = user.name;

    return post2;
  });

  return posts2;
};
