import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin() {
        axios.get(`http://localhost:8080/login/${email}&${password}`)
        .then((response) => {
            document.cookie = `token=${response.data.token}`
            navigate("/lembretes")
        })
        .catch((err) => {
            window.alert(err.message)
        })
        .finally(() => {
            setEmail("")
            setPassword("")
        })
    }

    return (
        <div id='login-container'>
            <section id='login-box'>
                <div className='login-item'>
                    <label className='login-label'>E-mail</label>
                    <input type='text' className='login-input' value={email} onChange={(ev) => setEmail(ev.target.value)}></input>
                </div>
                <div className='login-item'>
                    <label className='login-label'>Senha</label>
                    <input type='password' className='login-input' value={password} onChange={(ev) => setPassword(ev.target.value)}></input>
                </div>
                <button id='login-button' onClick={handleLogin}>Entrar</button>
                <Link to={"/register"} id='login-span'>Não tem uma conta? Registre-se</Link>
            </section>
        </div>
    )
}

export default Login