import * as React from 'react'
import Layouts from '../core/layouts/'
import Slider, { Settings } from 'react-slick'

const defaultImage =
  'https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362'

const Projects = () => {
  const settings: Settings = {
    dots: true,
    lazyLoad: 'progressive',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    adaptiveHeight: true,
    swipeToSlide: true,
  }

  return (
    <Layouts.Application pageTitle="Projects | Fabian Facinou">
      <div>
        <div className="mt-10 text-center title text-4xl">Title</div>
        <div className="w-full h-[460px] relative px-64">
          <Slider {...settings} className="w-full h-full">
            <div className="h-full relative">
              <div className="w-full h-full absolute flex items-center justify-center bg-gray-900 bg-opacity-80">
                <div className="title-white text-6xl">A venir.</div>
              </div>
              <img className="w-full h-full object-cover" src={defaultImage} />
              {/* <div className='w-full h-full bg-cover' style={{ backgroundImage: 'url(/images/Fab.jpg)' }} /> */}
            </div>
            <div className="h-full relative">
              <div className="w-full h-full absolute flex items-center justify-center bg-gray-900 bg-opacity-80">
                <div className="title-white text-6xl">A venir.</div>
              </div>
              <img className="w-full h-full object-cover" src={defaultImage} />
              {/* <div className='w-full h-full bg-cover' style={{ backgroundImage: 'url(/images/Fab.jpg)' }} /> */}
            </div>
            <div className="h-full relative">
              <div className="w-full h-full absolute flex items-center justify-center bg-gray-900 bg-opacity-80">
                <div className="title-white text-6xl">A venir.</div>
              </div>
              <img className="w-full h-full object-cover" src={defaultImage} />
              {/* <div className='w-full h-full bg-cover' style={{ backgroundImage: 'url(/images/Fab.jpg)' }} /> */}
            </div>
            <div className="h-full relative">
              <div className="w-full h-full absolute flex items-center justify-center bg-gray-900 bg-opacity-80">
                <div className="title-white text-6xl">A venir.</div>
              </div>
              <img className="w-full h-full object-cover" src={defaultImage} />
              {/* <div className='w-full h-full bg-cover' style={{ backgroundImage: 'url(/images/Fab.jpg)' }} /> */}
            </div>
          </Slider>
        </div>
        <div className="w-full pt-20 pb-10 text-center">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className="py-4 text-center">
        <span className="title text-2xl">Les outils/technos utilisées</span>
      </div>
    </Layouts.Application>
  )
}
export default Projects
