import {validateName, validateEmail, validatePassword, validateUrl, validateText} from './helpers/validators'

export default function registerUser(name, image, description, email, password) {
  validateName(name)
  validateUrl(image)
  validateText(description)
  validateEmail(email)
  validatePassword(password)

  return fetch('http://localhost:8000/users', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name, image, description, email, password}),
  })
  .then((res) => {
    if(res.status === 201) {
      return
    } else if(res.status === 400) {
      return res.json()
      .then((body)=> {
        throw new Error(body.error)
      })
    }
  })
};
