import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Software Development",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way businesses develop and implement enterprise software solutions.",
    category: "Technology",
    date: "Apr 15, 2025",
    image: "/images/blog-ai-enterprise.jpg",
    slug: "ai-enterprise-software",
  },
  {
    id: 2,
    title: "5 Ways Digital Transformation Is Reshaping Customer Experience",
    excerpt:
      "Learn how companies are leveraging digital transformation strategies to create exceptional customer experiences.",
    category: "Digital Strategy",
    date: "Apr 10, 2025",
    image: "/images/blog-digital-transformation.jpg",
    slug: "digital-transformation-cx",
  },
  {
    id: 3,
    title: "Building Scalable Web Applications with Modern Frameworks",
    excerpt:
      "Explore the best practices and technologies for developing web applications that can scale with your business needs.",
    category: "Web Development",
    date: "Apr 5, 2025",
    image: "/images/blog-web-frameworks.jpg",
    slug: "scalable-web-applications",
  },
]

export default function BlogSection() {
  return (
    <section className="w-full bg-black py-16 text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Latest <span className="text-red-600">Insights</span> & News
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-gray-300 md:text-base">
              Stay updated with the latest trends, technologies, and strategies in the IT industry through our expert
              articles and insights.
            </p>
          </div>
          <Button className="mt-4 self-start rounded-full bg-red-600 px-8 py-2 text-sm font-medium uppercase hover:bg-red-700 md:mt-0 md:self-end">
            VIEW ALL POSTS
          </Button>
        </div>

        {/* Blog Posts Grid - Now 2 columns by default */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-lg bg-gray-900 transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden sm:h-48 md:h-56">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-2 top-2 rounded bg-red-600 px-2 py-1 text-xs font-semibold uppercase text-white sm:left-4 sm:top-4 sm:px-3">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="mb-2 text-base font-bold leading-tight sm:text-lg md:text-xl">
                  <Link href={`/blog/${post.slug}`} className="hover:text-red-500">
                    {post.title}
                  </Link>
                </h3>
                <p className="mb-3 text-xs text-gray-400 sm:text-sm">
                  {post.excerpt.length > 70 ? `${post.excerpt.substring(0, 70)}...` : post.excerpt}
                </p>
                <div className="flex items-center text-xs text-gray-400">
                  <CalendarIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

