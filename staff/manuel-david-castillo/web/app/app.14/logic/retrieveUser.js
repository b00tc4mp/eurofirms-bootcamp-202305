function retrieveUser(userId) {
  const user = users.find((user) => user.id === userId);

  if (user === undefined) {
    return null;
  }

  const userObject = {
    email: user.email,
    name: user.name,
  };

  return userObject;
}
