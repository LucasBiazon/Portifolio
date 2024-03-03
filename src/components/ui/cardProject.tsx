import { useState, useRef, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

interface CardProjectProps {
  title: string
  description: string
  github: string
  link: string
}

const CardProject = ({
  title,
  description,
  github,
  link,
  isVisible,
}: CardProjectProps & { isVisible: boolean }) => {
  const visible = useSpring({
    opacity: isVisible ? 1 : 0,
  })

  return (
    <animated.div style={visible} className="transition-all">
      <div className="flex flex-col gap-4 h-96 lg:h-[550px] w-[100%] min-w-11 z-0 rounded-md">
        <div className="h-4/6 bg-blue-400 p-5 rounded-md"></div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
          <div className="flex gap-4"></div>
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              className="flex gap-2 items-center text-sm font-semibold underline text-gray-800 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-[#67BDFF]"
            >
              GitHub
              <FaGithub className="text-lg" />
            </a>
            <a
              href={link}
              target="_blank"
              className="flex gap-2 items-center text-sm font-semibold underline text-gray-800 dark:text-zinc-200 hover:text-green-900 dark:hover:text-green-300"
            >
              Live
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </animated.div>
  )
}

export const CardAnimate = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null) // Tipo explícito para ref

  const handleScroll = () => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      setIsVisible(top < windowHeight)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div ref={ref}>
      <CardProject
        title="Your Title"
        description="Your Description"
        github="Your GitHub Link"
        link="Your Live Link"
        isVisible={isVisible}
      />
    </div>
  )
}
