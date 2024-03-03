import { Link } from 'react-router-dom'
import { useState } from 'react'

import { SideBar } from './ui/sideBar'
import { LanguageDialog } from './ui/languageDialog'

export function NavBar() {
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth)
  function handleSizeScreen() {
    setSizeScreen(window.innerWidth)
  }
  window.addEventListener('resize', handleSizeScreen)

  return (
    <nav className="h-16 flex items-baseline justify-between px-20 py-10">
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
              Projects
            </Link>
            <Link
              to="/about"
              className="hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              About
            </Link>
            <Link
              to="http://lucasbiazon.pdf"
              target="_blank"
              className="hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              Resume
            </Link>
          </div>

          <div>
            <LanguageDialog color="text-zinc-900" />
          </div>
        </>
      ) : (
        <SideBar></SideBar>
      )}
    </nav>
  )
}
