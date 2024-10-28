import React from "react";
import { useNavigate } from "react-router-dom";

const categoryStyles = [
  { title: "Design", textColor: "text-[#6941C6]", bgColor: "bg-[#F9F5FF]" },
  { title: "Research", textColor: "text-[#3538CD]", bgColor: "bg-[#EEF4FF]" },
  {
    title: "Presentation",
    textColor: "text-[#C11574]",
    bgColor: "bg-[#FDF2FA]",
  },
];

const HorizontalPost =  ({id, imageSrc, title, date, description, categories }) => {


  const getCategoryStyles = (categoryTitle) => {
    const category = categoryStyles.find((cat) => cat.title === categoryTitle);
    return category ? { textColor: category.textColor, bgColor: category.bgColor } : { textColor: "text-gray-500", bgColor: "bg-gray-200" };
  };

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  }

  return (
    <div>
      <div className=" mb-8 md:px-0 px-10 flex flex-col sm:flex-row justify-center cursor-pointer" 
      onClick={()=>handleClick(id)}
      >
        <img src={imageSrc} alt="" />
        <div className="p-2">
          <p className="mb-5 text-[#6941C6] text-sm font-semibold">
            {date}
          </p>
          <div className="flex justify-between">
            <p className="font-semibold text-base">{title}</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#1A1A1A] dark:stroke-white"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="my-2 text-sm">
            {description}
          </p>
          <div className="flex space-x-4">
          {(categories || []).map((category, index) => {
            const { textColor, bgColor } = getCategoryStyles(category);

            return (
              <span
                key={index}
                className={`font-medium text-[14px] leading-[20px] text-center ${textColor} ${bgColor} px-2 py-1 rounded-[10px] dark:bg-opacity-75`}
              >
                {category}
              </span>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalPost;
