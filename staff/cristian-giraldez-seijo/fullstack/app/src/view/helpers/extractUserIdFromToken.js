/**
 * The function extracts the user ID from a token by decoding and parsing the token's data.
 * @param token - The `token` parameter is a string that represents a JSON Web Token (JWT).
 * @returns the userId extracted from the token.
 */
function extractUserIdFromToken(token) {
    const from = token.indexOf('.') + 1
    const to = token.lastIndexOf('.')

    const dataB64 = token.slice(from, to)

    const dataJSON = atob(dataB64)

    const data = JSON.parse(dataJSON)

    const userId = data.sub

    return userId
}

export default extractUserIdFromToken