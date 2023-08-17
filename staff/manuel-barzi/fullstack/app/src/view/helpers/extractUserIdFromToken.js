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