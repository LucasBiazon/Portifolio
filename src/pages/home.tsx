import {
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from 'react-icons/fa'
export default function Home() {
  return (
    <div className="flex flex-col px-40 py-20 ">
      <h1 className="text-5xl max-w-5xl mb-10">
        Hi, I'm Lucas, a{' '}
        <span className="text-blue-600 font-medium dark:text-[#67BDFF]">
          FullStack developer{' '}
        </span>
        with a passion for technology and innovation.
      </h1>
      <div className="flex flex-col gap-2 mb-24">
        <p className="flex gap-2 text-sm text-gray-600 items-center dark:text-gray-300">
          <FaArrowRight className="text-blue-600 dark:text-[#67BDFF]" />
          Student
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
          My
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
          My
          <a
            target="_blank"
            className="flex gap-1.5 text-sm items-center font-semibold underline text-gray-800 
            dark:text-zinc-200 hover:text-zinc-950 dark:hover:text-zinc-50"
            href="https://github.com/LucasBiazon"
          >
            GitHub
            <FaGithub className="text-lg" />
          </a>
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-6">Selected Works</h1>
        <div className="grid gap-2 grid-rows-2 grid-cols-2 w-full ">
          <div className="w-[400px] h-[400px] bg-gray-900">
            <h1>Project 1</h1>
            <p>Project 1 description</p>
          </div>
          <div className="w-[400px] h-[400px] bg-gray-900">
            <h1>Project 2</h1>
            <p>Project 2 description</p>
          </div>
          <div className="w-[400px] h-[400px] bg-gray-900">
            <h1>Project 3</h1>
            <p>Project 3 description</p>
          </div>
          <div className="w-[400px] h-[400px] bg-gray-900">
            <h1>Project 3</h1>
            <p>Project 3 description</p>
          </div>
        </div>
      </div>
    </div>
  )
}
