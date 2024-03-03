import { LanguageDialog } from './languageDialog'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useLanguage } from '@/context/languageContext'

import { FiArrowRight, FiChevronDown, FiMenu, FiX } from 'react-icons/fi'
import { ThemeButton } from './themeButton'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

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
    <div className="relative ">
      <button onClick={handelShowNavBarMobile}>
        <FiMenu className="text-xl hover:text-zinc-600 dark:hover:text-zinc-300 z-20" />
      </button>
      {isOpenMenuBar && (
        <div
          className={`w-60 h-[100svh] px-4 py-2 absolute -top-10 right-0  overflow-y-auto rounded-l-xl bg-gray-950 
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
                {language == 'en' ? 'Projects' : 'Projetos'}
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

          <div className="w-full h-px mt-4 mb-2 bg-slate-200"></div>
          <div>
            <h1 className="flex gap-1 items-center text-base font-light text-zinc-50 mb-2">
              {language == 'en' ? 'Settings' : 'Configurações'}
              <FiChevronDown className="text-md " />
            </h1>
            <LanguageDialog color="text-zinc-50" />
            <div className="w-full h-px mt-2 mb-2 bg-slate-100/10"></div>
            <ThemeButton description="Theme" />
            <div className="w-full h-px mt-4 mb-2 bg-slate-200"></div>
          </div>
          <div>
            <h1 className="flex gap-1 items-center text-base font-light text-zinc-50 mb-2">
              {language == 'en' ? 'Social' : 'Social'}
              <FiChevronDown className="text-md " />
            </h1>
            <a
              href="http://www.linkedin.com/in/lucasbiazon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1  items-center font-semibold text-gray-50 hover:text-blue-500"
            >
              <FaLinkedin /> Linkedin
            </a>
            <div className="w-full h-px mt-2 mb-2 bg-slate-100/10"></div>

            <a
              href="https://github.com/LucasBiazon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1  items-center font-semibold text-gray-50 hover:text-zinc-200"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
