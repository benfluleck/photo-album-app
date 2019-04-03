export const getUsers = (users) => {
  let newUsers = []

  users.map(({ id, username, name }) => newUsers.push({ id, name, username }))

  return newUsers
}
