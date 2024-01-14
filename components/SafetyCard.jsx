import React from 'react'
import Line from './Line'

const SafetyCard = ({title, content}) => {
  return (
    <div className='py-10 gap-3 flex flex-col' >
     <h4 className='text-[#282727] text-3xl' >{title}</h4>    
     <p>{content}</p>
     <Line/>
    </div>
  )
}

export default SafetyCard