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
    users.push(new User(name, email, password));

    return true;
  }
};
