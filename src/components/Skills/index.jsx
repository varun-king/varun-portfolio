import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

const skills = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="content">
                <div>
                    <strong>Programming</strong>
                    <li>Java</li>
                    <li>Swift</li>
                    <li>Basic Python</li>
                    <li>React JS, React nativ</li>
                    <li>HTML, CSS, JavaScript</li>
                </div>
                <div>
                    <strong>Frameworks/Technologies</strong>
                    <li>HTML5, CSS3</li>
                    <li>React JS, React nativ</li>
                    <li>Node.js</li>
                    <li>Android</li>
                    <li>iOS</li>
                    <li>MVC</li>
                </div>
                <div>
                    <strong>Tools:</strong>
                    <li>Git & GitHub</li>
                    <li>REST APIs</li>
                    <li>PostMan</li>
                    <li>Apache Tomcat</li>
                </div>
                <div>
                    <strong>Cloud Technologies</strong>
                    <li>AWS</li>
                    <li>Firebase</li>
                    <strong>Operating Systems</strong>
                    <li>MacOS</li>
                    <li>Windows</li>
                    <li>Linux</li>
                </div>
                <div>
                    <strong>Database</strong>
                    <li>MySQL</li>
                    <li>DynamoDB</li>
                    <li>Firebase Firestore</li>
                </div>
                
            </div>
        </div>
    );
}; 

export default skills
