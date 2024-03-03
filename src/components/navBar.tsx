import { Link } from 'react-router-dom'
import { useState } from 'react'

import { SideBar } from './ui/sideBar'
import { LanguageDialog } from './ui/languageDialog'
import { useLanguage } from '@/context/languageContext'
import { ThemeButton } from './ui/themeButton'

export function NavBar() {
  const { language } = useLanguage()
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth)
  function handleSizeScreen() {
    setSizeScreen(window.innerWidth)
  }
  window.addEventListener('resize', handleSizeScreen)
  const nav = document.getElementById('nav') as HTMLElement

  function handleSizeHeight() {
    const sizeHeight = window.scrollY
    if (sizeHeight > 10) {
      nav.classList.add('backdrop-blur-sm')
    } else {
      nav.classList.remove('backdrop-blur-sm')
    }
  }
  window.addEventListener('scroll', handleSizeHeight)

  return (
    <nav
      className="h-16 sticky top-0 flex items-baseline justify-between px-10 sm:px-20 py-10 z-50"
      id="nav"
    >
      <h1
        className="font-roboto font-semibold text-xl
          text-zinc-900 dark:text-zinc-100 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
      >
        <Link to="/">Lucas Biazon </Link>
      </h1>
      {sizeScreen > 840 ? (
        <>
          <div className="flex gap-8">
            <Link
              to="/projects"
              className="hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              {language == 'en' ? 'Projects' : 'Projetos'}
            </Link>
            <Link
              to="/about"
              className="hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              {language == 'en' ? 'About' : 'Sobre mim'}
            </Link>
            <Link
              to="http://lucasbiazon.pdf"
              target="_blank"
              className="hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              {language == 'en' ? 'Resume' : 'Currículo'}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeButton />
            <LanguageDialog color="text-zinc-900" />
          </div>
        </>
      ) : (
        <SideBar></SideBar>
      )}
    </nav>
  )
}
