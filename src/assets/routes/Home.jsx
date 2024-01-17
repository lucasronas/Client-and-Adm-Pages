import React from "react";
import '../css/home.css'
import folder from '../img/folder-svgrepo-com.svg'
import LinkButton from "../components/LinkButton";

const Home = () => {
    const container = "container";
    const minHeight = "min_height";
    const homeContainer= "home_container";
    

    return (
        <section className={`${container} ${minHeight} ${homeContainer}`}>

            <h1>Bem-vindo ao <span>Formus</span></h1>
            
            <p>
                Por favor, responda ao formulário agora mesmo ou consulte a lista!
            </p>

            <div className="button_container">
                
                <LinkButton to="/client" text="Fórmulario" /> 
                <LinkButton to="/adm" text="Lista de Clientes" />         
            </div>
            <img src={folder} alt="Formus" />
        </section>
    )
}

export default Home;