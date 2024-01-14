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
     <p className='text-[#FFF] text-3xl ml-2' > Wherever You Go</p>
     </div>

    </div>
    <div className='flex items-center justify-between px-2 py-3' > 
    <div className='flex flex-col gap-2'>
    <p className='font-normal text-[#FFF] text-lg'>drop us a mail</p>
    <input className='rounded-2xl' />
    </div>
    </div>
    </footer>
  )
}

export default Footer