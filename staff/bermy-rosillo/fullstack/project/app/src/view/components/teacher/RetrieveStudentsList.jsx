import { useState, useEffect } from "react"
import context from '../../../context'
import retrieveStudentsList from '../../../logic/retrieveStudentsList'
//components
import RetrieveStudentResponse from './RetrieveStudentResponse'

function RetrieveStudentsList(props){
    console.log('Retrieve Students list->render')
    
    const[viewStudentsList, setViewStudentsList]= useState('list-students')
    const[students, setStudentsList] = useState()

    const userState = useState(props.user) //null
    const user = userState[0]
    const setUser = userState[1]

    useEffect(()=>{
        try{
            retrieveStudentsList(context.token,props.testId)
            .then((students=>setStudentsList(students)))
            .catch(error=>alert(error.message))
    
        }catch(error){
            alert(error.message)
        }
    },
    [])

    const handleRetrieveStudentsListCancelButton =()=>{
        props.onReturnHome()
    }

    const handleLoggedOut = () => {
        context.token = null
        setUser(null)

        props.onLoggedOutClick()
    }
    
    const handleRetrieveStudentResponse =(event)=>{
        event.preventDefault()
        setViewStudentsList('retrieve-student-response')
    }

    const handleOnReturnStudentList =()=>{
        setViewStudentsList(null)
    }
    //-------------------------------
    return <div className="home-view ">
        <header className="home-header">
            <h1 className="home-title">Welcome, {user ? user.name : 'User'} </h1>
            <button className="home-logout-button" onClick={handleLoggedOut}>Logout </button>
            <button className="retrieve-students-list-cancel-button" onClick={handleRetrieveStudentsListCancelButton}>Cancel</button>  
        </header>
        
        <main className="home-main">
            { viewStudentsList === 'list-students' && <section className="list-student">
                {students && students.map(student => {
                    return <article key={student.id}>
                        <h3>Student: <a href="" onClick={handleRetrieveStudentResponse}>{student.name}</a></h3>
                    </article>
                })}
            </section>}

            {viewStudentsList === 'retrieve-student-response' && <RetrieveStudentResponse onReturnStudentList={handleOnReturnStudentList} />}
        
        </main>
       
        <footer className="home-footer">
            {/*  <button className="retrieve-students-list-cancel-button" onClick={handleRetrieveStudentsListCancelButton}>Cancel</button> */}
             
        </footer>
    </div>
}

export default RetrieveStudentsList