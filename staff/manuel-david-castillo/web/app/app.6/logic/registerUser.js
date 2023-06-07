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
