import React from "react"
import '../css/linkbutton.css'
import { Link } from "react-router-dom"


function LinkButton({ to, text}) {

    const button = "button";

    return (
        <Link className={`${button}`} to={ to }>
            {text}
        </Link>
    )
}

export default LinkButton