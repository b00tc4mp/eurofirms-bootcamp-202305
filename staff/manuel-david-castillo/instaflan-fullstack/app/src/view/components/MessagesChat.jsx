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

    return <section className="flex flex-col">
        <div className=""></div>
        <div className="flex flex-col mx-2 my-1 pb-28">
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