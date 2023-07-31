import { useEffect, useState } from "react"
import { retrieveUsersNotFollowed } from "../../logic/retrieveUsersNotFollowed"
import { toggleFollowUser } from "../../logic/toggleFollowUser"
import context from "../../context"

export function Explorer() {
    const [users, setUsers] = useState()

    const navigate = context.navigate

    useEffect(() => {
        try {
            retrieveUsersNotFollowed(context.token)
                .then(users => {
                    setUsers(users)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleProfile = (event, userIdProfile) => {
        event.preventDefault()
        navigate(`/profile/${userIdProfile}/posts`)
    }

    function handleFollowUser(userIdProfile) {
        try {
            toggleFollowUser(context.token, userIdProfile)
                .then(() => {
                    setUsers(users => {
                        const users2 = [...users]

                        const index = users2.findIndex(user => user._id === userIdProfile)

                        users2.splice(index, 1)

                        return users2
                    })
                })
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    function handleUpdate() {
        try {
            retrieveUsersNotFollowed(context.token)
                .then(users => {
                    setUsers(users)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <section className="explorer">
        <div key={"users-not-followed"} className="users-not-followed">
            <h2 className="h2-explorer">Maybe you know</h2>
            {users?.map(user => <article key={user.id} className="user">
                <div className="user-img-a">
                    <img className="profile-image-post" src={user.image} alt={user.name} />
                    <a onClick={() => handleProfile(event, user._id)} className="name-post">{user.name}</a>
                </div>
                <button onClick={() => handleFollowUser(user._id)} className="button button-modal edit-profile-button">Follow</button>
            </article>)}
            <button onClick={handleUpdate} className="button">Update</button>
        </div>
        <div key={"posts-users-not-followed"} className="posts-users-not-followed"></div>
    </section>
}