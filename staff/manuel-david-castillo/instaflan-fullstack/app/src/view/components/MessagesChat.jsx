import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import retrieveChat from "../../logic/retrieveChat"
import context from "../../context"

export default function MessageChat() {
    const [chat, setChat] = useState(null)

    const params = useParams()
    const { chatId } = params

    useEffect(() => {
        try {
            retrieveChat(context.token, chatId)
                .then(chat => {
                    console.log(chat)
                    setChat(chat)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <section className="input-and-messages">
        <div className="messages">
            {chat?.messages.map(message => <article className="message">
                <p>{message.text}</p>
            </article>)}
        </div>
        <div className="input-and-button">
            <input placeholder=" ..." className="input-send-message" type="text" />
            <button className="button button-modal">Send</button>
        </div>
    </section>
}