import React from 'react'
import PCard from './PCard'
import { productImages } from '@/constants'

const P1 = () => {
  
    
    return (
    <section id="product1" className='flex flex-col gap-4 max-container' >
     <h3 className='font-bold text-[#E12BFC] text-lg montserrat ' >Product 1</h3>
     <div className='flex justify-between items-center md:flex-row flex-col' >
      <h3 className='font-light text-[#FFF] text-3xl pt-3 grotesk' >Kolkata: A Sea of Faces and a <br/> Thousand places</h3>
       <p className='text-[#F5F5F5] montserrat md:pt-0 pt-3 '>Our aim is to combat the sense of alienation often felt by travellers in <br/> new places with the perfect orientation tour. We are dedicated to <br className='md:block hidden' /> fostering a personal connection by showcasing Kolkata’s evolution, <br/> like a real-time biopic. It’s the ultimate way to get local in just one day!</p>
     </div>
     <div className='md:pt-32 pt-10 flex flex-wrap items-center gap-5'>
       {productImages.map((item, idx)=>(
        <PCard item={item} key={idx} />
       ))}
     </div>
    </section>
  )
}

export default P1