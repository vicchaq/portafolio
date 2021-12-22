import React from 'react';
import "./About.css";
import images from "../images/fhoto.jpg"


const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Dejame decirte algo sobre mi</h3>
                <p>Soy una persona activa,sociable,me gusta aprender y mantenerme actualizada!!</p>
            </div>
            <div className="about-img">
                <img src={images} alt="about" />
            </div>
        </div>
    )
}

export default About
