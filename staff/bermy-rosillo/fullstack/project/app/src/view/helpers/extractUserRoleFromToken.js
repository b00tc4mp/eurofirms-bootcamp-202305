function extractUserRoleFromToken(token){
    const from = token.indexOf('.')+ 1 //se extrae luegp del punto
    const to = token.lastIndexOf('.')

    const dataB64 = token.slice(from, to)
    //decodificar de base 64 a JSON string
    const dataJSON = atob(dataB64)

    const data = JSON.parse(dataJSON)

    const userRole = data.role

    return userRole
}
export default extractUserRoleFromToken