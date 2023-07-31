import { validateString } from "./helpers/validators"

export const createPanel = function (token, reference, width, height) {
    validateString(token, validateString.REGULAR)
    validateString(reference, validateString.NAME)
    validateString(width, validateString.INTEGER)
    validateString(height, validateString.INTEGER)

    return fetch(import.meta.env.VITE_API_URL + '/panels', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reference, width, height })
    })
        .then(res => {
            if (res.status === 201) return
            else return res.json().then(body => { throw new Error(body.error) })
        })
}