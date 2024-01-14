import React from 'react'

const Education = () => {
  return (
    <section id="education" className='md:h-[80vh] h-auto bg-[#FFF] pt-10 w-[100%]  font-semibold px-10 flex flex-col justify-between pb-10'  >
    <div>
    <p className='text-[#FE8D66] font-extrabold' >Experiential Learning</p>
     <h3 className='text-6xl' >Where Education Meets Exploration!</h3>
     <p className='pt-3' >At Get Local, we believe education <br/> goes beyond classroom walls. Our <br/> mission is to inspire young minds by <br/> unlocking the treasures of knowledge <br/> found right in our City of Joy.  We are <br/> dedicated to creating unique and <br/> enriching experiences for students to <br/> learn through exploration.</p>
    </div>
    <div className='flex flex-col'>
    <h3 className='font-bold text-[#E12BFC] text-lg' >Product 1</h3>
     <div className='flex justify-between items-center' >
      <h3 className='font-light text-3xl pt-3' >In The Name <br/> of the Goddess</h3>
       <p className=''>At Get Local, we believe education goes beyond <br/> classroom walls. Our mission is to inspire young <br/> minds by unlocking the treasures of knowledge <br/> found right in our City of Joy</p>
     </div>
    </div>
    </section>
  )
}

export default Education