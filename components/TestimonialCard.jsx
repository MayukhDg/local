import React from 'react'

const TestimonialCard = () => {
  return (
    <div className='h-auto w-[410px] bg-[#FFF] testimonialCard flex flex-col gap-3 px-2 py-4' >
    <div className='flex items-center justify-between' >
    <div className='flex items-center gap-2' >
    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none"><circle cx="26.5" cy="26.5" r="26.5" fill="#AEAEAE"/></svg>
    <p>Mayukh Dasgupta</p>
    </div>
    <img
    src="/ABNB_logo.png"
    alt="airBNB logo"
    height={40}
    width={50}
    />
    </div>
    <p>Shrijit took us on a whirlwind tour across Kolkata, introducing us to the many faces of the city. He brought us through the peaceful suburbs and bustling bazaars, the cafes and bookshops that gave birth to many student movements, and the buildings and neighborhoods that revealed the city's sordid colonial past. He structured the tour as a film, and I could tell that he put an incredible amount of thought into each moment, culminating in a sunset ferry ride under the Howrah Bridge, from which we could put our day's experiences in Kolkata in perspective.</p>
    </div>
  )
}

export default TestimonialCard