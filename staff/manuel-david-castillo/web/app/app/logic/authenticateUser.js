const authenticateUser = function (email, password) {
  let user;

  const usersWorked = local.users;

  for (let i = 0; i < usersWorked.length; i++) {
    if (usersWorked[i].email === email) {
      user = usersWorked[i];
    }
  }

  if (user === undefined || user.password !== password) {
    return false;
  } else {
    return user.id;
  }
};
