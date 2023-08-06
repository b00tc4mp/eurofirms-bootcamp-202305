/**
 * The function `getIdFromToken` takes a token as input, decodes it, and returns the "sub" property
 * from the decoded JSON object.
 * @param token - The `token` parameter is a string that represents a JSON Web Token (JWT).
 * @returns the "sub" property from the decoded JSON object.
 */
export function getIdFromToken(token) {
    return JSON.parse(atob(token.split('.')[1])).sub
}