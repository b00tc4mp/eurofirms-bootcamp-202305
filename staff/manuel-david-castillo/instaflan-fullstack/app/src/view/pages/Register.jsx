import { registerUser } from "../../logic/registerUser"

export function Register(props) {
    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    const handleRegister = event => {
        event.preventDefault()

        const name = event.target.name.value
        const image = event.target.image.value
        const description = event.target.description.value
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            registerUser(name, image, description, email, password)
                .then(() => {
                    props.onRegister()
                })
                .catch((error) => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <main className="register">
        <form onSubmit={handleRegister} className="register-form" action="">
            <h2>Register</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input id="name" className="input" placeholder="name" type="text" />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input type="text" id="image" className="input" placeholder="image url" />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" className="input" placeholder="description" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    className="input"
                    placeholder="email"
                    type="email"
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    className="input"
                    placeholder="password"
                    type="password"
                />
            </div>
            <button className="button">Register</button>
        </form>
        <a className="link-login" href="#" onClick={handleLoginClick}>Go to Login</a>
    </main>
}