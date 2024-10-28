import React from 'react'
import VerticalPost from '../components/VerticalPost/VerticalPost'
import AllBlogPosts from '../components/AllBlogPosts/AllBlogPosts'

const Newsletter = () => {
  return (
    <div className='max-w-[1216px] px-10 mx-auto'>
        <div>
        <div className='text-center text-[#7F56D9] font-semibold my-10'>Newsletter</div>
        <div className='text-left md:text-center font-semibold my-10 text-5xl'>Stories and interviews</div>
        <div className='text-left md:text-center text-[#667085] my-10 text-xl'>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</div>
        <div className='max-w-[450px] mx-auto'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <input type="text" placeholder='Enter your email' className='border rounded-lg p-3 min-w-[250px] max-w-[350px] mb-3' />
            <button className='p-3 mb-3 ml-1 bg-[#7F56D9] text-white rounded-lg'>Subscribe</button>
        </div>
        <p className='text-center text-[#C0C5D0] mb-10'>We care about your data in our privacy policy</p>
        </div>
        </div>
        <AllBlogPosts/>
    </div>
  )
}

export default Newsletter