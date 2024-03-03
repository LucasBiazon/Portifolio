import { useLanguage } from '@/context/languageContext'
import { Link } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

export function Footer() {
  const { language } = useLanguage()
  function handleCopyEmail() {
    navigator.clipboard.writeText('lucasbiazonpalma@gmail.com')
    toast.success('Email copied to clipboard')
    return
  }
  return (
    <footer
      className="bg-sky-950 h-auto md:h-36 lg:px-40 md:px-36 py-12 flex gap-2 items-center justify-around
    md:flex-row flex-col"
    >
      <div>
        <h1
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-sky-200 to-indigo-300
        inline-block  items-center justify-center text-transparent bg-clip-text overflow-y-auto mb-4"
        >
          {language === 'en'
            ? 'Nice to see you here!'
            : 'Que bom te ver por aqui!'}
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <Link to="/projects" className="hover:text-zinc-600 text-zinc-400">
            {language == 'en' ? 'Projects' : 'Projetos'}
          </Link>
          <Link to="/about" className="hover:text-zinc-600 text-zinc-400">
            {language == 'en' ? 'About' : 'Sobre mim'}
          </Link>
          <Link
            to="http://lucasbiazon.pdf"
            target="_blank"
            className="hover:text-zinc-600 text-zinc-400"
          >
            {language == 'en' ? 'Resume' : 'Currículo'}
          </Link>
        </div>
      </div>
      <Toaster
        position="top-right"
        richColors
        toastOptions={{
          style: { color: 'blue' },
          className: 'my-toast',
        }}
      />
      <div className="h-px md:h-full bg-slate-500 w-3/4 md:w-px items-center justify-center"></div>
      <button
        onClick={handleCopyEmail}
        className="text-zinc-300 flex items-center justify-center"
      >
        <a href="mailto:lucasbiazonpalma@gmail.com" target="_blank">
          lucasbiazonpalma@gmail.com
        </a>
      </button>
    </footer>
  )
}
