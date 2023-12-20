import React from "react";
import './intro.css';
const Intro = () => {
    return (
        <section className="intro">
            <div className="introContent">
                <p className="fSpan">WE LOVE TO DESIGN</p>
                <span className="sSpan">CREATIVE <br/>MINDS</span>
                <button className="introButton">Get In Touch</button>
            </div>
        </section>
            // <img src={robo} alt="Robo" className="introImg"/>
    );
}

export default Intro;