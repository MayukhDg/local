import React from 'react'

const TestimonialCard = ({name, logo, copy}) => {
  return (
    <div className='h-auto w-[410px] bg-[#FFF] testimonialCard flex flex-col gap-3 px-2 py-4' >
    <div className='flex items-center justify-between' >
    <div className='flex items-center gap-2' >
    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none"><circle cx="26.5" cy="26.5" r="26.5" fill="#AEAEAE"/></svg>
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