import { Link } from "react-router-dom";
import '../css/navbar.css';
import logo from '../img/design-svgrepo-com.svg'

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="logo">

                <Link to="/">
                        <img src={logo} alt="Formurs" />
                </Link>                
            </div>

            <div className="container_bar">                

                <ul className="list">

                    <li className="item">
                        <Link to="/">Home</Link>
                    </li>

                    <li className="item">
                        <Link to="/client">Cliente</Link>
                    </li>

                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar