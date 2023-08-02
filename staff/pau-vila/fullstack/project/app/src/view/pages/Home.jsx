import { useState, useEffect } from "react"
import context from "../../context"
import retrieveUser from "../../logic/retrieveUser"
import extractUserIdFromToken from "../helpers/extractUserIdFromToken"
    
function Home({onLoggedOut}) {
    return <h1>La creatividad es la inteligencia divirtiendose 'Einstein'</h1> 
}
export default Home