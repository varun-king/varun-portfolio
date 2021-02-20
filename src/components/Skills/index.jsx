import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

const skills = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="content">
                <div>
                    <strong>Languages:</strong>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Node.js</li>
                    <li>Java Script</li>
                </div>
                <div>
                    <strong>Libraries:</strong>
                    <li>Bootstrap</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                </div>
                <div>
                    <strong>Tools:</strong>
                    <li>Git & GitHub</li>
                    <li>Eslint</li>
                    <li>webpack</li>
                    <li>Chrome Dev</li>
                </div>
                <div>
                    <strong>Unit Tests:</strong>
                    <li>Jest</li>
                    <li>Enzyme</li>
                    <li>React-test</li>
                    <li>Supper-test</li>
                </div>
            </div>
        </div>
    );
}; 

export default skills
