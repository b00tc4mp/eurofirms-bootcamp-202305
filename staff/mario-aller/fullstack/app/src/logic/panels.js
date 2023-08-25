import { validateString } from 'com'

/**
 * The `createPanel` function sends a POST request to the API to create a new panel with the specified
 * token, reference, width, and height.
 * @param token - The `token` parameter is a string that represents the authentication token required
 * to access the API. It is used to authorize the request and ensure that only authorized users can
 * create a panel.
 * @param reference - The `reference` parameter is a string that represents the reference or name of
 * the panel. It is used to uniquely identify the panel.
 * @param width - The `width` parameter represents the width of the panel in pixels.
 * @param height - The `height` parameter is the height of the panel that you want to create. It should
 * be a string representing an integer value.
 * @returns a Promise.
 */
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
/**
 * The function retrieves panels using a token for authorization.
 * @param token - The `token` parameter is a string that represents the authentication token used to
 * authorize the API request.
 * @returns The function `retrievePanels` returns a Promise that resolves to the panels data if the
 * response status is 200. If the response status is not 200, it throws an error with the error message
 * from the response body.
 */
export const retrievePanels = function (token) {
    validateString(token)

    return fetch(import.meta.env.VITE_API_URL + '/panels', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(res => {
            if (res.status === 200) return res.json().then(panels => panels)
            else return res.json().then(body => { throw new Error(body.error) })
        })
}
/**
 * The function retrieves panel data from an API using a token and panel ID.
 * @param token - The `token` parameter is a string that represents the authentication token required
 * to access the API. It is used to authorize the request and ensure that the user has the necessary
 * permissions to retrieve the panel data.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel you want to retrieve.
 * It is used to specify which panel you want to fetch from the API.
 * @returns a Promise that resolves to the JSON response of the API call.
 */
export const retrievePanelOne = function (token, panelId) {
    validateString(token)
    validateString(panelId)

    return fetch(import.meta.env.VITE_API_URL + '/panels/' + panelId, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(res => {
            if (res.status === 200) return res.json().then(panel => panel)
            else return res.json().then(body => { throw new Error(body.error) })
        })
}
/**
 * The function `retrievePanelWorking` retrieves the working data of a panel using a token and panel
 * ID.
 * @param token - The `token` parameter is a string that represents the authentication token required
 * to access the API. It is used to authorize the request and ensure that the user has the necessary
 * permissions to retrieve the panel's working data.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel you want to retrieve
 * the working data for.
 * @returns a Promise that resolves to the JSON response from the API call.
 */
export const retrievePanelWorking = function (token, panelId) {
    validateString(token)
    validateString(panelId)

    return fetch(import.meta.env.VITE_API_URL + '/panels/' + panelId + '/work', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then(res => {
            if (res.status === 200) return res.json().then(panel => panel)
            else return res.json().then(body => { throw new Error(body.error) })
        })
}
/**
 * The `updatePanel` function updates the reference, width, and height of a panel using an API call
 * with the provided token and panelId.
 * @param token - The `token` parameter is a string that represents the authentication token required
 * to access the API. It is used to authorize the request and ensure that only authorized users can
 * update the panel.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel that you want to
 * update.
 * @param reference - The `reference` parameter is a string that represents the reference of the panel.
 * It is used to identify the panel in the system.
 * @param width - The `width` parameter represents the width of the panel in pixels.
 * @param height - The `height` parameter represents the desired height of the panel.
 * @returns a Promise.
 */
export const updatePanel = function (token, panelId, reference, width, height) {
    validateString(token)
    validateString(panelId)
    validateString(reference, validateString.NAME)
    validateString(width, validateString.INTEGER)
    validateString(height, validateString.INTEGER)

    return fetch(import.meta.env.VITE_API_URL + '/panels/' + panelId, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reference, width, height })
    })
        .then(res => {
            if (res.status === 200) return
            else return res.json().then(body => { throw new Error(body.error) })
        })
}
/**
 * The function `updatePanelStatusToOptimize` sends a PATCH request to the API to update the status of
 * a panel to "optimize" using the provided token and panel ID.
 * @param token - The `token` parameter is a string that represents the authentication token required
 * to access the API. It is used to authorize the request by including it in the `Authorization`
 * header.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel that you want to
 * update the status for.
 * @returns a promise.
 */
