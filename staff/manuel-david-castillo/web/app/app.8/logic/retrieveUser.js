function retrieveUser(email) {
  let user;

  for (var i = 0; i < users.length; i++) {
    const _user = users[i];

    if (email === _user.email) {
      user = {};

      user.id = _user.id;
      user.name = _user.name;
      user.email = _user.email;

      break;
    }
  }

  if (user === undefined) return null;
  else return user;
}
