import React from "react";
import { useNavigate} from "react-router-dom"
import '../css/client.css'
import Form from '../components/Form'

const Client = () => {

    const container = "container";
    const minHeight = "min_height";
    const clientContainer = "client_container";
    const navigate = useNavigate();

    function createPost (client) {

        fetch("http://localhost:5000/clients", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(client),
        })
        .then(resp => resp.json())
        .then((data) => {
            console.log(data)
            // redirecionar
            navigate('/', {menssagem: 'Cliente cadastrado!'})
        })
        .catch(err => console.log(err))
    }   
    
    return (
        <div className={`${container} ${minHeight} ${clientContainer}`}>            
            
            <h1>Fórmulario</h1>
            <p>Responda ao fórmulario com seus dados pessoais</p>            
          
            <Form handleSubmit={createPost} btnText="Enviar"/>
        </div>
    )
}

export default Client;