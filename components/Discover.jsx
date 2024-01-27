import React from 'react'
import PCard from './PCard'


const Discover = () => {
  
    const Discoveries = [1,2,3, 4, 5]
  
    return (
    <section id="discover" className=' py-10 flex flex-col items-center justify-center gap-10' >
     <h3 className='text-[#FFF] text-6xl roboto' >Discover Bengal</h3>
     <p className='text-[#F5F5F5] text-center roboto'  >Discover Bengal with meticulously crafted plans to suit your preferences. <br/> Our extensive network comprises passionate local residents, eager to provide an immersive cultural <br/> experience. Discover Bengal authentically!</p>
     <div className='flex flex-wrap items-center gap-5 justify-center'>
       {Discoveries.map((item, idx)=>(
        <PCard item={item} key={idx} />
       ))}
     </div>
    </section>
  )
}

export default Discover