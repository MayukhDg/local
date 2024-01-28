import React from 'react'
import Line from './Line'
import SafetyCard from './SafetyCard'
import { SafetyContent } from '@/constants'

const Safety = () => {
  return (
    <div className='flex flex-col flex-1 pt-20' >
        <p className='text-[#666] text-2xl pb-5 montserrat' >Why Choose Us?</p>
        <Line/>
        {SafetyContent.map((item, idx)=>(
         <SafetyCard title={item.title} content={item.content} key={idx}  />
        ))}
    </div>
  )
}

export default Safety