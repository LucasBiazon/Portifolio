import { LanguageDialog } from './languageDialog'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useLanguage } from '@/context/languageContext'

import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi'

export function SideBar() {
  const { language } = useLanguage()

  const [isOpenMenuBar, setIsOpenMenuBar] = useState(false)

  if (isOpenMenuBar) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  function handelShowNavBarMobile() {
    setIsOpenMenuBar(!isOpenMenuBar)
  }
  return (
    <div className="relative">
      <button onClick={handelShowNavBarMobile}>
        <FiMenu className="text-xl hover:text-zinc-600 dark:hover:text-zinc-300 z-20" />
      </button>
      {isOpenMenuBar && (
        <div
          className={`w-60 h-[80svh] px-4 py-2 absolute -top-2 right-0 rounded-l-xl bg-gray-950 
          transform transition-transform duration-300 ease-in-out ${
            isOpenMenuBar ? 'slide-in-right' : 'slide-out-right'
          }`}
        >
          <button
            onClick={handelShowNavBarMobile}
            className="flex w-full justify-end text-end"
          >
            <FiX
              className={`text-2xl text-zinc-50 hover:text-zinc-100 dark:hover:text-zinc-300`}
            />
          </button>
          <div className="w-full h-px mt-2 mb-4 bg-slate-200"></div>

          <div className="flex flex-col">
            <Link
              to="/projects"
              className="flex  items-center gap-1 text-zinc-50 font-semibold hover:text-zinc-600 
            dark:hover:text-zinc-300 group"
            >
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              <span className="group-hover:translate-x-2 transition-all">
                {language == 'en' ? 'Pro' : 'Idioma'}
              </span>
            </Link>

            <div className="w-full h-px mt-2 mb-2 bg-slate-100/10"></div>
            <Link
              to="/about"
              className="flex  items-center gap-1  font-semibold text-zinc-50 hover:text-zinc-600
             dark:hover:text-zinc-300 group"
            >
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              <span className="group-hover:translate-x-2 transition-all">
                {language == 'en' ? 'About' : 'Sobre mim'}
              </span>
            </Link>

            <div className="w-full h-px mt-2 mb-2 bg-slate-100/10"></div>
            <Link
              to="http://lucasbiazon.pdf"
              target="_blank"
              className=" flex  items-center gap-1 font-semibold text-zinc-50 
            hover:text-zinc-600 dark:hover:text-zinc-300 group"
            >
              <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              <span className="group-hover:translate-x-2 transition-all">
                {language == 'en' ? 'Resume' : 'Currículo'}
              </span>
            </Link>
          </div>

          <div className="w-full h-px mt-2 mb-4 bg-slate-200"></div>
          <LanguageDialog color="text-zinc-50" />
        </div>
      )}
    </div>
  )
}
