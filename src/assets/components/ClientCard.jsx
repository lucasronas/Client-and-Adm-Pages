import '../css/clientcard.css';
import { BsFillTrash3Fill } from "react-icons/bs";

function ClientCard ({id, name, email, cpf, handleRemove}) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }


    return (
        <div className='client_card'>
            <h4>{name}</h4>
            <p>
                <span>Email:</span> {email}
            </p>
            <p>
                <span>CPF:</span> {cpf}
            </p>

            <div className='remove'>
                <button onClick={remove}>
                    <BsFillTrash3Fill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ClientCard