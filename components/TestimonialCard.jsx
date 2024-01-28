import React from 'react'

const TestimonialCard = ({name, logo, copy, image}) => {
  return (
    <div className='h-auto w-[410px] bg-[#FFF] testimonialCard flex flex-col gap-3 px-2 py-4' >
    <div className='flex items-center justify-between' >
    <div className='flex items-center gap-2' >
    <img src={image} height={53} width={53} className='rounded-full' />
    <p className='montserrat'>{name}</p>
    </div>
    <img
    src={logo}
    alt="airBNB logo"
    height={40}
    width={50}
    />
    </div>
    <p className='montserrat' >{copy}</p>
    </div>
  )
}

export default TestimonialCard