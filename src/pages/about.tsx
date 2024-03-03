import { useLanguage } from '../context/languageContext'

export default function About() {
  const { language } = useLanguage()
  return (
    <div className="px-10 items-center md:px-40  py-20">
      <div className="flex flex-col xl:flex-row gap-4 justify-between">
        <div className="max-w-screen lg:max-w-[600px] justify-center">
          <h1 className="text-2xl font-semibold mb-6">
            {language === 'en'
              ? "Hi, I'm Lucas, FullStack developer! "
              : 'Oi, eu sou o Lucas, desenvolvedor FullStack!'}
          </h1>
          <p className="text-lg font-light mb-4 text-justify">
            {language === 'en'
              ? 'I am a student at the Federal Institute of Education, Science and Technology of São Paulo - IFSP Câmpus Campinas in the IT Technician course.'
              : 'Sou estudante do Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP Câmpus Campinas no curso Técnico de Informática.'}
          </p>
          <p className="text-lg font-light mb-4 text-justify">
            {language === 'en'
              ? " I'm diving into FullStack development, mainly rocking the Back-end scene with Node.js and tools like Nest.js and Fastify. Every day, I'm getting my hands dirty with databases like PostgreSQL, exploring different setups and design patterns like EDA. I'm all about tinkering with different OS environments to level up the projects I'm part of Currently, I'm involved in the development of an IFSP-Campinas Integrator project, which involves using Raspberry Pi with artificial intelligence to recognize diseases in plants. Using sensors and a camera, the Raspberry Pi captures real-time images of the plants. AI algorithms process these images to identify diseases and send the results to a mobile or desktop application ."
              : 'Estou mergulhando no desenvolvimento FullStack, principalmente no desenvolvimento Back-end com Node.js e ferramentas como Nest.js e Fastify. Todos os dias, estou colocando a mão na massa com bancos de dados como PostgreSQL, explorando diferentes configurações e padrões de design como EDA. Estou sempre trabalhando em diferentes ambientes de sistema operacional para evoluir nos projetos dos quais faço parte. '}
          </p>
          <p className="text-lg font-light mb-4 text-justify">
            {language === 'en'
              ? 'Currently, I am involved in the development of an IFSP-Campinas Integrator project, which involves using Raspberry Pi with artificial intelligence to recognize diseases in plants. Using sensors and a camera, the Raspberry Pi captures real-time images of the plants. AI algorithms process these images to identify diseases and send the results to a mobile or desktop application.'
              : 'Atualmente, estou envolvido no desenvolvimento de um projeto Integrador do IFSP-Campinas, que envolve o uso de Raspberry Pi com inteligência artificial para reconhecer doenças em plantas. Usando sensores e uma câmera, o Raspberry Pi captura imagens em tempo real das plantas. Algoritmos de IA processam essas imagens para identificar doenças e enviar os resultados para um aplicativo móvel ou desktop.'}
          </p>
        </div>
        <div className="w-5/6 h-3/4 lg:h-[500px] xl:w-80 bg-blue-600 md:block  hidden"></div>
      </div>
      <div className="flex h-auto md:h-96 py-20 items-center flex-col md:flex-row  gap-4 justify-between">
        <div>
          <h2 className="text-2xl font-semibold mt-10 mb-6">
            &#129299;
            {language === 'en' ? 'Skills' : 'Habilidades na área'}
          </h2>
          <ul className="list-disc list-inside">
            <li>Test Driven Development</li>
            <li>Microservice</li>
            <li>System Operations</li>
            <li>SQL</li>
            <li>Node.js - Fastify/Nest.js</li>
            <li>TypeScript</li>
            <li>React.js - Vite.js/Next.js</li>
            <li>Python</li>
            <li>Containers</li>
          </ul>
        </div>
        <div className="h-full w-px bg-slate-700"></div>
        <div>
          <h2 className="text-2xl font-semibold mt-10 mb-6">
            &#129488;
            {language === 'en' ? 'Currently Learning' : 'Aprendendo atualmente'}
          </h2>
          <ul className="list-disc list-inside">
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Computer Vision</li>
            <li>Events Driven Architecture</li>
            <li>Test Driven Development</li>
            <li>Serveless</li>
            <li>NoSQL</li>
            <li>Mobile - Android</li>
            <li>Cpp</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
