function User(name, email, password) {
  const usersWorked = local.users;

  const nextUserId =
    usersWorked.length !== 0 ? usersWorked[usersWorked.length - 1].id + 1 : 0;

  (this.id = nextUserId),
    (this.name = name),
    (this.email = email),
    (this.password = password);
}
