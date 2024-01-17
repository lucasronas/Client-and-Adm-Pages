import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../css/footer.css';

const Footer = () => {
    return (
        <footer className="footer">

            <ul className="social_list">

                <li>
                    <FaFacebook />
                </li>

                <li>
                    <FaInstagram />
                </li>

                <li>
                    <FaLinkedin />
                </li>
                
            </ul>

            <p className="copy"><span>Formurs</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer;