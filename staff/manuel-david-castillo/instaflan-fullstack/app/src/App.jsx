import { Register } from "./view/pages/Register";
import { Login } from "./view/pages/Login";
import { Home } from "./view/pages/Home";
import { Routes, Route, Navigate } from 'react-router-dom'

export function App() {

  return (
    <Routes>
      <Route key={'login'} path="/login" element={/* sessionStorage.token ? <Navigate to='/' /> : */ <Login />} />
      <Route key={'register'} path="/register" element={<Register />} />
      <Route key={'home'} path="/*" element={<Home />
        /* sessionStorage.token ? <Home /> : <Navigate to='/login' /> */} />
    </Routes>)
}
