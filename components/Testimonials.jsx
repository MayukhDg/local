import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <section id="testimonials" className='md:h-[80vh] h-fit bg-[#FFF] px-3 flex flex-col gap-2 pb-3' >
      <p className='text-[#FE8D66] montserrat font-bold ' >TESTIMONIALS</p>
      <h3 className=' text-4xl text-[#1B1A1A] font-bold montserrat' >What people who have <br/> taken our tour are saying</h3>
      <div className='flex flex-wrap gap-4 pt-6'>
       <TestimonialCard name={"Mayukh Dasgupta"} logo={"/ABNB_logo.png"} copy={"Shrijit took us on a whirlwind tour across Kolkata, introducing us to the many faces of the city. He brought us through the peaceful suburbs and bustling bazaars, the cafes and bookshops that gave birth to many student movements, and the buildings and neighborhoods that revealed the city's sordid colonial past. He structured the tour as a film, and I could tell that he put an incredible amount of thought into each moment, culminating in a sunset ferry ride under the Howrah Bridge, from which we could put our day's experiences in Kolkata in perspective."}/>
       <TestimonialCard name={"Mayukh Dasgupta"} logo={"/ABNB_logo.png"} copy={"Shrijit took us on a whirlwind tour across Kolkata, introducing us to the many faces of the city. He brought us through the peaceful suburbs and bustling bazaars, the cafes and bookshops that gave birth to many student movements, and the buildings and neighborhoods that revealed the city's sordid colonial past. He structured the tour as a film, and I could tell that he put an incredible amount of thought into each moment, culminating in a sunset ferry ride under the Howrah Bridge, from which we could put our day's experiences in Kolkata in perspective."}/>
      </div>
    </section>
  )
}

export default Testimonials