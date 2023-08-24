import {validateId} from './helpers/validators'

export default function deleteMessage(userId, messageId) {
    validateId(userId)
    validateId(messageId)

    return fetch(`http://localhost:8000/chats/${messageId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${userId}`
        }
    })
    .then((res)=> {
        if(res.status === 200) {
            return
          } else if (res.status === 400) {
            res.json()
              .then(body => {
                throw new Error(body.error)
              })
          }
    })
}