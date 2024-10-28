import React from "react";
import VerticalPost from "../VerticalPost/VerticalPost";
import HorizontalPost from "../HorizontalPost/HorizontalPost";
import { useSelector } from "react-redux";
import { selectRecentPosts } from "../../redux/postsSlice";

const RecentBlogPosts = () => {
  const recentBlogs = useSelector(selectRecentPosts);
  

  return (
    <div>
      <div className="mx-auto my-5 max-w-[1216px] px-3">
        <p className="font-semibold text-lg mb-5 pl-5">Recent blog posts</p>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full sm:w-50">
            <VerticalPost
              id={recentBlogs[0].id}
              title={recentBlogs[0].title}
              description={recentBlogs[0].description}
              imageSrc={recentBlogs[0].imageSrc}
              categories={recentBlogs[0].categories}
              date={recentBlogs[0].date}
            />
          </div>
          <div className="w-full sm:w-50">
            <HorizontalPost 
            id={recentBlogs[1].id}
            title={recentBlogs[1].title}
            description={recentBlogs[1].description}
            imageSrc={recentBlogs[1].imageSrc}
            categories={recentBlogs[1].categories}
            date={recentBlogs[1].date}
            />
            <HorizontalPost
            id={recentBlogs[2].id}
            title={recentBlogs[2].title}
            description={recentBlogs[2].description}
            imageSrc={recentBlogs[2].imageSrc}
            categories={recentBlogs[2].categories}
            date={recentBlogs[2].date}
             />
          </div>
        </div>
        <div className="w-full">
          <HorizontalPost 
            id={recentBlogs[3].id}
            title={recentBlogs[3].title}
            description={recentBlogs[3].description}
            imageSrc={recentBlogs[3].imageSrc}
            categories={recentBlogs[3].categories}
            date={recentBlogs[3].date}
            />
          </div>
      </div>
    </div>
  );
};

export default RecentBlogPosts;
