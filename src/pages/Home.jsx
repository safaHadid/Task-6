import React from 'react'
import Header from '../components/Header/Header'
import RecentBlogPosts from '../components/RecentBlogPosts/RecentBlogPosts'
import HorizontalPost from '../components/HorizontalPost/HorizontalPost'
import AllBlogPosts from '../components/AllBlogPosts/AllBlogPosts'

const Home = () => {
  return (
    <div>
      <Header />
      <RecentBlogPosts /> 
      <AllBlogPosts />
    </div>
  )
}

export default Home