import React from 'react'
import PCard from './PCard'

const P1 = () => {
  
    const items = [1, 2, 3, 4, 5]

    return (
    <section id="product1" className='flex flex-col gap-4 max-container' >
     <h3 className='font-bold text-[#E12BFC] text-lg montserrat ' >Product 1</h3>
     <div className='flex justify-between items-center' >
      <h3 className='font-light text-[#FFF] text-3xl pt-3 grotesk' >Kolkata: A Sea of Faces and a <br/> Thousand places</h3>
       <p className='text-[#F5F5F5] montserrat'>Our aim is to combat the sense of alienation often felt by travellers in <br/> new places with the perfect orientation tour. We are dedicated to <br/> fostering a personal connection by showcasing Kolkata’s evolution, <br/> like a real-time biopic. It’s the ultimate way to get local in just one day!</p>
     </div>
     <div className='pt-32 flex flex-wrap items-center gap-5'>
       {items.map((item, idx)=>(
        <PCard item={item} key={idx} />
       ))}
     </div>
    </section>
  )
}

export default P1