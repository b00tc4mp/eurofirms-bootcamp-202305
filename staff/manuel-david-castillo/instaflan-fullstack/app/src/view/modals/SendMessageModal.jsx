import { useParams } from "react-router-dom"

import sendMessageAndCreateChat from "../../logic/sendMessageAndCreateChat"
import context from "../../context"

export default function SendMessageModal(props) {
    const params = useParams()
    const { userIdProfile } = params

    const handleSendMessage = (event) => {
        event.preventDefault()

        const text = event.target.text.value

        try {
            sendMessageAndCreateChat(context.token, [userIdProfile], text)
                .then(() => {
                    props.onHideSendMessage()
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCancelSendMessage = () => props.onHideSendMessage()

    return <div className="modal-new-post">
        <form onSubmit={handleSendMessage} className="form-new-post" action="">
            <h3 className="h3-new-post">Say hi</h3>
            <textarea
                id="text"
                name=""
                cols="25"
                rows="5"
            ></textarea>
            <div className="buttons-create-cancel">
                <button type="submit" className="button button-modal">
                    Send
                </button>
                <button onClick={handleCancelSendMessage} type="button" className="button button-modal">
                    Cancel
                </button>
            </div>
        </form>
    </div>
}