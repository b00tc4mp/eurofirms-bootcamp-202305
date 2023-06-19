const registerUser = function (name, email, password) {
  let user;
  for (let i = 0; i < users.length; i++) {
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
      id: ++users.count,
      name: name,
      email: email,
      password: password,
    };

    users.push(user);
    return true;
  }
};
