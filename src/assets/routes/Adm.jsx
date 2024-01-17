import React, { useEffect, useState } from "react";
import '../css/adm.css';
import LinkButton from "../components/LinkButton";
import ClientCard from "../components/ClientCard";


const Adm = () => {
    const container = "container";
    const minHeight = "min_height";
    const admContainer = "adm_container";

    const [client, setClient] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:5000/clients', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setClient(data)
        })
        .catch(err => console.log(err))
    }, [])

    function removeClient (id) {

        fetch(`http://localhost:5000/clients/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(data => {
            setClient(client.filter((clients) => clients.id !== id))

        })
        .catch(err => console.log(err))
        
    }

    return (
        <div className={`${container} ${minHeight} ${admContainer}`}>

            <div className="title_container">
                <h1>Lista de Clientes</h1>
                <LinkButton to="/client" text="Responde o fórmulario" /> 
            </div>

            <div className="card_container">
                {client.length > 0 &&
                    client.map((client) => <ClientCard
                    id={client.id}                    
                    name={client.name}
                    email={client.email}
                    cpf={client.cpf}         
                    key={client.id}
                    handleRemove={removeClient}                               
                    />)}                    
            </div>

            

        </div>
    )
}

export default Adm;