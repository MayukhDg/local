import React from 'react'

const Goddess = () => {
  return (
    <div className='md:h-[80vh] h-fit flex flex-col md:flex-row' >
     <div className='flex flex-1 items-center justify-center' >
     <div className='flex flex-col gap-4 md:py-0 py-7 md:px-0 px-7'>
     <h2 className='montserrat font-semibold md:text-6xl text-4xl text-[#FFF]  leading-[50px] md:leading-[70px] text-left' >In The Name <br/>of the Goddess</h2>
     <p className='montserrat font-light text-xl text-[#FFF] '  >Discover the people, places and stories that come together to <br className='md:block hidden'/> create the magic of Durga Puja. From the shores of the Ganges <br/> to award winning pandals, get a unique insight into the workings <br className='md:block hidden'/>of this world renowned festival.</p>
     </div>
     </div>
     <img className='object-contain' src="/assets/img6.png" />
    </div>
  )
}

export default Goddess