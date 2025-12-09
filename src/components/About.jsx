import React from 'react';
import { content } from '../data';
import './About.css';

const About = ({ lang }) => {
    const t = content[lang].about;

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-image">
                    <div className="image-wrapper">
                        <img src="../../assets/profile_placeholder.png" alt="Paula B" />
                        <div className="image-overlay"></div>
                    </div>
                </div>
                <div className="about-text">
                    <h2>{t.title}</h2>
                    <p>{t.description}</p>
                    <p className="experience-highlight">{t.experience}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
