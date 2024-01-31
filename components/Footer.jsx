import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[80vh] flex flex-col'>
    <div className='flex items-center justify-center flex-1' >
     <div  className='flex items-center'>

     <img
      src='/gl.png'
      height={150}
      width={150}
      alt='logo'
     />
     <p className='text-[#FFF] text-xl md:text-3xl ml-2 montserrat' > Wherever You Go</p>
     </div>

    </div>
    <div className='flex items-center justify-between px-2 py-3' > 
    <div className='flex flex-col gap-2'>
     <img src='/gl.png'
      height={90}
      width={90}
      alt='logo'/>
      <p className='text-[#F5F5F5] leading-[25px] mt-2 montserrat font-light tracking-[-0.24px]'>+919073480087</p>  
    </div>
    </div>
    </footer>
  )
}


//<p className='font-normal text-[#FFF] text-lg montserrat'>drop us a mail</p>
//<input className='rounded-2xl outline-none' />
export default Footer