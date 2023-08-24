import {validateId} from './helpers/validators'

export default function retrieveUsersNotFollowed(userId) {
  validateId(userId)

  return fetch('http://localhost:8000/explorer/users', {
    headers: {
      Authorization: `Bearer ${userId}`
    }
  })
  .then((res) => {
    if(res.status === 200) {
      return res.json()
    } else if(res.status === 400) {
      return res.json()
      .then((body)=> {
        throw new Error(body.error)
      })
    }
  })
}