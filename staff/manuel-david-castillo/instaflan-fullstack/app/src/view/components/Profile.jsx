import { useEffect, useState, useContext } from "react";
import { Routes, Route, useParams } from "react-router-dom";

import EditUserModal from "../modals/EditUserModal";
import ProfilePosts from "./ProfilePosts";
import ProfileFavPosts from "./ProfileFavPosts";

import context from "../../context";
import createChat from "../../logic/createChat";
import retrieveUserById from "../../logic/retrieveUserById";
import toggleFollowUser from "../../logic/toggleFollowUser";
import { AppContext } from "../../AppContext";
import extractUserIdFromToken from "../helpers/extractUserIdFromToken";

export default function Profile() {
    console.log('profile')
    const navigate = context.navigate

    const params = useParams()
    const { userIdProfile } = params
    const userId = extractUserIdFromToken(context.token)

    const [modal, setModal] = useState(null)

    const { user, setUser } = useContext(AppContext)
    const [userProfile, setUserProfile] = useState(null)

    useEffect(() => {
        if (userIdProfile === userId) {
            setUserProfile(user)
            return
        }
        try {
            retrieveUserById(context.token, userIdProfile)
                .then(userProfile => {
                    setUser(user)
                    setUserProfile(userProfile)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [userIdProfile])

    const handleEditUserModal = () => setModal('edit-user-modal')
    const handleCancelModal = () => setModal(null)
    const handleEditUser = () => {
        try {
            retrieveUserById(context.token, userIdProfile)
                .then(user => {
                    setModal(null)
                    setUser(user)
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
            toggleFollowUser(context.token, userIdProfile)
                .then(() => {
                    return retrieveUserById(context.token, userIdProfile)
                })
                .then(userProfile => setUserProfile(userProfile))
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleSendMessageModal = () => {
        try {
            createChat(context.token, userIdProfile)
                .then(chatId => {
                    console.log(chatId)
                    return navigate(`/messages/${chatId}`)
                })
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <section className=" pb-16">
        <div className="flex justify-between items-center py-2 px-3">
            <div className="flex items-center">
                <img className="w-12 h-12 rounded-full object-cover mr-2" src={userProfile?.image} alt={userProfile?.name} />
                <h3 className="font-semibold text-color1 text-xl">{userProfile?.name}</h3>
            </div>
            {user?.name === userProfile?.name ?
                <button onClick={handleEditUserModal} className="button bg-color4 text-white border-none rounded-xl px-3 py-1 font-bold text-lg cursor-pointer transition duration-300 hover:bg-color3">Edit profile</button>
                :
                <div className="flex justify-around items-center gap-2">
                    <button onClick={handleFollowUser} className="button bg-color4 text-white border-none rounded-xl px-3 py-1 font-bold text-lg cursor-pointer transition duration-300 hover:bg-color3 edit-profile-button">{userProfile?.follow ? 'Unfollow' : 'Follow'}</button>
                    <button onClick={handleSendMessageModal} className="button bg-color4 text-white border-none rounded-xl px-3 py-1 font-bold text-lg cursor-pointer transition duration-300 hover:bg-color3 edit-profile-button">Direct</button>
                </div>
            }
        </div>
        <p className="text-color1 font-semibold border-b-2 border-b-gray-400 px-3 py-2 pt-0">{userProfile?.description}</p>
        <div className="flex justify-evenly p-2 border-b-2 border-b-gray-400">
            <button onClick={() => handleProfilePosts()} className="button bg-color4 text-white border-none rounded-xl px-3 py-1 font-bold text-lg cursor-pointer transition duration-300 hover:bg-color3">{user?.name === userProfile?.name ? 'My posts' : 'Profile posts'}</button>
            <button onClick={() => handleProfileFavPosts()} className="button bg-color4 text-white border-none rounded-xl px-3 py-1 font-bold text-lg cursor-pointer transition duration-300 hover:bg-color3">{user?.name === userProfile?.name ? 'My favorite posts' : 'Favorite profile posts'}</button>
        </div>

        <Routes>
            <Route path='/posts' element={<ProfilePosts />} />
            <Route path='/fav-posts' element={<ProfileFavPosts />} />
        </Routes>

        {modal === "edit-user-modal" && <EditUserModal onEditUser={handleEditUser} onHideEditUser={handleCancelModal} />}
        {modal === "send-message-modal" && <SendMessageModal onHideSendMessage={handleCancelModal} />}
    </section >
}