import createTest from '../../../logic/createTest'
import context from '../../../context'
function CreateTest(props) {
    console.log('Create test->render')
   
    const handleSubmitCreateTest = event=>{
        event.preventDefault()

        try{
            const subject = event.target.subject.value
            const title = event.target.title.value
            const description = event.target.description.value
            const attemps = event.target.attemps.value
           
            createTest(context.token, subject,title,description,attemps)
            .then(()=>alert('Created test'))
            .catch(error=>alert(error.message))
        }catch(error){
            alert(error.message)
    
        }
    }

    return <main className="create-test-view">
        <h1>Create Test</h1>

        <form className="create-test-form" onSubmit={handleSubmitCreateTest}  >

        <label htmlFor="teacher">Teacher {props.userName}</label>
        
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" />

            <label htmlFor="title">Title</label>
            <input id="title" type="text" />

            {/* <label htmlFor="descrption">Description</label>
            <textarea id="descrption" type="text" rows="4" cols="50"></textarea> */}

            <label htmlFor="description">Description</label>
            <input id="description" type="text"/>

            <label htmlFor="attemps">Attemps</label>
            <input id="attemps" type="text" />

            <button type="submit" >Create</button>
        </form>
    </main>

}

export default CreateTest