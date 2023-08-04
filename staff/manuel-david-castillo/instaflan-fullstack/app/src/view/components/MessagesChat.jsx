import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import retrieveChat from "../../logic/retrieveChat"
import sendMessage from "../../logic/sendMessage"
import context from "../../context"
import extractUserIdFromToken from "../helpers/extractUserIdFromToken"

export default function MessageChat() {
    const [chat, setChat] = useState(null)

    const params = useParams()
    const { chatId } = params

    const userId = extractUserIdFromToken(context.token)

    useEffect(() => {
        try {
            retrieveChat(context.token, chatId)
                .then(chat => setChat(chat))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleSendMessage = (event) => {
        event.preventDefault()
        const text = event.target.message.value

        try {
            sendMessage(context.token, chatId, text)
                .then(() => retrieveChat(context.token, chatId)
                    .then(chat => {
                        event.target.message.value = ''
                        setChat(chat)
                    }))
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <section className="input-and-messages">
        <div className="user-chat"></div>
        <div className="messages">
            {chat?.messages.map(message => <article key={message.id} className={message.author === userId ? "message-user" : "message-other-user"}>
                <p className="message-text">{message?.text}</p>
            </article>)}
        </div>
        <form onSubmit={handleSendMessage} className="input-and-button">
            <input id="message" placeholder=" ..." className="input-send-message" type="text" />
            <button className="button button-modal">Send</button>
        </form>
    </section>
}