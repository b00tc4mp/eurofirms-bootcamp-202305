import registerUser from "../../logic/registerUser"
import { Link, useNavigate } from "react-router-dom"

export default function Register() {
    console.log('hola register')
    const navigate = useNavigate()

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
                    navigate('/login')
                })
                .catch((error) => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <main className="bg-color5 flex flex-col justify-start h-screen p-5">
        <form onSubmit={handleRegister} className="" action="">
            <h2 className="text-5xl text-color1 mb-6 font-semibold">Register</h2>
            <div className="flex flex-col justify-start items-start mb-4">
                <label className="block text-xl font-semibold text-color1 mb-1 ml-1" htmlFor="name">Name:</label>
                <input id="name" className="p-2 rounded-xl border-color2 border-2 w-full" placeholder="name" type="text" />
            </div>
            <div className="flex flex-col justify-start items-start mb-4">
                <label className="block text-xl font-semibold text-color1 mb-1 ml-1" htmlFor="image">Image:</label>
                <input type="text" id="image" className="p-2 rounded-xl border-color2 border-2 w-full" placeholder="image url" />
            </div>
            <div className="flex flex-col justify-start items-start mb-4">
                <label className="block text-xl font-semibold text-color1 mb-1 ml-1" htmlFor="description">Description:</label>
                <input type="text" id="description" className="p-2 rounded-xl border-color2 border-2 w-full" placeholder="description" />
            </div>
            <div className="flex flex-col justify-start items-start mb-4">
                <label className="block text-xl font-semibold text-color1 mb-1 ml-1" htmlFor="email">Email:</label>
                <input
                    id="email"
                    className="p-2 rounded-xl border-color2 border-2 w-full"
                    placeholder="email"
                    type="email"
                />
            </div>
            <div className="flex flex-col justify-start items-start mb-4">
                <label className="block text-xl font-semibold text-color1 mb-1 ml-1" htmlFor="password">Password:</label>
                <input
                    id="password"
                    className="p-2 rounded-xl border-color2 border-2 w-full"
                    placeholder="password"
                    type="password"
                />
            </div>
            <button className="bg-color4 text-white border-none rounded-xl px-4 py-3 font-bold text-xl cursor-pointer transition duration-300 hover:bg-color3">Register</button>
        </form>
        <Link className="text-color1 text-xl fixed bottom-3 left-1/2 transform -translate-x-1/2 block hover:underline" to='/login' >Go to Login</Link>
    </main>
}