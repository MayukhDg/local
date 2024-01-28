import React from 'react'

const PCard = ({item}) => {
  return (
     <img className='h-[334px] w-[300px]' alt="image" src={item.link}  />
   
  )
}

export default PCard