import React, { Component } from 'react';
import "./style.css";
import { GitHub, LinkedIn, Resume, Email } from '../../icons'

const DATA = [
    {
        href: "https://github.com/varun-king",
        aria: "Visit my GitHub profile",
        icon: <GitHub />,
        label: "Github",
    },
    {
        href: "https://www.linkedin.com/in/varun-patel-canada/",
        aria: "Visit my LinkedIn profile",
        icon: <LinkedIn />,
        label: "LinkedIn",
    },
    {
        href: "mailto:developer.varunpatel@gmail.com",
        aria: "Send me an email with this template",
        icon: <Email />,
        label: "Email",
    },
   
];

const Button = ({ href, aria, icon, label }) => {
    return (
        <span className='button-container'>
            <a className='button' href={href} target='_self' aria-label={aria} rel='noopener noreferrer'>
                <div className='icon'>{icon}</div>
                <span className='icon_title'>{label}</span>
            </a>
        </span>
    );
};

const Footer = () => {
    return (
        <footer> 
                {DATA.map((props, i) => (
                    <Button {...props} key={i} />
                ))}
            
        </footer>
    )
}

export default Footer
