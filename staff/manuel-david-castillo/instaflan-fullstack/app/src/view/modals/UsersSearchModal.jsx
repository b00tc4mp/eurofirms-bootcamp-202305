import { useEffect, useState } from "react"
import context from "../../context"

export default function UsersSearchModal(props) {
    const [users, setUsers] = useState(null)
    const navigate = context.navigate

    useEffect(() => {
        setUsers(props.users)
    }, [props.users])

    const handleProfile = (event, userIdProfile) => {
        event.preventDefault()
        navigate(`/profile/${userIdProfile}/posts`)
    }

    return <div ref={props.modalRef} className="search-modal">
        <div className="modal-peak"></div>
        {users?.length > 0 ?
            <div className="table-modal">
                {users?.map(user => <article className="user-search" key={user.id}>
                    <div className="user-img-a">
                        <img className="profile-image-post" src={user.image} alt={user.name} />
                        <a onClick={(event) => handleProfile(event, user.id)} className="name-post">{user.name}</a>
                    </div>
                </article>)}
            </div> :
            <div className="table-modal">
                <article className="user-search">
                    <h2 className="name-post">Not found</h2>
                </article>
            </div>}
    </div>
}
