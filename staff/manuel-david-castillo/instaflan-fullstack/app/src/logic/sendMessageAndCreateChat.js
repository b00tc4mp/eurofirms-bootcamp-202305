import { validateId, validateText } from "./helpers/validators";

export default function sendMessageAndCreateChat(userId, othersUsers, text) {
  validateId(userId)
  validateText(text)

  othersUsers.forEach(user => {
    validateId(user)
})

 return fetch('http://localhost:8000/chats',{
  method: 'POST',
  headers: {
    Authorization: `Bearer ${userId}`,
    "Content-Type": "application/json"},
  body: JSON.stringify({othersUsers, text})
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