import { useState, useEffect } from 'react'
import { retrieveUser, updateUser } from '../../logic/user-ctrl'
import context from '../../context'

export function UserEdit({ onUpdatedUser, onExitModal }) {

    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            retrieveUser(context.tokenUser)
                .then(userRet => setUser(userRet))
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }, [])

    const handleOnExitModal = () => onExitModal()
    const handleEditUser = (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const surname = event.target.surname.value
        const zip = event.target.zip.value

        try {
            updateUser(context.tokenUser, name, surname, zip)
                .then(() => onUpdatedUser())
                .catch(error => alert('Error: ' + error.message))
        } catch (error) { alert('Error: ' + error.message) }
    }

    return <>
        {<div className="home-modal-editpost basic-modal">
            <form className="home-modal-editpost-form basic-form" action="submit" onSubmit={handleEditUser}>
                <h4>Edit profile</h4>

                <label className="basic-label" htmlFor="name">Name</label>
                <input type="text" id="name" defaultValue={user ? user.name : ''}></input>

                <label className="basic-label" htmlFor="surname">Surname</label>
                <input type="text" id="surname" defaultValue={user ? user.surname : ''}></input>

                <label className="basic-label" htmlFor="zip">Zip</label>
                <input type="text" id="zip" defaultValue={user ? user.zip : ''}></input>

                <div className="flex-hor">
                    <button type="submit" className="basic-button">Save</button>
                    <button type="button" className="basic-button" onClick={handleOnExitModal}>Cancel</button>
                </div>
            </form>
        </div>}
    </>
}