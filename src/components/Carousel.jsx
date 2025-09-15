'use client'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: false})
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const images = [
    "https://lf-cdn.trae.ai/obj/trae-ai-sg/trae_website_prod/static/image/4-Autocomplete.2dd2a596.png",
    "https://lf-cdn.trae.ai/obj/trae-ai-sg/trae_website_prod/static/image/4-Autocomplete.2dd2a596.png",
    "https://lf-cdn.trae.ai/obj/trae-ai-sg/trae_website_prod/static/image/4-Autocomplete.2dd2a596.png",
    "https://lf-cdn.trae.ai/obj/trae-ai-sg/trae_website_prod/static/image/4-Autocomplete.2dd2a596.png",
    "https://lf-cdn.trae.ai/obj/trae-ai-sg/trae_website_prod/static/image/4-Autocomplete.2dd2a596.png",
    "https://lf-cdn.trae.ai/obj/trae-ai-sg/trae_website_prod/static/image/4-Autocomplete.2dd2a596.png",
  ]

  return (
    <section className='mt-[8rem] md:mt-[12rem]'>
        <div className='flex flex-col justify-center items-center justify-items-center md:mb-2.5 lg:mb-[3rem]'>
            <h1 className='text-3xl text-center md:text-4xl  lg:text-5xl lg:w-[85%] font-semibold tighting-wide mb-4'> Manage your institution with ease</h1>
            <p className='text-base w-full md:w-[85%] lg:w-[85%] text-center md:text-lg lg:text-xl font-light tighting-wide'> STUERP integrates seamlessly into your workflow, collaborating with you to maximize performance and efficiency.</p>
        </div>
    <div className=" mx-auto h-[70vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center">
      {/* Navigation Buttons - Top */}
      <div className="container flex justify-end items-center p-5 border-zinc-700 border-b gap-4 md:mb-12 mb-6">
        <button
          className="bg-white/20 cursor-pointer backdrop-blur-sm text-white p-3 rounded-full disabled:opacity-50  disabled:cursor-not-allowed hover:bg-white/30 transition-all duration-300 border border-white/30"
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          className="bg-white/20 cursor-pointer backdrop-blur-sm text-white p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/30 transition-all duration-300 border border-white/30"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Carousel Viewport */}
      <div className="embla__viewport w-[90vw] h-[50vh] md:w-[80vw] lg:w-[50vw] md:h-[60vh] lg:h-[70vh] mx-auto" ref={emblaRef}>
        <div className="embla__container w-full h-full flex">
          {images.map((src, index) => (
            <img 
              key={index}
              className={`embla__slide object-cover   transition-all duration-500 ease-in-out cursor-pointer ${
                index === selectedIndex - 1 || index === selectedIndex + 1 
                  ? 'opacity-90 blur-sm w-3/4 h-3/4' 
                  : 'opacity-100 blur-none w-full h-full'
              }`}
              src={src} 
              alt="" 
            />
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}
