#!/usr/bin/env node

/**
 * Script para agregar automáticamente atributos data-i18n al HTML
 * Ejecutar con: node add-i18n-attributes.js
 */

const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

console.log('🌐 Agregando atributos data-i18n al HTML...\n');

// Mapeo de textos a sus claves de traducción
const replacements = [
    // Navigation
    { search: '<a href="#about" data-i18n="nav.about">About</a>', replace: '<a href="#about" data-i18n="nav.about">About</a>' },
    { search: '<a href="#services" data-i18n="nav.services">Services</a>', replace: '<a href="#services" data-i18n="nav.services">Services</a>' },
    { search: '<a href="#testimonials" data-i18n="nav.testimonials">Testimonials</a>', replace: '<a href="#testimonials" data-i18n="nav.testimonials">Testimonials</a>' },
    { search: '<a href="#contact" data-i18n="nav.contact">Contact</a>', replace: '<a href="#contact" data-i18n="nav.contact">Contact</a>' },

    // Mobile Nav
    { search: '<a href="#about" class="mobile-nav-link">About</a>', replace: '<a href="#about" class="mobile-nav-link" data-i18n="nav.about">About</a>' },
    { search: '<a href="#services" class="mobile-nav-link">Services</a>', replace: '<a href="#services" class="mobile-nav-link" data-i18n="nav.services">Services</a>' },
    { search: '<a href="#testimonials" class="mobile-nav-link">Testimonials</a>', replace: '<a href="#testimonials" class="mobile-nav-link" data-i18n="nav.testimonials">Testimonials</a>' },
    { search: '<a href="#contact" class="mobile-nav-link">Contact</a>', replace: '<a href="#contact" class="mobile-nav-link" data-i18n="nav.contact">Contact</a>' },

    // Hero
    { search: '<span class="script-highlight">Hey there, I\'m Paula</span>', replace: '<span class="script-highlight" data-i18n="hero.subtitle">Hey there, I\'m Paula</span>' },
    { search: '<h1>Your Strategic Partner in <br><em>Business & Life</em></h1>', replace: '<h1 data-i18n="hero.title" data-i18n-html>Your Strategic Partner in <br><em>Business & Life</em></h1>' },

    // About Timeline
    { search: '<span class="timeline-year">2015</span>', replace: '<span class="timeline-year" data-i18n="about.timeline.year1">2015</span>', first: true },
    { search: '<h3>Diplomatic Beginnings</h3>', replace: '<h3 data-i18n="about.timeline.title1">Diplomatic Beginnings</h3>', first: true },
    { search: '<p>Embassy logistics: precision, discretion, high-stakes coordination.</p>', replace: '<p data-i18n="about.timeline.desc1">Embassy logistics: precision, discretion, high-stakes coordination.</p>', first: true },

    { search: '<span class="timeline-year">2018</span>', replace: '<span class="timeline-year" data-i18n="about.timeline.year2">2018</span>', first: true },
    { search: '<h3>Corporate Excellence</h3>', replace: '<h3 data-i18n="about.timeline.title2">Corporate Excellence</h3>', first: true },
    { search: '<p>Supporting C-suite executives in multinational environments.</p>', replace: '<p data-i18n="about.timeline.desc2">Supporting C-suite executives in multinational environments.</p>', first: true },

    { search: '<span class="timeline-year">2021</span>', replace: '<span class="timeline-year" data-i18n="about.timeline.year3">2021</span>', first: true },
    { search: '<h3>Global Expansion</h3>', replace: '<h3 data-i18n="about.timeline.title3">Global Expansion</h3>', first: true },
    { search: '<p>8+ years of experience. Bilingual bridge: North & Latin America.</p>', replace: '<p data-i18n="about.timeline.desc3">8+ years of experience. Bilingual bridge: North & Latin America.</p>', first: true },

    { search: '<span class="timeline-year">Today</span>', replace: '<span class="timeline-year" data-i18n="about.timeline.year4">Today</span>', first: true },
    { search: '<h3>BrightVA Studio</h3>', replace: '<h3 data-i18n="about.timeline.title4">BrightVA Studio</h3>', first: true },
    { search: '<p>Your strategic partner in business & life.</p>', replace: '<p data-i18n="about.timeline.desc4">Your strategic partner in business & life.</p>', first: true },
];

// Función para reemplazar solo la primera ocurrencia
function replaceFirst(str, search, replace) {
    const index = str.indexOf(search);
    if (index === -1) return str;
    return str.substring(0, index) + replace + str.substring(index + search.length);
}

// Aplicar reemplazos
let changes = 0;
replacements.forEach(({ search, replace, first }) => {
    if (first) {
        if (html.includes(search)) {
            html = replaceFirst(html, search, replace);
            changes++;
            console.log(`✅ Agregado: ${replace.match(/data-i18n="([^"]+)"/)?.[1]}`);
        }
    } else {
        if (html.includes(search)) {
            html = html.replace(new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replace);
            changes++;
            console.log(`✅ Agregado: ${replace.match(/data-i18n="([^"]+)"/)?.[1]}`);
        }
    }
});

console.log(`\n📊 Total de cambios: ${changes}`);
console.log('\n⚠️  NOTA: Este script hace cambios básicos.');
console.log('   Por favor, revisa el archivo TRANSLATION_GUIDE.md para completar la implementación.\n');

// Guardar el archivo modificado
// fs.writeFileSync(htmlPath, html, 'utf8');
// console.log('✅ Archivo index.html actualizado!\n');

console.log('🔍 Para aplicar los cambios, descomenta las líneas de guardado en el script.\n');
