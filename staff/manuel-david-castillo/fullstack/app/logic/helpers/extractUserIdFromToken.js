function extractUserIdFromToken(token) {
    const dataB64 = token.slice(token.indexOf('.') + 1, token.lastIndexOf('.'))
    console.log('dataB64')
    console.log(dataB64)

    const dataJSON = atob(dataB64)
    console.log('dataJSON')
    console.log(dataJSON)

    const data = JSON.parse(dataJSON)
    console.log('data')
    console.log(data)

    const userId = data.sub
    console.log('userId')
    console.log(userId)

    return userId
}