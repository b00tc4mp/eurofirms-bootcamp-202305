import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import retrieveNotifications from "../../logic/retrieveNotifications"
import context from "../../context"

export default function Notifications() {
    const [notifications, setNotifications] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveNotifications(context.token)
                .then(notifications =>
                    setNotifications(notifications))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleProfile = (event, userIdProfile) => {
        event.preventDefault()
        navigate(`/profile/${userIdProfile}/posts`)
    }

    return <section className="flex flex-col items-start pb-20 w-full">
        {notifications?.map(notification => <article key={notification.id} className="w-full">
            {notification.text === 'Follow' && <div className="flex items-center p-1 border-b-gray-400 border-b-2">
                <img className="w-12 h-12 rounded-full object-cover" src={notification.user.image} alt="" />
                <a onClick={(event) => handleProfile(event, notification.user.id)} className="text-center m-2 text-color2 font-semibold ml-3" href="">{notification.user.name}</a>
                <p>follow you </p>
            </div>}
            {notification.text === 'Like' && <div className="flex items-center p-1 border-b-gray-400 border-b-2">
                <img className="w-12 h-12 rounded-full object-cover" src={notification.user.image} alt="" />
                <a onClick={(event) => handleProfile(event, notification.user.id)} className="text-center m-2 text-color2 font-semibold ml-3" href="">{notification.user.name}</a>
                <p>like your post</p>
                <div className="flex flex-col ml-4 items-center border-3">
                    <img className="w-14 object-contain" src={notification.post.image} alt="" />
                    <p className="text-xs">{notification.post.text}</p>
                </div>
            </div>}
            {notification.text === 'Comment' && <div className="flex items-center p-1 border-b-gray-400 border-b-2">
                <img className="w-12 h-12 rounded-full object-cover" src={notification.user.image} alt="" />
                <a onClick={(event) => handleProfile(event, notification.user.id)} className="text-center m-2 text-color2 font-semibold ml-3" href="">{notification.user.name}</a>
                <p>comment your post</p>
                <div className="flex flex-col ml-4 items-center border-3">
                    <img className="w-14 object-contain" src={notification.post.image} alt="" />
                    <p className="text-xs">{notification.post.text}</p>
                </div>
            </div>}
        </article>)}
    </section>
}