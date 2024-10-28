import React from 'react'
import VerticalPost from '../components/VerticalPost/VerticalPost'
import BlogDetails from '../components/BlogDetails/BlogDetails'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const categories = [
  { title: 'Design', textColor: 'text-[#6941C6]', bgColor: 'bg-[#F9F5FF]' },
  { title: 'Research', textColor: 'text-[#3538CD]', bgColor: 'bg-[#EEF4FF]' },
  { title: 'Presentation', textColor: 'text-[#C11574]', bgColor: 'bg-[#FDF2FA]' },
];

const Blog = () => {
  const { id } = useParams();

  const relatedBlogs =  useSelector((state) => {
    return state.blogs.blogs.filter(blog => blog.id !== id).slice(0, 9)
    } )
  
  
  
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center'>
      <div className='w-full md:w-1/3 px-5'>
      <p className="font-semibold text-lg justify-center mb-5 pl-5">Recent blog posts</p>
        {relatedBlogs.map((post)=> <VerticalPost
            key={post.id}
            imageSrc={post.imageSrc}
            title={post.title}
            date={post.date}
            description={post.description}
            categories={post.categories}
          />)}
      </div>

      <div className='w-full md:w-2/3 px-5 flex'>
        <BlogDetails id={id} />
      </div>
    </div>
  )
}

export default Blog;
