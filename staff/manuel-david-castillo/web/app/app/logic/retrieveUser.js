function retrieveUser(userId) {
  const usersWorked = local.users;

  const user = usersWorked.find((user) => user.id === userId);

  if (user === undefined) {
    return null;
  }

  const userObject = {
    email: user.email,
    name: user.name,
  };

  return userObject;
}
