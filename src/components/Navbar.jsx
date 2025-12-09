import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { content } from '../data';
import './Navbar.css';

const Navbar = ({ lang, setLang }) => {
    const t = content[lang].nav;
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="logo">Paula B.</a>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <a href="#hero" onClick={() => setMobileMenuOpen(false)}>{t.home}</a>
                    <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.about}</a>
                    <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t.services}</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.contact}</a>
                    <div className="mobile-actions">
                        <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'es' : 'en')}>
                            {lang === 'en' ? 'ES' : 'EN'}
                        </button>
                    </div>
                </div>

                <div className="nav-actions desktop-only">
                    <button className="lang-toggle" onClick={() => setLang(lang === 'en' ? 'es' : 'en')}>
                        {lang === 'en' ? 'ES' : 'EN'}
                    </button>
                    <a href="#contact" className="cta-button">{t.cta}</a>
                </div>

                <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
