//const{validateId} = require('./helpers/validators')
function retrieveUser(token) {
    if (typeof token !== 'string') throw new Error('token is not a string')
    //validateId(token)
    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        //--response
        .then(res => {
            if (res.status === 400) {

                return res.json
                    .then(body => {
                        throw new Error(body.error)
                    })
            } else if (res.status === 200)

                return res.json()
                    .then(body => {
                        const user = body
                        return user
                    })
        })

}
export default retrieveUser