import React from 'react'

const Message = () => {
  return (
    <div className='md:h-[60vh] h-fit flex flex-col justify-center items-center bg-[#FFF]' >
    <div className='flex flex-col items-center gap-10 md:px-0 px-5' >
    <p className='montserrat'> School administrators, educators, and learning enthusiasts, <br/> seeking a trusted companion to elevate your students’ educational <br/> experiences through captivating excursions, <span className='text-[#E129FF;]' > look no further</span></p>
    <p className='montserrat' > Get Local is your dedicated ally in turning learning into an adventure</p>
    <button className='button__bg rounded-2xl p-3 text-white roboto' >Get In Touch</button>
    </div>

    </div>
  )
}

export default Message