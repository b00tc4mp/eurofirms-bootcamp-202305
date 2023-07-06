var retrievePosts = function () {
  var posts2 = [];
  for (var i = 0; i < posts.length; i++) {
    var _post = {};

    _post.id = posts[i].id;
    _post.image = posts[i].image;
    _post.text = posts[i].text;

    for (var j = 0; j < users.length; j++) {
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
