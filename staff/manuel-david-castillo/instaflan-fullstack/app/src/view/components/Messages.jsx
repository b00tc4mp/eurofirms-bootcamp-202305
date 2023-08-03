import { useEffect, useState } from "react"
import retrieveChats from "../../logic/retrieveChats"
import context from "../../context"

export default function Messages() {
    const [chats, setChats] = useState(null)
    const navigate = context.navigate

    useEffect(() => {
        try {
            retrieveChats(context.token)
                .then(chats => {
                    setChats(chats)
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

    const handleNavigateChat = (event, chatId) => {
        event.preventDefault()
        navigate(`/messages/${chatId}`)
    }

    return <section className="all-chats">
        {chats?.map(chat => <article onClick={(event) => handleNavigateChat(event, chat.id)} key={chat.id} className="chat">
            <div className="users-chat">
                {chat.users.map(user => <article key={user.id} className="user-image-name">
                    <img className="profile-image-post" src={user.image} alt="user profile image" />
                    <a onClick={(event) => handleProfile(event, user.id)} className="text-post" href="">{user.name}</a>
                </article>)}
            </div>
            <p className="text-chat">{chat.messages[chat.messages.length - 1]?.text}</p>
        </article>)}
    </section>
}