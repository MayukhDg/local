import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  
    const NavLinks = [{
      name:"Home",
      to:"/"
    },
    {
      name:"Blogs",
      to:"/blogs"
    }
  ]
    const visible = true;
    
    
    return (
    <nav className= ' pt-4 flex justify-between items-center max-container overflow-x-hidden' >
    <Link href={"/"}>
    <img src='/logo.svg' height={80} width={80} className='object-contain cursor-pointer' />
    </Link>
    { visible && <div className='flex flex-1 items-center justify-center' >
     <ul className='md:flex hidden items-center gap-3 ' >
       {NavLinks.map((item,idx)=>(
       <Link key={idx} href={`${item.to}`} >
               <li className='  uppercase text-white font-light montserrat ' >{item.name}</li>
       </Link>
       ))}
     </ul>
    </div>}
    <button className=' montserrat hidden md:block  outline-none uppercase text-white font-semibold ' >
    Contact Us
    </button>
    </nav>
  )
}

export default Navbar