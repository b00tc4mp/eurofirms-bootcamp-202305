import {validateId} from './helpers/validators'

export const retrievePostsOfUser = function (userId, userIdProfile) {
  validateId(userId)
  validateId(userIdProfile)

  return fetch(`http://localhost:8000/users/${userIdProfile}/posts`,{
    headers: {Authorization: `Bearer ${userId}`}
  })
  .then(res => {
    if(res.status === 200) return res.json()
      .then(posts => posts) 
    else if (res.status === 400) return res.json()
      .then(err => {
        throw new Error (err.error)
      })
  }) 
};