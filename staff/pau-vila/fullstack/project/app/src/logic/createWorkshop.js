import extractUserIdFromToken from "../view/helpers/extractUserIdFromToken"
import context from "../context"

function createWorkshop(description, place, 
    codeZIP, dateStart, dateEnd, attendantsLimit, image, video ) {
    if (typeof description !== 'string') throw new Error('description is not a string')
    if (typeof place !== 'string') throw new Error('Place must be a string')
    if (codeZIP === '') throw new Error('codeZip is empty')
    if (!(dateStart instanceof Date))throw new Error('dateStart is not a Date')
    if (!(dateEnd instanceof Date))throw new Error('dateEnd is not a Date')
    if (attendantsLimit <= 0 || attendantsLimit > 13)throw new Error('attendants out of limits ')   
    
    return fetch(`${import.meta.env.VITE_API_URL}/workshops`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${context.token}`,
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify({description, place,
            codeZIP, dateStart, dateEnd, attendantsLimit, image, video })
        
    })
        .then(res => {
            if (res.status === 201)
                return
            else if (res.status === 400) {
                return res.json()
                    .then(body => {
                        const message = body.error

                        throw new Error(message)

                    })
            }
            else
                throw new Error('server error')
        })
}
export default createWorkshop

