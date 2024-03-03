import { Link } from 'react-router-dom'
import { CardAnimate } from './ui/cardProject'
import { useLanguage } from '@/context/languageContext'
import { FaArrowRight } from 'react-icons/fa'

export function ProjectsHome() {
  const { language } = useLanguage()
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <CardAnimate />
        <CardAnimate />
        <CardAnimate />
        <CardAnimate />
        <CardAnimate />
        <CardAnimate />
      </div>
      <div className="flex justify-end">
        <Link
          to="/projects"
          className="flex items-center gap-2 font-semibold w-36  py-2 px-6 rounded-2xl bg-blue-500 text-zinc-50 hover:bg-blue-600 group"
        >
          {language === 'en' ? 'See more' : 'Ver mais'}
          <FaArrowRight className="text-sm group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>
    </div>
  )
}
