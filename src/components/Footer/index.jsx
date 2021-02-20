import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";
import LinkedIn from "../images/linkedin-icon.png"
import GitHub from "../images/GitHub-icon.png"


const Footer = () => {
    return (
        <footer>
            <a href="https://www.linkedin.com/in/varun-patel-canada/">
                <img src={LinkedIn} alt="LinkedIn"/>
            </a>
            <a href="https://github.com/varun-king">
                <img src={GitHub} alt="Github"/>
            </a>
        </footer>
    )
}

export default Footer
