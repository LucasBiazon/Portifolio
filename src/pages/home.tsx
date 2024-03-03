import { useLanguage } from '@/context/languageContext'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from 'react-icons/fa'
import { ProjectsHome } from '@/components/projectsHome'
export default function Home() {
  const { language } = useLanguage()
  return (
    <div className="flex flex-col px-10 sm:px-40 py-20 overflow-x-hidden">
      {language === 'en' ? (
        <h1 className="text-2xl md:text-3xl lg:text-5xl max-w-5xl mb-10">
          Hi, I'm Lucas, a{' '}
          <span className="text-blue-600 font-medium dark:text-[#67BDFF]">
            FullStack developer{' '}
          </span>
          with a passion for technology and innovation.
        </h1>
      ) : (
        <h1 className="text-2xl md:text-3xl lg:text-5xl max-w-5xl mb-10 lg:overflow-y-scroll lg:max-h-26 ">
          Olá, sou Lucas, um{' '}
          <span className="text-blue-600 font-medium dark:text-[#67BDFF]">
            desenvolvedor FullStack{' '}
          </span>
          com paixão por tecnologia e inovação.
        </h1>
      )}

      <div className="flex flex-col gap-2 mb-24 overflow-x-hidden">
        <p className="flex gap-2 text-sm text-gray-600 items-center dark:text-gray-300">
          <FaArrowRight className="text-blue-600 dark:text-[#67BDFF]" />
          {language === 'en' ? 'Student at' : 'Estudante do'}
          <a
            target="_blank"
            className="flex gap-2 text-sm items-center font-semibold underline text-gray-800 
            dark:text-zinc-200 hover:text-green-900 dark:hover:text-green-300"
            href="https://portal.cmp.ifsp.edu.br/"
          >
            IFSP - CAMPINAS
            <FaExternalLinkAlt />
          </a>
        </p>
        <p className="flex gap-2 items-center text-sm text-gray-600 dark:text-gray-300">
          <FaArrowRight className="text-blue-600 dark:text-[#67BDFF]" />
          {language === 'en' ? 'My' : 'Meu'}
          <a
            target="_blank"
            className="flex gap-1.5 text-sm items-center font-semibold underline text-gray-800 
            dark:text-zinc-200 hover:text-blue-600 dark:hover:text-[#67BDFF]"
            href="https://www.linkedin.com/in/lucasbiazon"
          >
            Linkedin
            <FaLinkedin className="text-lg" />
          </a>
        </p>
        <p className="flex gap-2 items-center text-sm text-gray-600 dark:text-gray-300">
          <FaArrowRight className="text-blue-600 dark:text-[#67BDFF]" />
          {language === 'en' ? 'My' : 'Meu'}
          <a
            target="_blank"
            className="flex gap-1.5 text-sm items-center font-semibold underline text-gray-800 
            dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-zinc-50"
            href="www.linkedin.com/in/lucasbiazon"
          >
            GitHub
            <FaGithub className="text-lg" />
          </a>
        </p>
      </div>
      <div className="overflow-x-hidden">
        <h1 className="text-2xl font-bold mb-6 overflow-y-scroll">
          {language === 'en' ? 'Selected Works' : 'Trabalhos selecionados'}
        </h1>
        <div className="flex flex-col gap-6">
          <ProjectsHome />
        </div>
      </div>
    </div>
  )
}
