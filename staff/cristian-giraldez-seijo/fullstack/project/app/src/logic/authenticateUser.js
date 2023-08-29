function authenticateUser(email, password) {
  if (typeof email !== 'string') throw new Error('email is not a string')
  if (typeof password !== 'string') throw new Error('password is not a string')

  return fetch(`${import.meta.env.VITE_API_URL}/users/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => {
      if (res.status === 200)
        return res.json()
      else if (res.status === 400)
        return res.json()
          .then(body => { throw new Error(body.error) })
      else {
        throw new Error('server error')
      }
    })
}

export default authenticateUser