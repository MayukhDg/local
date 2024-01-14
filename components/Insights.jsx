import React from 'react'
import BlogCard from './BlogCard'

const Insights = () => {
  return (
    <section id="insights" className=' px-6 py-10 bg-[#FFF] h-fit md:h-[80vh] flex flex-col' >
    <div className='flex flex-col gap-2'>
    <h3 className=' text-4xl text-[#1B1A1A] font-bold' >Get all the <br/> local insights</h3>
    <p className='text-lg font-light' >Just a few of the best stories</p>
    </div>
    <div className='flex flex-wrap gap-2 py-2 flex-1 items-center' >
     <BlogCard/>
     <BlogCard/>
    </div>
    <p className='text-lg font-light text-center' >View Blogs</p>
    </section>
  )
}

export default Insights