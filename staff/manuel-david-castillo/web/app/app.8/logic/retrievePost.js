const retrievePosts = function () {
  const posts2 = [];
  for (let i = 0; i < posts.length; i++) {
    const _post = {};

    _post.id = posts[i].id;
    _post.image = posts[i].image;
    _post.text = posts[i].text;

    for (let j = 0; j < users.length; j++) {
      if (posts[i].userId === users[j].id) {
        _post.user = {
          id: users[j].id,
          name: users[j].name,
        };

        break;
      }
    }
    posts2.push(_post);
  }

  return posts2;
};
