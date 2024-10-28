import React, { useState } from "react";
import { useSelector } from "react-redux";
import VerticalPost from "../VerticalPost/VerticalPost";
import Pagination from "./Pagination";

const POSTS_PER_PAGE = 6;

const AllBlogPosts = () => {
  const posts = useSelector((state) => state.blogs.blogs);
  const [currentPage, setCurrentPage] = useState(1);


  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);


  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return; 
    setCurrentPage(page);
  };

  return (
    <div className="mx-auto my-20 max-w-[1216px] dark:bg-[#090D1F]">
      <p className="font-semibold text-lg mb-5 pl-5 dark:text-white">All blog posts</p>
      <div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentPosts.map((post) => (
          <VerticalPost
            key={post.id}
            id={post.id}
            imageSrc={post.imageSrc}
            title={post.title}
            date={post.date}
            description={post.description}
            categories={post.categories}
          />
        ))}
      </div>

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        handlePageChange={handlePageChange} 
      />
    </div>
  );
};

export default AllBlogPosts;
