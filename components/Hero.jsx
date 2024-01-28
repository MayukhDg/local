import React from 'react'

const Hero = () => {
  return (
    <section id="hero"  className='flex flex-col justify-between py-32 h-[80vh] max-container' >
    <h1 className='text-[2.5rem] md:text-[3rem] grotesk font-bold  text-white leading-[50px]' >
    Discover Kolkata with our <br className='md:block hidden' /> innovative <span className='hero__cinematic font-bold'>Cinematic Tour</span>
    </h1>
   <div>
   <svg width="550" height="2" viewBox="0 0 732 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 1.06494H732" stroke="#AAAAAA"/>
</svg>

    <p className='text-[#F5F5F5] leading-[25px] mt-2 montserrat font-light tracking-[-0.24px]'>Step into the world of real-time cinema where each tour unfolds with a <br/> scripted narrative  personifying the place. Locations are hand-picked based <br/>  on the storyline, and our guides become narrators, crafting a live storyboard.</p>
   </div>
    </section>
  )
}

export default Hero