const authenticateUser = function (email, password) {
  let user;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      user = users[i];
    }
  }

  if (user === undefined || user.password !== password) {
    return false;
  } else {
    return user.id;
  }
};
