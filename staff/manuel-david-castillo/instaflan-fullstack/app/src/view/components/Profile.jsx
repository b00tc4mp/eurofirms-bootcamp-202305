import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import { EditUserModal } from "../modals/EditUserModal";
import { ProfilePosts } from "./ProfilePosts";
import { ProfileFavPosts } from "./ProfileFavPosts";

import context from "../../context";
import retrieveUser from "../../logic/retrieveUser";
import retrieveUserById from "../../logic/retrieveUserById";
import toggleFollowUser from "../../logic/toggleFollowUser";

export function Profile() {
    const navigate = context.navigate

    const params = useParams()
    const { userIdProfile } = params

    const [modal, setModal] = useState(null)

    const [user, setUser] = useState(null)
    const [userProfile, setUserProfile] = useState(null)

    useEffect(() => {
        try {
            Promise.all([retrieveUser(context.token),
            retrieveUserById(context.token, userIdProfile)])
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
            retrieveUserById(context.token, userIdProfile)
                .then(user => {
                    setModal(null)
                    setUserProfile(user)
                })
                .catch((error) => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    function handleProfilePosts() {
        navigate(`/profile/${userIdProfile}/posts`)
    }

    function handleProfileFavPosts() {
        navigate(`/profile/${userIdProfile}/fav-posts`)
    }

    function handleFollowUser() {
        try {
            Promise.all([retrieveUserById(context.token, userIdProfile),
            toggleFollowUser(context.token, userIdProfile)])
                .then(([userProfile]) => setUserProfile(userProfile))
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <section className="profile">
        <div className="profile-image-name-button">
            <div className="profile-image-name">
                <img className="profile-image-post" src={userProfile?.image} alt={userProfile?.name} />
                <h3 className="name-post">{userProfile?.name}</h3>
            </div>
            {user?.name === userProfile?.name ?
                <button onClick={handleEditUserModal} className="button button-modal edit-profile-button">Edit profile</button>
                :
                <button onClick={handleFollowUser} className="button button-modal edit-profile-button">{userProfile.followed ? 'Unfollow' : 'Follow'}</button>}
        </div>
        <p className="description-profile">{userProfile?.description}</p>
        <div className="two-buttons-profile">
            <button onClick={() => handleProfilePosts()} className="button button-modal">{user?.name === userProfile?.name ? 'My posts' : 'Profile posts'}</button>
            <button onClick={() => handleProfileFavPosts()} className="button button-modal">{user?.name === userProfile?.name ? 'My favorite posts' : 'Favorite profile posts'}</button>
        </div>

        <Routes>
            <Route path='/posts' element={<ProfilePosts />} />
            <Route path='/fav-posts' element={<ProfileFavPosts />} />
        </Routes>

        {modal === "edit-user-modal" && <EditUserModal onEditUser={handleEditUser} onHideEditUser={handleCancelEditUserModal} />}
    </section >
}