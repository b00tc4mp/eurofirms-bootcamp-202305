const registerUser = function (name, email, password) {
  const usersWorked = local.users;

  let user;
  for (let i = 0; i < usersWorked.length; i++) {
    var _user = usersWorked[i];
    if (_user.email === email) {
      user = _user;
      break;
    }
  }

  if (user) {
    return false;
  } else {
    usersWorked.push(new User(++local.usersIdCount, name, email, password));

    local.users = usersWorked;

    return true;
  }
};
