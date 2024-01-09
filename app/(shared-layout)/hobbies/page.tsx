import Link from "next/link"

const Hobbies = () => (
  <div>
    <div>
      <div className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div className="h-64 lg:h-full">
              <img
                className="w-full h-full rounded-lg"
                src="https://images2.alphacoders.com/108/1087568.jpg"
                alt="HyperScape"
              />
            </div>
          </div>
          <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 className="text-3xl text-gray-800 font-bold">
              <span className="text-indigo-600">Le gaming</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Mon passe temps favori. J'aime jouer à différents types de jeux tels que les MMORPG, les jeux de survie, les battle royale ou encore les jeux d'arcade.
              J'ai également été tenté par l'apprentissage de développement de jeux vidéeos avec Unreal Engine.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div className="h-64 lg:h-full">
              <img className="w-full h-full rounded-lg" src="https://wallpapercave.com/wp/wp6996685.jpg" alt="RC" />
            </div>
          </div>
          <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 className="text-3xl text-gray-800 font-bold">
              <span className="text-indigo-600">La reconnaissance vocale</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Je m'intéresse également à la reconnaissance vocale, j'ai d'ailleurs eu l'occasion de travailler seul sur un projet de fin d'année en DUT dont l'objectif (qui a été atteint)
              était de créer mon propre système de reconnaissance vocale. J'ai également eu la possibilité de développer des skills Alexa avec AWS Lambda et NodeJS durant mon
              stage chez <Link href="https://www.efrei.fr/">
              <span className="underline text-blue-600 cursor-pointer">@Bliwe</span>
            </Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div className="h-64 lg:h-full">
              <img
                className="w-full h-full rounded-lg"
                src="https://wallpapercave.com/wp/wp7048889.jpg"
                alt="Fall Guys"
              />
            </div>
          </div>
          <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 className="text-3xl text-gray-800 font-bold">
              <span className="text-indigo-600">Le foot</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Le foot est devenu une passion pour moi dès mon enfance j'y ai joué jusqu'à mes 19 ans en club. Depuis je n'en pratique plus. Cependant je reste un passionné du foot
              et je regarde beaucoup les matchs à la télé. Ligue 1 et Premier League notamment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Hobbies
