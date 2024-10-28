import React from 'react'
import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const categories = [
    { title: 'Design', textColor: 'text-[#6941C6]', bgColor: 'bg-[#F9F5FF]' },
    { title: 'Research', textColor: 'text-[#3538CD]', bgColor: 'bg-[#EEF4FF]' },
    { title: 'Presentation', textColor: 'text-[#C11574]', bgColor: 'bg-[#FDF2FA]' },
  ];

const BlogDetails = ({id}) => {
  
  const blog = useSelector((state) => {
    return state.blogs.blogs.find(blog => blog.id === parseInt(id));
  });

  const navigate = useNavigate();

    return (
        <div className='px-5 flex'>
          <div className='flex-col justify-center items-center'>
          <div className='flex justify-between'>
          <p className='my-5 text-[#6941C6] font-semibold'>{blog.date}</p>
          <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className='mt-5 cursor-pointer'
          onClick={()=>navigate('/')}
        >
          <path
            d="M4.16666 10.4998H15.8333M15.8333 10.4998L9.99999 4.6665M15.8333 10.4998L9.99999 16.3332"
            className="stroke-[#1A1A1A] dark:stroke-white"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
          </div>
          <p className='font-semibold text-3xl my-5'>{blog.title}</p>
          <img src={blog.imageSrc} alt="" />
          <div 
            className='my-5'
            dangerouslySetInnerHTML={{ __html: blog.text }} 
          >
        </div>
            

            <div className='flex space-x-4 mb-5'>
              {categories.map((category, index) => (
                <span
                  key={index}
                  className={`font-medium text-[14px] leading-[20px] text-center ${category.textColor} ${category.bgColor} px-2 py-1 rounded-[10px]`}
                >
                  {category.title}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
}

export default BlogDetails