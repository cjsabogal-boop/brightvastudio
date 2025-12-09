import React from 'react';
import { Calendar, Plane, Mail, FileText } from 'lucide-react';
import { content } from '../data';
import './Services.css';

const Services = ({ lang }) => {
    const t = content[lang].services;

    const icons = [Calendar, Plane, Mail, FileText];

    return (
        <section id="services" className="services">
            <h2>{t.title}</h2>
            <div className="services-grid">
                {t.items.map((item, index) => {
                    const Icon = icons[index];
                    return (
                        <div key={index} className="service-card">
                            <div className="icon-wrapper">
                                <Icon size={32} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
