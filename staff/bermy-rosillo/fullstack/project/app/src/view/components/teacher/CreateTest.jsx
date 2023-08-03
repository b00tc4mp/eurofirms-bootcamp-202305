function CreateTest() {
    //return <h2>Hello teacher test</h2>
    return <main className="create-test-view">
        <h1>Create Test</h1>

        <form className="create-test-form" >
          
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" />

            <label htmlFor="title">Title</label>
            <input id="title" type="text" />

            {/* <label htmlFor="descrption">Description</label>
            <textarea id="descrption" type="text" rows="4" cols="50"></textarea> */}

            <label htmlFor="descrption">Description</label>
            <input id="descrption" type="text"/>

            <label htmlFor="attemps">Attemps</label>
            <input id="attemps" type="text" />

            <button type="submit">Create</button>
        </form>
    </main>

}

export default CreateTest