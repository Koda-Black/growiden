import React from 'react'
import '../components/Navigation'
import heroImg from '../assets/images/heroImg.jpg'
import { Navigation } from '../components/Navigation'

export const Home = () => {
  return (
    <div className='home relative'>
        <Navigation />
        <div className="hero mt-32 bg-gray-50">
          <div className="mt-16 mx-auto max-w-7xl px-4 py-4 sm:mt-24 sm:px-6">
            <div className="text-center ">
              <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-4'>
                <span className='block'>Business Growth With</span>
                <span className='block text-green-700'>Growiden</span>
              </h1>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex flex-col" aria-hidden="true">
              <div className="flex-1"></div>
              <div className="flex-1 w-full bg-gradient-to-b from-green-600 to-green-700"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <img src={heroImg} alt="hero image" className='heroImg relative rounded-lg shadow-lg'/>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-green-700 to-green-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 className="text-center text-gray-100 text-sm font-semi-bold tracking-wide">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ipsa suscipit amet placeat atque fuga sapiente tempora ratione incidunt eligendi, odio vel recusandae adipisci ullam nihil consequuntur velit impedit error?</h2>

            <div className="heroCTA text-center mt-4">
            <button>Boost Now</button> 
            <button>Learn More...</button>
            </div>
          </div>
        </div>
    </div>
  )
}
