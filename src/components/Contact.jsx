import React from 'react';
import { content } from '../data';
import './Contact.css';

const Contact = ({ lang }) => {
    const t = content[lang].contact;

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2>{t.title}</h2>
                <p>{t.desc}</p>
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">{t.name}</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">{t.email}</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t.message}</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">{t.send}</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
