import context from "../../context"
import { useEffect, useState } from "react"
import retrieveWorkshop from "../../logic/retrieveWorkshop"
import updateWorkshop from "../../logic/updateWorkshop"

function EditWorkshopModal({ workshopId, onEditWorkshopCancelled, onWorkshopEdited }) {
    console.log('EditWorkshopModal -> render')

    const [workshop, setWorkshop] = useState(null)

    useEffect(() => {
        try {
            retrieveWorkshop(context.token, workshopId)
                .then(workshop => setWorkshop(workshop))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleCancelClick = () => onEditWorkshopCancelled()

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const description = event.target.description.value
        const place = event.target.place.value
        const codeZIP = event.target.codeZIP.value
        const dateStart = new Date(event.target.dateStart.value)
        const dateEnd = new Date(event.target.dateEnd.value)
        const video = event.target.video.value
        const attendantsLimit = Number(event.target.attendantslimit.value)

        try {
            updateWorkshop(context.token, workshopId, description, place,
                codeZIP, dateStart, dateEnd, attendantsLimit, image, video)
                .then(() => onWorkshopEdited())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="home-edit-workshop-modal">
        <div className="home-edit-workshop-container">
            <h2>Edit workshop</h2>

            {workshop && <form className="home-edit-workshop-form" onSubmit={handleSubmit}>
                <label htmlFor="image">Image</label>
                <input id="image" type="url"></input>

                <label htmlFor="description">Description</label>
                <textarea id="description"></textarea>

                <label htmlFor="place">Lugar</label>
                <input type="text" id="place"></input>

                <label htmlFor="codeZIP">Código Postal</label>
                <input type="text" id="codeZIP"></input>

                <label htmlFor="dateStart">Fecha de inicio</label>
                <input type="date" id="dateStart"></input>

                <label htmlFor="dateEnd">Fecha de finalización</label>
                <input type="date" id="dateEnd"></input>

                <label htmlFor="video">Video</label>
                <input type="file" id="video" accept="video/*" ></input>

                <label htmlFor="attendantsLimit">Límite de asistentes</label>
                <input type="number" id="attendantsLimit" min="1" max="13"></input>

                <button type="submit">Save</button>
                <button type="button" className="home-edit-workshop-cancel-button" onClick={handleCancelClick}>Cancel</button>
            </form>}
        </div>
    </div>
}
export default EditWorkshopModal