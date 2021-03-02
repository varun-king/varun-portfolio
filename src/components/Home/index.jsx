import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
import "./style.css";
import Particles from '../Particles/index';

const Home = () => {
    return (
       <div className="home">
            <div className="title">
            
                <h1>
                    <p>Hi,</p>
                    <p>I'm Varun</p>
                </h1>
                <Typed
                className="typed-text"
                strings={["Web Developer", "iOS Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                {/* <h1>
                    <p>Hi,</p>
                    <p>I'm Varun</p>
                    <p>Software Developer</p>
                </h1> */
                <br/>}
               
                <Link to="about">
                    <button>More info</button>
                </Link>
            </div>
            <div className="person">
                <img
                    src={`${process.env.PUBLIC_URL}/logo192.png`}
                    alt="Person Picture"
                />
                 
            </div>
       </div>
    )
} 

export default Home
