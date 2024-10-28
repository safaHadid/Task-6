import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
    {
      id: 1,
      imageSrc: "/assets/blog-1.png",
      date: "Sunday, 1 Jan 2023",
      title: "Wireframing 101: A Comprehensive Guide",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      categories: ["Design", "Research"],
      text: `
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>
            <img src="/assets/blog-1.png" alt="" />
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>`
    },
    {
      id: 2,
      imageSrc: "/assets/blog-2.png",
      date: "Monday, 15 Feb 2023",
      title: "Mastering Presentation Design Techniques",
      description: "Creating engaging presentations to capture audience interest and deliver impactful information.",
      categories: ["Presentation", "Design"],
      text: `
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>
            <img src="/assets/blog-3.png" alt="" />
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>
            <img src="/assets/Image1.png" alt="" />
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>`
    },
    {
      id: 3,
      imageSrc: "/assets/blog-7.png",
      date: "Friday, 10 Mar 2023",
      title: "Design Research: Essential Best Practices",
      description: "Exploring effective research techniques to inform design decisions and improve user experience.",
      categories: ["Research", "Design"],
      text: `
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>
            `
    },
    {
      id: 4,
      imageSrc: "/assets/blog-4.png",
      date: "Wednesday, 22 Apr 2023",
      title: "Visual Hierarchy: Key Principles Explained",
      description: "An overview of visual hierarchy principles and how they help structure information in design.",
      categories: ["Design"],
      text: `
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>
            <img src="/assets/Image1.png" alt="" />
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>`
    },
    {
      id: 5,
      imageSrc: "/assets/blog-5.png",
      date: "Saturday, 5 May 2023",
      title: "Polishing Your Presentation Skills",
      description: "Developing skills to communicate ideas clearly and effectively through well-structured presentations.",
      categories: ["Presentation"],
      text: `
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>
            <img src="/assets/blog-1.png" alt="" />
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>
            <img src="/assets/Image1.png" alt="" />
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>`
    },
    {
      id: 6,
      imageSrc: "/assets/blog-6.png",
      date: "Thursday, 11 Jun 2023",
      title: "User-Centric Research: Techniques to Explore",
      description: "Discovering various research methods focused on enhancing user experience.",
      categories: ["Research", "Design"],
      text: `
            <img src="/assets/blog-3.png" alt="" />
            <img src="/assets/Image1.png" alt="" />
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>`
    },
    {
      id: 7,
      imageSrc: "/assets/blog-7.png",
      date: "Sunday, 19 Jul 2023",
      title: "Exploring Minimalist Design Principles",
      description: "Understanding the essentials of minimalist design for a clean and effective interface.",
      categories: ["Design"],
      text: `
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>`
    },
    {
      id: 8,
      imageSrc: "/assets/blog-8.png",
      date: "Tuesday, 29 Aug 2023",
      title: "Creating Dynamic Visual Presentations",
      description: "Techniques to enhance visual engagement in presentations through dynamic content.",
      categories: ["Presentation"],
      text: `
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>`
    },
    {
      id: 9,
      imageSrc: "/assets/blog-9.png",
      date: "Monday, 18 Sep 2023",
      title: "Harnessing Color Psychology in Design",
      description: "Utilizing color theory to influence user emotions and decisions in design.",
      categories: ["Design", "Research"],
      text: `
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>`
    },
    {
      id: 10,
      imageSrc: "/assets/blog-1.png",
      date: "Thursday, 7 Oct 2023",
      title: "Essential Tools for Effective Presentations",
      description: "A look at the best tools available for creating engaging and impactful presentations.",
      categories: ["Presentation"],
      text: `
            <p className='my-5'>How do you create compelling presentations that wow your colleagues and impress your managers? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deserunt inventore non dignissimos odit totam, cumque eaque cupiditate tempore sint sed dolorem beatae natus optio a iste quas vel rem exercitationem mollitia aliquam quam incidunt consectetur voluptas? Modi, magnam exercitationem?</p>`
    },
  ]
  
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
  }
});


export const selectRecentPosts = (state) => {
  return state.blogs.blogs
    .slice()
    .sort((a, b) => {
      const dateA = new Date(a.date.split(", ")[1]);
      const dateB = new Date(b.date.split(", ")[1]);
      return dateB - dateA;
    })
    .slice(0, 4);
};


export default blogSlice.reducer;