export const updatePanelStatusToOptimize = function (token, panelId) {
    validateString(token)
    validateString(panelId)

    return fetch(import.meta.env.VITE_API_URL + '/panels/' + panelId + '/optimize', {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.status === 200) return
            else return res.json().then(body => { throw new Error(body.error) })
        })
}
/**
 * The function `updatePanelStatusReEdit` sends a PATCH request to update the status of a panel to
 * "reedit" using the provided token and panelId.
 * @param token - The `token` parameter is a string that represents the authentication token required
 * to access the API. It is used to authorize the user making the request.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel that you want to
 * update the status for.
 * @returns a Promise.
 */
export const updatePanelStatusReEdit = function (token, panelId) {
    validateString(token)
    validateString(panelId)

    return fetch(import.meta.env.VITE_API_URL + '/panels/status/reedit/' + panelId, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.status === 200) return
            else return res.json().then(body => { throw new Error(body.error) })
        })
}
/**
 * The `deletePanel` function sends a DELETE request to the API to delete a panel using the provided
 * token and panelId.
 * @param token - The `token` parameter is a string that represents the authentication token required
 * to access the API. It is used to authorize the request to delete a panel.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel that you want to
 * delete.
 * @returns a Promise.
 */
export const deletePanel = function (token, panelId) {
    validateString(token)
    validateString(panelId)

    return fetch(import.meta.env.VITE_API_URL + '/panels/' + panelId, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(res => {
            if (res.status === 200) return
            else return res.json().then(body => { throw new Error(body.error) })
        })
}
/**
 * The function reEditPanel sends a PATCH request to update the status of a panel using the provided
 * token and panelId.
 * @param token - The `token` parameter is a string that represents the authentication token used for
 * authorization. It is used to authenticate the user making the request.
 * @param panelId - The `panelId` parameter is the unique identifier of the panel that you want to
 * re-edit.
 * @returns a promise.
 */
export const reEditPanel = function (token, panelId) {
    validateString(token)
    validateString(panelId)

    return fetch(import.meta.env.VITE_API_URL + '/panels/status/' + panelId, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(res => {
            if (res.status === 200) return
            else return res.json().then(body => { throw new Error(body.error) })
        })
}
/**
 * The `createBlock` function sends a POST request to the API to create a new block with the specified
 * panel ID, width, and height, using the provided token for authorization.
 * @param token - The `token` parameter is a string that represents the authentication token used for
 * authorization. It is used to authenticate the user making the API request.
 * @param panelId - The `panelId` parameter is the identifier of the panel where the block will be
 * created.
 * @param width - The `width` parameter represents the width of the block in pixels.
 * @param height - The `height` parameter represents the height of the block that will be created.
 * @returns a Promise.
 */
export const createBlock = function (token, panelId, width, height) {
    validateString(token)
    validateString(panelId)
    validateString(width, validateString.INTEGER)
    validateString(height, validateString.INTEGER)

    return fetch(import.meta.env.VITE_API_URL + '/blocks', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ panelId, width, height })
    })
        .then(res => {
            if (res.status === 201) return
            else return res.json().then(body => { throw new Error(body.error) })
        })
}
/**
 * The `deleteBlock` function sends a DELETE request to the specified API endpoint to delete a block,
 * using the provided token for authorization.
 * @param token - The `token` parameter is a string that represents the authentication token used for
 * authorization. It is used to authenticate the user making the request.
 * @param panelId - The `panelId` parameter represents the ID of the panel that contains the block you
 * want to delete.
 * @param blockId - The `blockId` parameter is the unique identifier of the block that you want to
 * delete.
 * @returns a promise.
 */
export const deleteBlock = function (token, panelId, blockId) {
    validateString(token)
    validateString(blockId)

    return fetch(import.meta.env.VITE_API_URL + '/blocks/' + panelId + '/' + blockId, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
        .then(res => {
            if (res.status === 200) return
            else return res.json().then(body => { throw new Error(body.error) })
        })
}
