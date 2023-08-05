import registerUser from '../../logic/registerUser'

function Register(props) {
    console.log('Register -> render')

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            registerUser(name, email, password)
                .then(() => props.onRegistered())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <main> <div className="layout">
      <nav className="layout__navbar">
        <header className="navbar__header">
          <img src="../../../../../public/legendary.png" alt="musical social-network" />
        </header>
        <div className="navbar_container-lists">
        </div>
      </nav>
      </div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg bg-orange">
  
          <h1 className="text-2xl font-semibold text-center text-black-500 mt-8 mb-6">Create your account</h1>
          <form onSubmit={handleRegisterSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm text-black-600">Name</label>
              <input type="text" id="name" name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
              </input>      
            </div>
            <div className="mb-4">
              <label htmlFor="nickname" className="block mb-2 text-sm text-black-600">Nickname</label>
              <input type="text" id="nickname" name="nickname"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
             </input> 
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm text-black-600">Email</label>
              <input type="email" id="email" name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
            </input> 
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2 text-sm text-black-600">Phone</label>
              <input type="phone" id="phone" name="phone"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
            </input> 
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm text-black-600">Password</label>
              <input type="password" id="password" name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
            </input> 
            </div>
            <div className="display-flex">
              <button type="submit" className="background-personalized-register">Register</button>
            </div>
        <br/>
          <div className="text-center">
            <p className="text-sm">Do you have an account? <button onClick={handleLoginClick} type="submit"
                className="background-personalized-login">Login</button></p>
          </div>
        </form>
        </div>
      </div>   
   </main>
}

export default Register