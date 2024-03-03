import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import { NavBar } from './components/navBar'
import { LanguageProvider } from './context/languageContext'

export default function App() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.theme = 'light'
  localStorage.theme = 'dark'
  localStorage.removeItem('theme')

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 h-auto">
      <LanguageProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </LanguageProvider>
    </div>
  )
}
