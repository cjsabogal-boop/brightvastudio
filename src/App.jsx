import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [lang, setLang] = useState('en') // 'en' or 'es'

    return (
        <div className="app-container">
            <Navbar lang={lang} setLang={setLang} />
            <main>
                <Hero lang={lang} />
                <About lang={lang} />
                <Services lang={lang} />
                <Contact lang={lang} />
            </main>
            <Footer lang={lang} />
        </div>
    )
}

export default App
