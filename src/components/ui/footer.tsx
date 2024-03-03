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
    <footer className="bg-sky-950 h-36 px-48 py-12 flex gap-5 items-center justify-between">
      <div>
        <h1
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-sky-200 to-indigo-300
        inline-block  text-transparent bg-clip-text overflow-y-auto mb-4"
        >
          {language === 'en'
            ? 'Nice to see you here!'
            : 'Que bom te ver por aqui!'}
        </h1>
        <div className="flex gap-4">
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
      <div className="h-full bg-slate-500 w-px"></div>
      <button onClick={handleCopyEmail} className="text-zinc-300">
        <a href="mailto:lucasbiazonpalma@gmail.com" target="_blank">
          lucasbiazonpalma@gmail.com
        </a>
      </button>
    </footer>
  )
}
