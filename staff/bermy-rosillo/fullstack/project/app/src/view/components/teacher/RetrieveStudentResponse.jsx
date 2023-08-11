function RetrieveStudentResponse(props){
    const handleCancelStudentResponse =()=>{

    }
    return <main className="create-test-view">
    <h1>Student response</h1>

    <form className="create-test-form" >

    <label htmlFor="student">Student {props.userName}</label>
    
        <label htmlFor="subject">Subject</label>
        <input id="subject" type="text" />

        <label htmlFor="title">Title</label>
        <input id="title" type="text" />

         <label htmlFor="descrption">Description</label>
        <textarea id="descrption" type="text" rows="4" cols="50"></textarea> 

        <label htmlFor="attemps">Attemps</label>
        <input id="attemps" type="text" />

        <label>Answers</label>

        <label htmlFor="description-response">Description</label>
        <textarea id="description-response" type="text" rows="4" cols="50"></textarea> 

        <label htmlFor="score">Score</label>
        <input id="score" type="text" />

        <label htmlFor="assessment">assessment</label>
        <textarea id="assessment" type="text" rows="4" cols="50"></textarea> 

        <button type="submit" >Send</button>
        <button type="submit" >Cancel onClick={handleCancelStudentResponse}</button>
    </form>
</main>

}

export default RetrieveStudentResponse