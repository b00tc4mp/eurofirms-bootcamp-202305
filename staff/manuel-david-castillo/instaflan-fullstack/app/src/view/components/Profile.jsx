import { useEffect, useState } from "react";

import { EditUserModal } from "../modals/EditUserModal";

import { retrieveUser } from "../../logic/retrieveUser";
import { retrieveUserById } from "../../logic/retrieveUserById";
import { context } from "../../logic/helpers/context";

export function Profile(props) {
    const [modal, setModal] = useState(null)
    const [user, setUser] = useState(null)
    const [userProfile, setUserProfile] = useState(null)

    useEffect(() => {
        try {
            Promise.all([retrieveUser(context.token),
            retrieveUserById(context.token, props.userIdProfile)])
                .then(([user, userProfile]) => {
                    setUser(user)
                    setUserProfile(userProfile)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [userProfile])

    const handleEditUserModal = () => setModal('edit-user-modal')
    const handleCancelEditUserModal = () => setModal(null)
    const handleEditUser = () => {
        try {
            retrieveUserById(context.token, props.userIdProfile)
                .then(user => {
                    setModal(null)
                    setUserProfile(user)
                })
                .catch(() => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
        setModal(null)
    }

    return <section className="profile">
        <div className="profile-image-name-button">
            <div className="profile-image-name">
                <img className="profile-image-post" src={userProfile?.image} alt={userProfile?.name} />
                <h3 className="name-post">{userProfile?.name}</h3>
            </div>
            {user?.name === userProfile?.name && <button onClick={handleEditUserModal} className="button button-modal edit-profile-button">Edit profile</button>}
        </div>
        <p className="description-profile">{userProfile?.description}</p>
        {user?.name === userProfile?.name && <div className="two-buttons-profile">
            <button className="button button-modal">My posts</button>
            <button className="button button-modal">My favorite posts</button>
        </div>}

        {modal === "edit-user-modal" && <EditUserModal onEditUser={handleEditUser} onHideEditUser={handleCancelEditUserModal} />}
    </section>
}