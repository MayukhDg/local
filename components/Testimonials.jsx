import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <section id="testimonials" className='h-[80vh] bg-[#FFF] px-3 flex flex-col gap-2' >
      <p className='text-[#FE8D66] font-extrabold ' >TESTIMONIALS</p>
      <h3 className=' text-4xl text-[#1B1A1A] font-bold' >What people who have <br/> taken our tour are saying</h3>
      <div className='flex flex-wrap gap-4 pt-6'>
       <TestimonialCard/>
       <TestimonialCard/>
      </div>
    </section>
  )
}

export default Testimonials