import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data';
import './Hero.css';

const Hero = ({ lang }) => {
    const t = content[lang].hero;

    return (
        <section id="hero" className="hero">
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        {lang === 'en' ? 'Professional Executive Support' : 'Soporte Ejecutivo Profesional'}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        {t.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        {t.subtitle}
                    </motion.p>
                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <a href="#contact" className="primary-btn">{t.cta}</a>
                        <a href="#services" className="secondary-btn">
                            {lang === 'en' ? 'View Services' : 'Ver Servicios'}
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.95, visibility: "hidden" }}
                    animate={{ opacity: 1, scale: 1, visibility: "visible" }}
                    transition={{ delay: 3.0, duration: 1, ease: "easeOut" }}
                >
                    <div className="hero-image">
                        {/* Placeholder for a professional image */}
                        <div className="image-overlay"></div>
                    </div>
                    <div className="hero-shape"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
