import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import retrieveChat from "../../logic/retrieveChat"
import sendMessage from "../../logic/sendMessage"
import context from "../../context"
import extractUserIdFromToken from "../helpers/extractUserIdFromToken"

export default function Chat() {
    const [chat, setChat] = useState(null)

    const params = useParams()
    const { chatId } = params

    const navigate = context.navigate

    const userId = extractUserIdFromToken(context.token)

    useEffect(() => {
        try {
            retrieveChat(context.token, chatId)
                .then(chat => {
                    setChat(chat)
                    scrollToBottom()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    console.log('chat')

    const handleSendMessage = (event) => {
        event.preventDefault()
        const text = event.target.message.value

        try {
            sendMessage(context.token, chatId, text)
                .then(() => retrieveChat(context.token, chatId)
                    .then(chat => {
                        event.target.message.value = ''
                        setChat(chat)
                        scrollToBottom()
                    }))
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleProfile = (event, userIdProfile) => {
        event.preventDefault()
        navigate(`/profile/${userIdProfile}/posts`)
    }

    const handleBack = () => {
        navigate('/messages')
    }

    const scrollToBottom = () => {
        const pageHeight = document.body.scrollHeight

        window.scroll({
            top: pageHeight,
            behavior: 'smooth',
        });
    }

    return <section className="flex flex-col">
        <div className="fixed w-full bg-white flex justify-between items-center border-b-2 border-gray-400 py-1 px-2">
            <div className="flex items-center">
                <img className="w-12 h-12 rounded-full object-cover" src={chat?.users[0].image} alt="user profile image" />
                <a onClick={(event) => handleProfile(event, chat?.users[0].id)} className="m-2 text-color1 font-semibold ml-3" href="">{chat?.users[0].name}</a>
            </div>
            <button onClick={handleBack} className="button bg-color4 text-white border-none rounded-xl px-3 py-1 font-bold text-lg cursor-pointer transition duration-300 hover:bg-color3">Back</button>
        </div>
        <div className="flex flex-col mx-2 my-1 pb-28 pt-14">
            {chat?.messages.map(message => <article key={message.id} className={message.author === userId ? "ml-12 flex justify-end" : "mr-12 flex"}>
                <p className="m-1 py-1 px-2 w-auto rounded-xl bg-color5">{message?.text}</p>
            </article>)}
        </div>
        <form onSubmit={handleSendMessage} className="fixed bottom-14 flex justify-around p-3 w-full">
            <input id="message" placeholder=" ..." className="w-full rounded-full border-4 mr-3 pl-3 border-black" type="text" />
            <button className="button bg-color4 text-white border-none rounded-xl px-3 py-1 font-bold text-lg cursor-pointer transition duration-300 hover:bg-color3">Send</button>
        </form>
    </section>
}