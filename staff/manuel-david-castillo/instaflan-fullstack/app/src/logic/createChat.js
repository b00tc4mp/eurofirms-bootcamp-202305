import { validateId } from "./helpers/validators";

export default function createChat(userId, othersUsers) {
  validateId(userId)
  othersUsers.forEach(userId => {
    validateId(userId)
  });

 return fetch(`http://localhost:8000/chats`,{
  method: 'POST',
  headers: {
    Authorization: `Bearer ${userId}`,
    "Content-Type": "application/json"},
  body: JSON.stringify({othersUsers})
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