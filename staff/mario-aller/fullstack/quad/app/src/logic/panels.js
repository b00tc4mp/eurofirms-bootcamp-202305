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
