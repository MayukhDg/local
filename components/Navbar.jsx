import React from 'react'

const Navbar = () => {
  
    const NavLinks = ["Home", "Blogs", "Careers"]
  
    return (
    <nav className= ' pt-4 flex justify-between items-center max-container' >
     <img src='/logo.svg' height={80} width={80} className='object-contain' />
    <div className='flex flex-1 items-center justify-center' >
     <ul className='md:flex hidden items-center gap-3 ' >
       {NavLinks.map((item,idx)=>(
         <li className='  uppercase text-white font-semibold montserrat ' key={idx}>{item}</li>
       ))}
     </ul>
    </div>
    <button className=' montserrat hidden md:block  outline-none uppercase text-white font-semibold ' >
    Contact Us
    </button>
    </nav>
  )
}

export default Navbar