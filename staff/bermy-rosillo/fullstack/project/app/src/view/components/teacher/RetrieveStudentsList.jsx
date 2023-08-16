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

    const handleRetrieveStudentResponse =(event,studentId)=>{
        event.preventDefault()
        setStudentId(studentId)
        setViewStudentsList('retrieve-student-response')
    }

    const handleOnReturnStudentList =()=>{
        setViewStudentsList('list-students')
    }
    //-------------------------------
    return  <div>
            { viewStudentsList === 'list-students' && <section className="list-student">
                {students && students.map(student => {
                    return <article key={student.id}>
                        <h3>Student: <a href="" onClick={(event)=>handleRetrieveStudentResponse(event,student.id)}>{student.name}</a></h3>
                    </article>
                })}
            </section>}

            {viewStudentsList === 'retrieve-student-response' && <RetrieveStudentResponse testId={props.testId} studentId={studentId}  onReturnStudentList={handleOnReturnStudentList} />}
        
        </div>
}

export default RetrieveStudentsList