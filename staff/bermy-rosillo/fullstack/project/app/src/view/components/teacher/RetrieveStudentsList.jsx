import { useState, useEffect } from "react"
import context from '../../../context'
import retrieveStudents from '../../../logic/retrieveStudents'
//components
import RetrieveStudentResponse from './RetrieveStudentResponse'

function RetrieveStudentsList(props){
    console.log('Retrieve Students list->render')
    
    const[viewStudentsList, setViewStudentsList]= useState('list-students')
    const[students, setStudentsList] = useState()
    const[studentId, setStudentId] = useState()

    useEffect(()=>{
        try{
            retrieveStudents(context.token,props.testId) 
            .then((students=>setStudentsList(students)))
            .catch(error=>alert(error.message))
    
        }catch(error){
            alert(error.message)
        }
    },
    [])

    const handleCancelStudents =()=>{
        props.onReturnHome()
    }

    const handleRetrieveStudentResponse =(event,studentId)=>{
        event.preventDefault()
        setStudentId(studentId)
        setViewStudentsList('retrieve-student-response')
    }

    const handleOnReturnStudentList =()=>{
        setViewStudentsList('list-students')
    }
    //-------------------------------
    return  <div id="students-list">
            { viewStudentsList === 'list-students' && <section className="list-student">
                <h1>Select a student</h1>
                {students && students.map(student => {
                    return <article key={student.id}>
                        <h3><a href="" className="btn-test" onClick={(event)=>handleRetrieveStudentResponse(event,student.id)}>{student.name}</a></h3>
                    </article>
                })}
            </section>}
    
            {viewStudentsList === 'retrieve-student-response' && <RetrieveStudentResponse testId={props.testId} studentId={studentId}  onReturnStudentList={handleOnReturnStudentList} />}
            <button className="btn-cancel"onClick={handleCancelStudents}>Cancel</button>
        </div>
}

export default RetrieveStudentsList