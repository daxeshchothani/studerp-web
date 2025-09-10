import React from 'react'
import SpotlightCard from './SpotlightCard'
import { WHY_US_FEATURES } from '../constants/features'

const WhyUs = () => {
  const WhyUs = WHY_US_FEATURES.map(feature => ({
    ...feature,
    icon: <i className={`bx ${feature.icon} text-2xl text-white`}></i>,
  }));
  
  return (
    <section id='Why-Us' className='why-us mt-[8rem] my-[6rem] container mx-auto px-4 lg:px-16 flex flex-col justify-center items-center gap-12 text-center'>
      <div className='cursor-text'>
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
          <span id='WhyHover' className='peer blur-lg hover:blur-none transition-all duration-300'>Why</span>{" "}
          Use Always Us Student Management Software
          <span
            id='See'
            className='inline-block ml-1 align-baseline opacity-0 -translate-y-1 scale-75   pointer-events-none transition-all duration-300 ease-out peer-hover:opacity-100 peer-hover:translate-y-0 peer-hover:scale-100 peer-hover:blur-0'
          >
            ?
          </span>
        </h2>
        <p className='text-white/70 max-w-6xl text-justify md:text-center md:mx-auto'>Our Student Management Software is designed to streamline administrative tasks, enhance communication, and improve overall efficiency in educational institutions. Here are some compelling reasons to choose our software:</p>
      </div>
       <div className="feature-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch auto-rows-fr gap-6 w-full max-w-6xl cursor-pointer ">
        {WhyUs.map((feature, index) => (
          <SpotlightCard key={index} className="h-full">
            <div className="flex flex-col h-full">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${feature.gradient} hover:bg-white/20 transition-colors duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed flex-grow font-light">
                {feature.description}
              </p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}

export default WhyUs;