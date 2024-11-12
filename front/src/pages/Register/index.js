import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleRegister() {
        axios.post('http://localhost:8080/user', {
            name: name,
            email: email,
            password: password
        })
        .then(() => {
            window.alert("Registrado com sucesso!")
        })
        .catch(() => {
            window.alert("Ocorreu um erro...")
        })

        setName("")
        setEmail("")
        setPassword("")

    }

    return (
        <div id='register-container'>
            <section id='register-box'>
                <div className='register-item'>
                    <label className='register-label'>Nome</label>
                    <input type='text' className='register-input' value={name} onChange={(ev) => setName(ev.target.value)}></input>
                </div>
                <div className='register-item'>
                    <label className='register-label'>E-mail</label>
                    <input type='text' className='register-input' value={email} onChange={(ev) => setEmail(ev.target.value)}></input>
                </div>
                <div className='register-item'>
                    <label className='register-label'>Senha</label>
                    <input type='password' className='register-input' value={password} onChange={(ev) => setPassword(ev.target.value)}></input>
                </div>
                <button id='register-button' onClick={handleRegister}>Registrar</button>
                <Link to={"/"} id='register-span'>Voltar para o Login</Link>
            </section>
        </div>
    )
}

export default Register