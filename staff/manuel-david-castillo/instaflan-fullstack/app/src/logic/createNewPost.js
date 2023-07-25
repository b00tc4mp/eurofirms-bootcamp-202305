import { validateId, validateUrl, validateText } from "./helpers/validators";

export const createNewPost = function (author, image, text) {
  validateId(author)
  validateUrl(image)
  validateText(text)

 return fetch('http://localhost:8000/posts',{
  method: 'POST',
  headers: {
    Authorization: `Bearer ${author}`,
    "Content-Type": "application/json"},
  body: JSON.stringify({image, text})
})
  .then((res)=> {
    if(res.status === 201) {
      return
    } else if (res.status === 400) {
      return res.json()
        .then((body) => {
          throw new Error(body.error)
        })
    }
  })
};