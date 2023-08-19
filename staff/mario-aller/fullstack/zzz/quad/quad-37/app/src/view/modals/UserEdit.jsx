import { useState, useEffect } from 'react'
import { retrieveUser, updateUser } from '../../logic/users'
import context from '../../context'

/**
 * The `UserEdit` component is a form that allows users to edit their profile information and save the
 * changes.
 * @returns The UserEdit component is returning a form that allows the user to edit their profile
 * information. The form includes input fields for name, surname, and zip, with default values
 * populated from the user object. There are also "Save" and "Cancel" buttons for submitting or
 * canceling the edit.
 */
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
        {<div className="basic-modal">
            <form className="basic-form" action="submit" onSubmit={handleEditUser}>
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