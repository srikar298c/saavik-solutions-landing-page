"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const categories = [
  "All",
  "Marketing",
  "Coding",
  "Education",
  "Tech Service",
  "Finance",
  "Gaming",
  "Healthcare",
  "Inventory Management",
  "Logistics",
  "OS Company",
  "Payments",
  "Retail",
  "Telecom",
  "Travel",
  "Transportation",
  "Video Streaming",
  "Music Streaming",
  "Social Media",
  "E-commerce",
  "Marketplace",
  "Job Portal",
  "Restaurant",
]

const blogPosts = [
  {
    id: 1,
    title: "using Lorem Ipsum is that it has a more-or-less normal",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
    image:
      "https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Design", "Web"],
    slug: "blog-post-1",
  },
  {
    id: 2,
    title: "using Lorem Ipsum is that it has a more-or-less normal",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
    image:
      "https://images.unsplash.com/photo-1630626360933-9e90c9eefc2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Design", "Web"],
    slug: "blog-post-2",
  },
  {
    id: 3,
    title: "using Lorem Ipsum is that it has a more-or-less normal",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
    image:
      "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Design", "Web"],
    slug: "blog-post-3",
  },
  {
    id: 4,
    title: "using Lorem Ipsum is that it has a more-or-less normal",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
    image:
      "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Design", "Web"],
    slug: "blog-post-4",
  },
  {
    id: 5,
    title: "using Lorem Ipsum is that it has a more-or-less normal",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Design", "Web"],
    slug: "blog-post-5",
  },
  {
    id: 6,
    title: "using Lorem Ipsum is that it has a more-or-less normal",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
    image:
      "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Design", "Web"],
    slug: "blog-post-6",
  },
]

export default function BlogCategories() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="mt-12 flex flex-col lg:flex-row">
      {/* Categories Sidebar - Desktop */}
      <div className="hidden lg:block lg:w-[260px]">
        <div className="overflow-hidden">
          <div className="bg-red-600 p-4">
            <h3 className="text-lg font-bold text-white">All Category</h3>
          </div>
          <div className="h-[500px] overflow-y-auto bg-gray-900 category-scrollbar">
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={`/blogs/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block p-3 text-sm text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Categories Dropdown - Mobile */}
      <div className="mb-6 lg:hidden">
        <div className="overflow-hidden rounded-md">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex w-full items-center justify-between bg-red-600 p-4 text-white"
          >
            <h3 className="text-lg font-bold">All Category</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="max-h-[300px] overflow-y-auto bg-gray-900 category-scrollbar">
              <ul>
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/blogs/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block p-3 text-sm text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Blog Posts - Scrollable Area */}
      <div className="w-full lg:pl-6 lg:flex-1">
        <div className="h-[600px] overflow-y-auto pr-2 category-scrollbar">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-48 w-full overflow-hidden md:h-[140px] md:w-[140px]">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 md:rounded-l-xl"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="mb-3 text-lg font-bold text-gray-900 group-hover:text-red-600">{post.title}</h3>
                      <p className="text-xs leading-relaxed text-gray-600">{post.excerpt}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex space-x-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="rounded-full bg-red-600 px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-red-700 hover:shadow-md">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

