import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import { NavBar } from './components/navBar'
import { LanguageProvider } from './context/languageContext'
import { ThemeProvider } from './context/themeContext'
import { Footer } from './components/footer'

export default function App() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 h-auto">
      <LanguageProvider>
        <ThemeProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </LanguageProvider>
    </div>
  )
}
