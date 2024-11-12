import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Perfil = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [user, setUser] = useState({})

    useEffect(() => {
        const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('token='))
        ?.split('=')[1]

        axios.get(`http://localhost:8080/session/${token}`)
        .then((response) => {
            setName(response.data.name)
            setEmail(response.data.email)
            setPassword(response.data.password)
            setUser(response.data)
        })
        .catch((err) => {
            window.alert(err.message)
        })
    }, [])

    function handleConfirm() {
        axios.put(`http://localhost:8080/user/${user.id}`,{
            name: name,
            email: email,
            password: password
        })
        .then(() => {
            window.alert("Informações alteradas com sucesso")
            navigate("/lembretes")
        })
        .catch((err) => {
            window.alert(err)
        })
    }

    return (
        <div id='perfil-container'>
            <section id='perfil-box'>
                <div className='perfil-item'>
                    <label className='perfil-label'>Nome</label>
                    <input type='text' className='perfil-input' value={name} onChange={(ev) => setName(ev.target.value)}></input>
                </div>
                <div className='perfil-item'>
                    <label className='perfil-label'>Email</label>
                    <input type='text' className='perfil-input' value={email} onChange={(ev) => setEmail(ev.target.value)}></input>
                </div>
                <div className='perfil-item'>
                    <label className='perfil-label'>Senha</label>
                    <input type='text' className='perfil-input' value={password} onChange={(ev) => setPassword(ev.target.value)}></input>
                </div>
                <button id='perfil-button' onClick={handleConfirm}>Confirmar</button>
            </section>
        </div>
    )
}

export default Perfil