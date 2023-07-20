import {validateId, validateUrl, validateText} from './helpers/validators'

export function updatePost(userId, postId, image, text) {
  validateId(userId)
  validateId(postId)
  validateUrl(image)
  validateText(text)

 return fetch(`http://localhost:9000/posts/${postId}`,{
  method: 'PATCH',
  headers: {
    Authorization: `Bearer ${userId}`,
    "Content-Type": "application/json"},
  body: JSON.stringify({image, text})
})
  .then((res)=> {
    if(res.status === 200) {
      return
    } else if (res.status === 400) {
      return res.json()
        .then((body) => {
          throw new Error(body.error)
        })
    }
  })
}
