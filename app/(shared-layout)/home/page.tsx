import Link from 'next/link'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import HeroImage from '@/components/HeroImage'
import Project from '@/components/Project'

const Home = (): JSX.Element => (
  <div className="font-sans bg-white">
    <div>
      <div className="bg-white mt-20">
        <div className="px-6 mb-16 text-center mx-auto">
          <h1 className="title text-5xl">
            Étudiant à{' '}
            <Link href="https://www.efrei.fr/">
              <span className="underline text-blue-600 cursor-pointer">@Efrei</span>
            </Link>
            , <br /> Développeur Full Stack en alternance chez{' '}
            <Link href="https://www.mhirba.com/">
              <span className="underline text-blue-600 cursor-pointer">@Mhirba</span>
            </Link>
          </h1>
          <h2 className="subtitle font-thin text-lg">Je fais du développement web et j'adore ce que je fais.</h2>

          <div className="flex items-end justify-center mt-16">
            <img className="w-64 h-64 rounded-full" src="/images/Fab.jpg" alt="" />
          </div>
        </div>
        <div>
          <HeroImage color="#3B82F6" />
        </div>
      </div>

      <div className="h-[600px] flex items-center justify-center bg-gray-800 pattern py-20 lg:py-32 overflow-y-scroll">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white">
            Bonjour, <span className="bg-gray-700 text-white rounded px-1">je m'appelle Fabian</span>. Ravi de vous
            rencontrer.
          </h2>

          <p className="text-gray-200 mt-10 font-thin text-md lg:text-lg">
            Mes années de lycée m'ont permises de découvrir la programmation. Ce sont cependant mes années de DUT
            Réseaux et Télécommunications, mes recherches et mes projets personnels qui m'ont révélés les différentes
            possibilités dans ce secteur.
            <br />
            C'est aussi pendant cette même formation que j'ai découvert la programmation web, qui a tout de suite
            suscité un intérêt particulier chez moi, notamment le côté front. J'ai travaillé sur plusieurs projets
            personnels pour mettre en pratique ce que je découvrais durant mes recherches, avant de finalement me rendre
            compte que je ne me lassais pas de coder. C'était devenu ma passion.
            <br />
            Je savais déjà ce que je voulais faire après mon DUT. C'est donc pourquoi j'ai décidé de continuer dans une
            formation où je pourrais vraiment me spécialiser dans le développement web. Je souhaite devenir développeur
            web Full Stack.
          </p>
        </div>
      </div>

      <div className="w-full h-[550px] bg-white relative py-20 flex justify-center">
        <div className="w-4/5 h-auto absolute lg:-mt-52 flex flex-col lg:flex-row items-center justify-center bg-white rounded-lg shadow-xl text-center">
          <div className="w-[400px] flex-grow flex-shrink py-[60px] lg:border-r border-[#E6ECF8]">
            <div className="w-16 h-16 mx-auto mb-12">
              <img className="w-full h-full" src="/images/frontend.svg" alt="" />
            </div>
            <h1 className="title text-2xl">Développement Front end</h1>
            <div className="font-semibold text-lg mb-4 mt-8">Les languages utilisés</div>
            <p className="font-thin">Node, Typescript, JS, HTML, CSS</p>
            <div className="font-semibold text-lg  mb-4 mt-8">Les libs et frameworks</div>
            <ul className="list-none font-thin">
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>TailwindCSS</li>
              <li>Bootstrap</li>
              <li>Redux Toolkit Query</li>
              <li>React Query</li>
            </ul>
          </div>
          <div className="w-[400px] flex-grow flex-shrink py-[60px] lg:border-r border-[#E6ECF8]">
            <div className="w-16 h-16 mx-auto mb-12">
              <img className="w-full h-full" src="/images/backend.png" alt="" />
            </div>
            <h1 className="title text-2xl">Développement Back end</h1>
            <div className="font-semibold text-lg mb-4 mt-8">Les languages utilisés</div>
            <p className="font-thin">Node, Typescript, JS, Bash, Python</p>
            <div className="font-semibold text-lg mb-4 mt-8">Les frameworks</div>
            <ul className="list-none font-thin">
              <li>NestJS</li>
              <li>ExpressJS</li>
              <li>Apollo server</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div className="w-[400px] flex-grow flex-shrink py-[60px] lg:border-r border-[#E6ECF8]">
            <div className="w-16 h-16 mx-auto mb-12">
              <img className="w-full h-full" src="/images/backend.png" alt="" />
            </div>
            <h1 className="title text-2xl">Base de données</h1>
            <div className="font-semibold text-lg mb-4 mt-8">Les ORMs</div>
            <p className="font-thin">Prisma, TypeORM</p>
            <div className="font-semibold text-lg mb-4 mt-8">Les SGBD</div>
            <ul className="list-none font-thin">
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="w-[400px] flex-grow flex-shrink py-[60px]">
            <div className="w-16 h-16 mx-auto mb-12">
              <img className="w-full h-full" src="/images/others.svg" alt="" />
            </div>
            <h1 className="title text-2xl">Autres</h1>
            <div className="font-semibold text-lg mb-4 mt-8">Les outils</div>
            <ul className="list-none font-thin">
              <li>Git</li>
              <li>Jenkins</li>
              <li>Visual Studio Code</li>
              <li>Sizzy</li>
              <li>Strapi</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-[400px] mt-[1200px] lg:mt-0 bg-gray-800 relative py-20 flex justify-center pattern">
        <div className="flex flex-col items-center text-center lg:px-56 px-0">
          <h2 className="title-white mb-[1.5rem] text-4xl lg:text-5xl font-semibold">Mes derniers travaux.</h2>

          <p className="text-white lg:mt-4 font-thin text-md lg:text-lg">
            Voici quelques uns de mes projets, effectués en entreprise mais également ceux à titre personnel.
          </p>
        </div>

        <div className="w-4/5 h-auto absolute mt-56 grid grid-cols-3 gap-10">
          {/* <div className="absolute w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-80 z-50">
            <span className="title-white text-6xl">A venir</span>
          </div> */}
          <Project title="Appli congés" description="Une application de gestion des congés" href="https://unsplash.com/photos/HkTMcmlMOUQ" />
          <Project title="Prisma Visual Generator" description="Une application web de gestion de base de données avec PrismaORM" href="https://unsplash.com/photos/HkTMcmlMOUQ" />
          <Project title="Nao" description="Mon bot discord, permettant principalement de jouer de la musique" href="https://unsplash.com/photos/HkTMcmlMOUQ" />
          <Project title="Title" description="Description" href="https://unsplash.com/photos/HkTMcmlMOUQ" />
          <Project title="Title" description="Description" href="https://unsplash.com/photos/HkTMcmlMOUQ" />
          <Project title="Title" description="Description" href="https://unsplash.com/photos/HkTMcmlMOUQ" />
        </div>
      </div>

      <div className="w-full h-[550px] relative py-20 flex flex-col items-center justify-center mt-[350px] lg:mt-[500px]">
        <h2 className="title text-5xl font-semibold text-center">J'ai travaillé avec ces entreprises</h2>
        <div className="lg:mt-16 grid grid-rows-3 md:grid-rows-1 md:grid-cols-4 px-16 items-center place-items-center">
          <div className="w-32 h-32 lg:w-40 lg:h-40">
            <img src="/images/mhirba.logo.png" alt="" />
          </div>
          <div className="w-32 h-32 lg:w-40 lg:h-40">
            <img src="/images/BLIWE.png" alt="" />
          </div>
          <div className="lg:w-auto w-64 h-64">
            <img src="/images/CHKoriginal.jpg" alt="" />
          </div>
          <div className="lg:w-auto w-64 h-64">
            Infotel
          </div>
        </div>
      </div>

      <div className="w-full h-[300px] mt-24 lg:mt-0 relative flex flex-col items-center justify-center text-center">
        <h2 className="title text-5xl font-semibold">Intéressé à travailler ensemble ?</h2>
        <p className="text-gray-800 mt-4 font-thin text-lg">
          Je suis ouvert à la discussion et à l'écoute de nouvelles opportunités.
        </p>

        <Link href="/contact">
          <div className="mt-10 w-64 h-16 py-3 px-6 flex items-center justify-center bg-white hover:bg-blue-500 border-2 border-blue-500 rounded-full font-semibold text-blue-500 hover:text-white transition duration-500 ease-in-out cursor-pointer">
            Contactez moi
          </div>
        </Link>
      </div>

      <div className="w-full h-32 flex justify-center relative">
        <div className="lg:w-[1100px] lg:h-[150px] py-4 px-16 absolute top-12 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 rounded-lg bg-gray-900">
          <div className="flex items-center justify-center text-2xl">
            <div className="m-0 title-white">Lancer un projet</div>
          </div>
          <p className="text-center text-white">
            Vous voudriez collaborer sur un projet ? <br /> Nous pouvons en discuter.
          </p>
          <Link href="/collaboration">
            <div className="w-48 h-16 py-3 px-6 flex items-center justify-center bg-transparent hover:bg-blue-500 border-2 border-blue-500 rounded-full font-semibold text-white cursor-pointer transition duration-500 ease-in-out">
              C'est parti !
            </div>
          </Link>
        </div>
      </div>

      <footer className="h-[400px] pt-32 pb-10 flex flex-col items-center justify-center space-y-2 bg-gradient-to-b from-gray-800 to-gray-700">
        <p className="text-xl text-center text-gray-200" style={{ fontFamily: 'eurostile-bold' }}>
          "Si j'ai pu voir plus loin, <br /> c'est que je me tenais sur les épaules de géants."
        </p>
        <p className="text-gray-200" style={{ fontFamily: 'eurostile' }}>
          Isaac NEWTON
        </p>
        <div className="flex items-center justify-center space-x-6">
          <div className="w-12 h-12 flex items-center justify-center rounded-full text-white hover:text-[#141c3a] hover:bg-white border-2 border-white border-opacity-50 cursor-pointer">
            <Link href="https://www.linkedin.com/in/fabian-facinou/">
              <FaLinkedinIn />
            </Link>
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full text-white hover:text-[#141c3a] hover:bg-white border-2 border-white border-opacity-50 cursor-pointer">
            <a href="mailto:fabianfacinou02@gmail.com">
              <FiMail />
            </a>
          </div>
        </div>
      </footer>
    </div>
  </div>
)

export default Home
