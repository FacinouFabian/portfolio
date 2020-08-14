import Layouts from '../core/layouts'

const Hobbies = () => (
  <Layouts.Application pageTitle="Hobbies | Fabian Facinou">
    <div>
      <div className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div className="h-64 lg:h-full">
              <img className="w-full h-full rounded-lg" src="https://images2.alphacoders.com/108/1087568.jpg" alt="HyperScape"/>
            </div>
          </div>
          <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 className="text-3xl text-gray-800 font-bold">First one, <span className="text-indigo-600">Hyper Scape</span></h2>
            <p className="mt-4 text-gray-600">
            Hyper Scape is a futuristic free-to-play battle royale developed by Ubisoft Montreal and published by Ubisoft. The game is slated for release in 2020 on Windows, PlayStation 4, and Xbox One. The game is in open beta during the month of July 2020 for a release in August of the same year.
            </p>
            <div className="mt-8">
              <a href="https://www.ubisoft.com/fr-fr/game/hyper-scape" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Try it!</a>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <div>
      <div className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div className="h-64 lg:h-full">
              <img className="w-full h-full rounded-lg" src="https://wallpapercave.com/wp/wp6996685.jpg" alt="RC"/>
            </div>
          </div>
          <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 className="text-3xl text-gray-800 font-bold">Second one, <span className="text-indigo-600">Rogue Company #RC</span></h2>
            <p className="mt-4 text-gray-600">
            Rogue Company is an upcoming Third-Person Shooter Multiplayer video game developed by First Watch Games and published by Hi-Rez Studios.
            </p>
            <div className="mt-8">
              <a href="https://www.roguecompany.com/" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Try it!</a>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <div>
      <div className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
        <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
          <div className="lg:w-1/2">
            <div className="h-64 lg:h-full">
              <img className="w-full h-full rounded-lg" src="https://wallpapercave.com/wp/wp7048889.jpg" alt="Fall Guys"/>
            </div>
          </div>
          <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
            <h2 className="text-3xl text-gray-800 font-bold">Third one, <span className="text-indigo-600">Fall Guys</span></h2>
            <p className="mt-4 text-gray-600">
            Fall Guys: Ultimate Knockout is a Multiplayer video game developed by Mediatonic and published by Devolver Digital. It was announced at E3 in June 2019. The game is available on Steam and PlayStation 4 since August 4, 2020.
            </p>
            <div className="mt-8">
              <a href="https://store.steampowered.com/app/1097150/Fall_Guys_Ultimate_Knockout/" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Try it!</a>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </Layouts.Application>
)

export default Hobbies
