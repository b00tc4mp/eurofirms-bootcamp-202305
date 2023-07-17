function decodeJsonWebToken(token){
    const [,extract] = token.split('.')

    const dataJson = atob(extract)

    const userId = JSON.parse(dataJson).sub

    return userId
}