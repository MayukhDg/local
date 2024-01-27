import React from 'react';
import Safety from './Safety';

const Partition = () => {
  return (
    <div className='h-auto bg-[#FFF] flex flex-col pt-10 pb-5 px-10 ' >
      <div className='flex justify-between items-center' >
       <div className='flex flex-col' >
       <p className='font-bold text-[#E12BFC] text-lg roboto '>Product 2</p>
      <h3 className='font-light text-3xl pt-3 roboto' >Partition of Bengal  and <br/> the birth of Asia’s biggest <br/>  Football rivalry</h3>
      <p className='text-[#8D8D8D] roboto font-light text-[20px] mt-6' >Download Brochure</p>
        </div>
        <p className='roboto font-light text-[20px]' >Coming Soon</p>  
      </div>
      <Safety/>
    </div>
  )
}

export default Partition