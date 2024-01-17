import '../css/form.css';
import React, { useEffect, useState } from 'react';
import Input from './input';
import Submit from './SubmitButton';

function Form ({ handleSubmit, btnText, clientData }) {

    const [client, setClient] = useState(clientData || {})

    const submit = (e) => {
        e.preventDefault()
        // console.log(client)
        handleSubmit(client)
    }

    function handleChange(e) {
        setClient({ ...client, [e.target.name]: e.target.value })
        // console.log(client)
    }

    return (
        <form onSubmit={submit} className='form'>

            <Input
                type="text"
                text="Nome"
                name="name"
                placeholder="Insira o seu nome"
                handleOnChange={handleChange}
                value={client.name ? client.name: ''}
            />

            <Input
                type="email"
                text="Email"
                name="email"
                placeholder="exemplo@hotmail.com"
                handleOnChange={handleChange}
                value={client.email ? client.email: ''}
            />         

            <Input
                type="number"
                text="CPF"
                name="cpf"
                placeholder="Insira o seu CPF"
                handleOnChange={handleChange}
                value={client.cpf ? client.cpf: ''}
            />  

            <Submit className="submit_container" text={btnText}/>         
        </form>
    )
}

export default Form