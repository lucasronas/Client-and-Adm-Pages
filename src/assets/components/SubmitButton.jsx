import '../css/submit.css'

function Submit({ text, className }) {
    return (

        <div className={className}>

            <button className="btn">{text}</button>            
        </div>
    )
}

export default Submit;