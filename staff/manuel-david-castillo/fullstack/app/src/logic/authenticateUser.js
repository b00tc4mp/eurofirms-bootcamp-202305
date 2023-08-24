import {validateEmail, validatePassword} from './helpers/validators'

export const authenticateUser = function (email, password) {
  validateEmail(email)
  validatePassword(password)

  return fetch('http://localhost:9000/users/auth', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email, password}),
  })
  .then((res) => {
    if(res.status === 200) {
      return res.json()
      .then((body)=> {
        const userId = body

        return userId
      })
    } else if(res.status === 400) {
      return res.json()
      .then((body)=> {
        throw new Error(body.error)
      })
    }
  })
};
