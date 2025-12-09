import React from 'react';
import { content } from '../data';
import './Footer.css';

const Footer = ({ lang }) => {
    const t = content[lang].footer;
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {year} Paula B. {t.rights}</p>
            </div>
        </footer>
    );
};

export default Footer;
