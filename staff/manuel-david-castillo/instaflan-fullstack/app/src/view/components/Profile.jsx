import { useEffect, useState } from "react";

import { EditUserModal } from "../modals/EditUserModal";
import { ProfilePosts } from "./ProfilePosts";
import { ProfileFavPosts } from "./ProfileFavPosts";

import { context } from "../../logic/helpers/context";
import { retrieveUser } from "../../logic/retrieveUser";
import { retrieveUserById } from "../../logic/retrieveUserById";

export function Profile(props) {
    const userIdProfile = props.userIdProfile

    const [modal, setModal] = useState(null)
    const [toggleMyPostsOrMyFavPosts, setToggleMyPostsOrMyFavPosts] = useState('profile-posts')

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

    function handleProfilePosts() {
        setToggleMyPostsOrMyFavPosts('profile-posts')
    }

    function handleProfileFavPosts() {
        setToggleMyPostsOrMyFavPosts('profile-fav-posts')
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
        <div className="two-buttons-profile">
            <button onClick={() => handleProfilePosts()} className="button button-modal">{user?.name === userProfile?.name ? 'My posts' : 'Profile posts'}</button>
            <button onClick={() => handleProfileFavPosts()} className="button button-modal">{user?.name === userProfile?.name ? 'My favorite posts' : 'Favorite profile posts'}</button>
        </div>

        {toggleMyPostsOrMyFavPosts === "profile-posts" && <ProfilePosts userIdProfile={userIdProfile} />}
        {toggleMyPostsOrMyFavPosts === "profile-fav-posts" && <ProfileFavPosts userIdProfile={userIdProfile} />}

        {modal === "edit-user-modal" && <EditUserModal onEditUser={handleEditUser} onHideEditUser={handleCancelEditUserModal} />}
    </section >
}