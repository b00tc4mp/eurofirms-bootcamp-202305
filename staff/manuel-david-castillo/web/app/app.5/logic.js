/* LOGIC */
var registerUser = function (name, email, password) {
  var user;
  for (var i = 0; i < users.length; i++) {
    var _user = users[i];
    if (_user.email === email) {
      user = _user;
      break;
    }
  }

  if (user) {
    return false;
  } else {
    user = {
      name: name,
      email: email,
      password: password,
    };

    users.push(user);
    return true;
  }
};

var authenticateUser = function (email, password) {
  var user;
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      user = users[i];
    }
  }

  if (user === undefined || user.password !== password) {
    return false;
  } else {
    return true;
  }
};

var createNewPost = function (image, text) {
  if (!image) {
    return false;
  }
  if (!text) {
    return false;
  } else {
    var post = {
      image: image,
      text: text,
    };

    posts.push(post);

    return true;
  }
};

var retrievePosts = function () {
  return posts;
};

function retrieveName(email) {
  for (var i = 0; i < users.length; i++) {
    if (email === users[i].email) {
      return users[i].name;
    }
  }
  return undefined;
}
