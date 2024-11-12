import react from 'react'
import { useState, useEffect } from 'react'
import pessoa from '../../assets/do-utilizador.png'
import lembrete from '../../assets/mais-pequeno.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './style.css'

const PaginaInicial = () => {

    const [user, setUser] = useState({})
    const [notes, setNotes] = useState([])

    useEffect(() => {
        /*const token = document.cookie
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

        axios.get(`http://localhost:8080/note/${user.id}`)
        .then((response) => {
            setNotes(response.data)
        })
        .catch((err) => {
            console.log(err)
        })*/
            const fetchData = async () => {
                try {
                    const token = document.cookie
                        .split('; ')
                        .find(row => row.startsWith('token='))
                        ?.split('=')[1];
    
                    // Primeiro axios.get
                    const sessionResponse = await axios.get(`http://localhost:8080/session/${token}`);
                    setUser(sessionResponse.data);
    
                    // Segundo axios.get, que depende do primeiro
                    if (sessionResponse.data.id) {
                        const notesResponse = await axios.get(`http://localhost:8080/note/${sessionResponse.data.id}`);
                        setNotes(notesResponse.data);
                    }
                } catch (err) {
                    window.alert(err.message);
                }
            };
    
            fetchData();
    }, [])

    return (
        <div id='inicial-container'>
            <section id='inicial-box'>
                <nav id='inicial-nav'>
                    <Link to={"/perfil"}><img className='inicial-img' src={pessoa}/></Link>
                    <h1 id='inicial-title'>Fique de olho, {user.name}</h1>
                    <Link to={"/adicionar"}><img className='inicial-img' src={lembrete}/></Link>
                </nav>
                <div id='inicial-lembretes'>
                    {notes.map((note) => {
                        return (
                            <div className='inicial-lembrete' key={note.id}>
                                <h2 className='lembrete-titulo'>{note.title}</h2>
                                <p className='lembrete-conteudo'>{note.text}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default PaginaInicial