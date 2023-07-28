import { useState, useEffect } from 'react'
import { retrieveUser } from '../../logic/retrieveUser'
import { editUser } from '../../logic/editUser'
import { context } from '../../logic/helpers/context'

export function EditUserModal(props) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            retrieveUser(context.token)
                .then((user) => setUser(user))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleSubmitUser = (event) => {
        event.preventDefault()

        const name = event.target.name.value
        const image = event.target.image.value
        const description = event.target.description.value

        try {
            editUser(context.token, name, image, description)
                .then(() => {
                    props.onEditUser()
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCancelEditUser = () => props.onHideEditUser()

    return <div className="modal-edit-user">
        {user && <form onSubmit={handleSubmitUser} className="form-edit-user" action="">
            <input type="hidden" id="edit-user-id" />
            <h3 className="h3-edit-user">Edit profile</h3>
            <p className="p-form">Name</p>
            <input id="name" type="text" defaultValue={user.name ? user.name : undefined} />
            <p className="p-form">Image</p>
            <input id="image" type="url" defaultValue={user.image ? user.image : undefined} />
            <p className="p-form">Description</p>
            <textarea
                id="description"
                name=""
                cols="25"
                rows="5"
                defaultValue={user.description ? user.description : undefined}
            ></textarea>
            <div className="buttons-create-cancel">
                <button type="submit" className="button button-modal">
                    Edit
                </button>
                <button onClick={handleCancelEditUser} type="button" className="button button-modal">
                    Cancel
                </button>
            </div>
        </form>}
    </div>
}