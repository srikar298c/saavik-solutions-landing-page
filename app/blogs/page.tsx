//'use client'
// //'use client'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
//import BlogCategories from "@/components/blogs/blog-categories"
import LetsDiscuss from "@/components/lets-discuss"
import { getAllPosts } from "@/lib/getPosts"
import BlogClient from "./BlogClient"
//import FeaturedBlogs from "@/components/blogs/featured-blogs"
//import FeaturedBlogs from "@/components/blogs/featured-blogs"

 // We'll create this below

export default function BlogPage() {
  const posts = getAllPosts()

  return( 
    <main className="min-h-screen bg-black">
       <div className="text-black">
         <Navbar />
       </div>
       <div className="bg-white">
         <BlogClient posts={posts} />
     </div>
     
     <LetsDiscuss />
     <Footer />
   </main>
  )
}