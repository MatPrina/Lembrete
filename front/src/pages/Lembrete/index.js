import react from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Lembrete = () => {

    const navigate = useNavigate()

    const [titulo, setTitulo] = useState("")
    const [texto, setTexto] = useState("")
    const [user, setUser] = useState({})

    useEffect(() => {
        const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('token='))
        ?.split('=')[1]

        axios.get(`http://localhost:8080/session/${token}`)
        .then((response) => {
            setUser(response.data)
        })
        .catch((err) => {
            window.alert(err.message)
        })
    }, [])

    function handleConfirm() {
        axios.post(`http://localhost:8080/note`,{
            title: titulo,
            text: texto,
            userID: user.id
        })
        .then(() => {
            window.alert("Lembrete criado com sucesso!")
            navigate("/lembretes")
        })
        .catch((err) => {
            window.alert(err)
        })
    }

    return (
        <div id='lembrete-container'>
            <section id='lembrete-box'>
                <div className='lembrete-item'>
                    <label className='lembrete-label'>Título</label>
                    <input type='text' className='lembrete-input' value={titulo} onChange={(ev) => setTitulo(ev.target.value)}></input>
                </div>
                <div className='lembrete-item'>
                    <label className='lembrete-label'>Texto</label>
                    <input type='text' className='lembrete-input' value={texto} onChange={(ev) => setTexto(ev.target.value)}></input>
                </div>
                <button id='lembrete-button' onClick={handleConfirm}>Confirmar</button>
            </section>
        </div>
    )
}

export default Lembrete